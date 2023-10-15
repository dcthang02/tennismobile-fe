import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

const USER_BY_PHONE = gql`
  query UserByPhone($phone: String!) {
    userByPhone(phoneInput: { phone: $phone }) {
      phone
    }
  }
`;

const useCheckUserByPhone = () => {
  const [checkUserByPhone, { loading, data, error }] =
    useLazyQuery(USER_BY_PHONE);

  return {
    checkUserByPhone,
    userData: data,
  };
};

export default useCheckUserByPhone;
