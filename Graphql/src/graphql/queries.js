import { gql } from '@apollo/client'
const GET_USERS = gql`

    query{
            users{
                    data{
                    name,
                    email,
                    phone,
                    todos{
                    data{
                        title,
                        completed
                    }
                }
            }
  }
} 
    
`

const GET_USER = gql`
    query getUser($id:ID!){
    user(id: $id){
        name,
        email
    }
    }

`

export {GET_USERS, GET_USER}