document.getElementById("menu-button").addEventListener("click", function() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});
