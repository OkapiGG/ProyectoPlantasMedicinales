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
                case 'ajo':
                  window.location.href = '../html/infoAjo.html';
                break;  
                case 'maiz':
                    window.location.href = '../html/infoMaiz.html';
                break;    
                case 'canela':
                  window.location.href = '../html/infoCanela.html';
                break;    
                case 'coco':
                  window.location.href = '../html/infoCoco.html';
                break;
                case 'chicoZapote':
                  window.location.href = '../html/infoChicoZapote.html';
                break;
                case 'naranja':
                    window.location.href = '../html/infoNaranja.html';
                break;
                case 'oregano':
                    window.location.href = '../html/infoOregano.html';
                break;
                case 'limon':
                    window.location.href = '../html/infoLimon.html';
                break;
                  
                // Agrega más casos para otras plantas
                default:
                    console.log(`No se encontró la vista para ${plantId}`);
            }
        });
    });
});
