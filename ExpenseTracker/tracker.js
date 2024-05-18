
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');







let expenses = [];


function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const row = `
            <tr>
                <td>$${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button onclick="editExpense(${index})">Edit</button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </td>
            </tr>
        `;
        expenseList.innerHTML += row;




    });
}


function addExpense(amount, category, date) {
    expenses.push({ amount, category, date });
    
    renderExpenses();
}


function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}


function editExpense(index) {
    const expense = expenses[index];
    const newAmount = prompt('Enter new amount:', expense.amount);
    const newCategory = prompt('Enter new category:', expense.category);
    const newDate = prompt('Enter new date:', expense.date);
    if (newAmount !== null && newCategory !== null && newDate !== null) {
        expenses[index] = {
            amount: parseFloat(newAmount),
            category: newCategory,
            date: newDate
        };
        renderExpenses();
    }
}


expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    addExpense(amount, category, date);
    expenseForm.reset();
});


renderExpenses();
