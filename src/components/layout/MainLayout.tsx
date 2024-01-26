import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: `nav ${index + 1}`,
}));

const MainLayout = () => {
  return (
    <Layout className="h-[100vh]">
      <Sider breakpoint="lg" collapsedWidth="0" className="">
        <div className="demo-logo-vertical text-white flex items-center justify-center text-2xl h-20 font-bold">
          <h1>AssetFlow</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1 className="font-bold text-5xl">main content should go here</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          All Right reserve ©{new Date().getFullYear()} Created AssetFlow
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
