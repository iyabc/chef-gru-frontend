'use client';

import React from 'react';
import type { ActionMeta, MultiValue } from 'react-select';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import type { NERType } from 'lib/types/nerType';

import { ner_options } from '@/data/nersData';

const animatedComponents = makeAnimated();

const black: string = '#1E1E1E';
const primary: string = '#F57E00';
const secondary: string = '#F4E1CD';
const accent: string = '#C87D2D';

type IngredientsDropdownMenu = {
  onValuesChange: (
    newValue: MultiValue<NERType>,
    actionMeta: ActionMeta<NERType>
  ) => void;
  selectedValues: NERType[];
};

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: secondary,
    borderRadius: '2rem',
    borderColor: 'transparent',
    remove: {
      color: 'white',
    },
    cursor: 'pointer',
    ':hover': {
      color: secondary,
    },
    scrollBar: {
      background: 'red',
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: primary,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    maxHeight: '2rem',
    overflow: 'auto',
    scroll: {},
  }),
  option: (provided: any) => ({
    ...provided,
    color: primary,
    background: 'transparent',
    cursor: 'pointer',
    ':hover': {
      color: secondary,
      background: accent,
    },
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: primary,
    borderRadius: '0.3rem',
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: secondary,
    cursor: 'pointer',
    ':hover': {
      color: secondary,
      background: accent,
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: primary,
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: primary,
    cursor: 'pointer',
    ':hover': {
      color: secondary,
      background: accent,
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: primary,
    cursor: 'pointer',
    ':hover': {
      color: accent,
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    background: secondary,
    cursor: 'pointer',
    ':hover': {
      color: accent,
    },
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: black,
  }),
};

const customNoOptionsMessage = () => {
  return <div>Ingredient unavailable.</div>;
};

const IngredientsDropdownMenu: React.FC<IngredientsDropdownMenu> = ({
  selectedValues,
  onValuesChange,
}) => {
  return (
    <div className="w-full">
      <Select
        isMulti
        name="NERs"
        placeholder="Select your ingredients"
        options={ner_options}
        value={selectedValues}
        onChange={onValuesChange}
        styles={customStyles}
        noOptionsMessage={customNoOptionsMessage}
        components={animatedComponents}
        className="basic-multi-select text-black capitalize"
        classNamePrefix="select"
      />
    </div>
  );
};
export default IngredientsDropdownMenu;
