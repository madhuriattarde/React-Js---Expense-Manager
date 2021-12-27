import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
	const [filteredYear, setfilterdYear] = useState('2021')
	const filterChangeHandler = selectedYear => {
		setfilterdYear(selectedYear);
	}
	
  return (
		<div className="expenses" >
			<ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
			<ExpenseItem title={props.list[0].title}  amount={props.list[0].amount}  date={props.list[0].date} />
			<ExpenseItem title={props.list[1].title}  amount={props.list[1].amount}  date={props.list[1].date} />
			<ExpenseItem title={props.list[2].title}  amount={props.list[2].amount}  date={props.list[2].date} />
	    </div>
		
	);
}

export default Expenses;
