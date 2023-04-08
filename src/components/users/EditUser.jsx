import React from "react";
import TextField from "../textfield/TextField";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editUser } from "../../store/usersSlice";

function EditUser() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const { id } = useParams();
  const existingUser = users.filter((user) => user.id === id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  });

  const navigate = useNavigate();
  const handleEditUser = () => {
    setValues({name: '', email: ''})
    dispatch(editUser({
        id: id,
        name: values.name,
        email: values.email
    }))
    // navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Jhondoe@gmail.com" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
      <Link to={"/"}>
        <Button bgColor={"bg-slate-500 hover:bg-slate-700"}>Cancel</Button>
      </Link>
    </div>
  );
}

export default EditUser;
