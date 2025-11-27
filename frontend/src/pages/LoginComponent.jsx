import useLogin from "../hooks/useLogin";
import { useField } from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("text");
  const passwordField = useField("password");

  const { setEmail, setPassword, handleLogin } = useLogin(setIsAuthenticated);

  const handleEmailChange = (e) => {
    emailField.onChange(e);      
    setEmail(e.target.value);     
  };

  const handlePasswordChange = (e) => {
    passwordField.onChange(e);    
    setPassword(e.target.value);  
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        email:
        <input
          type="text"
          value={emailField.value}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={passwordField.value}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
