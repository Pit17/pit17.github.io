document.addEventListener('DOMContentLoaded', function() {
    const gameLinks = document.querySelectorAll('.game-link');

    gameLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const game = this.getAttribute('data-game');
            loadGame(game);
        });
    });

    function loadGame(game) {
        // Qui inserisci il codice per caricare il gioco in base alla scelta
        // Ad esempio:
        switch (game) {
            case 'snake':
                window.location.href = 'snake.html'; // Esempio di reindirizzamento ad una pagina esterna con il gioco
                break;
            
            default:
                console.log('Gioco non supportato');
        }
    }
});
