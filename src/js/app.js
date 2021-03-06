"use strict";

/**Optionally add Bootstrap to your project**/
//import 'bootstrap';
(function() {
  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 769px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    const msg = mq.matches
      ? "images/How It Works.png"
      : "images/How It Works Mobile.png";
    document.getElementById("how-it-works__img").src = msg;
  }
})();

import "../css/style.scss";
