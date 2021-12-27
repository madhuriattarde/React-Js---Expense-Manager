import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
	const month = props.date.toLocaleString('en-US', {month:'long'});
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('New value!');
	}
	
  return (
    <div className="expense-item">
		<ExpenseDate date = {props.date} />
		<div className="expense-item__description"><h2>{title}</h2></div>
		<div className="expense-item__price">${props.amount} </div>
		<button onClick={clickHandler} > Change Title</button>
	</div>
  );
}

export default ExpenseItem;
