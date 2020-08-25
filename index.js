window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".burger").addEventListener("click", function () {
    let option = document.querySelector(".navbar-menu")
    option.classList.toggle("is-active") //js顯示選單的語法.classList.toggle("class名稱")
  })
});