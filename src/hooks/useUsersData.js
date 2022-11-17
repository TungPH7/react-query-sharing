import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchUsers = () => {
  return axios.get("http://localhost:4000/users");
};

const addUserData = (hero) => {
  return axios.post("http://localhost:4000/users", hero);
};

export const useUsersData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onSuccess,
    onError,
    // select: (data) => {
    //   const userNames = data.data.map((user) => user.name);
    //   return userNames;
    // },
  });
};

export const useAddUserData = () => {
  const queryClient = useQueryClient();
  return useMutation(addUserData, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries('users')
    //   queryClient.setQueryData(['users'], (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data]
    //     }
    //   })
    // }
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      const previousUserData = queryClient.getQueryData({ queryKey: "users" });
      queryClient.setQueryData(["users"], (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newUser },
          ],
        };
      });
      return {
        previousUserData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData(["users"], context.previousUserData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
