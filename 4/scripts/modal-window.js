const buttonOpen = document.querySelector('.open-modal');
const buttonClose = document.querySelector('.close-modal');
const dialog = document.querySelector('.dialog');

buttonOpen.addEventListener('click', () => {
  dialog.showModal();
});
buttonClose.addEventListener('click', () => {
  dialog.close();
});
