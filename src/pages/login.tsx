import React from "react";
import Layout from "@/app/layout";
import LogInForm from "@/components/LogInForm/LogInForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Log In</h1>
        <LogInForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
