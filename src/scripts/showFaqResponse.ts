// TODO: voir pour ajouter un eventListener sur chaque question pour ajouter la class visible et faire apparaître la réponse !!!

export const showFaqResponse = (): void => {
  const questions = document.querySelectorAll(
    ".fa-angles-down"
  ) as NodeListOf<HTMLParagraphElement>;
  console.log(questions);
  questions.forEach((question, index) => {
    console.log("question: ", question, " index: ", index);
    question.addEventListener("click", (e) => {
      console.log(e.target);
      const response = document.querySelector("question + p");
      console.log(response);
      response?.classList.contains("visible")
        ? response?.classList.remove("visible")
        : response?.classList.add("visible");
    });
  });
};
