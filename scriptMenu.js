document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const plantCards = document.querySelectorAll('.plant-card');

    backButton.addEventListener('click', () => {
        window.history.back();
    });

    plantCards.forEach(card => {
        card.addEventListener('click', () => {
            const plantId = card.id;
            switch (plantId) {
                case 'hierba':
                    window.location.href = 'infoHierbaBuena.html';
                    break;
                case 'albahaca':
                    window.location.href = 'infoAlbahaca.html';
                    break;
                // Agrega más casos para otras plantas
                default:
                    console.log(`No se encontró la vista para ${plantId}`);
            }
        });
    });
});
