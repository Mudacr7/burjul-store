import { useForm } from "@mantine/form";
import { Checkbox, PasswordInput, TextInput, Button, Box } from "@mantine/core";

import React from "react";
import loginside from "../../assets/images/loginside.png";
import "./auth.css";
const Login = () => {
  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 1 ? "Enter password" : null),
    },
  });

  return (
    <section className="login-page">
      <div className="left-side">
        <div className="content">
          <h2 className="fw-bold aftersubmit">LOG IN</h2>

          <Box className="boxx">
            <form
              className="d-flex flex-column gap-4"
              onSubmit={form.onSubmit(form)}
            >
              <TextInput
                mt="sm"
                placeholder="Email"
                {...form.getInputProps("email")}
                className="shadow"
              />
              <PasswordInput
                placeholder="Password"
                {...form.getInputProps("password")}
                className="shadow"
              />

              <Button className="blueee" type="submit" mt="sm">
                LOG IN
              </Button>
              <div className="d-flex align-items-center justify-content-between">
                <Checkbox className=" aftersubmit" label="Remember me" />
                <a href="" className=" aftersubmit text-decoration-none">
                  Forget Password
                </a>
              </div>
            </form>
          </Box>
        </div>
      </div>
      <div className="bg-image">
        <div className="bg-blue"></div>
        <img src={loginside} alt="cargo image" />
      </div>
    </section>
  );
};

export default Login;
