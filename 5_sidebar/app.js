const SideBar = document.querySelector(".sidebar");
const CloseBtn = document.querySelector(".close-btn");
const SideBarToggle = document.querySelector(".sidebar-toggle");

SideBarToggle.addEventListener("click", function () {
    SideBar.classList.toggle("show-sidebar");
});

CloseBtn.addEventListener("click", function () {
    SideBar.classList.remove("show-sidebar");
});