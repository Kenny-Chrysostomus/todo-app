import React, { useState } from 'react';
import axios from 'axios';

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post("http://localhost:3001/signup",
      {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      },
      { withCredentials: true } //cookieを含める
    ).then(response => {
      console.log("registration res", response);
    }).catch(err => {
      console.log("registration error", err);
    });
}

  return (
    <div>
      <p>新規登録</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="確認用パスワード"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />

        <button type="submit">登録</button>
      </form>
    </div>
  );
};