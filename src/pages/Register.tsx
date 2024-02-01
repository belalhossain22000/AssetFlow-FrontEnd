import { Row } from "antd";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import { FieldValues } from "react-hook-form";
import { useRegisterMutation } from "../redux/api/authApi/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  // testing for default value
  const defaultValues = {
    username: "User Khan5",
    email: "user@gmail5.com",
    password: "UserPwd123!",
  };

  // register handler
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering");
    try {
      const res = await register(data).unwrap();
      console.log(res?.data);
      navigate("/login");
      toast.success("Registration Success", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Registration Failed");
      console.log(error);
    }
  };

  return (
    <div>
      <Row
        className="w-full md:w-1/2 mx-auto"
        justify="center"
        align="middle"
        style={{ height: "100vh" }}
      >
        <Form onSubmit={onSubmit} defaultValues={defaultValues}>
          <FormInput type="text" name="username" label="User Name" />
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="text" name="password" label="Password" />
          <button
            type="submit"
            className="bg-green-600 px-5 py-3 font-semibold text-white w-full rounded-md"
          >
            {isLoading ? "Signing Up" : "Sign Up"}
          </button>
          <p className="mt-5 text-center">
            Already have an account{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </Form>
      </Row>
    </div>
  );
};

export default Register;
