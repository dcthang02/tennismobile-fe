import { gql, useLazyQuery, useMutation } from "@apollo/client";

const SIGN_UP = gql`
  mutation SignupByPhone($phone: String!) {
    signupByPhone(authPhoneInput: { phone: $phone }) {
      token
    }
  }
`;

const SIGN_IN = gql`
  mutation SigninByPhone($phone: String!) {
    signinByPhone(authPhoneInput: { phone: $phone }) {
      token
    }
  }
`;

const useAuthentication = () => {
  const [
    signupByPhone,
    {
      data: phoneSignupData,
      loading: phoneSignuploading,
      error: phoneSignupError,
    },
  ] = useMutation(SIGN_UP);

  const [
    signinByPhone,
    {
      data: phoneSigninData,
      loading: phoneSigninLoading,
      error: phoneSigninError,
    },
  ] = useMutation(SIGN_IN);

  return {
    signupByPhone,
    signinByPhone,
  };
};

export default useAuthentication;
