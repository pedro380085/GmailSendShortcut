// ==UserScript==
// @name         Gmail Trigger Send from cc, bcc fields
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  The standard Cmd + Enter shortcut will not work when you the cursor is set for cc and bcc fields, with this script it works.
// @license      MIT
// @author       Pedro Góes
// @include      https://mail.google.tld/*
// @grant        none
// ==/UserScript==

(function() {

  /**
   * Swap languages by emulating mouse click events on UI button.
   */
  function focusDiv() {
      var aTags = document.getElementsByTagName("div");
      var searchText = "Send";
      var foundTag;

      for (var i = 0; i < aTags.length; i++) {
          if (aTags[i].textContent == searchText) {
              console.log(aTags[i].textContent);
              console.log(aTags[i].getAttribute("role"));
              if (aTags[i].getAttribute("role") == "button") {
                  foundTag = aTags[i];
                  break;
              }
          }
      }

      foundTag.click();
      //swapBtn.dispatchEvent(new MouseEvent(type));
  }

  /**
   * Set listeners for shortcut event.
   */
  window.addEventListener('keydown', function(event) {
      if (event.keyCode === 13 && event.ctrlKey) {
          focusDiv();
      }
    }, true);
})();