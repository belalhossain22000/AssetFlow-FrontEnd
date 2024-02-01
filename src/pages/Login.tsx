import { Row } from "antd";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi/authApi";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/authSlice";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  // testing for default value
  const defaultValues = {
    username: "User Khan3",
    password: "UserPwd123!",
  };

  // login handler
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        username: data.username,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token) as TUser;
      dispatch(setUser({ user: user, token: res.data.token }));
      console.log(user.role);
      navigate(`/${user.role}/dashboard`);
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch {
      toast.error("Something went wrong login failed", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row  className="w-full px-5 md:w-1/2 mx-auto h-[100vh]" justify="center" align="middle">
      <Form  onSubmit={onSubmit} defaultValues={defaultValues}>
        <h2 className="font-semibold text-5xl my-12 text-center text-gray-600">Login Here </h2>
        <FormInput type="text" name="username" label="User Name" />
        <FormInput type="text" name="password" label="Password" />
        <button
          className="w-full mt-5 bg-green-600 p-3 rounded-md text-white text-lg font-semibold hover:bg-green-700 transition duration-300" 
          type="submit"
        >
          {isLoading ? "Logging in" : "Login"}
        </button>
        <p className="text-center mt-5">Don't have an account Register <Link to="/register" className="text-blue-500 hover:underline"> Register</Link></p>
      </Form>
    </Row>
  );
};

export default Login;
