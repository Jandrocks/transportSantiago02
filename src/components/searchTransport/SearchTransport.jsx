import s from "./style.module.css";
import { HiSearch } from "react-icons/hi";
import TitleStationBus from "../titleStatitionBus/TitleStationBus";
import React from "react";

const SearchTransport = ({ onSubmit, onSubmitTitle, titleStation }) => {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value) && onSubmitTitle(e.target.value);
    }
  }
  return (
    <>
      <div className={s.search_bus}>
        <h1>Busqueda de Bus</h1>
        <HiSearch size={40} className={s.icon} />
        <input
          onKeyUp={submit}
          className={s.input}
          type="text"
          placeholder={"Consulte Paradero (PA111)"}
        />
        <TitleStationBus titleStation={titleStation} />
      </div>
    </>
  );
};
export default SearchTransport;
