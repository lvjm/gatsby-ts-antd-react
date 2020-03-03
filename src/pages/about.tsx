import React from "react"
import { graphql } from "gatsby"

const Hello = ({ data }) => (
  <div>
    <h1>hello ,this is little fairy, {data.swapi.user.email}</h1>
  </div>
)
export default Hello

export const query = graphql`
  query {
    swapi {
      user(where: { id: "may001" }) {
        email
      }
    }
  }
`
