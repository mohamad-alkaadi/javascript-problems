// use instead of getElementById and getElementByClassName to show that you have worked with th DOM too much

const paragraph = document.querySelector("p")

paragraph.innerHTML = paragraph.innerHTML
  .split(" ")
  .map((word) => {
    return word.length > 8
      ? `<span style='background-color: yellow'>${word}</span>`
      : word
  })
  .join(" ")
// we use span for inline
