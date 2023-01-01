import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element'
import { customElement, } from 'lit/decorators.js'
import containerStyle from '../demo/container-style'
import resetStyle from '../demo/reset-style'
import rowStyle from '../demo/row-style'
import alphaStyle from './alpha-style'
import {
  cogIcon,
  flashIcon,
  starIcon,
  lockIcon,
  whatsappIcon,
  twitterIcon,
  dribbbleIcon,
  tumblrIcon,
  instagramIcon,
} from '../demo/icons'

@customElement( 'alpha-app' )
export class AlphaApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    containerStyle,
    rowStyle,
    alphaStyle,
    css`
  `, ]

  render() {
    return html`

		<div id="page-wrapper">

			<!-- Header -->
				<header id="header">
					<h1><a href="index.html">Alpha</a> by HTML5 UP</h1>
					<nav id="nav">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li>
								<a href="#" class="icon solid fa-angle-down">Layouts</a>
								<ul>
									<li><a href="generic.html">Generic</a></li>
									<li><a href="contact.html">Contact</a></li>
									<li><a href="elements.html">Elements</a></li>
									<li>
										<a href="#">Submenu</a>
										<ul>
											<li><a href="#">Option One</a></li>
											<li><a href="#">Option Two</a></li>
											<li><a href="#">Option Three</a></li>
											<li><a href="#">Option Four</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li><a href="#" class="button">Sign Up</a></li>
						</ul>
					</nav>
				</header>

			<!-- Banner -->
				<section id="banner">
					<h2>Alpha</h2>
					<p>Another fine responsive site template freebie by HTML5 UP.</p>
					<ul class="actions special">
						<li><a href="#" class="button primary">Sign Up</a></li>
						<li><a href="#" class="button">Learn More</a></li>
					</ul>
				</section>

			<!-- Main -->
				<section id="main" class="container">

					<section class="box special">
						<header class="major">
							<h2>Introducing the ultimate mobile app
							<br />
							for doing stuff with your phone</h2>
							<p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
							adipiscing nunc adipiscing. Condimentum turpis massa.</p>
						</header>
						<span class="image featured"><img src="https://picsum.photos/id/3/1920/600" alt="" /></span>
					</section>

					<section class="box special features">
						<div class="features-row">
							<section class="features-section">
								<span class="icon major accent2">
                  <div>
                    ${ cogIcon }
                  </div>
                </span>
								<h3>Magna etiam</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
							<section class="features-section">
                <div class="icon solid major accent3">
                  <div>
                    ${ starIcon }
                  </div>
                </div>
								<h3>Ipsum dolor</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
						</div>
						<div class="features-row">
							<section>
                <div class="icon solid major accent4">
                  <div>
                    ${ flashIcon }
                  </div>
                </div>
								<h3>Sed feugiat</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
							<section>
                <div class="icon solid major accent5">
                  <div>
                    ${ lockIcon }
                  </div>
                </div>
								<h3>Enim phasellus</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
						</div>
					</section>

					<div class="row">
						<div class="col-6 col-12-narrower">

							<section class="box special">
								<span class="image featured">
                  <div style="">
                    <img src="https://picsum.photos/id/191/600/300" alt="" />
                  </div>
                </span>
								<h3>Sed lorem adipiscing</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								<ul class="actions special">
									<li><a href="#" class="button alt">Learn More</a></li>
								</ul>
							</section>

						</div>
						<div class="col-6 col-12-narrower">

							<section class="box special">
								<span class="image featured"><img src="https://picsum.photos/id/447/600/300" alt="" /></span>
								<h3>Accumsan integer</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								<ul class="actions special">
									<li><a href="#" class="button alt">Learn More</a></li>
								</ul>
							</section>

						</div>
					</div>

				</section>

			<!-- CTA -->
				<section id="cta">

					<h2>Sign up for beta access</h2>
					<p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc.</p>

					<form>
						<div class="row gtr-50 gtr-uniform">
							<div class="col-8 col-12-mobilep">
								<input type="email" name="email" id="email" placeholder="Email Address" />
							</div>
							<div class="col-4 col-12-mobilep">
								<input type="submit" value="Sign Up" class="fit" />
							</div>
						</div>
					</form>

				</section>

			<!-- Footer -->
				<footer id="footer">
					<ul class="icons">
						<li>
              <a href="#" class="icon brands">
                ${ whatsappIcon }
              </a>
            </li>
						<li>
              <a href="#" class="icon brands">
                ${ twitterIcon }
              </a>
            </li>
						<li>
              <a href="#" class="icon brands">
                ${ dribbbleIcon }
              </a>
            </li>
						<li>
              <a href="#" class="icon brands">
                ${ tumblrIcon }
              </a>
            </li>
						<li>
              <a href="#" class="icon brands">
                ${ instagramIcon }
              </a>
            </li>
					</ul>
					<ul class="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</footer>

		</div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'alpha-app': AlphaApp,
  }
}
