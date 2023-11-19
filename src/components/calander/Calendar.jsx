import { DatePicker } from 'antd';
import classes from "./style.module.css"

 
const Calendar = ({data,setData }) => {
  const onChange = (dateString) => {
    // console.log('Formatted Selected Time: ', dateString);
    setData({...data,DateOfBirth:dateString.$d});
  };
 

  const onOk = (value) => {
     setData({...data,DateOfBirth:value.$d});
  };

  return (
    <div className={classes.Calendar_container} >
      <label className={classes.label} htmlFor="calendar"> Date of Birth</label>
      <DatePicker className={classes.container_input} showTime onChange={onChange} onOk={onOk} required />
    </div>
  )
};

export default Calendar;