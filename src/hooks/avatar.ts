import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_AVATAR = gql`
  query ($userId: Int!) {
    user(where: { id: { _eq: $userId } }) {
      attrs(path: "image")
    }
  }
`;

export type Avatar = {
  attrs: {
    path: string;
  };
};
export const useGetAvatar = (userId: number | undefined) => {
  const { data, loading, error } = useQuery(GET_AVATAR, {
    variables: {
      userId,
    },
  });

  return {
    user: data?.user[0],
    loading,
    error,
  };
};
