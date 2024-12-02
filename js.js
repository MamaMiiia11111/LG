// Добавим простую анимацию на загрузку страницы
document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-button');
    setTimeout(function () {
      ctaButton.classList.add('fade-in');
    }, 500);
  });
  
  // Добавим класс для анимации
  document.styleSheets[0].insertRule(`
    .fade-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 1s ease-in, transform 1s ease-in;
    }
  `, 0);
// Инициализация EmailJS
(function() {
    emailjs.init('YOUR_USER_ID'); // Замените YOUR_USER_ID на ваш ID, который получен в EmailJS
})();

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузка страницы)

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Отправка данных с помощью EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Если сообщение отправлено успешно
            document.getElementById('status-message').innerText = 'Сообщение отправлено!';
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Если произошла ошибка при отправке
            document.getElementById('status-message').innerText = 'Ошибка при отправке сообщения. Попробуйте снова.';
        });
});
  