import { LitElement, css, html, PropertyValueMap, } from 'lit'
import { customElement, state, } from 'lit/decorators.js'
import '../picsum/picsum-app';
import '../alpha/alpha-app'
import '../dopetrope/dopetrope-app'
import '../editorial/editorial-app'
import '../fractal/fractal-app';
import '../hyperspace/hyperspace-app';
import '../paradigm-shift/paradigm-shift-app';
import '../prologue/prologue-app';
import '../solid-state/solid-state-app';
import '../stellar/stellar-app';
import '../strata/strata-app';
import '../strongly-typed/strongly-typed-app';
import '../forty/forty-app';
import '../phantom/phantom-app';
import { Router, PathRouteConfig,  } from '@lit-labs/router';

export class RoutesUpdatedEvent extends Event {

  static readonly eventName = 'lit-routes-updated';
  // readonly path: string;
  _path = '';
  get path() {
    return this._path;
  }
  set path( path:string ) {
    this._path = path;
  }
  onDisconnect?: () => void;

  constructor( path: string ) {
    super(RoutesUpdatedEvent.eventName, {
      bubbles: true,
      composed: true,
      cancelable: false,
    });
    this.path = path;
  }
}

declare global {
  interface WindowEventMap {
    [RoutesUpdatedEvent.eventName]: RoutesUpdatedEvent;
  }
}

export const goto = ( path:string ) => {
  window.dispatchEvent( new RoutesUpdatedEvent( path ) );
}


@customElement('demo-app')
export class DemoApp extends LitElement {

  apps: PathRouteConfig[] = [{
    path: '/forty',
    name: 'Forty',
    render: () => html`<forty-app></forty-app>`,
  }, {
    path: '/phantom',
    name: 'Phantom',
    render: () => html`<phantom-app></phantom-app>`,
  }, {
    path: '/fractal',
    name: 'Fractal',
    render: () => html`<fractal-app></fractal-app>`,
  }, {
    path: '/hyperspace',
    name: 'Hyperspace',
    render: () => html`<hyperspace-app></hyperspace-app>`,
  }, {
    path: '/paradigm-shift',
    name: 'Paradigm Shift',
    render: () => html`<paradigm-shift-app></paradigm-shift-app>`,
  }, {
    path: '/prologue',
    name: 'Prologue',
    render: () => html`<prologue-app></prologue-app>`,
  }, {
    path: '/solid-state',
    name: 'Solid State',
    render: () => html`<solid-state-app></solid-state-app>`,
  }, {
    path: '/stellar',
    name: 'Stellar',
    render: () => html`<stellar-app></stellar-app>`,
  }, {
    path: '/strata',
    name: 'Strata',
    render: () => html`<strata-app></strata-app>`,
  }, {
    path: '/editorial',
    name: 'Editorial',
    render: () => html`<editorial-app></editorial-app>`,
  }, {
    path: '/strongly-typed',
    name: 'Strongly Typed',
    render: () => html`<strongly-typed-app></strongly-typed-app>`,
  }, {
    path: '/alpha',
    name: 'Alpha',
    render: () => html`<alpha-app></alpha-app>`,
  }, {
    path: '/dopetrope',
    name: 'Dopetrope',
    render: () => html`<dopetrope-app></dopetrope-app>`,
  // }, {
  //   path: '/picsum',
  //   name: 'Picsum',
  //   render: () =>  html`<picsum-app></picsum-app>`,
    }
  ]

  @state() private _routes = new Router( this, this.apps );
  @state() previous: PathRouteConfig = this.apps[this.apps.length - 1 ];
  @state() current: PathRouteConfig = this.apps[0];
  @state() next: PathRouteConfig = this.apps[1];

  @state() appIndex = 0;

  static styles = [
    css`
    :host {
      display: block;
    }
    header {
      position: sticky;
      top: 0;
      background: pink;
      padding: 16px;
      z-index: 2000;
    }
    *, *::before, *::after {
      box-sizing: border-box;
    }
  `, ];

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    window.addEventListener( RoutesUpdatedEvent.eventName, (event:RoutesUpdatedEvent) => {
      this._routes.goto( event.path )
      history.pushState( {}, '',event.path);
      this.current = this._currentPage();
      this.previous = this._previousPage();
      this.next = this._nextPage();
    })
      this.current = this._currentPage();
      this.previous = this._previousPage();
      this.next = this._nextPage();
  }

  render() {
    return html`
      <header>
        <button @click="${ () => {
          // this._routes.goto( this.previous.path )
          goto( this.previous.path );
          // history.pushState( {}, '',this.previous.path );
        }}">${ this.previous.name }</button>
        ${ this.current.name }
        <button @click="${ () => {
          goto( this.next.path );
          // this._routes.goto( this.next.path )
          // history.pushState( {}, '',this.next.path );
        }}">${ this.next.name }</button>
      </header>
      <main>${this._routes.outlet()}</main>
    `;
  }

  private _previousPage(): PathRouteConfig {
    const routeIndex = this.apps.findIndex( app => app.path === location.pathname );

    if( routeIndex === 0 ) return this.apps[ this.apps.length - 1 ];
    // if( routeIndex === this.apps.length -1 ) return this.apps[ 0 ];
    return this.apps[ routeIndex - 1 ];
  }

  private _currentPage(): PathRouteConfig {

    const routeConfig = this.apps.find( app => app.path === location.pathname );

    return routeConfig ? routeConfig : this.apps[ 0 ];
  }

  private _nextPage(): PathRouteConfig {
    const routeIndex = this.apps.findIndex( app => app.path === location.pathname );

    if( routeIndex === this.apps.length -1 ) return this.apps[ 0 ];
    return this.apps[ routeIndex + 1 ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-app': DemoApp,
  }
}
