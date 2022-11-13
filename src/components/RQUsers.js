import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function RQUsers() {
  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return (
        axios.get('http://localhost:4000/users')
      )
    }
  });

  console.log('data', data)
  console.log('isLoading', isLoading)
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
    <h2>RQ Users Page</h2>
    {data?.data.map((user) => {
      return <div key={user.id}>{user.name}</div>
    })}
    </>
  )
}

export default RQUsers;
