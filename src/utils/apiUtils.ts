import { EvaluatorType } from 'lib/types/evaluatorType';

const url = process.env.API_KEY;

export const getPrediction = async (nerList: string) => {
  try {
    const response = await fetch(`${url}/api/prediction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: nerList }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getEvaluation = async (evaluator: EvaluatorType) => {
  try {
    const response = await fetch(`${url}/api/eval`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ evaluator: evaluator }),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};
