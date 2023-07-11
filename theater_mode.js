console.log("Theater mode running");
if (window.location.pathname === "/watch") {
  await waitForElement(document.getElementsByClassName("ytp-size-button")[0]);
  var theater_mode_button =
    document.getElementsByClassName("ytp-size-button")[0];
  theater_mode_button.click();
}
