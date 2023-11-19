import AddRecord from './components/add record/AddRecord';

const ExpenseTracker = ({updata}) => {
  // const [records, setRecords] = useState([]);
  // const [totalIncome, setTotalIncome] = useState(0);
  // const [totalExpenses, setTotalExpenses] = useState(0);

  // useEffect(() => {
  //   // Load records from local storage on component mount
  //   const storedRecords = JSON.parse(localStorage.getItem('expenseRecords')) || [];
  //   setRecords(storedRecords);
  // }, []);

  // useEffect(() => {
  //   // Update local storage whenever records change
  //   localStorage.setItem('expenseRecords', JSON.stringify(records));

  //   // Calculate total income and expenses
  //   const income = records.reduce((total, record) => (record.amount > 0 ? total + record.amount : total), 0);
  //   const expenses = records.reduce((total, record) => (record.amount < 0 ? total + record.amount : total), 0);

  //   setTotalIncome(income);
  //   setTotalExpenses(expenses);
  // }, [records]);
 
   
  
   
  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* Input Form */}
      <AddRecord updata={updata}/>  

      {/* Summary View */}
      {/* <div>
        <h2>Summary</h2>
        <p>Total Income: {totalIncome}</p>
        <p>Total Expenses: {totalExpenses}</p>
        <p>Balance: {totalIncome + totalExpenses}</p>
      </div> */}
     </div>
  );
};

export default ExpenseTracker;
