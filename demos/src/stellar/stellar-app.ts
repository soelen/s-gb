import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import stellarStyle from './stellar-style';
import {
  rocketIcon,
  homeIcon,
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
import resetStyle from '../demo/reset-style';

@customElement( 'stellar-app' )
export class StellarApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    stellarStyle,
    css`
  `, ]

  render() {
    return html`

		<!-- Wrapper -->
			<div id="page-wrapper">
			<div id="wrapper">

				<!-- Header -->
					<header id="header" class="alt">
						<span class="logo">
              ${ rocketIcon }
            </span>
						<h1>Stellar</h1>
						<p>Just another free, fully responsive site template<br />
						built by <a href="https://twitter.com/ajlkn">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>.</p>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">Introduction</a></li>
							<li><a href="#first">First Section</a></li>
							<li><a href="#second">Second Section</a></li>
							<li><a href="#cta">Get Started</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">

						<!-- Introduction -->
							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2>Ipsum sed adipiscing</h2>
										</header>
										<p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
										adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
										Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
										<ul class="actions">
											<li><a href="generic.html" class="button">Learn More</a></li>
										</ul>
									</div>
									<span class="image"><img src="https://picsum.photos/id/816/400/400" alt="" /></span>
								</div>
							</section>

						<!-- First Section -->
							<section id="first" class="main special">
								<header class="major">
									<h2>Magna veroeros</h2>
								</header>
								<ul class="features">
									<li>
										<div class="icon major style1">
                      <div>
                        ${ cogIcon }
                      </div>
                    </div>
										<h3>Ipsum consequat</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
									<li>
										<div class="icon major style2">
                      <div>
                        ${ flashIcon }
                      </div>
                    </div>
										<h3>Amed sed feugiat</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
									<li>
										<div class="icon major style3">
                      <div>
                        ${ starIcon }
                      </div>
                    </div>
										<h3>Dolor nullam</h3>
										<p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
									</li>
								</ul>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.html" class="button">Learn More</a></li>
									</ul>
								</footer>
							</section>

						<!-- Second Section -->
							<section id="second" class="main special">
								<header class="major">
									<h2>Ipsum consequat</h2>
									<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
									posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
								</header>
								<ul class="statistics">
									<li class="style1">
										<span class="icon">
                      ${ homeIcon }
                    </span>
										<strong>5,120</strong> Etiam
									</li>
									<li class="style2">
										<span class="icon">
                      ${ cogIcon }
                    </span>
										<strong>8,192</strong> Magna
									</li>
									<li class="style3">
										<span class="icon">
                      ${ flashIcon }
                    </span>
										<strong>2,048</strong> Tempus
									</li>
									<li class="style4">
										<span class="icon">
                      ${ starIcon }
                    </span>
										<strong>4,096</strong> Aliquam
									</li>
									<li class="style5">
										<span class="icon">
                      ${ lockIcon }
                    </span>
										<strong>1,024</strong> Nullam
									</li>
								</ul>
								<p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.html" class="button">Learn More</a></li>
									</ul>
								</footer>
							</section>

						<!-- Get Started -->
							<section id="cta" class="main special">
								<header class="major">
									<h2>Congue imperdiet</h2>
									<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
									posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
								</header>
								<footer class="major">
									<ul class="actions special">
										<li><a href="generic.html" class="button primary">Get Started</a></li>
										<li><a href="generic.html" class="button">Learn More</a></li>
									</ul>
								</footer>
							</section>

					</div>

				<!-- Footer -->
					<footer id="footer">
						<section>
							<h2>Aliquam sed mauris</h2>
							<p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
							<ul class="actions">
								<li><a href="generic.html" class="button">Learn More</a></li>
							</ul>
						</section>
						<section>
							<h2>Etiam feugiat</h2>
							<dl class="alt">
								<dt>Address</dt>
								<dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
								<dt>Phone</dt>
								<dd>(000) 000-0000 x 0000</dd>
								<dt>Email</dt>
								<dd><a href="#">information@untitled.tld</a></dd>
							</dl>
							<ul class="icons">
								<li><a href="#" class="icon brands alt">
                  ${ whatsappIcon }
                  <span class="label">Whatsapp</span></a>
                </li>
								<li><a href="#" class="icon brands alt">
                  ${ twitterIcon }
                  <span class="label">Twitter</span></a>
                </li>
								<li><a href="#" class="icon brands alt">
                  ${ dribbbleIcon }
                  <span class="label">Dribbble</span></a>
                </li>
								<li><a href="#" class="icon brands alt">
                  ${ tumblrIcon }
                  <span class="label">Tumblr</span></a>
                </li>
								<li><a href="#" class="icon brands alt">
                  ${ instagramIcon }
                  <span class="label">Instagram</span>
                </a></li>
							</ul>
						</section>
						<p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
					</footer>

			</div>
			</div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stellar-app': StellarApp,
  }
}
