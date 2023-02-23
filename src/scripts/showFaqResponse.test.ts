/**
 * @vitest-environment jsdom
 */

import { showFaqResponse } from "./showFaqResponse";
import { it, expect } from "vitest";

describe("showFaqResponse", () => {
  let question: HTMLParagraphElement;
  let response: HTMLParagraphElement;
  let link: HTMLAnchorElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <p class="faq__question">Question</p>
      <p class="faq__response"><a tabindex="-1">Response</a></p>
    `;
    question = document.querySelector(".faq__question") as HTMLParagraphElement;
    response = document.querySelector(".faq__response") as HTMLParagraphElement;
    link = document.querySelector("a") as HTMLAnchorElement;
  });

  it("should set the max-height CSS variable to the offsetHeight of the response element", () => {
    showFaqResponse();
    expect(response.style.getPropertyValue("--max-height")).toBe(
      `${response.offsetHeight + 200}px`
    );
  });

  it("should toggle the 'faq__response--visible' class on the response element when the question is clicked", () => {
    showFaqResponse();
    question.click();
    expect(response.classList.contains("faq__response--visible")).toBe(true);
    question.click();
    expect(response.classList.contains("faq__response--visible")).toBe(false);
  });
  it("should toggle the tabindex attribute value of the link element when the question is clicked", () => {
    showFaqResponse();
    question.click();
    expect(link.getAttribute("tabindex")).toBe("0");
    question.click();
    expect(link.getAttribute("tabindex")).toBe("-1");
  });
});
