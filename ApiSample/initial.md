query{
  hello
}

mutation{
 register(password:"aaa",email:"aaa@gmail.com", lastName:"lname", fristName: "fname")
}

mutation {
  register(data: { email: "prabha2@gmail.com", firstName: "prabha2first", lastName: "prabha2last", password: "aaa" }) {
    id
    firstName
    name
    email
    name
  }
}
