import { AuthContext } from "@/context/AuthContext";
import { gql, useLazyQuery } from "@apollo/client";
import { useContext, useEffect } from "react";

const NEXT_MATCHES = gql`
  query {
    nextMatches {
      id
      date
      maxPlayers
      note
      owner {
        id
        name
        image
      }
      players {
        id
        name
        image
      }
      maxPlayers
      pendingPlayers {
        id
        name
        image
      }
      invitedPlayers {
        id
        name
        image
      }
      location {
        id
        name
        address
        images
      }
    }
  }
`;

const useGetNextMatches = () => {
  const { token } = useContext(AuthContext);
  const [getNextMatches, { loading, data, error, called }] = useLazyQuery(
    NEXT_MATCHES,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    }
  );

  useEffect(() => {
    if (token) {
      console.log("token", token);
      getNextMatches();
    }
  }, [token]);

  return {
    getNextMatches,
    nextMatchesData: data,
  };
};

export default useGetNextMatches;
