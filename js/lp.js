/* 応募フォーム: このページはデザイン確認用。送信先を持たないので、送らずにお知らせだけ出す */
document.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("このページはデザイン確認用のため、入力内容は送信されません。");
});

/* 幅1024未満の画面では、ページ全体を同じ倍率で縮めて横にはみ出さないようにする（縦横比は変えない） */
(function () {
  var lp = document.querySelector(".lp");
  if (!lp) return;
  function fit() {
    var w = document.documentElement.clientWidth;
    lp.style.zoom = w < 1024 ? String(w / 1024) : "";
  }
  fit();
  window.addEventListener("resize", fit);
})();
