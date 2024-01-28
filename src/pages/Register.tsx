import { Button, Row } from "antd";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import { FieldValues } from "react-hook-form";
import { useRegisterMutation } from "../redux/api/authApi/authApi";
import toast from "react-hot-toast";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();


  // testing for default value
  const defaultValues = {
    username: "User Khan5",
    email:'user@gmail5.com',
    password: "UserPwd123!",
  };

  // register handler
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await register(data).unwrap();
      console.log(res?.data);
      toast.success("Registration Success");
    } catch (error) {
      toast.error("Registration Success");
      console.log(error);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Form onSubmit={onSubmit} defaultValues={defaultValues}>
        <FormInput type="text" name="username" label="User Name" />
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="text" name="password" label="Password" />
        <Button htmlType="submit">
          {isLoading ? "Signing Up" : "Sign Up"}
        </Button>
      </Form>
    </Row>
  );
};

export default Register;
