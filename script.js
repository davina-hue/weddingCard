// 1. Kontrol Musik Latar
const audio = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicIcon.className = 'fas fa-play';
    } else {
        audio.play();
        musicIcon.className = 'fas fa-pause';
    }
    isPlaying = !isPlaying;
}

document.body.addEventListener('click', function() {
    if (!isPlaying) {
        toggleMusic();
    }
}, { once: true });

// 2. Hitung Mundur (Ubah tanggal di bawah ke tanggal acara Anda)
const targetDate = new Date("2026-12-27T08:00:00").getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
    } else {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
}

// Jalankan fungsi langsung dan ulang setiap 1 detik
updateCountdown();
setInterval(updateCountdown, 1000);

// 3. Form RSVP
document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const status = document.getElementById('attendanceInput').value;
    const msg = document.getElementById('msgInput').value;

    const container = document.getElementById('commentsContainer');
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `<h5>${name} <span class="badge-hadir">✔ ${status}</span></h5><p>${msg}</p>`;
    
    container.prepend(newComment);
    this.reset();
});
// 4. Toggle Dropdown Menu
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

// Tutup menu otomatis jika user mengklik di luar area menu
window.addEventListener('click', function(e) {
    const btn = document.getElementById('menuDotsBtn');
    const menu = document.getElementById('dropdownMenu');
    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
    }
});

// 5. Toggle Desktop Mode
function toggleDesktopMode() {
    document.body.classList.toggle('desktop-mode');
    const isDesktop = document.body.classList.contains('desktop-mode');
    
    const desktopText = document.getElementById('desktopText');
    const desktopIcon = document.getElementById('desktopIcon');
    
    if (isDesktop) {
        desktopText.innerText = "Mode Mobile";
        desktopIcon.className = "fas fa-mobile-alt";
    } else {
        desktopText.innerText = "Mode Desktop";
        desktopIcon.className = "fas fa-desktop";
    }
    
    // Tutup menu setelah dipilih
    toggleMenu();
}