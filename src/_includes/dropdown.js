const toc = document.getElementById("toc");
const dropdown = toc.querySelector("ul");

document.addEventListener("keydown", (e) => {
  if (toc.open && e.key === "Escape") {
    toc.open = false;
    toc.querySelector("summary").focus();
  }
});

document.body.addEventListener("mousedown", (e) => {
  if (toc.open && e.target.nodeName != "A" && e.target.nodeName != "SUMMARY") {
    toc.open = false;
  }
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("focus", (e) => {
    const { path } = e;
    const dropdownLink = path.filter((item) => item.id == "toc");

    if (toc.open && !dropdownLink.length) {
      toc.open = false;
    }
  });
});

window.addEventListener("hashchange", () => {
  if (toc.open) {
    toc.open = false;
  }
});
