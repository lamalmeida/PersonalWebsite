const toggleBtn1 = document.querySelector(".sidebar-toggle");
const toggleBtn2 = document.querySelector(".sidebar-toggle2");
const sidebar = document.querySelector(".sidebar");

toggleBtn1.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

toggleBtn2.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
