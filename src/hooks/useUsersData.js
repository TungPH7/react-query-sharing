import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = () => {
  return axios.get("http://localhost:4000/users");
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
