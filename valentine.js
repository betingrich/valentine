document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueBtn');
    const clockElement = document.getElementById('clock');
    const countdownNumbers = document.querySelector('.countdown-numbers');

    function getNextValentine() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const todayMidnight = new Date(currentYear, today.getMonth(), today.getDate());
        const valentineThisYear = new Date(currentYear, 1, 14);

        return todayMidnight > valentineThisYear 
            ? new Date(currentYear + 1, 1, 14)
            : valentineThisYear;
    }

    function updateCountdown() {
        const valentineDate = getNextValentine();
        const now = new Date();
        const timeLeft = valentineDate - now;

        if (timeLeft <= 0) {
            clockElement.innerHTML = "Happy Valentine's Day!<br>" + 
                                    "<span class='countdown-numbers'>Available Now!</span>";
            continueBtn.innerHTML = 'Continue to Celebration';
            continueBtn.disabled = false;
            continueBtn.classList.add('available');
            continueBtn.onclick = () => window.location.href = 'gender-selection.html';
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownNumbers.innerHTML = `
                ${days.toString().padStart(2, '0')}d 
                ${hours.toString().padStart(2, '0')}h 
                ${minutes.toString().padStart(2, '0')}m 
                ${seconds.toString().padStart(2, '0')}s
            `;
            
            continueBtn.innerHTML = `Unlocking in ${days} day${days !== 1 ? 's' : ''}`;
            continueBtn.disabled = true;
            continueBtn.classList.remove('available');
            continueBtn.onclick = null;
        }
    }

    // Initial update
    updateCountdown();
    // Update every second
    setInterval(updateCountdown, 1000);
});
