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
                    window.location.href = '../html/infoHierbaBuena.html';
                    break;
                case 'albahaca':
                    window.location.href = '../html/infoAlbahaca.html';
                    break;
                case 'manzanilla':
                    window.location.href = '../html/infoManzanilla.html';
                break;
                case 'romero':
                    window.location.href = '../html/infoRomero.html';
                break;
                case 'sabila':
                    window.location.href = '../html/infoSabila.html';
                break;       
                // Agrega más casos para otras plantas
                default:
                    console.log(`No se encontró la vista para ${plantId}`);
            }
        });
    });
});
