const container = document.querySelector(".container") as HTMLDivElement;
const header = document.querySelector("header") as HTMLDivElement;
console.log("header", header);

const applyHeight = (container: HTMLDivElement, header: HTMLDivElement) => {
  const height = container.offsetHeight;
  header.style.height = `${height}px`;
};

const observe = (container: HTMLDivElement, header: HTMLDivElement) => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          applyHeight(container, header);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(container);
  } else {
    applyHeight(container, header);
  }
};

if (!container || !header) {
  throw new Error("Container or header element not found");
}

export const getHeaderSize = () => {
  window.addEventListener("resize", () => applyHeight(container, header));
  observe(container, header);
};
