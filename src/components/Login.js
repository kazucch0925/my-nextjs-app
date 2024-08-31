import React from 'react';
import TopBar from './TopBar';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <TopBar isLoggedIn={false} />  {/* ログイン画面ではログアウトボタンを表示しない */}
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
