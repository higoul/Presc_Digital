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
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
      <section className="space-y-8">
        <InfoBlock title="Diagnóstico Diferencial" icon={<BalanceIcon />}>
          <p className="text-lg">{condition.differentialDiagnosis}</p>
        </InfoBlock>

        <InfoBlock title="Conduta Inicial" icon={<WarningIcon />}>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {condition.initialConduct.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoBlock>

        {condition.nonPharmaTreatment.length > 0 && (
          <InfoBlock title="Tratamento não Farmacológico" icon={<BookOpenIcon />}>
            <ul className="list-disc list-inside space-y-2 text-lg">
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
            <ul className="list-disc list-inside space-y-2 text-lg">
              {condition.proceduresInUnit.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </InfoBlock>
        )}

        <InfoBlock title="Orientações ao Paciente" icon={<BookOpenIcon />}>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {condition.patientGuidance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </InfoBlock>
      </section>
    </div>
  );
};
