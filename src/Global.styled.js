import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {


	overflow: auto;


}


/* * {
    outline: 1px solid red;
} */

html, body {
    margin: 0;
}

* {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
	margin: 0;
	box-sizing: border-box;
}



a {
	text-decoration: none;
}


/* Scrollbar width */
::-webkit-scrollbar {
	height: 5px;
    width: 5px;  /* Set the desired scrollbar width */
}

/* Remove the top and bottom arrow buttons */
::-webkit-scrollbar-button {
    display: none;  /* This removes the arrow buttons */
}

/* Scrollbar track */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* Set the background of the track */
	border-radius: 6px;
}

/* Scrollbar handle (the draggable part) */
::-webkit-scrollbar-thumb {
    background: #888;  /* Set the color of the scrollbar handle */
    border-radius: 6px;  /* Optional: round the scrollbar edges */
}

/* Scrollbar handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;  /* Darker color when hovering over the handle */
}


img {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media screen and (max-width: 400px) {
	body {
		overflow-x: hidden;
	}
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
	body {
		overflow-x: hidden;
	}
}

`;