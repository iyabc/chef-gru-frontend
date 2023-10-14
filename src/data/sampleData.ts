import type { RecipeType } from 'lib/types/recipeType';

export const Recipes: RecipeType[] = [
  {
    name: 'Recipe 1',
    ingredients: [
      '1 pc - Onion',
      '3 pc - Garlic Cloves',
      '2 cups - Canned Tomato Sauce',
      '1 cup - Mozarella Cheese',
    ],
    instructions: [
      '- Dice onion and garlic',
      '- Saute onion and garlic',
      '- Pour in canned tomato sauce into the pan',
      '- Once sauce boils, let cheese melt',
    ],
    ners: ['Onion', 'Garlic Cloves', 'Canned Tomato Sauce', 'Mozarella Cheese'],
  },
  {
    name: 'Recipe 2',
    ingredients: [
      '1 pc - Onion',
      '3 pc - Garlic Cloves',
      '2 cups - Canned Tomato Sauce',
      '1 cup - Mozarella Cheese',
    ],
    instructions: [
      '- Dice onion and garlic',
      '- Saute onion and garlic',
      '- Pour in canned tomato sauce into the pan',
      '- Once sauce boils, let cheese melt',
    ],
    ners: ['Onion', 'Garlic Cloves', 'Canned Tomato Sauce', 'Mozarella Cheese'],
  },
  {
    name: 'Recipe 3',
    ingredients: [
      '1 pc - Onion',
      '3 pc - Garlic Cloves',
      '2 cups - Canned Tomato Sauce',
      '1 cup - Mozarella Cheese',
    ],
    instructions: [
      '- Dice onion and garlic',
      '- Saute onion and garlic',
      '- Pour in canned tomato sauce into the pan',
      '- Once sauce boils, let cheese melt',
    ],
    ners: ['Onion', 'Garlic Cloves', 'Canned Tomato Sauce', 'Mozarella Cheese'],
  },
];

export const recipeString = `
<RECIPE_START>
<NER_START>
brown sugar <NER_NEXT> milk <NER_NEXT> vanilla <NER_NEXT> nuts <NER_NEXT> butter <NER_NEXT> bite size shredded rice biscuits
<NER_END>
<INGREDIENTS_START>
2 lb Wesson oil  it  again beaten  tray and  bay 1/4 c. salt <INGREDIENTS_NEXT>
1 c. <INGREDIENTS_NEXT>
cut up <INGREDIENTS_NEXT>
3 cans crushed pineapple <INGREDIENTS_NEXT>
1 pkg. margarine <INGREDIENTS_NEXT>
1/4 c. chopped onion <INGREDIENTS_NEXT>
1/4 tsp. cayenne pepper
<INGREDIENTS_END>
<INSTRUCTIONS_START>
Mix all ingredients until tender. <INSTRUCTIONS_NEXT>
Pour over remaining ingredients to make a wire whisk. <INSTRUCTIONS_NEXT>
Pour on top of chopped pecans are tender. <INSTRUCTIONS_NEXT>
Serve with remaining ingredients. <INSTRUCTIONS_NEXT>
Cut out glass pieces. <INSTRUCTIONS_NEXT>
Add the vermouth milk and saute mushrooms and tomato sauce. <INSTRUCTIONS_NEXT>
Spread remaining ingredients. <INSTRUCTIONS_NEXT>
Bake at 350\u00b0 for 45 minutes.
<INSTRUCTIONS_END>
<TITLE_START>
Wrap And Rice Fondue
<TITLE_END>
<RECIPE_END>
`;
