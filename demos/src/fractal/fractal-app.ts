import { css, html } from 'lit'
import { DemoElement } from '../demo/demo-element';
import { customElement, } from 'lit/decorators.js'
import fractalStyle from './fractal-style'
import {
  homeIcon,
  cogIcon,
  flashIcon,
  starIcon,
  lockIcon,
  whatsappIcon,
  twitterIcon,
  instagramIcon,
  envelopeIcon,
  chevronDownIcon,
} from '../demo/icons'
import resetStyle from '../demo/reset-style';

@customElement(  'fractal-app' )
export class FractalApp extends DemoElement {

  static styles = [
    ...super.styles,
    resetStyle,
    fractalStyle,
    css`
  `, ]

  render() {
    return html`
    	<header id="header">
				<div class="content">
					<h1><a href="#">Fractal</a></h1>
					<p>Just a simple, single page responsive<br />
					template brought to you by <a href="http://html5up.net">HTML5 UP</a></p>
					<ul class="actions">
						<li><a href="#" class="button primary icon">
              ${ envelopeIcon }
              Contact
            </a></li>
						<li><a href="#one" class="button icon">
              ${ chevronDownIcon }
              Learn More
            </a></li>
					</ul>
				</div>
				<div class="image phone"><div class="inner"><img src="https://picsum.photos/id/64/200/300" alt="" /></div></div>
			</header>

		<!-- One -->
			<section id="one" class="wrapper style2 special">
				<header class="major">
					<h2>Sed ipsum magna lorem tempus amet<br />
					vehicula et gravida elementum</h2>
				</header>
				<ul class="icons major">
					<li><span class="icon">
            ${ cogIcon }
            <span class="label">Cog</span>
          </span></li>
					<li><span class="icon">
            ${ flashIcon }
            <span class="label">Flash</span>
          </span></li>
					<li><span class="icon">
            ${ starIcon }
            <span class="label">Star</span>
          </span></li>
				</ul>
			</section>

		<!-- Two -->
			<section id="two" class="wrapper">
				<div class="inner alt">
					<section class="spotlight">
						<div class="image"><img src="https://picsum.photos/id/668/300/300" alt="" /></div>
						<div class="content">
							<h3>Magna sed ultrices</h3>
							<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>
						</div>
					</section>
					<section class="spotlight">
						<div class="image"><img src="https://picsum.photos/id/527/300/300" alt="" /></div>
						<div class="content">
							<h3>Ultrices nullam aliquam</h3>
							<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>
						</div>
					</section>
					<section class="spotlight">
						<div class="image"><img src="https://picsum.photos/id/703/300/300" alt="" /></div>
						<div class="content">
							<h3>Aliquam sed magna</h3>
							<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>
						</div>
					</section>
					<section class="special">
						<ul class="icons labeled">
							<li><span class="icon">
                ${ homeIcon }
                <span class="label">Ipsum lorem accumsan</span>
              </span></li>
							<li><span class="icon">
                ${ cogIcon }
                <span class="label">Sed vehicula elementum</span>
              </span></li>
							<li><span class="icon">
                ${ flashIcon }
                <span class="label">Elit fusce consequat</span>
              </span></li>
							<li><span class="icon">
                ${ starIcon }
                <span class="label">Lorem nullam tempus</span>
              </span></li>
							<li><span class="icon">
                ${ lockIcon }
                <span class="label">Adipiscing amet sapien</span>
              </span></li>
						</ul>
					</section>
				</div>
			</section>

		<!-- Three -->
			<section id="three" class="wrapper style2 special">
				<header class="major">
					<h2>Magna leo sapien gravida</h2>
					<p>Gravida at leo elementum elit fusce accumsan dui libero, quis vehicula<br />
					lectus ultricies eu. In convallis amet leo sapien iaculis efficitur.</p>
				</header>
				<ul class="actions special">
					<li><a href="#" class="button primary icon">
            ${ envelopeIcon }
            Contact
          </a></li>
					<li><a href="#" class="button">
            Learn More
          </a></li>
				</ul>
			</section>

		<!-- Footer -->
			<footer id="footer">
				<ul class="icons">
					<li><a href="#" class="icon brands">
            ${ whatsappIcon }
            <span class="label">Whatsapp</span>
          </a></li>
					<li><a href="#" class="icon brands">
            ${ twitterIcon }
            <span class="label">Twitter</span>
          </a></li>
					<li><a href="#" class="icon brands">
            ${ instagramIcon }
            <span class="label">Instagram</span>
          </a></li>
				</ul>
				<p class="copyright">&copy; Untitled. Credits: <a href="http://html5up.net">HTML5 UP</a></p>
			</footer>


    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fractal-app': FractalApp,
  }
}
