import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <header className="header">
        <h1>DocuHub</h1>
      </header>
      <div className="login-box">
        <h2>ログイン</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">ユーザー名</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">ログイン</button>
        </form>
      </div>
    </div>
  );
}

export default Login;