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
    <Layout className="h-full min-h-[100vh] relative overflow-hidden ">
      <Sider breakpoint="lg" collapsedWidth="0" className="bg-green-600 ">
        <div className="demo-logo-vertical text-white flex items-center justify-center text-2xl h-20 font-bold bg-green-600">
          <h1>AssetFlow</h1>
        </div>
        <Menu
        className="h-full bg-green-600 text-white font-semibold text-lg"
       
          mode="inline"
          defaultSelectedKeys={["Dashboard"]}
          items={sidebarItemsGenerator(routePaths, user!.role)}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0 }}
          className="flex justify-end items-center bg-green-600 px-5"
        >
          <Button onClick={handleLogout} className="text-white hover:bg-white hover:text-black">
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
