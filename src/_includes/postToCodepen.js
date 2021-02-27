module.exports = {
  reset: `
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.65;
  padding: 2rem;
  background-color: #f5f2f7;
  color: #29344B;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
}`,
  displayStyles: `
/* Additional demo styles from SmolCSS.dev
   Not all styles may be needed for this pen */
body > ul {
  list-style: none;
  margin: 0;

  &:not([data-padding-unset]) {
    padding: 0;
  }
}

[class*="smol"]:not([data-component]) > *:not([data-unstyled]) {
  display: grid;
  padding: 1rem;
  background-color: #E0D4F6;
  color: #675883;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: bold;
  text-align: center;
  border-radius: 0.15em;
  border: 1px dashed;

  &:not([data-text]) {
    place-content: center;
  }

  &[data-text] {
    font-size: 1.15rem;
    text-align: left;
  }
}

[data-container-style] {
  outline: 2px dotted #29344B;
}`,
  grid: `
.smol-css-grid {
  --min: 20ch;
  --gap: 1rem;

  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
}`,
  flex: `
.smol-flexbox-grid {
  --min: 15ch;
  --gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}

.smol-flexbox-grid > * {
  flex: 1 1 var(--min);
}`,
};
