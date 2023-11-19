//  import { ErrorMessage } from "formik"
import classes from "./style.module.css"
 

const InputFelid = (props) => {
  return (
    <div className={classes.container_input}>
        <label className={classes.label} htmlFor={props.name}>{props.label}</label>
        <input type={props.type} min="0" name={props.name} value={props.value} onChange={props.onChange} required/>
    </div>

  )
}

export default InputFelid