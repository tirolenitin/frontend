import axios from 'axios';

export const makeJsonApiRequest = async (
    method,
    endpoint,
    jsonData = null
  ) => {
    try {
      let headers = {
          'Content-Type': 'application/json',
        };

      const config = {
        method,
        url: endpoint,
        data: jsonData,
        headers,
      };
  
      const response = await axios(config);
  
      return response;
    } catch (error) {
      return error.response;
    }
  };