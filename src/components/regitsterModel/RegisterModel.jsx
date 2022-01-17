import "./registerModel.css";

const RegisterModel = ({ handleDisplay }) => {
  return (
    <div className="register">
      <div className="register_header">
        <h3>Sign Up</h3>
        <span onClick={() => handleDisplay()}>&times;</span>
      </div>
      <form className="register_form">
        <div className="register_form-group">
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="register_form-group">
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="register_form-group">
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="register_form-group">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterModel;
