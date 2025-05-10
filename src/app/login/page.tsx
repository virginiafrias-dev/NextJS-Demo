import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center w-full flex-col ">
      <h2 className="mb-6">Iniciar sesión en la red social</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
