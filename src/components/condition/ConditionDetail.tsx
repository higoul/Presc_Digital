import React, { FC } from 'react';
import { Condition } from '../../types';
import { BalanceIcon, WarningIcon, BookOpenIcon } from '../../assets/constants';
import { InfoBlock } from '../common/InfoBlock';
import { TreatmentBlock } from './TreatmentBlock';

interface ConditionDetailProps {
  condition: Condition;
}

export const ConditionDetail: FC<ConditionDetailProps> = ({ condition }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 max-w-5xl mx-auto transition-colors mb-4 md:mb-0">
      {/* Cabeçalho com CID */}
      <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {condition.title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
            CID:
          </span>
          <span className="text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400">
            {condition.cid}
          </span>
        </div>
      </div>

      <section className="space-y-6 md:space-y-8">
        <InfoBlock title="Diagnóstico Diferencial" icon={<BalanceIcon />}>
          <p className="text-sm md:text-base lg:text-lg">{condition.differentialDiagnosis}</p>
        </InfoBlock>

        <InfoBlock title="Conduta Inicial" icon={<WarningIcon />}>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base lg:text-lg">
            {condition.initialConduct.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoBlock>

        {condition.nonPharmaTreatment.length > 0 && (
          <InfoBlock title="Tratamento não Farmacológico" icon={<BookOpenIcon />}>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base lg:text-lg">
              {condition.nonPharmaTreatment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </InfoBlock>
        )}

        {condition.pharmaTreatments.map((treatmentBlock, index) => (
          <TreatmentBlock key={index} block={treatmentBlock} />
        ))}

        {condition.proceduresInUnit && condition.proceduresInUnit.length > 0 && (
          <InfoBlock title="Procedimentos na Unidade" icon={<BookOpenIcon />}>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base lg:text-lg">
              {condition.proceduresInUnit.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </InfoBlock>
        )}

        <InfoBlock title="Orientações ao Paciente" icon={<BookOpenIcon />}>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base lg:text-lg">
            {condition.patientGuidance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoBlock>
      </section>
    </div>
  );
};
