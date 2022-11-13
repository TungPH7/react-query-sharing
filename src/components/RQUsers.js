import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/useUsersData";

function RQUsers() {
  const onSuccess = (data) => {
    console.log("Do somthing after data fetching");
  };

  const onError = (error) => {
    console.log("Do somthing after encountering error");
  };

  const { data, isLoading, isError, error, isFetching } = useUsersData(
    onSuccess,
    onError
  );
  console.log({
    isLoading,
    isFetching,
  });

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
        return <div key={user.id}>
          <Link to={`/rq-users/${user.id}`}>
          {user.name}
          </Link>
        </div>;
      })}
      {/* {data.map((userName) => {
        return <div key={userName}>{userName}</div>;
      })} */}
    </>
  );
}

export default RQUsers;
