
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="my-12">
           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body">
        <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="enter your email address" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered" required />
    
    </div>
    <div className="form-control mt-6">
      <button  className="btn btn-primary">Login</button>
    </div>
    <p className="text-center mt-8"> Do not have an account? <Link className="text-red-600" to="/register">Register</Link></p>
  </form>
  </div>
    </div>
    );
};

export default Login;