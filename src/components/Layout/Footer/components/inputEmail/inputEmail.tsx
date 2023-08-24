import style from "@/components/Layout/Footer/components/inputEmail/inputEmail.module.scss";
import React from "react";

function InputEmail() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className={style.inputEmail}>
      <div className={style.bac_div}></div>
      <form action="#" onSubmit={(e) => onSubmit(e)}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email Address"
        />
        <button type="submit">subscribe</button>
      </form>
    </div>
  );
}

export default InputEmail;
