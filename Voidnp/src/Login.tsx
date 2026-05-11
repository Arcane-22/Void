import TeacherCard from "./components/TeacherCard"
import whiteLogo from './assets/Logos_white.svg'

function Login() {
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

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="form-options">
            <label>
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit">Sign In</button>

        </form>

        <div className="divider"><span>or</span></div>

        <a href="/auth/google" className="google-btn">
          <img src="/icons/google.svg" alt="" aria-hidden="true" />
          Sign In with Google
        </a>

        <p>Don't have an account? <a href="/register" className="register">Register</a></p>

      </section>
      </div>
    </main>
  )
}

export default Login