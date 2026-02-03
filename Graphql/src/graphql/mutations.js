import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation addUser(
        $name: String!,
        $username: String!,
        $email: String!,
    ){
    
    createUser(input:{
        username: $username,
        name: $name,
        email: $email
    })
    {
        id,
        name
    }
    
    }
`


export {CREATE_USER}