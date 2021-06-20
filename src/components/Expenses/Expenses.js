import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props) {
    const {items} = props;
    return (
        <Card className="expenses">
            {items.map((expense) =>  (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} 
                    />
            ))}
        </Card>
    )
}

export default Expenses;