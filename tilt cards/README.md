# Tilt Cards

Interactive 3D product cards using CSS transforms and JS coordinate tracking.

## Setup

Open index.html.

## Architecture

- `perspective` on the grid container
- `transform-style: preserve-3d` on cards
- JS calculates X/Y offset from center to apply `rotateX` and `rotateY`
- Dynamic radial gradient simulates light glare
- CSS transition speed switches on hover for precision vs smooth reset
