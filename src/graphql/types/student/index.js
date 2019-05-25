export default `
    type Student {
        _id: String!,
        name: String!,
        specialty: String,
        city: String!
    }

    type Query {
        student(_id: String!): Student
        students: [Student]
    }

    type Mutation {
        addStudent(name: String!, specialty: String, city: String!): Student
        editStudent(_id: String!, name: String!, specialty: String, city: String!): Student
        deleteStudent(_id: String!): Student
    }

`;