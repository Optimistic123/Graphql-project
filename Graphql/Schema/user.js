// user.js
import { gql } from "apollo-server-express";

export const typeDef = gql`
    type User {
        _id: ID!
        email: String!
        password: String
    }

    input UserInput {
        email: String!
        password: String!
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        createUser(userInput: UserInput): User
    }
`;
