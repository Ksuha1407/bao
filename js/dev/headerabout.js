import { a as bodyLockStatus, b as bodyLockToggle } from "./common.min.js";
function menuAboutInit() {
  document.addEventListener("click", function(e) {
    if (bodyLockStatus && e.target.closest("[data-fls-menuabout]")) {
      bodyLockToggle();
      document.documentElement.toggleAttribute("data-fls-menuabout-open");
    }
  });
}
document.querySelector("[data-fls-menuabout]") ? window.addEventListener("load", menuAboutInit) : null;
