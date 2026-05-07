import React from 'react'

function Login() {
  return (
    <main>
        <section>
            <header>
                <img src="" alt="logo" />
            </header>
            <div>
                <img src="" alt="icon" />
                <p>Stauts<strong>Verified</strong></p>
            </div>
            <figure>
            <img src="/images/heroimage.jpg" alt="Gaurav Kumar Shiwakoti" />
            <figcaption>
                <strong>Gaurav Kumar Shiwakoti <img src="" alt="icon" /></strong>
                <span>Void Teacher</span>
            </figcaption>
            </figure>

        <h1>One Identity.<br />Verified Everywhere.</h1>
        </section>
      <section aria-label="Login form">

        <button aria-label="Close">✕</button>

        <h2>Welcome Back</h2>

        <form method="post" action="/login">

          <label>Email</label>
          <input
            id="email"
            placeholder="Enter your Email"
            required
          />

          <label>Password</label>
          <input
            id="password"
            placeholder="Enter your password"
            required
          />

          <div>
            <label>
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

        </form>

        <hr />

        <a href="/auth/google">
          <img src="/icons/google.svg" alt="" aria-hidden="true" />
          Login with Google
        </a>

        <p>Don't have an account? <a href="/register">Register</a></p>

      </section>
    </main>
  )
}

export default Login