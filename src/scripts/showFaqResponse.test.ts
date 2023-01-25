/**
 * @vitest-environment jsdom
 */

import { showFaqResponse } from "./showFaqResponse";
import { it, expect } from "vitest";

describe("showFaqResponse", () => {
  let question: HTMLParagraphElement;
  let response: HTMLParagraphElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <p class="faq__question">Question</p>
      <p class="faq__response">Response</p>
    `;
    question = document.querySelector(".faq__question") as HTMLParagraphElement;
    response = document.querySelector(".faq__response") as HTMLParagraphElement;
  });

  it("should set the max-height CSS variable to the offsetHeight of the response element", () => {
    showFaqResponse();
    expect(response.style.getPropertyValue("--max-height")).toBe(
      `${response.offsetHeight}px`
    );
  });

  it("should toggle the 'faq__response--visible' class on the response element when the question is clicked", () => {
    showFaqResponse();
    question.click();
    expect(response.classList.contains("faq__response--visible")).toBe(true);
    question.click();
    expect(response.classList.contains("faq__response--visible")).toBe(false);
  });
});
