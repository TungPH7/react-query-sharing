import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function RQUsers() {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return axios.get("http://localhost:4000/users");
    },
    // refetchOnWindowFocus: false
    // refetchInterval: 1000*2,
    // refetchIntervalInBackground: true
  });

  console.log({isLoading, isFetching})

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
