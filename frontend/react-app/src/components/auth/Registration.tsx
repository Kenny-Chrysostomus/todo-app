import React, { useState } from 'react';

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    console.log("イベント発火");
    e.preventDefault();
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