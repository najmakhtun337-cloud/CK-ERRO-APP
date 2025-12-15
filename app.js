async function checkBan() {
  const num = document.getElementById("num").value;
  const resultBox = document.getElementById("result");

  if (!num) {
    resultBox.innerText = "❌ Please enter a number";
    return;
  }

  resultBox.innerText = "⏳ Checking... Please wait...";

  try {
    const res = await fetch(`https://ck-error-api.onrender.com/checkban?number=${num}`);
    const data = await res.json();

    resultBox.innerText = JSON.stringify(data, null, 2);

  } catch (err) {
    resultBox.innerText = "❌ API Error!";
  }
}