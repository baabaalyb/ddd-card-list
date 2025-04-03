import { LitElement, html, css } from 'lit';
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return "ddd-card";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      link: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: 400px;
          border: 1px solid #ccc;
          border-radius: 12px;
          font-family: "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Open Sans", "Helvetica Neue", sans-serif;
        }

        .image-container {
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        .title-bar {
          padding: 10px;
          font-size: 28px;
          font-weight: bold;
          color: var(--ddd-theme-default-nittanyNavy);
        }

        .description {
          padding: 10px;
          color: var(--ddd-theme-default-coalyGray);
          height: 125px;
        }

        .button-container {
          padding: 10px;
          text-align: center;
        }

        button {
          width: 100%;
          background-color: #224e8a; /* Changed the button color */
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="image-container">
        <img src="${this.image}" alt="${this.title || 'Card image'}" />
      </div>
      <div class="title-bar">${this.title}</div>
      <div class="description">
        <slot></slot>
      </div>
      ${this.link
        ? html`
            <div class="button-container">
              <button @click=${this.clickEvent}>Explore ></button>
            </div>
          `
        : ''}
    `;
  }

  clickEvent() {
    window.open(this.link, '_blank');
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);