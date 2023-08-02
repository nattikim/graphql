import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import { getUserId } from "@/lib/userId";

const userId = getUserId();
console.log("userId", userId, typeof userId);

const GET_AVATAR = gql`
  query user($userId: Int!) {
    user(where: { id: { _eq: $userId } }) {
      attrs(path: "image")
    }
  }
`;
export const useGetAvatar = () => {
  const userId = getUserId();
  const { data, loading, error } = useQuery(GET_AVATAR, {
    variables: { userId },
    skip: userId === undefined,
  });
  console.log("useGetMeUserId", userId);
  console.log("data", data);
  return {
    user: data?.user,
    loading,
    error,
  };
};
