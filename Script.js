const password = "KnNkmelife";
let messages = JSON.parse(localStorage.getItem("knMessages") || "[]");

// Show current date
document.getElementById("today").innerText = new Date().toLocaleDateString("ar-SA");

// Count days from 2006-01-10 (أول موعد مهم بالنسبة لكم)
const startDate = new Date(2006, 0, 10);
const diffDays = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("daysCount").innerText = diffDays;

function showMessages() {
  const holder = document.getElementById("messages");
  holder.innerHTML = "";
  messages.forEach((msg) => {
    const div = document.createElement("div");
    div.innerText = msg;
    holder.appendChild(div);
  });
}

document.getElementById("loginBtn").addEventListener("click", () => {
  const input = document.getElementById("passInput").value;
  if (input === password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
    showMessages();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
});

document.getElementById("addMsgBtn").addEventListener("click", () => {
  const text = document.getElementById("newMsg").value.trim();
  if (text) {
    messages.push(text);
    localStorage.setItem("knMessages", JSON.stringify(messages));
    document.getElementById("newMsg").value = "";
    showMessages();
  }
});
