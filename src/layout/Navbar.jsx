import classes from "./style.module.css";
import { useState } from "react";
import {useDispatch } from 'react-redux';
import {navigate} from "../store/navigateSlice";
const Navbar = () => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(1);

  const activeTap = (index) => {
    setActiveIndex(index);
  };

 

  return (
    <div className={classes.Navbar}>
      <ul className={classes.Navbar_list}>
  
        <li
          onClick={() => {activeTap(1);dispatch(navigate("ExpenseTracker")) }}
          className={activeIndex === 1 ? classes.active : ""}
        >
          Add Record
        </li>
       
        <li
          onClick={() => {activeTap(3); dispatch(navigate("DisplayData")) }}
          className={activeIndex === 3 ? classes.reverse_active : ""}
        >
          Previews
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
