import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = `http://localhost:3001/api/search`;

const requestOptions = ({mode, name}) => {
  const modes = {
    search: {
      method: 'GET',
      url: `${baseUrl}/${name}`,
    },
  };

  return modes[mode];
};

const useAPI = (options) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(options);

  useEffect(() => {
    axios(requestOptions(options))
      .then((result) => {
        setLoading(false);
        setResponse(result.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  return {
    response,
    loading,
    error,
  };
};

export default useAPI;
