document.addEventListener('DOMContentLoaded', function () {
    // (YYYY, M-1, D, H, M, S)
    const countdownDate = new Date(2024, 5, 6, 12, 0, 0).getTime();

    const countdownElement = document.getElementById('countdown');

    
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}-Giorni ${hours}-Ore ${minutes}-Minuti ${seconds}-Secondi`;

        
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Ci vediamo a Settembre!';
        }
    }, 1000);
});
