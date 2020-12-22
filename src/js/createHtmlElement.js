export const createHtmlElement = (
  element,
  imgSrc,
  id,
  cssClass,
  children,
  content,
  listener
) => {
  const htmlElement = document.createElement(element);
  htmlElement.classList.add(cssClass);
  htmlElement.id = id;
  if (imgSrc) {
    htmlElement.src = imgSrc;
  }
  htmlElement.textContent = content;

  if (children !== null && !Array.isArray(children)) {
    htmlElement.appendChild(children);
  } else if (Array.isArray(children)) {
    children.forEach((el) => htmlElement.appendChild(el));
  }
  if (listener) {
    htmlElement.addEventListener("click", listener);
  }

  if (element === "a") {
    htmlElement.href = content;
  }
  return htmlElement;
};
