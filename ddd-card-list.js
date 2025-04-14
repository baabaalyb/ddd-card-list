import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
    this.accentColor = "#f0f0f0";
    this.primaryColor = "7";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      accentColor: { type: String, attribute: "data-accent" },
      primaryColor: { type: String, attribute: "data-primary" },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--card-list-accent, #f9f9f9);
          padding: 16px;
          font-family: 'Roboto', sans-serif;
        }

        .page-title {
          font-family: 'Roboto', sans-serif;
          font-size: 32px;
          font-weight: bold;
          margin-left: 16px;
          margin-bottom: 8px;
          color: var(--ddd-theme-default-nittanyNavy, #224e8a);
        }

        .wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        h3 span {
          font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        ::slotted(ddd-card) {
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="page-title">Campus Locations</div>
      <div class="wrapper">
        ${this.title ? html`<h3><span>${this.t.title}:</span> ${this.title}</h3>` : ''}
        <div class="grid">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
    `;
  }

  _handleSlotChange(e) {
    const slot = e.target;
    const assignedNodes = slot.assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);
    assignedNodes.forEach(node => {
      if (node.tagName.toLowerCase() === 'ddd-card') {
        node.setAttribute('data-primary', this.primaryColor);
      }
    });
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);
