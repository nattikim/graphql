"use client";

import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_INFO = gql`
  query user($userId: Int!) {
    user(where: { id: { _eq: $userId } }) {
      login
      email
      attrs(path: "phonenumber")
      firstName
      lastName
      auditRatio
      campus
      xpAmount: transactions_aggregate(
        where: {
          type: { _eq: "xp" }
          _or: [{ attrs: { _eq: {} } }, { attrs: { _has_key: "group" } }]
          _and: [
            { path: { _nlike: "%/piscine-js/%" } }
            { path: { _nlike: "%/piscine-go/%" } }
          ]
        }
      ) {
        aggregate {
          sum {
            amount
          }
        }
      }
      transactions(
        where: {
          type: { _eq: "level" }
          path: { _ilike: "%/school-curriculum/%" }
        }
        limit: 1
      ) {
        amount
      }
    }
  }
`;

export type User = {
  login: string;
  email: string;
  attrs: UserAttrs;
  firstName: string;
  lastName: string;
  auditRatio: number;
  campus: string;
  xpAmount: {
    aggregate: {
      sum: {
        amount: number;
      };
    };
  };
  transactions: {
    amount: number;
  }[];
};

export type UserAttrs = {
  phonenumber: string;
};

export const useInfo = (userId: number) => {
  const { data, loading, error } = useQuery(GET_INFO, {
    variables: { userId },
  });

  const user = data?.user;

  if (!user || user.length === 0) {
    console.log(error?.message);
  }

  return {
    user: data?.user[0] ?? {},
    loading,
    error,
  };
};
