// "Order Now" scrolls to the Contact section.
document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".cta-button");
  var contact = document.getElementById("contact");
  if (button && contact) {
    button.addEventListener("click", function () {
      contact.scrollIntoView({ behavior: "smooth" });
    });
  }
});
