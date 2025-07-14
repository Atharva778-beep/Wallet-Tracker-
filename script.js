let transactions = JSON.parse(localStorage.getItem("walletTracker")) || [];

function updateUI() {
  const list = document.getElementById("transaction-list");
  const balanceDisplay = document.getElementById("balance");

  list.innerHTML = "";
  let total = 0;

  transactions.forEach((item, index) => {
    total += parseFloat(item.amount);

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.category} - $${parseFloat(item.amount).toFixed(2)}
      <button onclick="deleteTransaction(${index})">❌</button>
    `;
    list.appendChild(li);
  });

  balanceDisplay.textContent = `$${total.toFixed(2)}`;
  localStorage.setItem("walletTracker", JSON.stringify(transactions));
}

function addTransaction() {
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (!amount || amount <= 0) return alert("Enter a valid amount");

  transactions.push({ amount, category });
  document.getElementById("amount").value = "";
  updateUI();
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

updateUI();
