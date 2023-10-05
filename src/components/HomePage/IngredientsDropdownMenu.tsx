'use client';

import React from 'react';
import type { ActionMeta, MultiValue } from 'react-select';
import Select from 'react-select';

import type { NERType } from 'lib/types/nerType';

import { groupedOptions } from '@/data/nersData';

type IngredientsDropdownMenu = {
  onValuesChange: (
    newValue: MultiValue<NERType>,
    actionMeta: ActionMeta<NERType>
  ) => void;
  selectedValues: NERType[];
};

const IngredientsDropdownMenu: React.FC<IngredientsDropdownMenu> = ({
  selectedValues,
  onValuesChange,
}) => {
  return (
    <Select
      isMulti
      name="NERs"
      options={groupedOptions}
      value={selectedValues}
      onChange={onValuesChange}
      className="basic-multi-select text-black"
      classNamePrefix="select"
    />
  );
};
export default IngredientsDropdownMenu;
