import "./loginModel.css";

const LoginModel = ({ handleDisplay }) => {
  return (
    <div className="login">
      <div className="login_header">
        <h3>Login</h3>
        <span onClick={() => handleDisplay()}>&times;</span>
      </div>

      <form className="login_form">
        <div className="login_form-group">
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="login_form-group">
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="login_form-group">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginModel;
