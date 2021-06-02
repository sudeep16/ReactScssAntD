import { Layout } from "antd";
import React from "react";
import { NavBarComponent } from "../components/NavBarComponent";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Header>
        <NavBarComponent />
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default HomePage;
