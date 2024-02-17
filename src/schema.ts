
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type BlogPost {
    id: ID!
    title: String!
    image: String!
    excerpt: String!
    author: String!
    date: String!
    slug: String
    content: String!
    minRead: Int!
    tags: String
  }

  
  type Query {
    blogs(pageSize: Int!, pageNumber: Int!, id: ID): [BlogPost]!
  }

  type Mutation {
    createBlog(
      title: String!,
      image: String!,
      excerpt: String!,
      author: String!,
      content: String!,
      tags: String
    ): ID!
  }
`;

export default typeDefs;
