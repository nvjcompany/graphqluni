export default `

    type University {
        _id: String!,
        name: String!,
        city: String!
    }

    type Query {
        university(_id: String!): University
        universities: [University]
    }

    type Mutation {
        addUniversity(name: String!, city: String!): University
        editUniversity(_id: String!, username: String, email: String, password: String): University
        deleteUniversity(_id: String!): University
    }

`;