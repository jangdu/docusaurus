// src/gtm.js
if (typeof window !== "undefined") {
  // document를 사용하는 코드 여기에 작성

  document.addEventListener("DOMContentLoaded", function () {
    var noscript = document.createElement("noscript");
    var iframe = document.createElement("iframe");

    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-T9SX9HQG";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";

    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  });
}
