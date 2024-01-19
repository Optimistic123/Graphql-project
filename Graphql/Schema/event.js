// schema.js
import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!
  }

  type Query {
    getEvents: [Event]
  }

  type Mutation {
    createEvent(eventInput: EventInput): Event
  }
`;
