document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.img-btn');
    const cardContent = document.querySelector('.card-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Скрываем контент
            cardContent.classList.add('fade-out');

            setTimeout(() => {
                // Затемнение + переход
                const overlay = document.createElement('div');
                overlay.classList.add('fade-in');
                overlay.style.position = 'fixed';
                overlay.style.top = 0;
                overlay.style.left = 0;
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = '#121212';
                overlay.style.zIndex = 1000;
                document.body.appendChild(overlay);

                setTimeout(() => {
                    window.location.href = btn.getAttribute('data-url');
                }, 300);
            }, 300);
        });
    });
});
