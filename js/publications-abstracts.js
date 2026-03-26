(function () {
  var collapsedClass = "pub-abstract-block--collapsed";
  var expandedLabel = "Hide abstract";
  var collapsedLabel = "Show full abstract";

  var abstracts = document.querySelectorAll("p.pub-abstract");
  abstracts.forEach(function (p, i) {
    p.id = p.id || "pub-abstract-" + (i + 1);
  });

  abstracts.forEach(function (p) {
    var block = document.createElement("div");
    block.className = "pub-abstract-block " + collapsedClass;
    p.parentNode.insertBefore(block, p);
    block.appendChild(p);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pub-abstract-toggle";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", p.id);
    btn.textContent = collapsedLabel;
    btn.hidden = true;
    block.appendChild(btn);

    function sync() {
      var collapsed = block.classList.contains(collapsedClass);
      btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      btn.textContent = collapsed ? collapsedLabel : expandedLabel;
    }

    btn.addEventListener("click", function () {
      block.classList.toggle(collapsedClass);
      sync();
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var truncated = p.scrollHeight > p.clientHeight + 2;
        if (!truncated) {
          block.classList.remove(collapsedClass);
          btn.remove();
          return;
        }
        btn.hidden = false;
        sync();
      });
    });
  });
})();
