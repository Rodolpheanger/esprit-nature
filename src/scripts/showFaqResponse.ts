export const showFaqResponse = (): void => {
  const questions = document.querySelectorAll(
    ".question"
  ) as NodeListOf<HTMLParagraphElement>;

  questions.forEach((question) => {
    const response = question?.nextElementSibling as HTMLParagraphElement;
    response &&
      response.style.setProperty("--max-height", response.offsetHeight + "px");
    response &&
      question.addEventListener("click", () => {
        response.classList.toggle("visible");
      });
  });
};
