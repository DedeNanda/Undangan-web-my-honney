/** dibawah ini untuk typed ke 1*/
document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#text_typed1", {
    strings: ["Melanni Effendi", "M. Dede Nanda Pratama"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
});

/** dibawah ini untuk typed ke 2*/
document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#text_typed2", {
    strings: ["M. Dede Nanda Pratama", "Melanni Effendi"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });
});

// script play audio
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const icon = document.getElementById("icon");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.setAttribute("name", "pause-circle"); // Ganti ke ikon Pause
  } else {
    audio.pause();
    icon.setAttribute("name", "play-circle"); // Ganti ke ikon Play
  }
});

//untuk mengatur animasi bergantian untuk saat scroll akan bergantian animasi
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Hanya animasi sekali saat masuk viewport
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});

//untuk buka undangan

// Cek apakah undangan sudah dibuka sebelumnya
function disableScroll() {
  document.body.classList.add("overflow-hidden"); // Tailwind untuk nonaktifkan scroll
  document.addEventListener("touchmove", preventTouch, { passive: false });
}

function enableScroll() {
  document.body.classList.remove("overflow-hidden"); // Aktifkan scroll lagi
  document.removeEventListener("touchmove", preventTouch);
}

function preventTouch(event) {
  event.preventDefault();
}

disableScroll(); // Mencegah scroll sebelum tombol ditekan

if (localStorage.getItem("undanganDibuka")) {
  tampilkanUndangan();
}

function bukaUndangan() {
  //Dengan ini, halaman awal muncul lagi setiap kali browser ditutup dan dibuka kembali.
  //sessionStorage.setItem("undanganDibuka", "true");

  localStorage.setItem("undanganDibuka", "true");
  tampilkanUndangan();
}

function tampilkanUndangan() {
  document.getElementById("halamanAwal").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
  enableScroll(); // Aktifkan scroll setelah undangan dibuka
}
