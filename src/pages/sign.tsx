import React from "react"
import { graphql } from "gatsby"
import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import "../../static/style.css"

const Sign = ({ data }, email, password) => {
  console.log("+++++++++++++++", data)
  const onFinish = values => {
    console.log("表单数据", values)
    email = values.email
    password = values.password
    console.log(data)
    window.location.href = "http://localhost:8000/blog"
  }
  return (
    <Form
      name="normal_login"
      className="-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="please enter E-mail" type="email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登陆
        </Button>
        <a href="">马上注册</a>
      </Form.Item>
    </Form>
  )
}
export default Sign

// export const query = graphql`
//   query {
//     swapi {
//       user(where: { id: "may001" }) {
//         email
//       }
//     }
//   }
// `
export const query = graphql`
  query($email: String) {
    swapi {
      user(where: { id: $email }) {
        email
      }
    }
  }
`
