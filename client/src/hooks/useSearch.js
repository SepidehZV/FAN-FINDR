import useAPI from './useAPI';

const useSearch = (name) => {
  const {response: eventDetails, loading, error} = useAPI({mode: 'search', name});
  
  return {
    eventDetails,
    loading,
    error
  }
}

export default useSearch;