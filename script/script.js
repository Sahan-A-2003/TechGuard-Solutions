const showSideBar = document.querySelector('.menu-button-js');
const closeSideBar = document.querySelector('.close-button-js');
const sideBar = document.getElementById('sidbar-js');


showSideBar.addEventListener("click", () => {
  sideBar.classList.add('show');
});

closeSideBar.addEventListener('click',() => {
  sideBar.classList.remove('show');

  // setTimeout(() => {
  //   sideBar.style.visibility = 'hidden'
  // }, 500);

});

