import style from "@/components/Layout/Footer/components/inputEmail/inputEmail.module.scss";
import React from "react";

function InputEmail() {
  function OnSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div className={style.inputEmail}>
      <form action="#" onSubmit={(e) => OnSubmit(e)}>
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
