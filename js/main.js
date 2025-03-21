// Tabs
const tabsBtn = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

// Функция для отображения товаров по категории
function displayCategory(category) {
    for (let product of tabsProducts) {
        if (product.dataset.tabValue === category) {
            product.classList.remove('none');
        } else {
            product.classList.add('none');
        }
    }
}

// Устанавливаем категорию 'weddings' по умолчанию
window.addEventListener('DOMContentLoaded', function () {
    displayCategory('weddings'); // Отображаем товары из категории 'weddings' по умолчанию
    for (let btn of tabsBtn) {
        if (btn.dataset.tab === 'weddings') {
            btn.classList.add('tab-controls__btn--active');
        }
    }
});

// Событие для переключения между категориями
for (let btn of tabsBtn) {
    btn.addEventListener('click', function () {
        // Убираем активные классы у всех кнопок
        for (let btn of tabsBtn) {
            btn.classList.remove('tab-controls__btn--active');
        };

        // Добавляем активный класс к текущей кнопке
        this.classList.add('tab-controls__btn--active');

        // Отображаем нужные товары
        displayCategory(this.dataset.tab);
    });
}

// Mobile
const mobileOpenBtn = document.querySelector('#mobileOpen');
const mobileCloseBtn = document.querySelector('#mobileClose');
const mobileNav = document.querySelector('.mobile');
const mobileFade = document.querySelector('.mobile-fade');
const body = document.body;

mobileOpenBtn.addEventListener('click', function () {
    mobileNav.classList.add('mobile--active');
    mobileFade.classList.remove('hidden');
    body.classList.add('no-scroll');
});

mobileCloseBtn.addEventListener('click', function () {
    mobileNav.classList.remove('mobile--active');
    mobileFade.classList.add('hidden');
    body.classList.remove('no-scroll');
});

mobileFade.addEventListener('click', function () {
    mobileNav.classList.remove('mobile--active');
    mobileFade.classList.add('hidden');
    body.classList.remove('no-scroll');

    mobileNav.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});


