import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchUser = (userId) => {
  return axios.get(`http://localhost:4000/users/${userId}`);
};

export const useUserData = (userId) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    initialData: () => {
      const user = queryClient
        .getQueryData({queryKey: ['users']})
        ?.data?.find((user) => user.id === parseInt(userId));

      if (user) {
        return { data: user };
      } else {
        return undefined;
      }
    },
  });
};

// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const fetchUser = (obj) => {
//   console.log('obj', obj)

//   const userId = obj.queryKey[1]
//   return axios.get(`http://localhost:4000/users/${userId}`);
// };

// export const useUserData = (userId) => {
//   return useQuery({
//     queryKey: ["user", userId],
//     queryFn: fetchUser,
//   });
// };
