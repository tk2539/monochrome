// content.js
(function() {
  const styleId = 'grayscale-extension-style';
  let style = document.getElementById(styleId);

  if (style) {
    // スタイルが存在すれば削除（モノクロを解除）
    style.remove();
  } else {
    // スタイルが存在しなければ追加（モノクロを適用）
    style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      html {
        filter: grayscale(100%) !important;
        -webkit-filter: grayscale(100%) !important;
      }
      img, video, iframe {
        filter: grayscale(100%) !important;
        -webkit-filter: grayscale(100%) !important;
      }
    `;
    document.head.appendChild(style);
  }
})();