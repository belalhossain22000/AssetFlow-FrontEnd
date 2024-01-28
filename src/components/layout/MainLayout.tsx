import { Button, Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarGenerator";
import { routePaths } from "../../routes/userRoute";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, selectCurrentUser } from "../../redux/features/authSlice";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <Layout className="h-full min-h-[100vh] relative ">
      <Sider breakpoint="lg" collapsedWidth="0" className="">
        <div className="demo-logo-vertical text-white flex items-center justify-center text-2xl h-20 font-bold">
          <h1>AssetFlow</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(routePaths, user!.role)}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0 }}
          className="flex justify-end items-center"
        >
          <Button onClick={handleLogout} className="text-white ">
            LogOut
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
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
