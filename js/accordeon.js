const accordeon = document.querySelector('.accordeon');
const accordeonItems = accordeon.querySelectorAll('.accordeon__item');

accordeonItems.forEach((accordeonItem) => {
    const accordeonTitle = accordeonItem.querySelector('.accordeon__button');
    const accordeonDish = accordeonItem.querySelector('.accordeon__dish');

    accordeonTitle.addEventListener('click', function() {
        // Закрываем все элементы
        accordeonItems.forEach((item) => {
            if (item !== accordeonItem) {
                const otherText = item.querySelector('.accordeon__list');
                item.classList.remove('accondeon__item--active');
                otherText.classList.remove('accordeon__list--visible');
                otherText.style.maxHeight = null;

                // Убираем класс активности для .accordeon__dish других элементов
                const otherDish = item.querySelector('.accordeon__dish');
                otherDish.classList.remove('accordeon__dish--active');
            }
        });

        // Открываем/закрываем текущий элемент
        const currentText = accordeonItem.querySelector('.accordeon__list');
        accordeonItem.classList.toggle('accondeon__item--active');
        currentText.classList.toggle('accordeon__list--visible');

        if (currentText.classList.contains('accordeon__list--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
            
            // Добавляем класс активности для .accordeon__dish
            accordeonDish.classList.add('accordeon__dish--active');
        } else {
            currentText.style.maxHeight = null;
            
            // Убираем класс активности для .accordeon__dish
            accordeonDish.classList.remove('accordeon__dish--active');
        }
    });
});


document.querySelectorAll('a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие по клику
        // Дополнительный код, который нужно выполнить после предотвращения действия
    });
});