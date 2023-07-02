var yt_settings;
settings_menu = async () => {
  yt_settings = document.querySelector("ytd-topbar-menu-button-renderer");
  yt_settings.click();
  while (document.querySelector("ytd-toggle-theme-compact-link-renderer") === null) {
    console.log("waiting");
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  yt_settings.click();
};
await settings_menu();

var theme_button;
theme_change = async () => {
  theme_button = document.getElementsByTagName(
    "ytd-toggle-theme-compact-link-renderer"
  )[0];
  theme_button.click();
};
await theme_change();

var link_renderers;
change_theme = async () => {
  link_renderers = document.getElementsByTagName("ytd-compact-link-renderer");
  for (var i = 0; i < link_renderers.length; i++) {
    var label = link_renderers[i].getElementsByTagName("yt-formatted-string")[0]
      .innerHTML;
    if (label === "Dark theme") {
      link_renderers[i].click();
    }
  }
};
await change_theme();
