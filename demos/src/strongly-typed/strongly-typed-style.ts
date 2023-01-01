import { css } from "lit";

const stronglyTypedStyle = css`

/* Basic */

	#page-wrapper {
		background: #f0f0f0;
	}


	#page-wrapper, input, textarea, select {
		font-family: 'Source Sans Pro';
		font-weight: 300;
		color: #777;
		line-height: 1.65em;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
		text-transform: uppercase;
		color: #888;
	}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
		color: inherit;
		text-decoration: none;
		border: 0;
	}

	h2 {
		font-size: 1.65em;
		font-weight: 400;
		letter-spacing: 4px;
		margin: 0 0 1.5em 0;
		line-height: 1.75em;
	}

	h3 {
		font-size: 1em;
		letter-spacing: 2px;
		margin: 0 0 1.25em 0;
	}

	a {
		-moz-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
		-webkit-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
		-ms-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
		transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
		color: #666;
		text-decoration: none;
		border-bottom: solid 1px #ddd;
	}

		a strong {
			-moz-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
			-webkit-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
			-ms-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
			transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
		}

		a:hover {
			color: #ed786a;
			border-bottom-color: rgba(255, 255, 255, 0);
		}

			a:hover strong {
				color: #ed786a;
			}

	strong, b {
		font-weight: 600;
		color: #666;
	}

	em, i {
		font-style: italic;
	}

	sub {
		position: relative;
		top: 0.5em;
		font-size: 0.8em;
	}

	sup {
		position: relative;
		top: -0.5em;
		font-size: 0.8em;
	}

	hr {
		border: 0;
		border-top: solid 1px #ddd;
	}

	blockquote {
		border-left: solid 0.5em #ddd;
		padding: 1em 0 1em 2em;
		font-style: italic;
	}

	p {
		text-align: justify;
		margin-bottom: 2em;
	}

	ul, ol, dl, table, blockquote {
		margin-bottom: 2em;
	}

	br.clear {
		clear: both;
	}

/* Sections/Article */

	section, article {
		margin-bottom: 3em;
	}

	section > :last-child,
	article > :last-child,
	section:last-child,
	article:last-child {
		margin-bottom: 0;
	}

/* Image */

	.image {
		-moz-transition: opacity 0.25s ease-in-out;
		-webkit-transition: opacity 0.25s ease-in-out;
		-ms-transition: opacity 0.25s ease-in-out;
		transition: opacity 0.25s ease-in-out;
		display: inline-block;
		border: solid 6px #ebebeb !important;
	}

		.image:hover {
			opacity: 0.9;
		}

		.image img {
			display: block;
			width: 100%;
		}

		.image.fit {
			display: block;
			width: 100%;
		}

		.image.featured {
			display: block;
			width: 100%;
			margin: 0 0 3.5em 0;
		}

		.image.left {
			float: left;
			margin: 0 1.5em 1.5em 0;
			position: relative;
			top: 0.5em;
		}

		.image.centered {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.centered img {
				margin: 0 auto;
				width: auto;
			}

/* List */

	ul {
		list-style: disc;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
			margin: 0.75em 0 0.75em 0;
		}

			ul li:first-child {
				margin-top: 0;
			}

	ol {
		list-style: decimal;
		padding-left: 1em;
	}

		ol li {
			padding-left: 0.5em;
			margin: 0.75em 0 0.75em 0;
		}

			ol li:first-child {
				margin-top: 0;
			}

/* Links */

	ul.links {
		list-style: none;
		padding-left: 0;
	}

		ul.links li {
			display: inline;
			border-left: solid 1px #d0d0d0;
			padding-left: 1em;
			margin: 0 0 0 1em;
		}

			ul.links li:first-child {
				margin-left: 0;
				padding-left: 0;
				border-left: 0;
			}

/* Actions */

	ul.actions {
		margin-top: 2.5em;
		clear: both;
		list-style: none;
		padding-left: 0;
	}

		ul.actions li {
			padding-left: 0;
			display: inline-block;
			margin: 0 0 0 1em;
		}

			ul.actions li:first-child {
				margin-left: 0;
			}

/* Divided */

	ul.divided {
		list-style: none;
		padding-left: 0;
	}

		ul.divided li {
			border-top: solid 2px #e5e5e5;
			padding-left: 0;
			margin: 2.5em 0 0 0;
			padding: 2.5em 0 0 0;
		}

			ul.divided li:first-child {
				border-top: 0;
				margin-top: 0;
				padding-top: 0;
			}

/* Icons */

	ul.icons {
		list-style: none;
		padding-left: 0;
	}

		ul.icons > li {
      display: flex;
      gap: 32px;
			padding: 2em 0 0 0;
			margin: 0;
		}

			ul.icons > li svg {
				display: block;
				background: #878787;
				fill: #e4e4e4;
				width: 2rem;
				height: 2rem;
        padding: 8px;
				border-radius: 2em;
				line-height: 2em;
				text-align: center;
				box-shadow: 0.125em 0.175em 0 0 rgba(0, 0, 0, 0.125);
			}

			ul.icons > li:first-child {
				padding-top: 0;
			}

				ul.icons > li:first-child:before {
					top: 0;
				}

/* Form */

	form label {
		font-weight: 600;
		text-transform: uppercase;
		color: #888;
		display: block;
		margin: 0 0 1em 0;
	}

	form input[type="text"],
	form input[type="email"],
	form input[type="password"],
	form select,
	form textarea {
		-moz-transition: background-color 0.25s ease-in-out;
		-webkit-transition: background-color 0.25s ease-in-out;
		-ms-transition: background-color 0.25s ease-in-out;
		transition: background-color 0.25s ease-in-out;
		-webkit-appearance: none;
		display: block;
		border: 0;
		background: #e8e8e8;
		width: 100%;
		box-shadow: inset 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		line-height: 1.25em;
		padding: 0.75em 1em 0.75em 1em;
	}

		form input[type="text"]:focus,
		form input[type="email"]:focus,
		form input[type="password"]:focus,
		form select:focus,
		form textarea:focus {
			background: #f0f0f0;
		}

	form textarea {
		min-height: 11em;
	}

	form ::-webkit-input-placeholder {
		color: #555 !important;
		line-height: 1.35em;
	}

	form :-moz-placeholder {
		color: #555 !important;
	}

	form ::-moz-placeholder {
		color: #555 !important;
	}

	form :-ms-input-placeholder {
		color: #555 !important;
	}

	form ::-moz-focus-inner {
		border: 0;
	}

/* Table */

	table {
		width: 100%;
	}

		table tbody tr {
			border-top: solid 1px #E5E5E5;
		}

			table tbody tr:first-child {
				border-top: 0;
			}

		table td {
			padding: 0.75em 1em 0.75em 1em;
		}

		table th {
			text-align: left;
			font-weight: bold;
			padding: 0.75em 1em 0.75em 1em;
		}

		table thead {
			background: #878787;
			color: #fff;
			font-weight: 400;
			text-transform: uppercase;
			border: 0;
			box-shadow: 0.125em 0.175em 0 0 rgba(0, 0, 0, 0.125);
			font-size: 0.85em;
			letter-spacing: 2px;
		}

		table tfoot {
			background: #F0F0F0;
			border-top: solid 2px #E5E5E5;
		}

/* Button */

	input[type="button"],
	input[type="submit"],
	input[type="reset"],
	button,
	.button {
		-moz-transition: all 0.25s ease-in-out;
		-webkit-transition: all 0.25s ease-in-out;
		-ms-transition: all 0.25s ease-in-out;
		transition: all 0.25s ease-in-out;
		-webkit-appearance: none;
		position: relative;
		display: inline-block;
		background: #ed786a;
		color: #fff !important;
		text-transform: uppercase;
		border-radius: 4px;
		border: 0;
		outline: 0;
		font-size: 1em;
		box-shadow: 0.125em 0.175em 0 0 rgba(0, 0, 0, 0.125);
		font-weight: 600;
		text-align: center;
		font-size: 0.85em;
		letter-spacing: 2px;
		padding: 0.85em 2.75em 0.85em 2.75em;
	}

		input[type="button"].icon:before,
		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		button.icon:before,
		.button.icon:before {
			position: relative;
			padding-right: 0.75em;
			opacity: 0.5;
			top: 0.05em;
		}

		input[type="button"]:hover,
		input[type="submit"]:hover,
		input[type="reset"]:hover,
		button:hover,
		.button:hover {
			background: #fd887a;
		}

		input[type="button"]:active,
		input[type="submit"]:active,
		input[type="reset"]:active,
		button:active,
		.button:active {
			background: #ed786a;
		}

		input[type="button"].alt,
		input[type="submit"].alt,
		input[type="reset"].alt,
		button.alt,
		.button.alt {
			background: #878787;
		}

			input[type="button"].alt:hover,
			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			button.alt:hover,
			.button.alt:hover {
				background: #979797;
			}

			input[type="button"].alt:active,
			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			button.alt:active,
			.button.alt:active {
				background: #878787;
			}

/* Box */

	.no-sidebar .box.post > header {
		text-align: center;
	}

	.box.excerpt .date {
		background: #878787;
		color: #fff;
		font-weight: 400;
		text-transform: uppercase;
		border-radius: 4px;
		border: 0;
		box-shadow: 0.125em 0.175em 0 0 rgba(0, 0, 0, 0.125);
		display: inline-block;
		font-size: 0.85em;
		letter-spacing: 2px;
		padding: 0.25em 1em 0.25em 1em;
		margin: 0 0 2.5em 0;
	}

/* Icons */

	.icon {
		text-decoration: none;
		position: relative;
		text-decoration: none;
	}

		.icon:before {
			line-height: inherit;
		}

		.icon > .label {
			display: none;
		}

/* Page Wrapper */

	#page-wrapper > section {
		margin-bottom: 0;
	}

/* Header */

	#header {
		position: relative;
		position: relative;
		background: #fff;
		text-align: center;
	}

		#header > .container {
			padding: 14em 0 7em 0;
			border-bottom: solid 2px #e5e5e5;
			box-shadow: inset 0px -8px 0px 0px #fff, inset 0px -10px 0px 0px #e5e5e5;
		}

		#header h1 {
			font-family: 'Arvo';
			font-weight: 700;
			color: #ed786a;
			text-shadow: 0.05em 0.075em 0 rgba(0, 0, 0, 0.1);
			font-size: 3em;
			letter-spacing: 13px;
		}

			#header h1 a {
				border: 0;
			}

		#header p {
			text-transform: uppercase;
			font-weight: 400;
			color: #888;
			margin: 2.5em 0 0 0;
			font-size: 0.85em;
			letter-spacing: 3px;
			text-align: center;
		}

/* Nav */

	#nav {
		position: absolute;
		top: 3em;
		left: 0;
		width: 100%;
		cursor: default;
	}

		#nav > ul > li {
			display: inline-block;
			padding-right: 2em;
		}

			#nav > ul > li:last-child {
				padding-right: 0;
			}

			#nav > ul > li > a {
				display: flex;
        border: none;
        align-items: center;
			}

				#nav > ul > li svg {
					display: inline-block;
					background: #878787;
					fill: #e4e4e4;
          width: 2.0rem;
          height: 2.0rem;
					border-radius: 2.25em;
					line-height: 2.1em;
					text-align: center;
					box-shadow: 0.125em 0.175em 0 0 rgba(0, 0, 0, 0.125);
          padding: 8px;
					margin-right: 0.75em;
					-moz-transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
					-webkit-transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
					-o-transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
					-ms-transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
					transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
				}
				/* #nav > ul > li > a svg {
        } */

				#nav > ul > li > a > span {
					-moz-transition: color 0.25s ease-in-out;
					-webkit-transition: color 0.25s ease-in-out;
					-o-transition: color 0.25s ease-in-out;
					-ms-transition: color 0.25s ease-in-out;
					transition: color 0.25s ease-in-out;
					font-size: 0.85em;
					letter-spacing: 3px;
				}

			#nav > ul > li > ul {
				display: none;
			}

			#nav > ul > li.active > a:before,
			#nav > ul > li:hover > a:before {
				background: #ED786A;
				color: #fff;
			}

			#nav > ul > li.active > a > span,
			#nav > ul > li:hover > a > span {
				color: #ED786A;
			}

	.dropotron {
		text-align: left;
		border: solid 1px #e5e5e5;
		border-radius: 4px;
		background: #fff;
		background: rgba(255, 255, 255, 0.965);
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
		padding: 0.75em 0 0.5em 0;
		min-width: 12em;
		margin-top: calc(-0.5em + 1px);
		margin-left: -2px;
		list-style: none;
	}

		.dropotron.level-0 {
			margin-top: 1.5em;
			margin-left: -1em;
		}

			.dropotron.level-0:after {
				content: '';
				display: block;
				position: absolute;
				left: 1.25em;
				top: calc(-0.75em + 1px);
				border-left: solid 0.75em rgba(255, 255, 255, 0);
				border-right: solid 0.75em rgba(255, 255, 255, 0);
				border-bottom: solid 0.75em #fff;
			}

			.dropotron.level-0:before {
				content: '';
				display: block;
				position: absolute;
				left: 1.25em;
				top: -0.75em;
				border-left: solid 0.75em rgba(255, 255, 255, 0);
				border-right: solid 0.75em rgba(255, 255, 255, 0);
				border-bottom: solid 0.75em #ccc;
			}

		.dropotron span, .dropotron a {
			display: block;
			padding: 0.3em 1em 0.3em 1em;
			border: 0;
			border-top: solid 1px #f0f0f0;
			outline: 0;
		}

		.dropotron li {
			padding-left: 0;
			margin: 0;
		}

			.dropotron li:first-child > span, .dropotron li:first-child > a {
				border-top: 0;
				padding-top: 0;
			}

			.dropotron li:hover > span, .dropotron li:hover > a {
				-moz-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
				-webkit-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
				-ms-transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
				transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
				color: #ed786a;
			}

/* Features */

	#features {
		position: relative;
		overflow: hidden;
		background: #fff;
		text-align: center;
		padding: 6em 0;
	}

		#features p {
			text-align: center;
		}

		#features ul.actions {
			margin-top: 1.25em;
		}

/* Banner */

	#banner {
		position: relative;
		overflow: hidden;
		background: #fff;
		color: #fff;
		text-align: center;
		border-top: solid 2px #e5e5e5;
		border-bottom: solid 2px #e5e5e5;
		box-shadow: inset 0px -8px 0px 0px #fff, inset 0px 8px 0px 0px #fff;
		position: relative;
		text-transform: uppercase;
		background: url("https://picsum.photos/id/446/800/500?blur=4");
		background-size: cover;
		padding: 10em 0;
	}

		#banner p {
			font-weight: 400;
			font-size: 2em;
			line-height: 1.5em;
			letter-spacing: 4px;
			text-align: center;
			margin: 0;
		}

		#banner strong {
			color: inherit;
		}

		#banner > .container {
			position: relative;
		}

			#banner > .container:before, #banner > .container:after {
				content: '';
				display: block;
				position: absolute;
				top: 50%;
				width: 35px;
				height: 141px;
				margin-top: -70px;
				background: url("images/bracket.svg");
				opacity: 0.15;
			}

			#banner > .container:before {
				left: 0;
			}

			#banner > .container:after {
				-moz-transform: scaleX(-1);
				-webkit-transform: scaleX(-1);
				-ms-transform: scaleX(-1);
				transform: scaleX(-1);
				right: 0;
			}

/* Main */

	#main {
		position: relative;
		overflow: hidden;
		background: #fff;
		padding: 6em 0;
	}

/* Content */

	#content > section,
	#content > article {
		border-top: solid 2px #e5e5e5;
		box-shadow: inset 0px 8px 0px 0px #fff, inset 0px 10px 0px 0px #e5e5e5;
		margin: 5em 0 0 0;
		padding: 5em 0 0 0;
	}

		#content > section:first-child,
		#content > article:first-child {
			border-top: 0;
			box-shadow: none;
			margin: 0;
			padding: 0;
		}

/* Sidebar */

	#sidebar > section,
	#sidebar > article {
		border-top: solid 2px #e5e5e5;
		box-shadow: inset 0px 8px 0px 0px #fff, inset 0px 10px 0px 0px #e5e5e5;
		margin: 5em 0 0 0;
		padding: 5em 0 0 0;
	}

		#sidebar > section:first-child,
		#sidebar > article:first-child {
			border-top: 0;
			box-shadow: none;
			margin: 0;
			padding: 0;
		}

/* Footer */

	#footer {
		position: relative;
		overflow: hidden;
		border-top: solid 2px #e5e5e5;
		background: #f0f0f0;
		padding: 6em 0 8em 0;
	}

		#footer form input[type="text"],
		#footer form input[type="email"],
		#footer form input[type="password"],
		#footer form select,
		#footer form textarea {
			background: #f7f7f7;
		}

			#footer form input[type="text"]:focus,
			#footer form input[type="email"]:focus,
			#footer form input[type="password"]:focus,
			#footer form select:focus,
			#footer form textarea:focus {
				background: #fff;
			}

		#footer h2 {
			text-align: center;
		}

/* Copyright */

	#copyright {
		border-top: solid 2px #e5e5e5;
		text-align: center;
		margin-top: 6em;
		padding-top: 4em;
	}

/* XLarge */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 13pt;
			}

	}

/* Large */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 12pt;
			}

			h2 br, h3 br, h4 br, h5 br, h6 br {
				display: none;
			}

		/* Image */

			.image.left {
				max-width: 50%;
			}

			.image.right {
				max-width: 50%;
			}

		/* Header */

			#header > .container {
				padding: 12em 0 5em 0;
			}

			#header h1 {
				font-size: 2.5em;
			}

		/* Nav */

			#nav > ul > li {
				padding-right: 1.25em;
			}

		/* Features */

			#features {
				padding: 4em 0;
			}

		/* Banner */

			#banner {
				padding: 8em 0;
			}

				#banner > .container {
					padding: 0 4em;
				}

					#banner > .container br {
						display: none;
					}

		/* Main */

			#main {
				padding: 4em 0;
			}

		/* Footer */

			#footer {
				padding: 4em 0;
			}

		/* Copyright */

			#copyright {
				margin-top: 2em;
				padding-top: 2em;
			}

	}

/* Medium */

	#navPanel, #titleBar {
		display: none;
	}

	@media screen and (max-width: 980px) {

		/* Basic */

			html, body {
				overflow-x: hidden;
			}

		/* Header */

			#header > .container {
				padding: 10em 0 7em 0;
			}

		/* Nav */

			#nav {
				display: none;
			}

		/* Nav */

			#page-wrapper {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				padding-bottom: 1px;
			}

			#titleBar {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 44px;
				left: 0;
				position: fixed;
				top: 0;
				width: 100%;
				z-index: 10001;
			}

				#titleBar .toggle {
					text-decoration: none;
					position: absolute;
					left: 0;
					top: 0;
					width: 80px;
					height: 60px;
					border: 0;
				}

					#titleBar .toggle:active:before {
						opacity: 0.5;
					}

			#navPanel {
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transform: translateX(-275px);
				-webkit-transform: translateX(-275px);
				-ms-transform: translateX(-275px);
				transform: translateX(-275px);
				-moz-transition: -moz-transform 0.5s ease;
				-webkit-transition: -webkit-transform 0.5s ease;
				-ms-transition: -ms-transform 0.5s ease;
				transition: transform 0.5s ease;
				display: block;
				height: 100%;
				left: 0;
				overflow-y: auto;
				position: fixed;
				top: 0;
				width: 275px;
				z-index: 10002;
				background: #444;
				border-right: solid 2px #3c3c3c;
				font-weight: 400;
				text-transform: uppercase;
				color: #888;
				letter-spacing: 2px;
				font-size: 0.85em;
			}

				#navPanel .link {
					display: block;
					color: #ddd;
					text-decoration: none;
					height: 44px;
					line-height: 44px;
					border: 0;
					border-top: solid 1px #3c3c3c;
					padding: 0 1em 0 1em;
				}

					#navPanel .link:first-child {
						border-top: 0;
					}

					#navPanel .link.depth-0 {
						font-weight: 600;
						color: #fff;
					}

				#navPanel .indent-1 {
					display: inline-block;
					width: 1em;
				}

				#navPanel .indent-2 {
					display: inline-block;
					width: 2em;
				}

				#navPanel .indent-3 {
					display: inline-block;
					width: 3em;
				}

				#navPanel .indent-4 {
					display: inline-block;
					width: 4em;
				}

				#navPanel .indent-5 {
					display: inline-block;
					width: 5em;
				}

				#navPanel .depth-0 {
					color: #fff;
				}

			body.navPanel-visible #page-wrapper {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #titleBar {
				-moz-transform: translateX(275px);
				-webkit-transform: translateX(275px);
				-ms-transform: translateX(275px);
				transform: translateX(275px);
			}

			body.navPanel-visible #navPanel {
				-moz-transform: translateX(0);
				-webkit-transform: translateX(0);
				-ms-transform: translateX(0);
				transform: translateX(0);
			}

		/* Sidebar */

			#sidebar {
				padding-top: 6em;
			}

	}

/* Small */

	@media screen and (max-width: 736px) {

		/* Basic */

			body, input, textarea, select {
				font-size: 11pt;
			}

			h2, h3, h4, h5, h6 {
				font-size: 1.2em;
				letter-spacing: 2px;
				text-align: center;
				margin: 0 0 1em 0;
			}

				h2 br, h3 br, h4 br, h5 br, h6 br {
					display: none;
				}

		/* Image */

			.image.featured {
				margin: 0 0 1.5em 0;
			}

			.image.left {
				max-width: 35%;
			}

			.image.right {
				max-width: 35%;
			}

		/* Button */

			input[type="button"],
			input[type="submit"],
			input[type="reset"],
			button,
			.button {
				letter-spacing: 2px;
				display: block;
				padding: 1em 0 1em 0;
				width: 100%;
			}

		/* Actions */

			ul.actions li {
				display: block;
				margin: 1em 0 0 0;
			}

				ul.actions li:first-child {
					margin-top: 0;
				}

		/* Box */

			.box.excerpt header {
				text-align: center;
			}

		/* Header */

			#header > .container {
				padding: 6em 0 4em 0;
			}

			#header h1 {
				font-size: 2em;
				letter-spacing: 8px;
				line-height: 1.325em;
			}

			#header p {
				margin: 1.25em 0 0 0;
				letter-spacing: 2px;
			}

		/* Banner */

			#banner {
				padding: 5em 0;
			}

				#banner > .container {
					padding: 0;
				}

					#banner > .container:before, #banner > .container:after {
						display: none;
					}

				#banner p {
					font-size: 1.25em;
				}

		/* Features */

			#features {
				padding: 2em 0;
			}

				#features ul.actions {
					margin-top: 0;
				}

		/* Main */

			#main {
				padding: 2em 0;
			}

		/* Content */

			#content > section,
			#content > article {
				margin: 3em 0 0 0;
				padding: 3em 0 0 0;
			}

		/* Sidebar */

			#sidebar {
				padding-top: 3em;
			}

				#sidebar > section,
				#sidebar > article {
					margin: 3em 0 0 0;
					padding: 3em 0 0 0;
				}

		/* Footer */

			#footer {
				padding: 2em 0;
			}

				#footer ul.icons {
					margin-bottom: 0;
				}

		/* Copyright */

			#copyright .links {
				margin-bottom: 0;
			}

				#copyright .links li {
					display: block;
					padding-left: 0;
					margin-left: 0;
					border-left: 0;
				}

	}
`;

export default stronglyTypedStyle;
