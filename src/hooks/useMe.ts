import { AuthContext } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { gql, useLazyQuery } from "@apollo/client";
import { useContext, useEffect } from "react";

const ME = gql`
  query Me {
    me {
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

const useMe = () => {
  const { token } = useContext(AuthContext);
  const [getMe, { loading, data, error, called }] = useLazyQuery(ME, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (token) getMe();
  }, [token]);

  return {
    getMe,
    myData: data,
    loadingMyData: loading,
    called,
  };
};

export default useMe;
