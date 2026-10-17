// Ubah nama dan PIN sesuai kebutuhan.
const CONFIG = {
  personName: "SASAちゃん❤️",
  pin: "161205"
};

const screens = [...document.querySelectorAll(".screen")];
const pinDots = [...document.querySelectorAll("#pinDots span")];
let enteredPin = "";

document.querySelector("#personName").textContent = CONFIG.personName;
document.querySelectorAll(".nameInline").forEach(el => el.textContent = CONFIG.personName);

function goTo(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  if (id === "pin") resetPin();
}
document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => goTo(button.dataset.go));
});

function updateDots() {
  pinDots.forEach((dot, index) => dot.classList.toggle("filled", index < enteredPin.length));
}
function resetPin() {
  enteredPin = "";
  updateDots();
}
function showModal(title, message, icon = "♡") {
  document.querySelector("#modalTitle").textContent = title;
  document.querySelector("#modalText").textContent = message;
  document.querySelector("#modalIcon").textContent = icon;
  document.querySelector("#notice").showModal();
}
document.querySelector("#keypad").addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.digit !== undefined && enteredPin.length < 6) {
    enteredPin += button.dataset.digit;
    updateDots();
  } else if (button.dataset.action === "clear") {
    enteredPin = enteredPin.slice(0, -1);
    updateDots();
  } else if (button.dataset.action === "submit") {
    if (enteredPin === CONFIG.pin) {
      goTo("letters");
    } else {
      showModal("PIN Salah!", "Coba lagi, atau tanyakan PIN yang benar kepada pembuat website.", "×");
      resetPin();
    }
  }
});
document.querySelector("#modalClose").addEventListener("click", () => {
  document.querySelector("#notice").close();
});

document.querySelector("#noButton").addEventListener("click", () => {
  showModal("Terima kasih sudah jujur 💗", "Tidak apa-apa. Jawabanmu akan tetap dihargai. Terima kasih sudah meluangkan waktu membaca pesan ini.", "♡");
});

document.querySelector("#planForm").addEventListener("submit", event => {
  event.preventDefault();
  const plan = document.querySelector("#plan").value.trim();
  if (!plan) return;
  showModal("Berhasil!", `Rencanamu: “${plan}”. Ingat, ini hanya tersimpan sementara di halaman ini.`, "✓");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const dialog = document.querySelector("#notice");
    if (dialog.open) dialog.close();
  }
});
