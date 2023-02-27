import useSWR from 'swr';

// const BASEURL = 'https://lottery-next-js.vercel.app/';
const response = (...args) => fetch(...args).then(res => res.json());

export default function useFetcher(endpoint) {
  const { data, error, isLoading } = useSWR(`/api/${endpoint}`, response);

  return {
    data: data,
    isLoading: !error && isLoading,
    isError: error,
  };
}
