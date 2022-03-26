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
}