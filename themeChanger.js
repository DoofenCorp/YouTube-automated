import waitForElement from 'wait';

(async () => {
  var yt_settings;
  settings_menu = async () => {
    yt_settings = document.querySelector("ytd-topbar-menu-button-renderer");
    yt_settings.click();
    await waitForElement("ytd-toggle-theme-compact-link-renderer");
    yt_settings.click();
  };
  await settings_menu();

  var theme_button;
  theme_change = () => {
    theme_button = document.querySelector(
      "ytd-toggle-theme-compact-link-renderer"
    );
    theme_button.click();
  };
  theme_change();

  var link_renderers;
  change_theme = () => {
    link_renderers = document.getElementsByTagName("ytd-compact-link-renderer");
    for (var i = 0; i < link_renderers.length; i++) {
      var label = link_renderers[i].getElementsByTagName(
        "yt-formatted-string"
      )[0].innerHTML;
      if (label === "Dark theme") {
        link_renderers[i].click();
      }
    }
  };
  change_theme();
})();