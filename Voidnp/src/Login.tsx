import TeacherCard from "./components/TeacherCard"
import whiteLogo from './assets/Logos_white.svg'
import { useNavigate } from "react-router-dom"
import googleLogo from './assets/google.svg'

function Login() {
  const navigate = useNavigate()

  const handleSignIn= ()=>{
    navigate('/')
  }
  return (
    <main className="login-page">
      <div className="login-container">

      <section className="login-left">
        <header>
          <img src={whiteLogo} alt="logo" />
        </header>

        <TeacherCard className="teacher-card"/>

        <h2>One Identity.<br />Verified Everywhere.</h2>
      </section>

      <section aria-label="Login form" className="login-right">

        <button aria-label="Close" className="close">✕</button>

        <h3>Welcome Back</h3>

        <form method="post" action="/login" className="login-form">
          <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            required
          />
          </div>
          <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          </div>
          <div className="form-options">
            <label className="remember-label">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="/forgot-password" className="forgot">Forgot password?</a>
          </div>

          <button type="submit" className="in-btn" onClick= {handleSignIn}>Sign In</button>

        </form>

        <div className="login-bottom">
          <div className="divider"><span>or</span></div>

          <a href="#" className="google-btn">
            <img src={googleLogo} alt="" aria-hidden="true" />
            Sign In with Google
          </a>

          <p>Don't have an account? <a href="/register" className="register">Register</a></p>
        </div>
      </section>
      </div>
    </main>
  )
}

export default Login