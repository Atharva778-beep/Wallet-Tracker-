
let balance = 0;

function addExpense() {
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const currency = document.getElementById('currency').value;
    const dateTime = document.getElementById('dateTime').value;

    if (!amount || !dateTime) {
        alert("Please enter amount and date/time.");
        return;
    }

    balance -= amount;
    document.getElementById('balance').innerText = currency + balance.toFixed(2);

    const listItem = document.createElement('li');
    listItem.innerText = `${currency}${amount.toFixed(2)} - ${category} on ${new Date(dateTime).toLocaleString()}`;
    document.getElementById('expense-list').appendChild(listItem);

    document.getElementById('amount').value = '';
    document.getElementById('dateTime').value = '';
}
