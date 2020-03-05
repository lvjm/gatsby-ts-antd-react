import React from "react"
import { graphql } from "gatsby"
import { Layout } from "antd"
import { List, Avatar } from "antd"

//import Image from "gatsby-image"
export default ({ data }) => {
  console.log("data", data.swapi.users)
  const titles = []
  data.swapi.users.forEach(user => {
    user.posts.forEach(e => {
      titles.push({ title: e.title })
    })
  })
  console.log(titles)

  return (
    <List
      itemLayout="horizontal"
      dataSource={titles}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  )
}

export const query = graphql`
  query {
    swapi {
      users {
        id
        name
        email
        posts {
          id
          author {
            name
          }
          title
          content
          comments {
            id
            speak
          }
        }
      }
    }
  }
`
