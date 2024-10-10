const form = document.getElementById("myForm");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const alamat = document.getElementById("alamat").value;

  if (nama === "" || email === "" || alamat === "") {
    alert("Mohon isi semua field!");
    errorMessage.textContent = "Mohon isi semua field!";
  } else {
    alert("Data terinput dengan benar!");
  }
});
