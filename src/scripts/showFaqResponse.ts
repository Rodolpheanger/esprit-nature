export const showFaqResponse = (): void => {
  const questions = document.querySelectorAll(
    ".faq__question"
  ) as NodeListOf<HTMLParagraphElement>;

  questions.forEach((question) => {
    const response = question?.nextElementSibling as HTMLParagraphElement;
    console.log(response.offsetHeight);
    response &&
      response.style.setProperty("--max-height", response.offsetHeight + "px");
    response &&
      question.addEventListener("click", () => {
        response.classList.toggle("faq__response--visible");
        question.classList.toggle("faq__question--active");
      });
  });
};
