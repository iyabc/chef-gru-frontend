import type { groupedOptionsType } from 'lib/types/groupedNERsType';
import type { NERType } from 'lib/types/nerType';

export const vegetablesGroup: NERType[] = [
  {
    value: 'beef',
    label: 'beef',
  },
  {
    value: 'chicken breast',
    label: 'chicken breast',
  },
  {
    value: 'sour cream of mushroom soup',
    label: 'sour cream of mushroom soup',
  },
  {
    value: 'NER 4',
    label: 'NER 4',
  },
  {
    value: 'NER 5',
    label: 'NER 5',
  },
];

export const meatGroup: NERType[] = [
  {
    value: 'NER 1',
    label: 'NER 1',
  },
  {
    value: 'NER 2',
    label: 'NER 2',
  },
  {
    value: 'NER 3',
    label: 'NER 3',
  },
];

export const condimentsGroup: NERType[] = [
  {
    value: 'Soy Sauce',
    label: 'Soy Sauce',
  },
  {
    value: 'Vinegar',
    label: 'Vinegar',
  },
  {
    value: 'Fish Sauce',
    label: 'Fish Sauce',
  },
];

export const groupedOptions: groupedOptionsType[] = [
  {
    label: 'Meat',
    options: meatGroup,
  },
  {
    label: 'Vegetables',
    options: vegetablesGroup,
  },
  {
    label: 'Condiments',
    options: condimentsGroup,
  },
];
