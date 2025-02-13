document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueBtn');
    const clockElement = document.getElementById('clock');
    const countdownNumbers = document.querySelector('.countdown-numbers');

    function getNextValentine() {
        const now = new Date();
        const currentYear = now.getFullYear();
        
        // Create Valentine's date for current year (February is month 1 in JS)
        const valentineThisYear = new Date(currentYear, 1, 14);
        
        // If we've already passed this year's Valentine's, use next year
        return now > valentineThisYear 
            ? new Date(currentYear + 1, 1, 14)
            : valentineThisYear;
    }

    function updateCountdown() {
        const nextValentine = getNextValentine();
        const now = new Date();
        const timeDiff = nextValentine - now;

        if (timeDiff <= 0) {
            // Handle immediate update if we cross the threshold
            setTimeout(updateCountdown, 1000);
            return;
        }

        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Update display elements
        countdownNumbers.textContent = 
            `${totalDays.toString().padStart(3, '0')}d ` +
            `${hours.toString().padStart(2, '0')}h ` +
            `${minutes.toString().padStart(2, '0')}m ` +
            `${seconds.toString().padStart(2, '0')}s`;

        continueBtn.textContent = `Available in ${totalDays} day${totalDays !== 1 ? 's' : ''}`;

        // Update availability status
        if (totalDays <= 0) {
            clockElement.innerHTML = "❤️ Happy Valentine's Day! ❤️<br>" + 
                                    "<span class='countdown-numbers'>Available Now!</span>";
            continueBtn.textContent = 'Continue to Celebration';
            continueBtn.disabled = false;
            continueBtn.classList.add('available');
            continueBtn.onclick = () => window.location.href = 'gender-selection.html';
        } else {
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
