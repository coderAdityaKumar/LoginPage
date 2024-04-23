import { useState } from "react";

function App() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  console.log(window.location.origin);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${window.location.origin}/demo`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
