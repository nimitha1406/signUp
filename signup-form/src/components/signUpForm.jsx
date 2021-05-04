import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignUpForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timezone, setTimezone] = useState("");
  const classes = useStyles();

  const handleSubmit = () => {
    fetch("https://134.209.148.76:2000/api/v3/sign-up/talent", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        password: password,
        timezone: timezone,
        captcha: true,
      }),
    });
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          onInput={(e) => setFirstname(e.target.value)}
          label="First Name"
        />
        <TextField
          id="standard-basic"
          onInput={(e) => setLastname(e.target.value)}
          label="Last Name"
        />
        <TextField
          id="standard-basic"
          onInput={(e) => setUsername(e.target.value)}
          label="User Name"
        />
        <TextField
          id="standard-basic"
          onInput={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <TextField
          id="standard-basic"
          onInput={(e) => setPassword(e.target.value)}
          label="Password"
        />
        <TextField
          id="standard-basic"
          onInput={(e) => setTimezone(e.target.value)}
          label="Timezone"
        />
        <Button onClick={() => handleSubmit()} className={classes.button}>
          Signup
        </Button>
      </form>
    </div>
  );
}
