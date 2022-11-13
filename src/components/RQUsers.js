import { useUserData } from "../hooks/useUserData";

function RQUsers() {
  const onSuccess = (data) => {
    console.log("Do somthing after data fetching");
  };

  const onError = (error) => {
    console.log("Do somthing after encountering error");
  };

  const { data, isLoading, isError, error, isFetching } = useUserData(
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
      {/* {data?.data.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })} */}
      {data.map((userName) => {
        return <div key={userName}>{userName}</div>;
      })}
    </>
  );
}

export default RQUsers;
