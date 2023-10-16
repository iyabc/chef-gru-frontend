import { OutputType } from 'lib/types/outputType';

const clean_up_text = (text: string): string => {
  let cleanedText = text.trim();
  cleanedText = cleanedText.replace(/<[A-Z_]+>/g, '');
  return cleanedText;
};

export const extract_sections = (recipe_string: string): OutputType => {
  const sections: OutputType = {
    ingredients: [],
    instructions: [],
    ner_tags: [],
    title: '',
  };

  const title_match = recipe_string.match(/<TITLE_START>(.*?)<TITLE_END>/s);
  if (title_match) {
    sections.title = clean_up_text(title_match[1]);
  }

  const ingredients_match = recipe_string.match(
    /<INGREDIENTS_START>(.*?)<INGREDIENTS_END>/s
  );
  if (ingredients_match) {
    const ingredients = ingredients_match[1].split(/<INGREDIENTS_NEXT>/i);
    sections.ingredients = ingredients.map((ingredient) =>
      clean_up_text(ingredient)
    );
  }

  const instructions_match = recipe_string.match(
    /<INSTRUCTIONS_START>(.*?)<INSTRUCTIONS_END>/s
  );
  if (instructions_match) {
    const instructions = instructions_match[1].split(/<INSTRUCTIONS_NEXT>/i);
    sections.instructions = instructions.map((instruction) =>
      clean_up_text(instruction)
    );
  }

  const ner_tags_match = recipe_string.match(/<NER_START>(.*?)<NER_END>/s);
  if (ner_tags_match) {
    const ner_tags = ner_tags_match[1].split(/<NER_NEXT>/i);
    sections.ner_tags = ner_tags.map((ner_tag) => clean_up_text(ner_tag));
  }

  return sections;
};
