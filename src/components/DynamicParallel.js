import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const fetchUser = (userId) => {
  return axios.get(`http://localhost:4000/users/${userId}`);
};

function DynamicParallel({ userIds }) {
  const queryResults = useQueries({
    queries: userIds.map((userId) => {
      return {
        queryKey: ["user", userId],
        queryFn: () => fetchUser(userId),
      };
    }),
  });
  console.log({ queryResults });
  return <div>DynamicParallel</div>;
}

export default DynamicParallel;
