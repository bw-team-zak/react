import React, { useState } from "react";
import { locations } from "./assets/locations";
import { conditions1, conditions2, conditions3 } from "./assets/conditions";

const initForm = {
  username: "",
  password: "",
  location: "",
  med_condition: null,
  age: "",
  experienced: null,
};

export default function Registration() {
  const [form, setForm] = useState(initForm);

  const changeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
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
        <label style={{ margin: "0 auto", width: "100%" }}>
          <span style={{ color: "red" }}>*</span>Medical Condition(s)
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              {conditions1.map((condition) => (
                <label>
                  {condition}
                  <input
                    type="checkbox"
                    name="med_condition"
                    onChange={changeHandle}
                    value={condition}
                  />
                </label>
              ))}
            </div>
            <div
              style={{
                width: "39%",
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              {conditions3.map((condition) => (
                <label>
                  {condition}
                  <input
                    type="checkbox"
                    name="med_condition"
                    onChange={changeHandle}
                    value={condition}
                  />
                </label>
              ))}
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              {conditions2.map((condition) => (
                <label>
                  {condition}
                  <input
                    type="checkbox"
                    name="med_condition"
                    onChange={changeHandle}
                    value={condition}
                  />
                </label>
              ))}
            </div>
          </div>
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
}
