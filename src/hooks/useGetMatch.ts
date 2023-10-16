import { gql, useLazyQuery } from "@apollo/client";

const MATCH = gql`
  query Match($id: String!) {
    match(id: $id) {
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

const useGetMatch = () => {
  const [getMatch, { loading, data, called, error }] = useLazyQuery(MATCH);

  return {
    getMatch,
    loadingMatch: loading,
    matchData: data,
  };
};

export default useGetMatch;
