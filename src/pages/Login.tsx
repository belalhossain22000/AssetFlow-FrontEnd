import { Button, Row } from "antd";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/authSlice";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  // testing for default value
  const defaultValues = {
    userId: "User Khan3",
    password: "UserPwd123!",
  };

  // login handler
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        username: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token) as TUser;
      dispatch(setUser({ user: user, token: res.data.token }));
      console.log(user.role);
      navigate(`/${user.role}/dashboard`);
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Form onSubmit={onSubmit} defaultValues={defaultValues}>
        <FormInput type="text" name="userId" label="ID:" />
        <FormInput type="text" name="password" label="Password" />
        <Button htmlType="submit">{isLoading ? "Logging in" : "LogIn"}</Button>
      </Form>
    </Row>
  );
};

export default Login;
