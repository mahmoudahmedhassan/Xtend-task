import React, { useEffect, useState } from 'react'
import classes from "./index.module.css"
import {useSelector} from 'react-redux'
import DisplayTable from '../../components/tables/DisplayTable';
function DisplayData({setUpdata}) {
  const {data} = useSelector((state) => state?.displayData);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Update local storage whenever records change
    localStorage.setItem('expenseRecords', JSON.stringify(data));

    // Calculate total income and expenses
    const income = data.reduce((total, data) => (data.income > 0 ? total + data.income : total), 0);
    const expenses = data.reduce((total, data) => (data.expenses > 0 ? total + data.expenses : total), 0);
 
    setTotalIncome(income);
    setTotalExpenses(expenses);
   }, [data]);
   return (
    <div>
      <DisplayTable data={data} setUpdata={setUpdata}setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} rowKey="id"/>
   
     {data.length > 0 && 
          <div className={classes.summary}>
          <h2>Summary</h2>
          <p><span>Total Income:</span>{totalIncome}</p>
          <p><span> Total Expenses:</span> {totalExpenses}</p>
          <p> <span>Balance:</span>  {totalIncome - totalExpenses}</p>
        </div>
     }

    </div>
  )
}

export default DisplayData
