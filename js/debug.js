/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  function toggleLogo(isChecked) {
    var headerInner = document.querySelector('.site-branding__inner');

    if (headerInner) {
      var currentLogo = headerInner.querySelector('.site-branding__logo');

      if (isChecked) {
        var logoHTML = "\n        <a href=\"/\" rel=\"home\" class=\"site-branding__logo\">\n          <img src=\"/themes/contrib/islandorairolivero/logo.svg\" alt=\"Home\">\n        </a>";

        if (currentLogo) {
          headerInner.removeChild(currentLogo);
        }

        headerInner.innerHTML = logoHTML + headerInner.innerHTML;
      } else if (currentLogo) {
        headerInner.removeChild(currentLogo);
      }
    }

    sessionStorage.setItem('islandorairolivero.debug.toggleLogo', isChecked);
  }

  function toggleRequiredAttr(isChecked) {
    var requiredFormElements = document.querySelectorAll('[required]');

    if (isChecked) {
      requiredFormElements.forEach(function (el) {
        el.removeAttribute('required');
        el.setAttribute('data-required', 'true');
      });
    } else {
      document.querySelectorAll('[data-required="true"]').forEach(function (el) {
        el.removeAttribute('data-required');
        el.setAttribute('required', 'true');
      });
    }

    sessionStorage.setItem('islandorairolivero.debug.toggleRequiredAttr', isChecked);
  }

  function toggleEditableSiteName(isChecked) {
    var siteNameText = document.querySelector('.site-branding__name a');

    if (siteNameText) {
      siteNameText.contentEditable = isChecked;

      if (isChecked) {
        siteNameText.dataset.origtext = siteNameText.textContent;
        siteNameText.textContent = 'Edit Me!';
      } else if (siteNameText.dataset.origtext) {
        siteNameText.textContent = siteNameText.dataset.origtext;
      }
    }

    sessionStorage.setItem('islandorairolivero.debug.toggleEditableSiteName', isChecked);
  }

  function toggleRtl(isChecked) {
    var html = document.querySelector('html');

    if (isChecked) {
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('dir', 'ltr');
    }

    sessionStorage.setItem('islandorairolivero.debug.toggleRtl', isChecked);
  }

  function toggleAlwaysOnMobileNav(isChecked) {
    var body = document.querySelector('body');

    if (isChecked) {
      body.classList.add('is-always-mobile-nav');
    } else {
      body.classList.remove('is-always-mobile-nav');
    }

    sessionStorage.setItem('islandorairolivero.debug.toggleAlwaysOnMobileNav', isChecked);
  }

  function handleChange(e) {
    switch (e.target.id) {
      case 'logo-toggle':
        toggleLogo(e.target.checked);
        break;

      case 'edit-name-toggle':
        toggleEditableSiteName(e.target.checked);
        break;

      case 'rtl-toggle':
        toggleRtl(e.target.checked);
        break;

      case 'nav-toggle':
        toggleAlwaysOnMobileNav(e.target.checked);
        break;

      case 'required-toggle':
        toggleRequiredAttr(e.target.checked);
        break;
    }
  }

  function init() {
    var debugElement = document.createElement('div');
    debugElement.classList.add('islandorairolivero-debug');
    debugElement.innerHTML = "\n      <button class=\"islandorairolivero-debug__close\">Close</button>\n      <h2 class=\"visually-hidden\">Theme debug options</h2>\n      <div class=\"islandorairolivero-debug__row\"><input id=\"logo-toggle\" type=\"checkbox\"><label for=\"logo-toggle\">Logo</label></div>\n      <div class=\"islandorairolivero-debug__row\"><input id=\"edit-name-toggle\" type=\"checkbox\"><label for=\"edit-name-toggle\">Editable Site Name</label></div>\n      <div class=\"islandorairolivero-debug__row\"><input id=\"rtl-toggle\" type=\"checkbox\"><label for=\"rtl-toggle\">RTL</label></div>\n      <div class=\"islandorairolivero-debug__row\"><input id=\"nav-toggle\" type=\"checkbox\"><label for=\"nav-toggle\">Always on mobile nav</label></div>\n      <div class=\"islandorairolivero-debug__row\"><input id=\"required-toggle\" type=\"checkbox\"><label for=\"required-toggle\">Clear required attribute on form elements</label></div>\n      <div class=\"description\">Disable debug in <a href=\"".concat(window.drupalSettings.path.baseUrl, "admin/appearance/settings/islandorairolivero\">Theme Settings</a>.</div>\n    ");
    document.querySelector('body').appendChild(debugElement);
    document.querySelector('.islandorairolivero-debug').addEventListener('change', handleChange);
    document.querySelector('.islandorairolivero-debug__close').addEventListener('click', function () {
      document.querySelector('.islandorairolivero-debug').remove();
    });

    if (sessionStorage.getItem('islandorairolivero.debug.toggleLogo') != null) {
      toggleLogo(sessionStorage.getItem('islandorairolivero.debug.toggleLogo') === 'true');
    }

    if (sessionStorage.getItem('islandorairolivero.debug.toggleRequiredAttr') === 'true') {
      toggleRequiredAttr(true);
    }

    if (sessionStorage.getItem('islandorairolivero.debug.toggleEditableSiteName') != null) {
      toggleEditableSiteName(sessionStorage.getItem('islandorairolivero.debug.toggleEditableSiteName') === 'true');
    }

    if (sessionStorage.getItem('islandorairolivero.debug.toggleRtl') != null) {
      toggleRtl(sessionStorage.getItem('islandorairolivero.debug.toggleRtl') === 'true');
    }

    if (sessionStorage.getItem('islandorairolivero.debug.toggleAlwaysOnMobileNav') != null) {
      toggleAlwaysOnMobileNav(sessionStorage.getItem('islandorairolivero.debug.toggleAlwaysOnMobileNav') === 'true');
    }

    if (document.querySelector('.site-branding__logo')) {
      document.getElementById('logo-toggle').checked = true;
    }

    if (sessionStorage.getItem('islandorairolivero.debug.toggleRequiredAttr') === 'true') {
      document.getElementById('required-toggle').checked = true;
    }

    if (document.querySelector('.site-branding__name a') && document.querySelector('.site-branding__name a').contentEditable === 'true') {
      document.getElementById('edit-name-toggle').checked = true;
    }

    if (document.querySelector('html').getAttribute('dir') === 'rtl') {
      document.getElementById('rtl-toggle').checked = true;
    }

    if (document.querySelector('body').classList.contains('is-always-mobile-nav')) {
      document.getElementById('nav-toggle').checked = true;
    }
  }

  init();
})();