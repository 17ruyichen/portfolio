/* Minimal interactions. No dependencies. */

(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");
  const staticMode = new URLSearchParams(window.location.search).has("static");

  if (reduce || staticMode || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  // Highlight the section currently in view.
  const navLinks = Array.from(document.querySelectorAll(".nav a[data-section]"));
  const sections = navLinks
    .map((a) => document.getElementById(a.dataset.section))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.classList.toggle("active", a.dataset.section === entry.target.id)
          );
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // Copy email without leaving the page.
  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = btn.getAttribute("data-copy-email");
      try {
        await navigator.clipboard.writeText(email);
        const old = btn.textContent;
        btn.textContent = "已复制";
        setTimeout(() => (btn.textContent = old), 1600);
      } catch {
        window.location.href = "mailto:" + email;
      }
    });
  });
})();
