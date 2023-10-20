const url = 'http://127.0.0.1:8080';

export const getPrediction = async (nerList: string) => {
  try {
    console.log('Getting Prediction!!');
    const response = await fetch(`${url}/api/prediction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: nerList }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
  }
};
