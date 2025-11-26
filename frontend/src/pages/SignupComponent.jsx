import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    handleSignup,
    error,
    isLoading,
  } = useSignup(setIsAuthenticated);

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <br />
      {error && <div className="error">{error}</div>}
      <button onClick={handleSignup} disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignupComponent;
