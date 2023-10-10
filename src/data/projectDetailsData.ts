import type { ProjectDetailsType } from 'lib/types/projectDetailsType';
import placeholder from 'public/images/placeholder.png';

export const projectDetails: ProjectDetailsType[] = [
  {
    title: 'Preprocessing',
    body: 'We used the RecipeDB dataset which includes a structured compilation of 118,171 recipes from cuisines across the globe (6 continents, 26 geocultural regions and 74 countries), cooked using 268 processes (heat, cook, boil, simmer, bake, etc.) and blending over 20,262 diverse ingredients. Preprocessing on the data included removing repeating or incomplete recipes, formatting of capital letters and punctuation and adding tags to each recipe that differentiate between the different sections of it such as the ‘title’ and the ‘ingredients’ to help the model learn the structure of the recipes.',
    imageUrl: placeholder,
  },
  {
    title: 'Tokenization',
    body: 'We used the RecipeDB dataset which includes a structured compilation of 118,171 recipes from cuisines across the globe (6 continents, 26 geocultural regions and 74 countries), cooked using 268 processes (heat, cook, boil, simmer, bake, etc.) and blending over 20,262 diverse ingredients. Preprocessing on the data included removing repeating or incomplete recipes, formatting of capital letters and punctuation and adding tags to each recipe that differentiate between the different sections of it such as the ‘title’ and the ‘ingredients’ to help the model learn the structure of the recipes.',
    imageUrl: placeholder,
  },
  {
    title: 'Model Training',
    body: 'Transformers, with their multi-headed self-attention mechanism, have revolutionised the process of language generation with their almost human-like generated language. Hence, we selected the GPT-2 model which is a transformer-based language model with a simple objective to predict the next word, given all of the previous words within some text.',
    imageUrl: placeholder,
  },
  {
    title: 'Final Results',
    body: 'Evaluation loss for the model is 2.1268 and perplexity is 8.388. Results obtained by the model are highly structed and covers all ingredients to generate real-world novel recipes.',
    imageUrl: placeholder,
  },
];
