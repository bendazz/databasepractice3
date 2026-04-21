function toggleAnswer(btn) {
  const answer = btn.nextElementSibling;
  const showing = answer.classList.toggle("visible");
  btn.textContent = showing ? "Hide Answer" : "Show Answer";
}

document.addEventListener("DOMContentLoaded", () => {
  const visible = new Set(typeof VISIBLE_KEYS !== "undefined" ? VISIBLE_KEYS : []);
  const questions = document.querySelectorAll(".question");
  let n = 1;
  questions.forEach((q) => {
    const key = q.dataset.key;
    if (!visible.has(key)) {
      q.style.display = "none";
      return;
    }
    const numEl = q.querySelector(".question-number");
    if (numEl) numEl.textContent = `Question ${n}`;
    n++;
  });
});
