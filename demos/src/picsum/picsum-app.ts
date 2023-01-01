
import { LitElement, css, html, } from 'lit'
import { customElement, } from 'lit/decorators.js'

@customElement('picsum-app')
export class PicsumApp extends LitElement {

  static styles = [
    css`
  `, ]

  render() {
    return html`
        ${ Array( 1084 ).fill(4).map( (_, index ) => html`
            <img src="https://picsum.photos/id/${ index }/300/200" title="${ index }"> `)}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'picsum-app': PicsumApp,
  }
}
