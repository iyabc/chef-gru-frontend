const clean_up_text = (text: string): string => {
  let cleanedText = text.trim();
  cleanedText = cleanedText.replace(/<[A-Z_]+>/g, '');
  return cleanedText;
};

interface CleanedRecipeData {
  title?: string;
  ingredients?: string[];
  instructions?: string[];
  ner_tags?: string[];
}

const extract_sections = (recipe_string: string): CleanedRecipeData => {
  const sections: CleanedRecipeData = {};

  const title_match = recipe_string.match(/<TITLE_START>(.*?)<TITLE_END>/s);
  if (title_match) {
    sections.title = clean_up_text(title_match[1]);
  }

  const ingredients_match = recipe_string.match(
    /<INGREDIENTS_START>(.*?)<INGREDIENTS_END>/s
  );
  if (ingredients_match) {
    const ingredients = ingredients_match[1].split('<INGREDIENTS_NEXT>');
    sections.ingredients = ingredients.map((ingredient) =>
      clean_up_text(ingredient)
    );
  }

  const instructions_match = recipe_string.match(
    /<INSTRUCTIONS_START>(.*?)<INSTRUCTIONS_END>/s
  );
  if (instructions_match) {
    const instructions = instructions_match[1].split('<INSTRUCTIONS_NEXT>');
    sections.instructions = instructions.map((instruction) =>
      clean_up_text(instruction)
    );
  }

  const ner_tags_match = recipe_string.match(/<NER_START>(.*?)<NER_END>/s);
  if (ner_tags_match) {
    const ner_tags = ner_tags_match[1].split(' <NER_NEXT>');
    sections.ner_tags = ner_tags.map((ner_tag) => clean_up_text(ner_tag));
  }

  return sections;
};

export default extract_sections;
