import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://01.gritlab.ax/api/graphql-engine/v1/graphql",
    cache: new InMemoryCache(),
});

export default client;