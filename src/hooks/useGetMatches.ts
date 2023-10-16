import { gql, useLazyQuery } from "@apollo/client";

const MATCHES = gql`
  query {
    matches {
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

const useGetMatches = () => {
  const [getMatches, { loading, data, called, error }] = useLazyQuery(MATCHES);

  return {
    getMatches,
    loadingMatches: loading,
    matchesData: data,
  };
};

export default useGetMatches;
