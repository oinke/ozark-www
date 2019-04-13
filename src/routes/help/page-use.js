import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/layouts/main-layout.js';
import '../../components/navigation/help-navigation.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageUse extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--host-background-color);
          color: var(--host-color);
        }
        article {
          margin-bottom: 100px;
        }
        article a {
          color: var(--host-color);
        }
        article ol li {
          font-size: 14px;
          line-height: 1.5em;
        }
        article ul li {
          font-size: 14px;
          line-height: 1.5em;
        }
        article h1 {
          font-size: 35px;
          font-weight: 300;
        }
        article h3 {
          font-size: 18px;
          font-weight: 300;
        }
        article p{
          font-size: 14px;
          line-height:1.5em;
          margin-bottom:20px;
        }
        article {
            margin: 0 12px;
        }
        @media screen and (min-width: 900px){
          article {
            margin: 0 12px 0 0;
          }
        } 
      </style>
  
      <main-layout> 
          <div slot="aside">
            <help-navigation></help-navigation>
          </div>
          <div slot="body">
          <article>
    <section>
        <header>
            <h1>Acceptable Use Policy</h1></header>
        <p>[[env.siteName]] is a web-based platform ([[env.webAddress]]) (“Site”) offering a suite of tools for users (“users”) to optimize their experience. To preserve the positive experience of all our users and visitors (collectively, “Users”), you agree that you will use the Site only in a manner consistent with the following Acceptable Use Policy.</p>
        <p><strong>You agree not to use the Site to post or display User Content that:</strong></p>
        <ul>
            <li>Creates a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to yourself, to any other person, or to any animal;</li>
            <li>May create a risk of any other loss or damage to any person or property;</li>
            <li>Seeks to harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or otherwise;</li>
            <li>Violates, or encourages any conduct that violates laws or regulations;</li>
            <li>Contains any information or content we deem to be hateful, excessively violent, harmful, abusive, racially or ethnically offensive, defamatory, infringing, invasive of personal privacy or publicity rights, harassing, humiliating to other people (publicly or otherwise), libelous, threatening, profane, or otherwise objectionable;</li>
            <li>Contains any information or content that is illegal (including, without limitation, the disclosure of insider information under securities law or of another party’s trade secrets);</li>
            <li>Infringes any third party’s Intellectual Property Rights, privacy rights, publicity rights, or other personal or proprietary rights;</li>
            <li>Contains any information or content that you do not have a right to make available under any law or under contractual or fiduciary relationships; or</li>
            <li>Is fraudulent, false, misleading, or deceptive.</li>
        </ul>
        <p><strong>You agree not to engage in any of the following prohibited activities:</strong></p>
        <ul>
            <li>Use, display, mirror or frame the Site, any individual element within the Site, the [[env.siteName]] name, trademark, logo or other proprietary information, or the layout and design of any page, without our express written consent;</li>
            <li>Access, tamper with, or use non-public areas of the Site, our computer systems, or the technical delivery systems of our providers;</li>
            <li>Attempt to probe, scan, or test the vulnerability of any [[env.siteName]] system or network or breach any security or authentication measures;</li>
            <li>Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by [[env.siteName]] or any of our providers or any other third party (including another user) to protect the Site or [[env.siteName]] Content;</li>
            <li>Attempt to access or search the Site, User Content or [[env.siteName]] Content or scrape or download User Content or [[env.siteName]] Content from the Site, or otherwise use, upload content to, or create new links, reposts, or referrals in the Site through the use of any engine, software, tool, agent, device or mechanism (including automated scripts, spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by [[env.siteName]] or other generally available third party web browsers;</li>
            <li>Use any meta tags or other hidden text or metadata utilizing [[env.siteName]] or the [[env.siteName]] trademark, logo, URL, or product name without [[env.siteName]]’s express written consent;</li>
            <li>Use the Site for any commercial purpose or the benefit of any third party, except as otherwise explicitly permitted for you by [[env.siteName]] or in any manner not permitted by the Terms;</li>
            <li>Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Site;</li>
            <li>Interfere with, or attempt to interfere with, the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Site;</li>
            <li>Collect or store any personally identifiable information from the Site from other users of the Site without their express permission;</li>
            <li>Impersonate or misrepresent your affiliation with any person or entity;</li>
            <li>Violate any applicable law or regulation; or</li>
            <li>Encourage or enable any other individual to do any of the activities prohibited in this Acceptable Use Policy.</li>
        </ul>
        <p>[[env.siteName]] reserves the right, but is not obligated, to remove any User Content for any reason or for no reason, including User Content that [[env.siteName]] believes violates this Acceptable Use Policy or its Terms of Service. [[env.siteName]] may also permanently or temporarily terminate or suspend a User’s access to the Site without notice and liability for any reason, including if, in [[env.siteName]]’s sole determination, a User violates any provision of this Acceptable Use Policy , our <a href="/help/terms">Terms of Service</a>, or for no reason.</p>
    </section>
</article>
          </div>
      </main-layout>
    `;
  }

  static get properties() {
    return {
      language: {
        type: String,
        readOnly: true,
      },
      mode: {
        type: String,
        readOnly: true,
        observer: '_mode',
      },
      env: {
        type: Object,
        readOnly: true,
      },
      color: {
        type: Object,
        readOnly: true,
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      language: state.language,
      mode: state.mode,
      env: state.env,
      color: state.color,
    };
  }

  _mode() {
    if (this.mode === 'light') {
      this.updateStyles({'--host-background-color': this.color.white2});
      this.updateStyles({'--host-color': this.color.black2});
    } else {
      this.updateStyles({'--host-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white1});
    }
  }
} window.customElements.define('page-use', PageUse);
