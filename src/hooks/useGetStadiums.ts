import { gql, useLazyQuery } from "@apollo/client";

const STADIUMS = gql`
  query {
    stadiums {
      id
      name
      address
      images
    }
  }
`;

const useGetStadiums = () => {
  const [getStadiums, { loading, data, error, called }] =
    useLazyQuery(STADIUMS);

  return {
    getStadiums,
    stadiumsData: data,
    loadingStadiums: loading,
  };
};

export default useGetStadiums;
