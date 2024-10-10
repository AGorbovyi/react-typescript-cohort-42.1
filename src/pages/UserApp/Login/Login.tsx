import { PageWrapper, PageTitle } from "./styles";
import LoginForm from "components/LoginForm/LoginForm";

function Login() {
  return (
    <PageWrapper>
      <PageTitle>Login</PageTitle>
      <LoginForm />
    </PageWrapper>
  );
}

export default Login;
