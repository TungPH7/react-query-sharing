import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function RQUsers() {
  const onSuccess = (data) => {
    console.log('Do somthing after data fetching')
  }

  const onError = (error) => {
    console.log('Do somthing after encountering error')
  }

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return axios.get("http://localhost:4000/users");
    },
    onSuccess,
    onError,
    select: (data) => {
      const userNames = data.data.map(user => user.name)
      return userNames
    }
  });

  console.log({isLoading, isFetching})

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log('data', data)

  return (
    <>
      <h2>RQ Users Page</h2>
      {/* {data?.data.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })} */}
      {data.map(userName => {
        return <div key={userName}>{userName}</div>
      })}
    </>
  );
}

export default RQUsers;
