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
                case 'naranja':
                    window.location.href = '../html/infoNaranja.html';
                break;
                case 'oregano':
                    window.location.href = '../html/infoOregano.html';
                break;
                case 'limon':
                    window.location.href = '../html/infoLimon.html';
                break;
                case 'Tulipan':
                    window.location.href = '../html/infoTulipan.html';
                break;
                case 'Maguey':
                    window.location.href = '../html/infoMagueyMorado.html';
                break;
                case 'colaborrego':
                    window.location.href = '../html/infoColaBorrego.html';
                break;   
                case 'platano':
                    window.location.href = '../html/infoPlatano.html';
                break;
                case 'ajenjo':
                    window.location.href = '../html/infoAjenjo.html';
                break; 
                case 'cafe':
                    window.location.href = '../html/infoCafe.html';
                break;  
                case 'Moringa':
                    window.location.href = '../html/infoMoringa.html';
                break;
                case 'Paterna':
                    window.location.href = '../html/infoPaterna.html';
                break;  
                case 'Tomate':
                    window.location.href = '../html/infoTomateArbol.html';
                break; 
                case 'Yaca':
                    window.location.href = '../html/infoYaca.html';
                break; 
                case 'lavanda':
                    window.location.href = '../html/infoLavanda.html';
                break;
                case 'jengibre':
                    window.location.href = '../html/infoJengibre.html';
                break;  
                case 'capulin':
                    window.location.href = '../html/infoCapulin.html';
                break;
                case 'caulote':
                    window.location.href = '../html/infoCaulote.html';
                break; 
                case 'chayote':
                    window.location.href = '../html/infoChayote.html';
                break;                            
                case 'Guayaba':
                    window.location.href = '../html/infoGuayaba.html';
                break;
                case 'coco':
                    window.location.href = '../html/infoCoco.html';
                break;
                case 'Epazote':
                    window.location.href = '../html/infoEpazote.html';
                break;                                         
                // Agrega más casos para otras plantas
                default:
                    console.log(`No se encontró la vista para ${plantId}`);
            }
        });
    });
});
