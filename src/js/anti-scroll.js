var x = document.getElementById('menu-container');

function showBurger() {
  x.showModal();
  document.body.style.overflow = 'hidden'; // Убираем прокрутку
}

function closeBurger() {
  x.close();
  document.body.style.overflow = ''; // Восстанавливаем прокрутку
}
