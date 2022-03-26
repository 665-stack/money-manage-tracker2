function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
function expensesCalc() {
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothsInput = getInputValue('cloths-input');
    const expensesSum = foodInput + rentInput + clothsInput;
    return expensesSum;
} document.getElementById('calc-btn').addEventListener('click', function () {
    const income = getInputValue('income-input');
    const expenses = expensesCalc();
    //update total expenses
    const totalExpenses = document.getElementById('total-expenses');
    //update balance
    const UpdateBalanceTotal = income - expenses;
    const totalBalance = document.getElementById('total-balance');
    if (income <= 0) {
        alert('Please enter valid number')
    }
    else if (expenses <= 0) {
        alert('Please enter a valid number')
    }
    else if (income < expenses) {
        alert("You can't spend more than your Income")
    }
    else {
        totalExpenses.innerText = expenses;
        totalBalance.innerText = UpdateBalanceTotal;
    }
})