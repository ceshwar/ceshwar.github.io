(function () {
  var sel = document.getElementById("pub-year-select");
  if (!sel) return;

  sel.addEventListener("change", function () {
    var v = sel.value;
    if (!v) return;
    var el = document.getElementById(v);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    sel.selectedIndex = 0;
  });
})();
