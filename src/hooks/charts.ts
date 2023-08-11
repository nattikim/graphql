import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";

const SKILLS = gql`
  query ($userId: Int!) {
    transaction(
      where: {
        userId: { _eq: $userId }
        type: { _regex: "skill_" }
        _and: [
          { path: { _nlike: "%/piscine-js" } }
          { path: { _nlike: "%/piscine-go" } }
          { path: { _nlike: "%/checkpoint/%" } }
        ]
      }
    ) {
      path
      amount
      type
      objectId
    }
  }
`;

const progressQuery = gql`
  query progress($userId: Int!) {
    progress(
      order_by: [{ path: asc }, { createdAt: asc }, { grade: asc }]
      where: { userId: { _eq: $userId } }
    ) {
      id
      path
      object {
        name
      }
      grade
      isDone
      eventId
      version
      createdAt
      updatedAt
    }
  }
`;
const JS = gql`
  query ($userId: Int!) {
    transaction(
      where: {
        userId: { _eq: $userId }
        transaction_type: { type: { _eq: "xp" } }
        eventId: { _is_null: false }
        _and: [{ path: { _like: "%/piscine-js/%" } }]
      }
    ) {
      amount
      type
      createdAt
      path
      attrs
      object {
        name
      }
    }
  }
`;
const GO = gql`
  query ($userId: Int!) {
    transaction(
      where: {
        userId: { _eq: $userId }
        transaction_type: { type: { _eq: "xp" } }
        eventId: { _is_null: false }
        _and: [{ path: { _like: "%/piscine-go/%" } }]
      }
    ) {
      amount
      type
      createdAt
      path
      attrs
      object {
        name
      }
    }
  }
`;
const PROJECTS = gql`
  query ($userId: Int!) {
    transaction(
      where: {
        userId: { _eq: $userId }
        transaction_type: { type: { _eq: "xp" } }
        eventId: { _is_null: false }
        _and: [
          { path: { _nlike: "%/piscine-js/%" } }
          { path: { _nlike: "%/piscine-go/%" } }
          { path: { _nlike: "%/checkpoint/%" } }
        ]
      }
    ) {
      amount
      type
      createdAt
      path
      attrs
      object {
        name
      }
    }
  }
`;

export type Progress = {
  id: number;
  path: string;
  grade: number;
  object: {
    name: string;
  };
  isDone: boolean;
  eventId: number;
  version: number;
  createdAt: string;
  updatedAt: string;
};

export type Projects = {
  amount: number;
  type: string;
  createdAt: string;
  path: string;
  attrs: string;
  object: {
    name: string;
  };
};

export type Skills = {
  path: string;
  amount: number;
  type: string;
  objectId: number;
};

export type Go = {
  amount: number;
  type: string;
  createdAt: string;
  path: string;
  attrs: string;
  object: {
    name: string;
  };
};
export type Js = {
  amount: number;
  type: string;
  createdAt: string;
  path: string;
  attrs: string;
  object: {
    name: string;
  };
};

export const useJs = (userId: number | undefined) => {
  const { data, error, loading } = useQuery(JS, {
    variables: {
      userId,
    },
  });

  if (!data) {
    return { error, loading };
  }

  const js = data.transaction ?? null;

  return { js, error, loading };
};

export const useGo = (userId: number | undefined) => {
  const { data, error, loading } = useQuery(GO, {
    variables: {
      userId,
    },
  });

  if (!data) {
    return { error, loading };
  }

  const go = data.transaction ?? null;

  return { go, error, loading };
};

export const useSkills = (userId: number | undefined) => {
  const { data, error, loading } = useQuery(SKILLS, {
    variables: {
      userId,
    },
  });

  if (!data) {
    return { error, loading };
  }

  const skill = data.transaction ?? null;

  return { skill, error, loading };
};

export const useProgress = (userId: number) => {
  const { data, error, loading } = useQuery(progressQuery, {
    variables: {
      userId,
    },
  });

  if (!data) {
    return { progress: undefined, error, loading };
  }

  const progress = (data.progress as Progress[] | undefined) ?? null;

  return { progress, error, loading };
};

export const useProjects = (userId: number | undefined) => {
  const { data, error, loading } = useQuery<{ transaction: Projects[] }>(
    PROJECTS,
    {
      variables: {
        userId,
      },
    },
  );

  if (!data) {
    return { error, loading };
  }

  const chart = data.transaction ?? null;

  return { chart, error, loading };
};
