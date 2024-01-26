import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Perform authentication logic here (e.g., API call, validation, etc.)
    // 'data' object contains the form input values
    console.log("Form Data:", data);
  };

  return (
    <form
      className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label
          htmlFor="userName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          User Name
        </label>
        <input
          required
          type="text"
          id="userName"
          {...register("userName", { required: true })}
          className="w-full p-2 border rounded outline-green-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          required
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="w-full p-2 border rounded outline-green-500"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
