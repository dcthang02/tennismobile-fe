import { gql, useLazyQuery } from "@apollo/client";

const USER = gql`
  query UserByPhone($phone: String!) {
    userByPhone(phoneInput: { phone: $phone }) {
      id
      name
      phone
      image
      birthday
      gender
      freeTime
      statistic {
        id
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

const useGetUser = () => {
  const [getUserByPhone, { loading, data, error, called }] = useLazyQuery(USER);

  return {
    getUserByPhone,
    userData: data,
    loadingUser: loading,
    called,
  };
};

export default useGetUser;
