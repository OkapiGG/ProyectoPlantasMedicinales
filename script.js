document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    const logoContainer = document.querySelector('.logo-container');
    const welcomeContainer = document.querySelector('.welcome-container');

    nextButton.addEventListener('click', () => {
        logoContainer.style.transform = 'translate(-50%, -250%)';
        welcomeContainer.style.transform = 'translate(-50%, -250%)';
        setTimeout(() => {
            window.location.href = 'menuPlantas.html'; // Cambia esto a la ruta de tu siguiente vista
        }, 25);
    });
});
