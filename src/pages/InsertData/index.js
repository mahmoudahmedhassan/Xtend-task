import AddRecord from './components/add record/AddRecord';

const ExpenseTracker = ({updata}) => {
 
  return (
    <div>
      <h1>Expense Tracker</h1>
      {/* Input Form */}
      <AddRecord updata={updata}/>  

   
     </div>
  );
};

export default ExpenseTracker;
