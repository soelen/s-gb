import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import resetStyle from '../demo/reset-style'
import {
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
  envelopeIcon,
} from '../demo/icons'

import paradignShiftStyle from './paradigm-shift-style';

@customElement( 'paradigm-shift-app' )
export class ParadignShiftApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    paradignShiftStyle,
    css`
    :host {
      display: block;
    }
  `, ]

  render() {
    return html`
    	<!-- Wrapper -->
			<div id="wrapper">

				<!-- Intro -->
					<section class="intro">
						<header>
							<h1>Paradigm Shift</h1>
							<p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p>
							<ul class="actions">
								<li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
							</ul>
						</header>
						<div class="content">
							<span class="image fill" data-position="center"><img src="https://picsum.photos/id/669/711/899" alt="" /></span>
						</div>
					</section>

				<!-- Section -->
					<section id="first">
						<header>
							<h2>Magna sed nullam nisl adipiscing</h2>
						</header>
						<div class="content">
							<p><strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
							<span class="image main"><img src="https://picsum.photos/id/619/600/400" alt="" /></span>
						</div>
					</section>

				<!-- Section -->
					<section>
						<header>
							<h2>Feugiat consequat tempus ultrices</h2>
						</header>
						<div class="content">
							<p><strong>Etiam tristique libero</strong> eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.</p>
							<ul class="feature-icons">
								<li class="icon">
                  <span>
                    ${ homeIcon }
                  </span>
                  Consequat tempus
                </li>
								<li class="icon solid">
                  <span>
                    ${ cogIcon }
                  </span>
                  Etiam adipiscing
                </li>
								<li class="icon solid">
                  <span>
                    ${ flashIcon }
                  </span>
                  Libero nullam
                </li>
								<li class="icon solid fa-cog">
                  <span>
                    ${ starIcon }
                  </span>
                  Blandit condimentum
                </li>
								<li class="icon solid fa-map-marker-alt">
                  <span>
                    ${ lockIcon }
                  </span>
                  Lorem ipsum dolor
                </li>
								<li class="icon solid fa-code">
                  <span>
                    ${ envelopeIcon }
                  </span>
                  Nibh amet venenatis
                </li>
							</ul>
							<p>Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
						</div>
					</section>

				<!-- Section -->
					<section>
						<header>
							<h2>Ultrices erat magna sed condimentum</h2>
						</header>
						<div class="content">
							<p><strong>Integer mollis egestas</strong> nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>

							<!-- Section -->
								<section>
									<header>
										<h3>Erat aliquam</h3>
										<p>Vehicula ultrices dolor amet ultricies et condimentum. Magna sed etiam consequat, et lorem adipiscing sed dolor sit amet, consectetur amet do eiusmod tempor incididunt  ipsum suspendisse ultrices gravida.</p>
									</header>
									<div class="content">
										<div class="gallery">
											<a href="#" class="landscape"><img src="https://picsum.photos/id/473/600/400" alt="" /></a>
											<a href="#"><img src="https://picsum.photos/id/718/400/600" alt="" /></a>
											<a href="#"><img src="https://picsum.photos/id/60/400/600" alt="" /></a>
											<a href="#" class="landscape"><img src="https://picsum.photos/id/687/600/400" alt="" /></a>
										</div>
									</div>
								</section>

							<!-- Section -->
								<section>
									<header>
										<h3>Nisl consequat</h3>
										<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.</p>
									</header>
									<div class="content">
										<div class="gallery">
											<a href="#" class="landscape"><img src="https://picsum.photos/id/983/600/400" alt="" /></a>
											<a href="#"><img src="https://picsum.photos/id/535/400/600" alt="" /></a>
											<a href="#"><img src="https://picsum.photos/id/532/400/600" alt="" /></a>
										</div>
									</div>
								</section>

							<!-- Section -->
								<section>
									<header>
										<h3>Lorem gravida</h3>
										<p>Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore.  ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis.</p>
									</header>
									<div class="content">
										<div class="gallery">
											<a href="#" class="portrait"><img src="https://picsum.photos/id/639/400/600" alt="" /></a>
											<a href="#" class="portrait"><img src="https://picsum.photos/id/836/400/600" alt="" /></a>
											<a href="#" class="landscape"><img src="https://picsum.photos/id/949/600/400" alt="" /></a>
										</div>
									</div>
								</section>

						</div>
					</section>

				<!-- Section -->
					<section>
						<header>
							<h2>Duis sed adpiscing veroeros amet</h2>
						</header>
						<div class="content">
							<p><strong>Proin tempus feugiat</strong> sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.</p>
							<ul class="actions">
								<li><a href="#" class="button primary large">Get Started</a></li>
								<li><a href="#" class="button large">Learn More</a></li>
							</ul>
						</div>
					</section>

				<!-- Section -->
					<section>
						<header>
							<h2>Get in touch</h2>
						</header>
						<div class="content">
							<p><strong>Auctor commodo</strong> interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
							<form>
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
							</form>
						</div>
						<footer>
							<ul class="items">
								<li>
									<h3>Email</h3>
									<a href="#">information@untitled.ext</a>
								</li>
								<li>
									<h3>Phone</h3>
									<a href="#">(000) 000-0000</a>
								</li>
								<li>
									<h3>Address</h3>
									<span>1234 Somewhere Road, Nashville, TN 00000</span>
								</li>
								<li>
									<h3>Elsewhere</h3>
									<ul class="icons">
										<li><a href="#" class="icon brands">
                      ${ whatsappIcon }
                      <span class="label">Whatsapp</span></a>
                    </li>
										<li><a href="#" class="icon brands">
                      ${ twitterIcon }
                      <span class="label">Twitter</span></a>
                    </li>
										<li><a href="#" class="icon brands">
                      ${ dribbbleIcon }
                      <span class="label">Dribbble</span></a>
                    </li>
										<li><a href="#" class="icon brands">
                      ${ tumblrIcon }
                      <span class="label">Tumblr</span></a>
                    </li>
										<li><a href="#" class="icon brands">
                      ${ instagramIcon }
                      <span class="label">Instagram</span></a>
                    </li>
									</ul>
								</li>
							</ul>
						</footer>
					</section>

				<!-- Copyright -->
					<div class="copyright">&copy; Untitled. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>

			</div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'paradigm-shift-app': ParadignShiftApp,
  }
}
