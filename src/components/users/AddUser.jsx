import React from "react";
import TextField from "../textfield/TextField";
import Button from "../button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/usersSlice";
import uuid from "react-uuid";

function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuid(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "Jhondoe@gmail.com" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      <Button onClick={handleAddUser}>Submit</Button>
      <Link to={"/"}>
        <Button bgColor={"bg-slate-500 hover:bg-slate-700"}>Go back</Button>
      </Link>
    </div>
  );
}

export default AddUser;
