(() => {
  const anchors = document.querySelectorAll("a[href]");

  for (const anchor of anchors) {
    const rawHref = anchor.getAttribute("href");
    if (!rawHref) continue;

    // Skip in-page anchors, mail links, and javascript pseudo-links.
    if (
      rawHref.startsWith("#") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:") ||
      rawHref.startsWith("javascript:")
    ) {
      continue;
    }

    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch {
      continue;
    }

    const isExternal = url.origin !== window.location.origin;
    const isHostedFile = url.origin === window.location.origin && url.pathname.startsWith("/files/");

    if (!isExternal && !isHostedFile) continue;

    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener noreferrer");
  }
})();
