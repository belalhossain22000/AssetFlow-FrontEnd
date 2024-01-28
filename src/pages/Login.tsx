
import { Button, Row } from "antd";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import { FieldValues } from "react-hook-form";

const Login = () => {
// testing for default value
const defaultValues = {
  userId: 'A-0002',
  password: 'admin123',
};


 

  const onSubmit = (data: FieldValues) => {
    
    console.log("Form Data:", data);
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Form onSubmit={onSubmit} defaultValues={defaultValues}>
        <FormInput type="text" name="userId" label="ID:" />
        <FormInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </Form>
    </Row>
  );
};

export default Login;
