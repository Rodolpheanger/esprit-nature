const header__container = document.querySelector(
  ".header__container"
) as HTMLDivElement;
const header = document.querySelector("header") as HTMLDivElement;
console.log("header", header);

const applyHeight = (
  header__container: HTMLDivElement,
  header: HTMLDivElement
) => {
  const height = header__container.offsetHeight;
  header.style.height = `${height}px`;
};

const observe = (header__container: HTMLDivElement, header: HTMLDivElement) => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          applyHeight(header__container, header);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(header__container);
  } else {
    applyHeight(header__container, header);
  }
};

if (!header__container || !header) {
  throw new Error("header__container or header element not found");
}

export const getHeaderSize = () => {
  window.addEventListener("resize", () =>
    applyHeight(header__container, header)
  );
  observe(header__container, header);
};
