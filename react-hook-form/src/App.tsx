import * as React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

type TFormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  developer: string;
};

export default function App() {
  const { register } = useForm<TFormValues>();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" />

      <label htmlFor="lastName">Last Name:</label>
      <input />

      <label htmlFor="age">Age</label>
      <input
        {...register("age", { valueAsNumber: true })}
        type="number"
        id="age"
      />

      <label htmlFor="gender"></label>
      <select id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input value="yes" type="checkbox" />

      <input type="submit" />
    </form>
  );
}
