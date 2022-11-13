import React from "react";
import { useParams } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";

function RQUser() {
  const { userId } = useParams();

  const { data, isLoading, isError, error } = useUserData(userId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {data?.data.name} - {data?.data.ldap}
    </div>
  );
}

export default RQUser;
