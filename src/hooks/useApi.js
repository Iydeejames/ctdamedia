import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createData, deleteData, fetchData, updateData } from '../config/api';
import { handleGenericError } from '../utils/errorHandler';

export const useFetchData = (endpoint, queryKey) => {
  return useQuery([queryKey, endpoint], () => fetchData(endpoint), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};




export const useCreateData = (endpoint, queryKey) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      (newData) => createData(endpoint, newData),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey);
        },
        onError: (e) => {
            const error = handleGenericError(e)
            return error
          },
      }
    );
  };




  export const useUpdateData = (endpoint, queryKey) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      (updatedData) => updateData(endpoint, updatedData),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey);
        },
        onError: (e) => {
            const error = handleGenericError(e)
            return error
          },
      }
    );
  };


  export const useDeleteData = (endpoint, queryKey) => {
    const queryClient = useQueryClient();
  
    return useMutation(
      () => deleteData(endpoint),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey);
        },
        onError: (e) => {
            const error = handleGenericError(e)
            return error
          },
      }
    );
  };