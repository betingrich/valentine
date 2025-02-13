// Set the target time (12 AM on February 14, 2025, local time)
const targetDate = new Date("February 14, 2025 00:00:00").getTime();

function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("celebration").classList.remove("hidden");
        return;
    }

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000);
}

// Start countdown
updateCountdown();
