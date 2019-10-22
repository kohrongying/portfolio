import emotion from 'emotion/dist/emotion.umd.min.js';

const { css } = emotion;

const brand = '#74D900';
const MAX_HEIGHT = window.innerHeight;

export const title = css`
	color: ${brand};
	font-size: 1em;
	white-space: nowrap;
`;

export const comicSans = css`
	font-family: 'Comic Sans MS';
`;

export const soc  = css`
	display: flex;
	align-items: center;
	justify-content: space-around;
`