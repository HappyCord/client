import Button from "../componements/Button";
import FormSection from "../componements/FormSection";

const LoginPage = () => {
  return (
    <>
      <FormSection title="Login">
        <Button color={Button.Colors.BRAND}>Login</Button>
      </FormSection>
    </>
  );
};

export default LoginPage;
