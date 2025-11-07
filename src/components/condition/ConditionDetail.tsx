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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 md:p-8 lg:p-10 max-w-5xl mx-auto transition-colors mb-4 md:mb-0">
      {/* Cabeçalho com CID */}
      <div className="mb-8 md:mb-10 pb-6 md:pb-8 border-b-2 border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
          {condition.title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-semibold">
            CID:
          </span>
          <span className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
            {condition.cid}
          </span>
        </div>
      </div>

      <section className="space-y-8 md:space-y-10">
        <InfoBlock title="Diagnóstico Diferencial" icon={<BalanceIcon />}>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            {condition.differentialDiagnosis}
          </p>
        </InfoBlock>

        <InfoBlock title="Conduta Inicial" icon={<WarningIcon />}>
          <ul className="space-y-3 md:space-y-4">
            {condition.initialConduct.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 shrink-0 font-bold">•</span>
                <span className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </InfoBlock>

        {condition.nonPharmaTreatment.length > 0 && (
          <InfoBlock title="Tratamento não Farmacológico" icon={<BookOpenIcon />}>
            <ul className="space-y-3 md:space-y-4">
              {condition.nonPharmaTreatment.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 shrink-0 font-bold">•</span>
                  <span className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </InfoBlock>
        )}

        {condition.pharmaTreatments.map((treatmentBlock, index) => (
          <TreatmentBlock key={index} block={treatmentBlock} />
        ))}

        {condition.proceduresInUnit && condition.proceduresInUnit.length > 0 && (
          <InfoBlock title="Procedimentos na Unidade" icon={<BookOpenIcon />}>
            <ul className="space-y-3 md:space-y-4">
              {condition.proceduresInUnit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 shrink-0 font-bold">•</span>
                  <span className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </InfoBlock>
        )}

        <InfoBlock title="Orientações ao Paciente" icon={<BookOpenIcon />}>
          <ul className="space-y-3 md:space-y-4">
            {condition.patientGuidance.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 shrink-0 font-bold">•</span>
                <span className="text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </InfoBlock>
      </section>
    </div>
  );
};
