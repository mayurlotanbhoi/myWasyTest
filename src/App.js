import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [email, setemail] = useState("");
  const [names, setnames] = useState("");
  const [numbers, setnumbers] = useState("");

  const postApi = (postdata) => {
    fetch(" https://test-api-v3.myways.ai/user", {
      method: "post",
      body: postdata,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        alert("use Is Created");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const makeGate = (e) => {
    e.preventDefault();
    fetch("https://test-api-v3.myways.ai/user?email=" + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        const user = {
          name: names,
          email: email,
          phone: numbers,
        };
        postApi(user);
      })
      .catch((error) => {
        alert("user Not Found");
        console.log("error");
      });
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          makeGate(e);
        }}
      >
        name
        <input
          type="text"
          value={names}
          onChange={(e) => setnames(e.target.value)}
        />
        email
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        Phone Number
        <input
          type="number"
          value={numbers}
          onChange={(e) => setnumbers(e.target.value)}
        />
        <input type="submit" value="submit from" />
      </form>
    </div>
  );
}

export default App;

