import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import prologueStyle from './prologue-style'
import {
  homeIcon,
  flashIcon,
  starIcon,
  whatsappIcon,
  twitterIcon,
  dribbbleIcon,
  tumblrIcon,
  envelopeIcon,
} from '../demo/icons'
import resetStyle from '../demo/reset-style';
import containerStyle from '../demo/container-style';
import rowStyle from '../demo/row-style';

@customElement( 'prologue-app' )
export class PrologueApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    containerStyle,
    rowStyle,
    prologueStyle,
    css`
  `, ]

  render() {
    return html`
      <div id="page-wrapper">

    	<!-- Header -->
			<div id="header">

				<div class="top">

					<!-- Logo -->
						<div id="logo">
							<span class="image avatar48"><img src="https://picsum.photos/id/996/300/300" alt="" /></span>
							<h1 id="title">Jane Doe</h1>
							<p>Hyperspace Engineer</p>
						</div>

					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="active">

                  <span class="icon">
                    ${ homeIcon }
                    Intro
                  </span>
                </a></li>
								<li><a href="#portfolio" id="portfolio-link">
                  <span class="icon">
                    ${ starIcon }
                    Portfolio
                  </span>
                </a></li>
								<li><a href="#about" id="about-link">
                  <span class="icon">
                    ${ flashIcon }
                    About Me
                  </span>
                </a></li>
								<li><a href="#contact" id="contact-link">
                  <span class="icon">
                    ${ envelopeIcon }
                    Contact</span>
                  </a>
                </li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

					<!-- Social Icons -->
						<ul class="icons">
							<li><a href="#" class="icon brands">
                ${ whatsappIcon }
                <span class="label">Whatsapp</span>
              </a></li>
							<li><a href="#" class="icon brands fa-twitter">
                ${ twitterIcon }
                <span class="label">Twitter</span>
              </a></li>
							<li><a href="#" class="icon brands fa-dribbble">
                ${ dribbbleIcon }
                <span class="label">Dribbble</span>
              </a></li>
							<li><a href="#" class="icon brands">
                ${ tumblrIcon }
                <span class="label">Tumblr</span>
              </a></li>
							<li><a href="#" class="icon">
                ${ envelopeIcon }
                <span class="label">Email</span>
              </a></li>
						</ul>

				</div>

			</div>

		<!-- Main -->
			<div id="main">

				<!-- Intro -->
					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a> responsive<br />
								site template designed by <a href="http://html5up.net">HTML5 UP</a>.</h2>
								<p>Ligula scelerisque justo sem accumsan diam quis<br />
								vitae natoque dictum sollicitudin elementum.</p>
							</header>

							<footer>
								<a href="#portfolio" class="button scrolly">Magna Aliquam</a>
							</footer>

						</div>
					</section>

				<!-- Portfolio -->
					<section id="portfolio" class="two">
						<div class="container">

							<header>
								<h2>Portfolio</h2>
							</header>

							<p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
							egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
							Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
							fusce hendrerit lacus ridiculus.</p>

							<div class="row">
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="#" class="image fit"><img src="https://picsum.photos/id/487/300/200" alt="" /></a>
										<header>
											<h3>Ipsum Feugiat</h3>
										</header>
									</article>
									<article class="item">
										<a href="#" class="image fit"><img src="https://picsum.photos/id/492/300/200" alt="" /></a>
										<header>
											<h3>Rhoncus Semper</h3>
										</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="#" class="image fit"><img src="https://picsum.photos/id/65/300/320" alt="" /></a>
										<header>
											<h3>Magna Nullam</h3>
										</header>
									</article>
									<article class="item">
										<a href="#" class="image fit"><img src="https://picsum.photos/id/831/300/200" alt="" /></a>
										<header>
											<h3>Natoque Vitae</h3>
										</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="#" class="image fit"><img src="https://picsum.photos/id/804/300/200" alt="" /></a>
										<header>
											<h3>Dolor Penatibus</h3>
										</header>
									</article>
									<article class="item">
										<a href="#" class="image fit"><img src="https://picsum.photos/id/828/300/200" alt="" /></a>
										<header>
											<h3>Orci Convallis</h3>
										</header>
									</article>
								</div>
							</div>

						</div>
					</section>

				<!-- About Me -->
					<section id="about" class="three">
						<div class="container">

							<header>
								<h2>About Me</h2>
							</header>

							<a href="#" class="image featured"><img src="https://picsum.photos/id/839/1200/500" alt="" /></a>

							<p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
							ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
							laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
							parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
							dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
							ornare iaculis.</p>

						</div>
					</section>

				<!-- Contact -->
					<section id="contact" class="four">
						<div class="container">

							<header>
								<h2>Contact</h2>
							</header>

							<p>Elementum sem parturient nulla quam placerat viverra
							mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
							donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
							orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>

							<form method="post" action="#">
								<div class="row">
									<div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
									<div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
									<div class="col-12">
										<textarea name="message" placeholder="Message"></textarea>
									</div>
									<div class="col-12">
										<input type="submit" value="Send Message" />
									</div>
								</div>
							</form>

						</div>
					</section>

			</div>

		<!-- Footer -->
			<div id="footer">

				<!-- Copyright -->
					<ul class="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

			</div>
      </div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'prologue-app': PrologueApp,
  }
}
