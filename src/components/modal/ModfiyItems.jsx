import React, { useEffect, useState } from 'react';
import { Button, Modal, notification } from 'antd';
import InputFelid from '../input feild/InputFelid';
import { useDispatch, useSelector } from 'react-redux';
import { updataItem } from '../../store/displayData'
const ModfiyItems = ({ isModalOpen, setIsModalOpen, updataItemsId }) => {
  // Get the data from the Redux store
  const { data } = useSelector((state) => state?.displayData);
  
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
    // State variables for form inputs
  const [income,setIncome]=useState('');
  const [expenses,setExpenses]=useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle cancel button click
  const handleCancel = () => {
    setIncome('');
    setExpenses('');
    setCategory('');
    setDate('');
    setDescription('');
    setIsModalOpen(false);
  };
  // Function to handle ok button click
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // Effect hook to update form inputs when updataItemsId changes
  useEffect(() => {
    updataItemsId && data.map(item => (
      item.id === updataItemsId && (
        setExpenses(item.expenses),
        setIncome(item.income),
        setCategory(item.category),
        setDate(item.date),
        setDescription(item.description)
      )
    ))
  }, [data, updataItemsId])
  // Function to update the record
  const updateRecord = () => {
    // Basic validation
    if (isNaN(income) || income <= 0 || isNaN(expenses) || expenses <= 0 || !date.trim() || !category.trim()) {
      alert('Please enter valid input.');
       return;
    }

    // Create the updated item object
    const updatedItemRecord = {
      income:parseFloat(income),
      expenses:parseFloat(expenses),
      category,
      date,
      description,
      id: updataItemsId
    };

    // Dispatch the update item action
    dispatch(updataItem({ id: updataItemsId, updatedItemRecord }));
    // Show notification
    notification.success({
    message: 'Record Updated',
    description: 'The record has been successfully updated.',
    });
    // Close the modal
    setIsModalOpen(false);


  }

  // Render the modified items form modal
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
      <form>
        <InputFelid name='income' label="Income" type="number" value={income} onChange={(e) => setIncome(e.target.value)}/>
        <InputFelid name='expenses' label="Expenses" type="number" value={expenses} onChange={(e) => setExpenses(e.target.value)}/>        <InputFelid name='category' label="Category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        <InputFelid name='date' label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <InputFelid name='description' label="Description" type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button type="primary" onClick={updateRecord}>Update Record</Button>
      </form>
    </Modal>
  );
};
export default ModfiyItems;