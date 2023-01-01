import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'

import fortyStyle from './forty-style';
import {
  homeIcon,
  whatsappIcon,
  twitterIcon,
  dribbbleIcon,
  tumblrIcon,
  instagramIcon,
  envelopeIcon,
  phoneIcon,
} from '../demo/icons'
import resetStyle from '../demo/reset-style';

@customElement( 'forty-app' )
export class FortyApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    fortyStyle,
    css`
  `, ]

  render() {
    return html`
    <div id="page-wrapper">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header" class="alt">
						<a href="index.html" class="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
						<nav>
							<a href="#menu">Menu</a>
						</nav>
					</header>

				<!-- Menu -->
					<nav id="menu">
						<ul class="links">
							<li><a href="index.html">Home</a></li>
							<li><a href="landing.html">Landing</a></li>
							<li><a href="generic.html">Generic</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
						<ul class="actions stacked">
							<li><a href="#" class="button primary fit">Get Started</a></li>
							<li><a href="#" class="button fit">Log In</a></li>
						</ul>
					</nav>

				<!-- Banner -->
					<section id="banner" class="major">
						<div class="inner">
							<header class="major">
								<h1>Hi, my name is Forty</h1>
							</header>
							<div class="content">
								<p>A responsive site template designed by HTML5 UP<br />
								and released under the Creative Commons.</p>
								<ul class="actions">
									<li><a href="#one" class="button next scrolly">Get Started</a></li>
								</ul>
							</div>
						</div>
					</section>

				<!-- Main -->
					<div id="main">

						<!-- One -->
							<section id="one" class="tiles">
								<article>
                  <img class="image" src="https://picsum.photos/id/1005/600/600" alt="" />
									<header class="major">
										<h3><a href="landing.html" class="link">Aliquam</a></h3>
										<p>Ipsum dolor sit amet</p>
									</header>
								</article>
								<article>
                  <img class="image" src="https://picsum.photos/id/382/800/400" alt="" />
									<header class="major">
										<h3><a href="landing.html" class="link">Tempus</a></h3>
										<p>feugiat amet tempus</p>
									</header>
								</article>
								<article>
                  <img class="image" src="https://picsum.photos/id/814/800/400" alt="" />
									<header class="major">
										<h3><a href="landing.html" class="link">Magna</a></h3>
										<p>Lorem etiam nullam</p>
									</header>
								</article>
								<article>
                  <img class="image" src="https://picsum.photos/id/582/600/600" alt="" />
									<header class="major">
										<h3><a href="landing.html" class="link">Ipsum</a></h3>
										<p>Nisl sed aliquam</p>
									</header>
								</article>
								<article>
                  <img class="image" src="https://picsum.photos/id/1033/600/600" alt="" />
									<header class="major">
										<h3><a href="landing.html" class="link">Consequat</a></h3>
										<p>Ipsum dolor sit amet</p>
									</header>
								</article>
								<article>
                  <img class="image" src="https://picsum.photos/id/823/600/600" alt="" />
									<header class="major">
										<h3><a href="landing.html" class="link">Etiam</a></h3>
										<p>Feugiat amet tempus</p>
									</header>
								</article>
							</section>

						<!-- Two -->
							<section id="two">
								<div class="inner">
									<header class="major">
										<h2>Massa libero</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
									<ul class="actions">
										<li><a href="landing.html" class="button next">Get Started</a></li>
									</ul>
								</div>
							</section>

					</div>

				<!-- Contact -->
					<section id="contact">
						<div class="inner">
							<section>
								<form method="post" action="#">
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send Message" class="primary" /></li>
										<li><input type="reset" value="Clear" /></li>
									</ul>
								</form>
							</section>
							<section class="split">
								<section>
									<div class="contact-method">
                    ${ envelopeIcon }
                    <div>
                      <h3>Email</h3>
                      <a href="#">information@untitled.tld</a>
                    </div>
									</div>
								</section>
								<section>
									<div class="contact-method">
                    ${ phoneIcon }
                    <div>
                      <h3>Phone</h3>
                      <span>(000) 000-0000 x12387</span>
                    </div>
									</div>
								</section>
								<section>
									<div class="contact-method">
                    ${ homeIcon }
                    <div>
                      <h3>Address</h3>
                      <span>1234 Somewhere Road #5432<br />
                      Nashville, TN 00000<br />
                      United States of America</span>
                    </div>
									</div>
								</section>
							</section>
						</div>
					</section>

				<!-- Footer -->
					<footer id="footer">
						<div class="inner">
							<ul class="icons">
								<li><a href="#" class="icon brands alt">
                  ${ whatsappIcon }
                  <span class="label">Whatsapp</span>
                </a></li>
								<li><a href="#" class="icon brands alt">
                  ${ twitterIcon }
                  <span class="label">Twitter</span>
                </a></li>
								<li><a href="#" class="icon brands alt">
                  ${ dribbbleIcon }
                  <span class="label">Dribbble</span>
                </a></li>
								<li><a href="#" class="icon brands alt">
                  ${ tumblrIcon }
                  <span class="label">Tumblr</span>
                </a></li>
								<li><a href="#" class="icon brands alt">
                  ${ instagramIcon }
                  <span class="label">Instagram</span>
                </a></li>
							</ul>
							<ul class="copyright">
								<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>

			</div>
    </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forty-app': FortyApp,
  }
}
