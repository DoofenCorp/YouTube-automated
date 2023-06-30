var yt_settings;
settings_menu = async () => {
  yt_settings = document.querySelector("ytd-topbar-menu-button-renderer");
  yt_settings.click();
  yt_settings.click();
  yt_settings.click();
};
await settings_menu();

var theme_button = document.getElementsByTagName(
  "ytd-toggle-theme-compact-link-renderer"
)[0];
theme_button.click();
var link_renderers = document.getElementsByTagName("ytd-compact-link-renderer");
for (var i = 0; i < link_renderers.length; i++) {
  var label = link_renderers[i].getElementsByTagName("yt-formatted-string")[0]
    .innerHTML;
  if (label === "Dark theme") {
    link_renderers[i].click();
  }
}
