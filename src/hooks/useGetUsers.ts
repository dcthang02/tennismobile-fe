import { AuthContext } from "@/context/AuthContext";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";

const USERS = gql`
  query {
    users {
      id
      name
      phone
      image
      birthday
      gender
      freeTime
      rank
      statistic {
        id
        matches {
          all
          won
          lost
        }
        leagues {
          matches
          won
          lost
        }
        score {
          sum
          won
          average
        }
      }
      utility {
        id
      }
      shop {
        id
      }
      club {
        id
      }
    }
  }
`;

const useGetUsers = () => {
  const { token } = useContext(AuthContext);
  const [getUsers, { loading, data, error, called }] = useLazyQuery(USERS, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (token) getUsers();
  }, [token]);

  return {
    getUsers,
    usersData: data,
    loadingUsers: loading,
    called,
  };
};

export default useGetUsers;
