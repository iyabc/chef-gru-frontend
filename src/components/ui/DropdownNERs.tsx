import type { FC } from 'react';

import type { NERType } from 'lib/types/nerType';

type DropdownNERsProps = {
  ners: NERType[];
};

const DropdownNERs: FC<DropdownNERsProps> = ({ ners }) => {
  return (
    <select name="ingredients" id="ingredients" className="text-black h-fit">
      {ners.map((ner: NERType, index: number) => {
        return <option key={index}>{ner.name}</option>;
      })}
    </select>
  );
};

export default DropdownNERs;
