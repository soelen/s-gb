import { css } from "lit";

const containerStyle = css`
/* Container */

	.container {
		margin: 0 auto;
		max-width: 100%;
		width: 70em;
	}

		@media screen and (max-width: 1680px) {

			.container {
				width: 70em;
			}

		}

		@media screen and (max-width: 1280px) {

			.container {
				width: calc(100% - 60px);
			}

		}

		@media screen and (max-width: 980px) {

			.container {
				width: calc(100% - 80px);
			}

		}

		@media screen and (max-width: 736px) {

			.container {
				width: calc(100% - 40px);
			}

		}
`;

export default containerStyle;
