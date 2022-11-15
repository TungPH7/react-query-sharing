import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsersData, useAddUserData } from "../hooks/useUsersData";

function RQUsers() {
  const [name, setName] = useState("");
  const [ldap, setLdap] = useState("");

  const onSuccess = (data) => {
    console.log("Do somthing after data fetching");
  };

  const onError = (error) => {
    console.log("Do somthing after encountering error");
  };

  const { data, isLoading, isError, error, isFetching, refetch } = useUsersData(
    onSuccess,
    onError
  );

  const {mutate: addHero} = useAddUserData()

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

  const handleAddUser = () => {
    const hero = {name, ldap}
    addHero(hero)
  }

  return (
    <>
      <h2>RQ Users Page</h2>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User Name"
        />
        <input
          value={ldap}
          onChange={(e) => setLdap(e.target.value)}
          placeholder="Ldap"
        />
        <button type="button" onClick={handleAddUser}>Add user</button>
      </div>
      <button type="button" onClick={refetch}>Refetch User</button>
      {data?.data.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/rq-users/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
      {/* {data.map((userName) => {
        return <div key={userName}>{userName}</div>;
      })} */}
    </>
  );
}

export default RQUsers;
