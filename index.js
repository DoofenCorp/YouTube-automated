console.log("YouTube automated loaded");

var settings_button = document.querySelector(".ytp-settings-button");
console.log("Settings button loaded");
settings_button.click();
settings_button.click();
var labels = document.getElementsByClassName("ytp-menuitem-label");
for (var i = 0; i < labels.length; i++) {
  if (
    labels[i].innerHTML == "Annotations" &&
    labels[i].parentNode.getAttribute("aria-checked") == "true"
  ) {
    labels[i].click();
  }
}
