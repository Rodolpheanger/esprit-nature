export const scrollToTop = (): void => {
  const button = document.querySelector(".scroll-top") as HTMLDivElement;
  window.addEventListener("scroll", () => {
    window.scrollY > 300
      ? button.classList.add("scroll-top--visible")
      : button.classList.remove("scroll-top--visible");
  });
  button.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};
