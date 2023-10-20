const url = 'https://chef-blstm-backend.onrender.com/api';

export const getPrediction = async (nerList: string) => {
  try {
    console.log('Getting Prediction!!');
    const response = await fetch(`${url}/prediction`, {
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
