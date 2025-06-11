// Данные проектов
const projects = [
    {
        title: "DistanceTracker",
        location: "Telegram-бот",
        image: "images/logos/projects/DistanceTracker-logo.jpg",
        description: "Это мой первый завершённый проект — бот, который позволяет делиться геолокацией и узнавать расстояние между двумя пользователями. Вы отправляете свою точку, делитесь уникальной ссылкой с другом, и когда он тоже укажет свою геолокацию, бот автоматически рассчитает расстояние между вами. Можно выбрать единицу измерения — километры или мили.",
        link: "https://t.me/DistanceTrackerBot"
    },
    {
        title: "CreateModules[BETA]",
        location: "Telegram-бот",
        image: "images/logos/projects/CreateModules-logo.jpg",
        description: "Это проект для генерации модулей под разных юзерботов — вы выбираете платформу, вводите описание модуля, и нейросеть автоматически создаёт готовый код, отправляя его в виде файла или zip-архива.",
        link: "https://t.me/CreateModulesBot"
    }
];

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Назначение обработчиков для карточек проектов
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project-id'));
            openModal(projectId);
        });
    });

    // Назначение обработчика для кнопки закрытия
    document.getElementById('modalClose').addEventListener('click', closeModal);
});

// Открытие модального окна
function openModal(projectIndex) {
    const project = projects[projectIndex];
    document.getElementById('modalAvatar').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalLocation').textContent = project.location;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalButton').href = project.link;
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Закрытие по клику вне окна
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('modalOverlay').classList.contains('active')) {
        closeModal();
    }
});