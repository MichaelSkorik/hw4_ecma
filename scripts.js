// Задание 1: Получение данных о пользователе
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);

        if (response.status !== 200) {
            throw new Error('Пользователь не найден');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return Promise.reject(`Ошибка: ${error.message}`);
    }
}

// Задание 2: Отправка данных на сервер
async function sendUserData(user) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if (response.status !== 201) {
            throw new Error('Не удалось сохранить данные пользователя');
        }

    } catch (error) {
        return Promise.reject(`Ошибка: ${error.message}`);
    }
}


// Задание 3: Изменение стиля элемента через задержку
function applyStyleWithDelay(elementId, delay) {
    setTimeout(() => {
        const element = document.querySelector(`#${elementId}`);

        if (element) {
            element.style.backgroundColor = 'yellow';
        }
    }, delay);
}