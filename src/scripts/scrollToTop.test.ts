/**
 * @vitest-environment jsdom
 */
import { beforeEach, describe, it } from "vitest";
import { scrollToTop } from "./scrollToTop";

describe("scrollToTop", () => {
  let scrollToTopButton: HTMLButtonElement;
  beforeEach(() => {
    document.body.innerHTML = `
    <button class="scroll-top">Top</button>`;
    scrollToTopButton = document.querySelector(
      ".scroll-top"
    ) as HTMLButtonElement;
    scrollToTop();
  });

  it("should add the 'scroll-top--visible' class to the button when the scrollY is greater than 300", () => {
    Object.defineProperty(window, "scrollY", { value: 301 });
    window.dispatchEvent(new Event("scroll"));
    expect(scrollToTopButton.classList.contains("scroll-top--visible")).toBe(
      true
    );
  });
  it("should remove the 'scroll-top--visible' class from the button when the scrollY is less than or equal to 300", () => {
    Object.defineProperty(window, "scrollY", { value: 300 });
    expect(scrollToTopButton.classList.contains("scroll-top--visible")).toBe(
      false
    );
  });
  it("should scroll to the top of the page when the button is clicked", () => {
    Object.defineProperty(window, "scrollY", { value: 15000 });
    scrollToTopButton.click();
    setTimeout(() => expect(window.scrollY).toBe(0), 10);
  });
});
