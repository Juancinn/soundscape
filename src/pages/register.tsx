import React from "react";
import Layout from "@/app/layout";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Register</h1>
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default RegisterPage;
