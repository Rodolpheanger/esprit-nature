export const showFaqResponse = (): void => {
  const questions = document.querySelectorAll(
    ".fa-solid.fa-angles-down"
  ) as NodeListOf<HTMLParagraphElement>;

  questions.forEach((question) => {
    const response = question.parentElement
      ?.nextElementSibling as HTMLParagraphElement;
    response &&
      response.style.setProperty("--max-height", response.offsetHeight + "px");
    response &&
      question.addEventListener("click", () => {
        response.classList.toggle("visible");
      });
  });
};
