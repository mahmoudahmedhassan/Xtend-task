import { Button } from "antd"
import InputFelid from "../../../../components/input feild/InputFelid"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {data} from "../../../../store/displayData"

function AddRecord() {
    const dispatch = useDispatch();
    const [income,setIncome]=useState('');
    const [expenses,setExpenses]=useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const addRecord = () => {
        // Basic validation
        if (isNaN(income) || income <= 0 || isNaN(expenses) || expenses <= 0 || !date.trim() || !category.trim()) {
          alert('Please enter valid input.');
           return;
        }
        const newRecord = {
          // amount: parseFloat(amount),
          income:parseFloat(income),
          expenses:parseFloat(expenses),
          category,
          date,
          description,
          id:new Date().getTime()
        };
        dispatch(data( newRecord))
        setExpenses('');
        setIncome('');
        setCategory('');
        setDate('');
        setDescription('');

      };

  return (
    <form>
      <InputFelid name='income' label="Income" type="number" value={income} onChange={(e) => setIncome(e.target.value)}/>
      <InputFelid name='expenses' label="Expenses" type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)}/>
      <InputFelid name='category' label="Category" type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
      <InputFelid name='date' label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      <InputFelid name='description' label="Description" type="textarea" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <Button type="primary" onClick={addRecord}> Add Record </Button>
    </form>
  )
}

export default AddRecord
