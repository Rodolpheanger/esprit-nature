export const scrollToTop = (): void => {
  const button = document.querySelector(".scrollToTop") as HTMLDivElement;
  button.addEventListener("click", () => window.scrollTo(0, 0));
};
