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
});
// save button
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = getInputValue('save-input');
    const income2 = getInputValue('income-input');
    const expenses = expensesCalc();
    const updateBlcTotal = income2 - expenses;
    // save amount
    const saveMoneyCalc = (income2 / 100) * saveInput;
    const savingAmount = document.getElementById('save-amount');
    // remainnig balance
    const remainnigMoneyCalc = updateBlcTotal - saveMoneyCalc;
    const remainnigBalance = document.getElementById('remainnig-balance');
});