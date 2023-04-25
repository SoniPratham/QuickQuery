import axios from 'axios';

export const getLowIncomeBMWorMercedesUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3001/users/bmw-mercedes-income');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMaleUsersWithHighPhonePrice = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users/male-high-phone-price');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const getLastNameMUsersWithQuoteLengthGreaterThan15 = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users/quote-email-m');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const getCarBrandAndNonDigitEmailUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users/bmw-mercedes-audi-no-digit-email');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const getTop10CitiesWithHighestNumberOfUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users/top-cities');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  