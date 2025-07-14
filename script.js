
let totalBalance = 0;
const balanceDisplay = document.getElementById('total-balance');
const historyList = document.getElementById('history-list');

function addTransaction() {
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (!description || isNaN(amount)) return;

  const li = document.createElement('li');
  li.textContent = `${type.toUpperCase()}: ${description} - $${amount}`;
  historyList.appendChild(li);

  totalBalance += (type === 'income' ? amount : -amount);
  balanceDisplay.textContent = totalBalance.toFixed(2);

  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}
