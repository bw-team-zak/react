import React, { useState } from "react";
import { locations } from "./assets/locations";
import { conditions1, conditions2, conditions3 } from "./assets/conditions";
import { connect } from "react-redux";
import { postNewUser } from "../actions/registerAction";

const initForm = {
  username: "",
  password: "",
  location: "",
  med_condition: null,
  age: "",
  experienced: null,
};

const Registration = (props) => {
  const [form, setForm] = useState(initForm);
  const { postNewUser } = props;

  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    postNewUser(form);
  };
  return (
    <div onSubmit={submitHandle}>
      <form style={{ display: "flex", flexWrap: "wrap" }}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={changeHandle}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandle}
          />
        </label>
        <label>
          Location (US Only)
          <select onChange={changeHandle} name="location">
            {locations.map((location, index) => {
              return index === 0 ? (
                <option disabled selected value>
                  {location}
                </option>
              ) : (
                <option value={form.location}>{location}</option>
              );
            })}
          </select>
        </label>
        <label htmlFor="age">
          <span style={{ color: "red" }}>*</span>Age:
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={changeHandle}
          />
        </label>
        <label>
          Have you experienced the effects of cannabis before?
          <select onChange={changeHandle} name="experienced">
            <option disabled selected value>
              Select
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default connect(null, { postNewUser })(Registration);
