//  import { icons } from "../constants"
import classes from "./style.module.css"
import { PiUsersThreeBold } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
const icons = [
  { icon: <GrHomeRounded />, text: 'Home' },
  { icon: <PiUsersThreeBold />, text: 'Shopping' },
   
 ];
 
 const SideBar = (props) => {
  return (
    <div className={props.sideBarIsActive? classes.SideBar_active : classes.SideBar}>
      <div onClick={() => props.setSideBarIsActive(!props.sideBarIsActive)} className={props.sideBarIsActive ? classes.profile_active : classes.profile}><GiHamburgerMenu/></div>
 
      <div className={classes.SideBar_list_container} >
        <ul className={classes.SideBar_list}>
          {icons.map((icon) => (
            <li className={props.sideBarIsActive? classes.SideBar_list_li_active : classes.SideBar_list_li} key={icon.text}><span className={props.sideBarIsActive? classes.icon_active : classes.icon}>{icon.icon}</span> <span className={props.sideBarIsActive? classes.text_active : classes.text}>{icon.text}</span></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar