import React, { FC } from 'react';
import { TreatmentBlock as TreatmentBlockType } from '../../types';
import { BookOpenIcon } from '../../assets/constants';
import { InfoBlock } from '../common/InfoBlock';

interface TreatmentBlockProps {
  block: TreatmentBlockType;
}

export const TreatmentBlock: FC<TreatmentBlockProps> = ({ block }) => {
  return (
    <InfoBlock title={block.title} icon={<BookOpenIcon />}>
      <div className="space-y-4">
        {block.medications.map((med, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-bold text-lg text-gray-800">
              {med.name}
              {med.category && (
                <span className="ml-2 text-sm font-medium text-white bg-green-500 py-1 px-2 rounded-full align-middle">
                  {med.category}
                </span>
              )}
            </p>
            <p className="text-md text-gray-600 mt-1">{med.details}</p>
          </div>
        ))}
      </div>
    </InfoBlock>
  );
};
