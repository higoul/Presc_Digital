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
      <div className="space-y-3 md:space-y-4">
        {block.medications.map((med, index) => (
          <div key={index} className="p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <p className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100">
              {med.name}
              {med.category && (
                <span className="ml-2 text-xs md:text-sm font-medium text-white bg-green-500 dark:bg-green-600 py-1 px-2 rounded-full align-middle">
                  {med.category}
                </span>
              )}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">{med.details}</p>
          </div>
        ))}
      </div>
    </InfoBlock>
  );
};
