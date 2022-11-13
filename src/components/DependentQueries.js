import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchMemberByEmail = (email) => {
  return axios.get(`http://localhost:4000/members/${email}`);
};

const fetchHobbiesByLdap = (ldap) => {
  return axios.get(`http://localhost:4000/membersHobbies/${ldap}`);
};

function DependentQueries({ email }) {
  const { data: member, isFetching: isFetchingMember } = useQuery({
    queryKey: ["member", email],
    queryFn: () => fetchMemberByEmail(email),
  });

  const ldap = member?.data.ldap;

  const { data: hobbies, isFetching: isFetchingHobbies } = useQuery({
    queryKey: ["hobbies", ldap],
    queryFn: () => fetchHobbiesByLdap(ldap),
    enable: !!ldap,
  });

  if (isFetchingMember) {
    return <h2>isFetchingMember....</h2>;
  }

  if (isFetchingHobbies) {
    return <h2>isFetchingHobbies....</h2>;
  }

  return (
    <>
      <h2>Hobbies</h2>
      {hobbies?.data.hobbies.map((hobby) => {
        return <div>{hobby}</div>;
      })}
    </>
  );
}

export default DependentQueries;
