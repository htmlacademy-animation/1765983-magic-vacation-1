const letterPattern = [3,2,1,2];

export default class AccentTypographyBuild {
  constructor({ element, duration = 500, delay = 100, wordDelay = 300 }) {
    this._element = element;
    this._duration = duration;
    this._delay = delay;
    this._wordDelay = wordDelay;

    this.prePareText();
  }

  createElement(letter, letterIndex, wordIndex) {
    const span = document.createElement(`span`);

    span.textContent = letter;
    span.style.transitionDuration = `${this._duration}ms`;
    span.style.transitionDelay = `${letterPattern[letterIndex % 4] * this._delay + wordIndex * this._wordDelay}ms`;

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((letter) => letter !== "");

    const content = text.reduce((fragmentParent, word, wordIndex) => {
      const wordElement = Array.from(word).reduce((fragment, letter, letterIndex) => {
        fragment.appendChild(this.createElement(letter, letterIndex, wordIndex));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`accent-typography`);
      wordContainer.appendChild(wordElement);

      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.childNodes.forEach(el => el.classList.add('active'));
  }

  destroyAnimation() {
    this._element.childNodes.forEach(el => el.classList.remove('active'));
  }
}

