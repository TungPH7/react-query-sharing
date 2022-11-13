import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = () => {
  return axios.get("http://localhost:4000/users");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueries() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  return <div>ParallelQueriesPage</div>;
}

export default ParallelQueries;
