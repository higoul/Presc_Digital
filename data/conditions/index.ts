import { Condition, Specialty } from '../../src/types';
import { getConditionSpecialty } from '../../src/utils/specialtyMapping';

/**
 * Índice leve de todas as condições
 * Contém apenas informações básicas para busca e filtragem
 */
export interface ConditionIndex {
  id: number;
  title: string;
  cid: string;
  specialty: Specialty;
}

/**
 * Cache de condições carregadas
 */
const conditionCache = new Map<number, Condition>();

/**
 * Carregar todas as condições (fallback para busca global)
 * Usa dynamic import para code splitting
 */
export async function loadAllConditions(): Promise<Condition[]> {
  const module = await import('../conditions');
  return module.CONDITIONS;
}

/**
 * Carregar condições por especialidade
 * Retorna apenas as condições da especialidade especificada
 */
export async function loadConditionsBySpecialty(specialty: Specialty): Promise<Condition[]> {
  const allConditions = await loadAllConditions();
  return allConditions.filter(condition => getConditionSpecialty(condition.id) === specialty);
}

/**
 * Carregar uma condição específica por ID
 * Usa cache para evitar recarregamentos
 */
export async function loadConditionById(id: number): Promise<Condition | null> {
  // Verificar cache primeiro
  if (conditionCache.has(id)) {
    return conditionCache.get(id)!;
  }

  // Carregar todas as condições (cache será preenchido)
  const allConditions = await loadAllConditions();
  const condition = allConditions.find(c => c.id === id) || null;

  if (condition) {
    conditionCache.set(id, condition);
  }

  return condition;
}

/**
 * Carregar múltiplas condições por IDs
 */
export async function loadConditionsByIds(ids: number[]): Promise<Condition[]> {
  const conditions: Condition[] = [];
  const idsToLoad: number[] = [];

  // Verificar cache primeiro
  for (const id of ids) {
    if (conditionCache.has(id)) {
      conditions.push(conditionCache.get(id)!);
    } else {
      idsToLoad.push(id);
    }
  }

  // Carregar apenas as que não estão no cache
  if (idsToLoad.length > 0) {
    const allConditions = await loadAllConditions();
    for (const id of idsToLoad) {
      const condition = allConditions.find(c => c.id === id);
      if (condition) {
        conditionCache.set(id, condition);
        conditions.push(condition);
      }
    }
  }

  return conditions.sort((a, b) => a.id - b.id);
}

/**
 * Criar índice de condições (apenas metadados)
 * Útil para busca rápida sem carregar dados completos
 */
export async function createConditionIndex(): Promise<ConditionIndex[]> {
  const allConditions = await loadAllConditions();
  return allConditions.map(condition => ({
    id: condition.id,
    title: condition.title,
    cid: condition.cid,
    specialty: getConditionSpecialty(condition.id),
  }));
}

/**
 * Buscar condições no índice por texto
 */
export async function searchConditionsInIndex(query: string): Promise<ConditionIndex[]> {
  const index = await createConditionIndex();
  const lowercasedQuery = query.toLowerCase().trim();

  if (!lowercasedQuery) {
    return index;
  }

  return index.filter(
    condition =>
      condition.title.toLowerCase().includes(lowercasedQuery) ||
      condition.cid.toLowerCase().includes(lowercasedQuery)
  );
}

/**
 * Limpar cache de condições
 * Útil para liberar memória se necessário
 */
export function clearConditionCache(): void {
  conditionCache.clear();
}

/**
 * Pré-carregar condições de uma especialidade
 * Útil para melhorar UX quando especialidade é selecionada
 */
export async function preloadSpecialty(specialty: Specialty): Promise<void> {
  const conditions = await loadConditionsBySpecialty(specialty);
  conditions.forEach(condition => {
    conditionCache.set(condition.id, condition);
  });
}

