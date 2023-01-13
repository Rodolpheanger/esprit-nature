export const scrollToTop = (): void => {
  const button = document.querySelector(".scroll-to-top") as HTMLDivElement;
  window.addEventListener("scroll", () => {
    window.scrollY > 300
      ? button.classList.add("visible")
      : button.classList.remove("visible");
  });
  button.addEventListener("click", () => window.scrollTo(0, 0));
};
