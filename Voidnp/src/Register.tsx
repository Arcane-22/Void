import TeacherCard from "./components/TeacherCard"
import whiteLogo from './assets/Logos_white.svg'
import googleLogo from './assets/google.svg'
import { Link } from "react-router-dom"

function Register() {
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

        <button aria-label="Close" className="register-close">✕</button>

        <h3 className="register-header">Create Your Account to Get Verified</h3>

        <form method="post" action="/login" className="login-form">
          <div className="login-field">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your Name"
            required
          />
        <div className="mail-number">
          <div className="login-field">
            <label>Email</label>
            <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            required
          />
          </div>
          <div className="login-field">
            <label>Phone Number</label>
            <input
            id="email"
            type="tel"
            placeholder="Enter your Number"
            required
          />
          </div>
        </div>
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
          <div className="login-field">
          <label htmlFor="password">Confirm Password</label>
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

          <button type="submit" className="in-btn">Register</button>

        </form>

        <div className="login-bottom">
          <div className="divider"><span>or</span></div>

          <a href="/auth/google" className="google-btn">
            <img src={googleLogo} alt="" aria-hidden="true" />
            Continue with Google
          </a>

          <p>Already have an account? <Link to="/login" className="register">Login</Link></p>
        </div>
      </section>
      </div>
    </main>
  )
}

export default Register