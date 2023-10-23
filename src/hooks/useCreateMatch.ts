import { AuthContext } from "@/context/AuthContext";
import { gql, useMutation } from "@apollo/client";
import { useContext } from "react";

const CREATE_MATCH = gql`
  mutation ($createMatchInput: CreateMatchInput!) {
    createMatch(createMatchInput: $createMatchInput) {
      id
    }
  }
`;

const useCreateMatch = () => {
  const { token } = useContext(AuthContext);
  const [createMatch, { loading, data, error }] = useMutation(CREATE_MATCH, {
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });

  return {
    createMatch,
    loadingCreateMatch: loading,
    createMatchData: data,
    createMatchError: error,
  };
};

export default useCreateMatch;
