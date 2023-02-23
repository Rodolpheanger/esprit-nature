export const showFaqResponse = (): void => {
  const questions = document.querySelectorAll(
    ".faq__question"
  ) as NodeListOf<HTMLParagraphElement>;

  questions.forEach((question) => {
    const response = question?.nextElementSibling as HTMLParagraphElement;
    const link = response.querySelector("a");
    response &&
      response.style.setProperty(
        "--max-height",
        response.offsetHeight + 200 + "px"
      );
    response &&
      question.addEventListener("click", () => {
        response.classList.toggle("faq__response--visible");
        question.classList.toggle("faq__question--active");
        link?.setAttribute(
          "tabindex",
          link.getAttribute("tabindex") === "-1" ? "0" : "-1"
        );
      });
  });
};
