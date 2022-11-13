import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function RQUsers() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return axios.get("http://localhost:4000/users");
    },
  });
  console.log("error", error);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Users Page</h2>
      {data?.data.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </>
  );
}

export default RQUsers;
