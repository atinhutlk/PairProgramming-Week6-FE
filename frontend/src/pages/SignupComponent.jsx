import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("text");
  const passwordField = useField("password");
  const password2Field = useField("password");

  const { handleSignup, error, isLoading } = useSignup(setIsAuthenticated);

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input {...emailField} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordField} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input {...password2Field} />
      </label>
      <br />
      {error && <div className="error">{error}</div>}
      <button
        onClick={() =>
          handleSignup(
            emailField.value,
            passwordField.value,
            password2Field.value
          )
        }
        disabled={isLoading}
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignupComponent;
