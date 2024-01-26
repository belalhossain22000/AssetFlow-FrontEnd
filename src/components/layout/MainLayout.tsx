import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarGenerator";
import { routePaths } from "../../routes/userRoute";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const userRole = {
    USER: 'user',
  };



const MainLayout = () => {
  return (
    <Layout className="h-[100vh] ">
      <Sider breakpoint="lg" collapsedWidth="0" className="">
        <div className="demo-logo-vertical text-white flex items-center justify-center text-2xl h-20 font-bold">
          <h1>AssetFlow</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(routePaths,userRole.USER)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} >

        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
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
