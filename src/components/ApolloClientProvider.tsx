"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";

interface IGraphQlProviderProps {
  children: React.ReactNode;
}
const ApolloClientProvider: React.FC<IGraphQlProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
