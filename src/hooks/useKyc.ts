import { gql, useMutation } from "@apollo/client";

const KYC = gql`
  mutation VerifyUser($authVerifyInput: AuthVerifyInput!) {
    verifyUser(authVerifyInput: $authVerifyInput) {
      message
    }
  }
`;

const useKyc = () => {
  const [verifyAccount, { data, loading, error }] = useMutation(KYC);

  return {
    verifyAccount,
  };
};

export default useKyc;
