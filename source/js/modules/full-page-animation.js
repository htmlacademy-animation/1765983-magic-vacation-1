import AccentTypographyBuild from "./accent-typography-build";

// top page
const introTitleAnimation = new AccentTypographyBuild({
  element: document.querySelector(`.intro__title`),
});

const introDateAnimation = new AccentTypographyBuild({
  element: document.querySelector(`.intro__date`),
  duration: 300,
  wordDelay: 0,
});

// story page
const sliderTitleAnimation = new AccentTypographyBuild({
  element: document.querySelector(`.slider__item-title`),
  duration: 300,
});

// prize page
const prizesTitleAnimation = new AccentTypographyBuild({
  element: document.querySelector(`.prizes__title`),
  duration: 300,
});

// rules page
const rulesTitleAnimation = new AccentTypographyBuild({
  element: document.querySelector(`.rules__title`),
  duration: 300,
});

// game page
const gameTitleAnimation = new AccentTypographyBuild({
  element: document.querySelector(`.game__title`),
  duration: 300,
});

export default class FullPageAnimation {
  constructor() {
    this.lastScreen = null;
    this.runPageAnimation = this.runPageAnimation.bind(this);
  }

  init() {
    window.addEventListener(`popstate`, this.runPageAnimation);
    this.runPageAnimation();
  }

  runPageAnimation() {
    const screen = window.location.hash.replace("#", "");
    if (this.lastScreen === screen) return;

    this.lastScreen = screen;

    switch (screen) {
      case "":
      case "top":
        this.runTopScreenAnimation();
        break;
      case "story":
        this.runStoryScreenAnimation();
        break;
      case "prizes":
        this.runPrizesScreenAnimation();
        break;
      case "rules":
        this.runRulesScreenAnimation();
        break;
      case "game":
        this.runGameScreenAnimation();
        break;
      default:
        break;
    }
  }

  runTopScreenAnimation() {
    introTitleAnimation.destroyAnimation();
    introDateAnimation.destroyAnimation();

    setTimeout(() => {
      introTitleAnimation.runAnimation();
    }, 500);

    setTimeout(() => {
      introDateAnimation.runAnimation();
    }, 1300);
  }

  runStoryScreenAnimation() {
    sliderTitleAnimation.destroyAnimation();

    setTimeout(() => {
      sliderTitleAnimation.runAnimation();
    }, 500);
  }

  runPrizesScreenAnimation() {
    prizesTitleAnimation.destroyAnimation();

    setTimeout(() => {
      prizesTitleAnimation.runAnimation();
    }, 500);
  }

  runRulesScreenAnimation() {
    rulesTitleAnimation.destroyAnimation();

    setTimeout(() => {
      rulesTitleAnimation.runAnimation();
    }, 500);
  }

  runGameScreenAnimation() {
    gameTitleAnimation.destroyAnimation();

    setTimeout(() => {
      gameTitleAnimation.runAnimation();
    }, 500);
  }
}
