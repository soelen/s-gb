import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import solidStateStyle from './solid-state-style'
import {
  rocketIcon,
  homeIcon,
  twitterIcon,
  dribbbleIcon,
  instagramIcon,
  envelopeIcon,
  phoneIcon,
  menuIcon,
} from '../demo/icons'
import resetStyle from '../demo/reset-style';

@customElement( 'solid-state-app' )
export class SolidStateApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    solidStateStyle,
    css`
  `, ]

  render() {
    return html`

		<!-- Page Wrapper -->
			<div id="page-wrapper">

				<!-- Header -->
					<header id="header" class="alt">
						<nav>
							<a href="#menu">
                Menu
                ${ menuIcon }
              </a>
						</nav>
					</header>

				<!-- Menu -->
					<nav id="menu">
						<div class="inner">
							<h2>Menu</h2>
							<ul class="links">
								<li><a href="index.html">Home</a></li>
								<li><a href="generic.html">Generic</a></li>
								<li><a href="elements.html">Elements</a></li>
								<li><a href="#">Log In</a></li>
								<li><a href="#">Sign Up</a></li>
							</ul>
							<a href="#" class="close">Close</a>
						</div>
					</nav>

				<!-- Banner -->
					<section id="banner">
						<div class="inner">
							<div class="logo"><span class="icon">
                ${ rocketIcon }
              </span></div>
							<h2>This is Solid State</h2>
							<p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
						</div>
					</section>

				<!-- Wrapper -->
					<section id="wrapper">

						<!-- One -->
							<section id="one" class="wrapper spotlight style1">
								<div class="inner">
									<a href="#" class="image"><img src="https://picsum.photos/id/628/300/300" alt="" /></a>
									<div class="content">
										<h2 class="major">Magna arcu feugiat</h2>
										<p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>

						<!-- Two -->
							<section id="two" class="wrapper alt spotlight style2">
								<div class="inner">
									<a href="#" class="image"><img src="https://picsum.photos/id/1005/300/300" alt="" /></a>
									<div class="content">
										<h2 class="major">Tempus adipiscing</h2>
										<p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>

						<!-- Three -->
							<section id="three" class="wrapper spotlight style3">
								<div class="inner">
									<a href="#" class="image"><img src="https://picsum.photos/id/455/300/300" alt="" /></a>
									<div class="content">
										<h2 class="major">Nullam dignissim</h2>
										<p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
										<a href="#" class="special">Learn more</a>
									</div>
								</div>
							</section>

						<!-- Four -->
							<section id="four" class="wrapper alt style1">
								<div class="inner">
									<h2 class="major">Vitae phasellus</h2>
									<p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
									<section class="features">
										<article>
											<a href="#" class="image"><img src="https://picsum.photos/id/876/600/400" alt="" /></a>
											<h3 class="major">Sed feugiat lorem</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="https://picsum.photos/id/880/600/400" alt="" /></a>
											<h3 class="major">Nisl placerat</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="https://picsum.photos/id/767/600/400" alt="" /></a>
											<h3 class="major">Ante fermentum</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
										<article>
											<a href="#" class="image"><img src="https://picsum.photos/id/652/600/400" alt="" /></a>
											<h3 class="major">Fusce consequat</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="#" class="special">Learn more</a>
										</article>
									</section>
									<ul class="actions">
										<li><a href="#" class="button">Browse All</a></li>
									</ul>
								</div>
							</section>

					</section>

				<!-- Footer -->
					<section id="footer">
						<div class="inner">
							<h2 class="major">Get in touch</h2>
							<p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
							<form method="post" action="#">
								<div class="fields">
									<div class="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="4"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
							<ul class="contact">
								<li class="icon">
                  ${ homeIcon }
                  <div>
                    Untitled Inc<br />
                    1234 Somewhere Road Suite #2894<br />
                    Nashville, TN 00000-0000
                  </div>
								</li>
								<li class="icon">
                  ${ phoneIcon }
                  <div>
                    (000) 000-0000
                  </div>
                </li>
								<li class="icon">
                  ${ envelopeIcon }
                  <div>
                    <a href="#">information@untitled.tld</a>
                  </div>
                </li>
								<li class="icon brands">
                  ${ twitterIcon }
                  <div>
                    <a href="#">twitter.com/untitled-tld</a>
                  </div>
                </li>
								<li class="icon brands">
                  ${ dribbbleIcon }
                  <div>
                    <a href="#">dribbble.com/untitled-tld</a>
                  </div>
                </li>
								<li class="icon brands">
                  ${ instagramIcon }
                  <div>
                    <a href="#">instagram.com/untitled-tld</a>
                  </div>
                </li>
							</ul>
							<ul class="copyright">
								<li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>

			</div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'solid-ntate-app': SolidStateApp,
  }
}
