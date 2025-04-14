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
          font-family: 'Roboto', sans-serif;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          background-color: white;
        }

        .card-container {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .image-container {
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 259px;
          object-fit: cover;
          display: block;
        }

        .title-bar {
          padding: 16px 16px 0 16px;
          font-size: 28px;
          font-weight: bold;
          color: var(--ddd-theme-default-nittanyNavy);
        }

        .description {
          flex-grow: 1;
          padding: 10px 16px;
          color: var(--ddd-theme-default-coalyGray);
          font-size: 16px;
        }

        .button-container {
          padding: 16px;
          text-align: center;
        }

        button {
          width: 100%;
          background-color: #224e8a;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          font-family: 'Roboto', sans-serif;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="card-container">
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
      </div>
    `;
  }

  clickEvent() {
    window.open(this.link, '_blank');
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
