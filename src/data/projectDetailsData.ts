import type { ProjectDetailsType } from 'lib/types/projectDetailsType';
import resultImage from 'public/images/finalResult.png';
import modelImage from 'public/images/modeltraining.png';
import preprocessingImage from 'public/images/preprocess.png';
import tokenizingImage from 'public/images/tokenizing.png';
export const projectDetails: ProjectDetailsType[] = [
  {
    title: 'Preprocessing',
    body: 'We employed the RecipeNLG dataset, comprising 2 million recipes, for our project. After extracting recipes with a 4-star rating and above through web scraping, we obtained 292,831 recipes. Further preprocessing involved filtering recipes to have a maximum of 200 words, resulting in 204,833 recipes. Additionally, we refined the dataset to include recipes with 3 to 15 ingredients, leading to a total of 198,933 recipes. To ensure accuracy, we cross-verified the alignment of named entities with the number of ingredients, accepting recipes with matching counts, ultimately culminating in a curated dataset of 165,498 recipes. ',
    imageUrl: preprocessingImage,
  },
  {
    title: 'Tokenization',
    body: 'Control tokens [START], [NER_NEXT], [END], [INGREDIENTS_START], [INGREDIENTS_NEXT], [INGREDIENTS_END], [INSTRUCTIONS_START], [INSTRUCTIONS_NEXT], [INSTRUCTIONS_END], [TITLE_START], [TITLE_END], and [END] structure the recipe into different parts in the encoder. Two Byte-level BPE tokenizers were trained for the sequence-to-sequence model: one for the encoder (vocabulary size 10,000) and one for the decoder (vocabulary size 30,000), using the tokenizers library. NERs were joined for the encoder, while ingredients, instructions, and titles were joined for the decoder. The vocabulary sizes were chosen based on hardware and time constraints. After training, the tokenizers were saved and used to tokenize text recipes. The tokenized data, padded to the maximum sequence length with zeros, were then saved using pickle for model training.',
    imageUrl: tokenizingImage,
  },
  {
    title: 'Model Training',
    body: 'The dataset comprising 106,374 tokenized recipes was utilized for training a sequence-to-sequence BiGRU model. Batches of 32 sequences each were employed to optimize machine capacity on Google Colab with an Nvidia Tesla T4 GPU. Tensorflow and Keras were used for deep learning, while Tensorboard aided in model visualization. Tokenized recipes were converted to tensors for efficient model training on the GPU. The researchers employed the Adam optimizer with a learning rate of 0.0001 and included a Checkpoint callback for weight saving. The model, with encoder and decoder components, underwent 20 epochs and 2242 steps per epoch, calculated based on the sequence count and batch size. The training process for the sequence-to-sequence BiGRU with an Attention Mechanism model took approximately 2 hours and 49 minutes to complete.',
    imageUrl: modelImage,
  },
  {
    title: 'Final Results',
    body: 'The final model is used in the generation of recipe as can be seen in the website. The final result of the model was also evaluated through certain evaluation metric such as BLEU, Jaccard Similarity and Human Evaluation, this is to ensure that generated recipes are high quality.',
    imageUrl: resultImage,
  },
];
