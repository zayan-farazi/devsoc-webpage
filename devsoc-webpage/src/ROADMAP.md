# “Opposites Attract” webpage checklist

## Phase 1: basic components

- [x] create a component for displaying text
- [x] learn and implement state management with `useState`
- [x] define TypeScript interfaces for component props
- [ ] use `useRef` to capture DOM elements (for “opposites attract” interactions)

## Phase 2: layout + styling

- [ ] build two-half layout using `<div>` blocks
- [ ] integrate Bootstrap utilities for grid and spacing
- [ ] customize a color palette (could use css)

## Phase 3: flipping & reverse-scrolling

- [ ] rotate the bottom half of the page with CSS `transform: rotate(180deg)`
- [ ] wrap bottom-half content in a child `<div>` and rotate back
- [ ] implement reverse scrolling on the bottom half using a wheel event handler

## Phase 4: toggle & inversion

- [ ] add a “Flip & Invert” toggle button component
- [ ] reorder the two halves conditionally based on toggle state
- [ ] apply color inversion with css `filter: invert(1) hue-rotate(180deg)`
