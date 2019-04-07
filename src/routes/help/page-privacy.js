import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/layouts/main-layout.js';
import '../../components/navigation/help-navigation.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PagePrivacy extends ReduxMixin(PolymerElement) {
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
                        <h1>Privacy Notice</h1></header>
                    <p><strong>We Keep Your Personal Information Strictly Confidential.</strong> We at [[env.siteName]] ("[[env.siteName]]"), understand and respect that your privacy should always remain strictly under your control. It is because of this philosophy that you can be confident that the information you privately divulge to [[env.siteName]] will not be accessible to people whom you have not authorized to receive it. Nor will it be sold or otherwise distributed to third parties without your consent, other than in accordance with this policy. [[env.siteName]] is not a source of unwanted communications.</p>
                    <p><strong>You Control Your Content.</strong> [[env.siteName]] is a web-based platform ([[env.webAddress]]) (“Site”) offering a suite of tools for users to optimize their experience and their engagement and transactions with their followers (“Followers”).</p>
                    <h3>Frequently Asked Questions</h3>
                    <h4 id="p1">What personal details do you need to know? How do you store this information?</h4>
                    <p>To register as a user, we will need your full name and your email address. When you register we can see your IP address. This may provide us with a general location for you. We also learn your Social Media account name, but not your password. If you communicate with us by telephone for support questions or other inquiries, we will maintain your telephone number. All of this information is stored on our cloud-based data solution.</p>
                    <p>We also acquire some information from Followers, including their Social Media user names, their IP address if they purchase coins from us, their credit card information (using Stripe - https://stripe.com), the number of coins they have, and how they spend them. We do not store any credit card information. All other information collected from Followers is stored on our cloud-based data solution.</p>
                    <h4 id="p2">When is my information given out? Can third parties access my information?</h4>
                    <p>We will not give out any personal information without your knowledge. We will never provide personal information to any outside company, including advertisers. We would only disclose the personal information of a user or Follower to cooperate with a criminal investigation or if we were served with a subpoena in a lawsuit. Any information you publicly display in your streams on Social Media or other services or in social media is not considered personal information in [[env.siteName]]’s possession or control and may be considered user Content as described in our <a href="/help/terms">Terms of Service</a>.</p>
                    <h4 id="p3">Do You sell my information to third parties?</h4>
                    <p>No. As a matter of policy, we do not, without your consent, sell, rent or lend any of your personal information to third parties other than in accordance with this policy.</p>
                    <h4 id="p4">Does [[env.siteName]] use third party advertisers and analytics?</h4>
                    <p>We may use third-party advertising companies to serve ads when you visit our Site. These companies may use information (not including your&nbsp;name, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. We may collect user or Follower activity in our analytics platform, including personal information of individual users and Followers, but only for internal Site usage analysis.</p>
                    <h4 id="p5">What do you use my personal details for?</h4>
                    <p><strong>We Use Your Information for the Following Purposes.</strong> The following describes some of the ways that your personal information may be used in the normal routine to provide our range of services to you.</p>
                    <p>It Helps Us Provide Better Service to You. We use your personal information to:</p>
                    <ul>
                        <li>Confirm your identity when you log in</li>
                        <li>Respond to your inquiries</li>
                        <li>Troubleshoot problems</li>
                        <li>Analyze Site usage and determine user and Follower preferences</li>
                        <li>Customize your experience and the Site’s and App’s content, layout, and services</li>
                        <li>Detect and protect us against error, fraud, and other criminal activity</li>
                        <li>Enforce our <a href="/help/use">Acceptable Use Policy</a>, <a href="/help/copyright">Copyright Policy</a>, and related policies</li>
                        <li>Pursue other purposes that may be stated at the time we collect your information.</li>
                        <li>Improve our content and product offerings</li>
                        <li>Inform you about offers, products, services, and updates</li>
                    </ul>
                    <p><strong>It Helps Us Get You the Information You are Most Interested in.</strong> You agree that we may use your personal information to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements from [[env.siteName]] and third party advertisers, administrative notices, product offerings, and communications relevant to your use of the Site. By accepting the <a href="/help/terms">Terms of Service</a> and <a aria-current="page" href="/help/privacy">Privacy Notice</a>, you expressly agree to receive this information. You may unsubscribe from future text notifications by unsubscribing in the method indicated in the notification.</p>
                    <p><strong>It Helps Our Teams Operate More Efficiently to Keep the Site and App Running Smoothly.</strong> We may use third parties that we refer to as internal service providers to facilitate or outsource one or more aspects of the business, product and service operations that we provide to you (e.g., analytics and email support) and therefore we may provide some of your personal information directly to these internal service providers. These internal service providers are subject to confidentiality agreements with us and other legal restrictions that prohibit their use of the information we provide them for any other purpose except to facilitate the specific outsourced [[env.siteName]] related operation, unless you have explicitly agreed or given your prior permission to them for additional uses.</p>
                    <p>In some instances, the internal service provider may collect information directly from you (such as for [[env.siteName]] surveys). In these cases, you will be notified of the involvement of the internal service provider, and all additional information you provide them and their additional uses will be strictly up to you. If you provide additional information to an internal service provider directly, then their use of your personal information is governed by their applicable Privacy Notice.</p>
                    <p><strong>It Helps Us Determine and Display the Geographic Reach of Our Service.</strong> We may use platforms that enable us to determine your location, or we may request permission to see your location. This helps us adapt our service to users in diverse locations.</p>
                    <p><strong>We Cooperate with Law Enforcement; General Risks of Misappropriation.</strong> We Meet Industry Standards of Privacy Protection. [[env.siteName]] cooperates with law enforcement inquiries, as well as other third parties to enforce laws, such as: intellectual property rights, fraud and other rights, to help protect you and the [[env.siteName]] service. Therefore, in response to a genuine request by law enforcement or other government officials relating to a criminal investigation or alleged illegal activity, we can disclose personal information about you. Third parties may unlawfully intercept or access transmissions. Therefore, although we use industry standard practices to protect your privacy, we do not promise, and you should not expect, that your personal information or private communications will always remain private.</p>
                    <p><strong>If we Sell our Business.</strong> It is possible that as we continue to develop our Site and our business, [[env.siteName]]'s Site, App, and/or related assets might be acquired. Notwithstanding any provision in this policy to the contrary, in event of a merger or acquisition, your personal information may be transferred to the acquiring entity, and become subject to the acquirer's data practices.</p>
                    <p><strong>Marketing Our Services.</strong> Our <a href="/help/terms">Terms of Service</a> detail our license to use your user Content (including your name, identity, likeness, and voice) for marketing and promotional purposes.</p>
                    <h4 id="p6">Will I be added to any mailing lists?</h4>
                    <p>We do not sell, rent or lend email addresses for any other purpose than in direct association with your use of the [[env.siteName]] Site or as otherwise described in this Privacy Notice.</p>
                    <h4 id="p7">Do you send unsolicited text or email messages?</h4>
                    <p>[[env.siteName]] will not send any unwanted information, including email. You will, however receive emails which form an essential part of the service.</p>
                    <h4 id="p8">What do you use cookies for?</h4>
                    <p>Cookies are a standard internet technology, and many major web sites use them to provide useful features for their members. Cookies allow us to store and retrieve login information on a user's system. They provide us with data that we can use to improve our service to you. If you so choose, you can save your login or password so you don't have to re-enter them each time you visit our Site. Cookies themselves do not personally identify users, although they do identify a user's device. Most browsers are initially set up to accept cookies. If you'd prefer, you can set yours to refuse cookies. However, you may not be able to take full advantage of our Site if you do so.</p>
                    <h4 id="p9">How will I be notified of changes?</h4>
                    <p>We may amend this Privacy Notice at any time by posting the amended terms on the Site. All amended terms shall automatically be effective immediately after posting on the Site.</p>
                    <h4 id="p10">How do I cancel my membership?</h4>
                    <p>You always have the option not to become a registered user or to cancel your account at any time. If you are a registered user and no longer wish to participate in [[env.siteName]] , please send us an email notifying us of your cancellation to <a href="mailto:[[env.deleteEmail]]">[[env.deleteEmail]]</a>.</p>
                    <p>This action will cancel your account. You will be assured that, [[env.siteName]] will not contact you directly at the email address or telephone number we have on record for you, other than to respond to requests you may make to [[env.siteName]] in the future. (Please allow up to 10 working days for account deletion to be fully processed.)</p>
                    <h4 id="p11">How do I retrieve an export of data you store about me?</h4>
                    <p>You have the option to receive a full export of data [[env.siteName]] has stored about you at any given point. To do this please send us an email notifying us of your request of an export to <a href="mailto:[[env.exportEmail]]">[[env.exportEmail]]</a>.</p>
                    <p>This action will trigger an export of any piece of data [[env.siteName]] has stored about you at the time of the request. (Please allow up to 10 working days for account deletion to be fully processed.)</p>
                    <h4 id="p12">How do I contact you?</h4>
                    <p>If you have any questions about this privacy statement, the practices of this website or your dealings with our Site, you can contact us by email message to <a href="mailto:[[env.supportEmail]]">[[env.supportEmail]]</a></p>
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
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
      this.updateStyles({'--host-background-color': this.color.white2});
      this.updateStyles({'--host-color': this.color.black2});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black3-white3': this.color.white3});
      this.updateStyles({'--white1-black1': this.color.black1});
      this.updateStyles({'--white2-black2': this.color.black2});
      this.updateStyles({'--black3-white1': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.white2});
      this.updateStyles({'--black1-white3': this.color.white3});
      this.updateStyles({'--white2-black3': this.color.black3});
      this.updateStyles({'--black2-white1': this.color.white1});
      this.updateStyles({'--black2-white3': this.color.white3});
    } else {
      this.updateStyles({'--host-background-color': this.color.black2});
      this.updateStyles({'--host-color': this.color.white1});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black3-white3': this.color.black3});
      this.updateStyles({'--white1-black1': this.color.white1});
      this.updateStyles({'--white2-black2': this.color.white2});
      this.updateStyles({'--black3-white1': this.color.black3});
      this.updateStyles({'--black1-white2': this.color.black1});
      this.updateStyles({'--black1-white3': this.color.black1});
      this.updateStyles({'--white2-black3': this.color.white2});
      this.updateStyles({'--black2-white1': this.color.black2});
      this.updateStyles({'--black2-white3': this.color.black2});
    }
  }
} window.customElements.define('page-privacy', PagePrivacy);
