import useSWR from 'swr';

const BASEURL = 'http://localhost:3000';
const response = (...args) => fetch(...args).then(res => res.json());

export default function useFetcher(endpoint) {
  const { data, error, isLoading } = useSWR(
    `${BASEURL}/api/${endpoint}`,
    response
  );

  return {
    data: data,
    isLoading: !error && isLoading,
    isError: error,
  };
}
