mutation {
  addUser(username:"123", email:"asd", password: "123"){
    _id
    username
    password
    email
  }
}

query {
  users {
    _id
    username
    password
  }
}

