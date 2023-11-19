import DisplayData from "../pages/displayData/DisplayData";
import ExpenseTracker from "../pages/InsertData";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import classes from "./style.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
 
const AppLayout = () => {
  const [sideBarIsActive, setSideBarIsActive] = useState(false);
  const [updata, setUpdata] = useState(false);
  const navigate = useSelector(
    (state) => state?.navigate.value
  );
  return (
    <div className={classes.AppLayout_container}>
      <SideBar
        setSideBarIsActive={setSideBarIsActive}
        sideBarIsActive={sideBarIsActive}
      />
      <div
        className={
          sideBarIsActive
            ? classes.AppLayout_contentActive
            : classes.AppLayout_contentnotActive
        }
      >
        <Navbar />
        <div className={classes.AppLayout_content}>
          {navigate === "DisplayData" ?  <DisplayData setUpdata={setUpdata}/> : <ExpenseTracker updata={updata}/>}
        </div>
       </div>
    </div>
  );
};

export default AppLayout;
