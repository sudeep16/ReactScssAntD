import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavBarComponent } from "../components/NavBarComponent";

import { loginAuth } from "../redux/login/actions";

const { Header, Content } = Layout;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginValues(e.target.value);
  };

  const onFinish = (values) => {
    dispatch(loginAuth(values));

    console.log("Received values of form: ", values);
  };

  return (
    <Layout className="main-container">
      <Header className="header">
        <NavBarComponent />
      </Header>

      <Content className="content">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              value={loginValues.username}
              onChange={handleChange}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              value={loginValues.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or &nbsp;
            <a href="">Register now!</a>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default LoginPage;
