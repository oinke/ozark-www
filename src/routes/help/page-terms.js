import {createMixin} from '../../../node_modules/polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/main-layout.js';
import '../../components/navigation/help-navigation.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PageTerms extends ReduxMixin(PolymerElement) {
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
        article h1 {
          font-size: 35px;
          font-weight: 300;
        }
        article h3 {
          font-size: 18px;
          font-weight: 300;
        }
        article p {
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
                    <h1>Terms of Service</h1>
                </header>
                <p>Thank you for using [[env.siteName]]. We have a web-based platform ([[env.webAddress]]) (“Site”) offering a suite of tools for users (“Users”).</p>
                <h3>Who We Are and How to Reach Us.</h3>
                <p>[[env.siteName]] is hosted by Amazon Web Services, Please read these Terms of Service (“Terms”) carefully, and email us at <a href="mailto:[[env.supportEmail]]">[[env.supportEmail]]</a> if you have any questions. By accessing or using the Site, you agree to be bound by these Terms and by our <a href="/help/privacy">Privacy Notice</a>, <a href="/help/use">Acceptable Use Policy</a>, and <a href="/help/copyright">Copyright Policy</a>. These Terms apply to everyone who accesses the Site (Users, Followers and visitors).</p>
                <h3>Sharing Your Content</h3>
                <p><strong>What We Mean by “Content”. </strong>[[env.siteName]] enhances the ability of Users to broadcast live and recorded audio and video, and to display text and images. Anything that Users transmit, display, feature or otherwise make available using the Site, including all Intellectual Property Rights (defined below) in such content, is referred to as “User Content.” User Content includes streaming live and pre-recorded audio-visual works, the contents of chat, bulletin boards, forum postings, wiki contributions, voice interactive services, and other content Users may create, post, transmit, or perform, including sound, images, applications, code, data, or other User-owned or third party licensed materials, as well as User’s name, identity, likeness, and voice. You retain all of your rights in all of the User Content you transmit via our Service, so long as those rights do not infringe any third party rights.</p>
                <p><strong>Your Responsibility for Your Content:</strong></p>
                <br>
                <ul>
                    <li><strong>We Have Established a Code of Conduct to Preserve the Positive Qualities of our Site.</strong>
                        <p>To preserve the attributes of our Site for the benefit of all participants, we require that you only use our Site in a manner that is consistent with the [[env.siteName]] <a href="/help/use">Acceptable Use Policy</a>. We reserve the right, but are not obligated, to remove User Content and to disable a User’s account any reason, including due to User Content that we believe violates these Terms or the [[env.siteName]] <a href="/help/use">Acceptable Use Policy</a>. Please — be a good citizen on [[env.siteName]].</p>
                    </li>
                    <li><strong>We Have Established Policies to Protect the Rights of Third Parties.</strong>
                        <p>[[env.siteName]] values and respects the rights of third party creators and content owners, and expects you to do the same. You therefore agree that any User Content that you display using the Site does not and will not violate any law or infringe the rights of any third party, including without limitation any Intellectual Property Rights (defined below), publicity rights or rights of privacy. We may at our discretion remove or disallow User Content from the Service for any reason, including User Content that we believe violates these Terms or the [[env.siteName]] <a href="/help/use">Acceptable Use Policy</a> or <a href="/help/copyright">Copyright Policy</a>. Users are in the best position to know if the materials they transmit are legally allowed. Please be careful when deciding whether to make User Content available on our Service, including whether you can transmit User Content.</p>
                    </li>
                </ul>
                <p><strong>What We Mean By Intellectual Property Rights.</strong> When we refer to “Intellectual Property Rights” in these Terms, we mean all patent rights; copyright rights; moral rights; rights of publicity; trademark, trade dress and service mark rights (and associated goodwill); trade secret rights; and all other intellectual property and proprietary rights as may now exist or hereafter come into existence, and all applications for any of these rights and registrations, renewals, and extensions of any of these rights, in each case under the laws of any state, country, territory or other jurisdiction.</p>
                <h3>[[env.siteName]] Content</h3>
                <p><strong>Some Content on [[env.siteName]] belongs to our Company and We Retain all Rights to it.</strong>Except for User Content, the Site itself, all content and other subject matter included on or within the Site, and all Intellectual Property Rights in or related to the Site or any such content or other subject matter (“[[env.siteName]] Content”) are the property of [[env.siteName]] and its licensors. Except as expressly provided in these Terms, you agree not to use, modify, reproduce, distribute, sell, license, or otherwise exploit the [[env.siteName]] Content without our permission.</p>
                <p><strong>Your Basic Rights as a [[env.siteName]] User.</strong> Subject to the terms and conditions of these Terms and our <a href="/help/use">Acceptable Use Policy</a> and <a href="/help/copyright">Copyright Policy</a>, we grant you a license to participate in the Site, including accessing and incorporating [[env.siteName]] tools and functionality offered to Users, for your personal or commercial use on Social Media and other streaming platforms. [[env.siteName]] may terminate this license at any time for any reason or no reason. Except for the rights and licenses expressly granted, [[env.siteName]] reserves all other rights and no other rights are granted by implication or otherwise.</p>
                <h3>Copyright Policy</h3>
                <p>[[env.siteName]] has adopted and implemented the [[env.siteName]] <a href="/help/copyright">Copyright Policy</a> in accordance with the Digital Millennium Copyright Act. For more information, please read our <a href="/help/copyright">Copyright Policy</a>.</p>
                <h3>Using [[env.siteName]]</h3>
                <p><strong>Who can use [[env.siteName]].</strong> You may use the Service only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations. <em>Any use or access to the Site by anyone under the age of 13 is strictly prohibited.</em></p>
                <p><strong>We Can Change the Service Anytime Without Notice.</strong> Here at [[env.siteName]], we’re always finding ways to provide our Users with new and innovative features and services. Therefore, we may, without prior notice, change the Service; add features, stop providing the Service or features of the Site, to you or to Users generally; or create usage limits for the Site.</p>
                <h3>Privacy and Security</h3>
                <p><strong>How we Handle Your Personally Identifiable Information.</strong> We care about the privacy and security of our Users. You understand that by using the Site you consent to the collection, use and disclosure of your personally identifiable information and aggregate data as set forth in our <a href="/help/privacy">Privacy Notice</a>, and to have your Personally Identifiable Information collected, used, transferred to and processed in the United States. While we work to protect the security of your information, [[env.siteName]] cannot guarantee that unauthorized third parties will not be able to defeat our security measures. You acknowledge that you provide your information at your own risk. Followers who purchase or earn virtual currency from [[env.siteName]] should also review the <a href="/help/privacy">Privacy Notice</a> to see how their personal information is collected, stored and used.</p>
                <h3>Site</h3>
                <p><strong>There are Restrictions on Your use of Our Site and App.</strong> As a User, [[env.siteName]] grants to you a non-exclusive, non-transferable, revocable license to use a compiled code copy of the Site for one [[env.siteName]] account. You may not: (i) modify, disassemble, decompile or reverse engineer the Site make any copies of the Site; (ii) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Site, features that prevent or restrict use or copying of any content accessible through the Site, or features that enforce limitations on use of the Site; or (iii) delete the copyright and other proprietary rights notices on the Site. You acknowledge that [[env.siteName]] may from time to time issue upgraded versions of the Site, and may automatically electronically upgrade the version of the Site that you are using on your device. You consent to such automatic upgrading on your device, and agree that the terms and conditions of these Terms will apply to all such upgrades. Any third-party code that may be incorporated in the Site is covered by the applicable open source or third-party end User license agreement, if any, authorizing use of such code. The foregoing license grant is not a sale of the Site or any copy thereof, and [[env.siteName]] or its third party licensors or suppliers retain all right, title, and interest in and to the Site (and any copy of the Site). You agree to comply with all United States and foreign laws related to use of the Site. You may not, except to the extent that such restriction is expressly prohibited by law; (i) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Site to any third party or use the Site to provide time sharing or similar services for any third party; (ii) make any copies of the Site; (iii) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Site, features that prevent or restrict use or copying of any content accessible through the Site, or features that enforce limitations on use of the Site ; or (iv) delete the copyright and other proprietary rights notices on the Site or embedded in its features. You acknowledge that [[env.siteName]] may from time to time issue upgraded versions of the Site, and may automatically electronically upgrade the version of the Site that you are using on your device. You consent to such automatic upgrading on your device, and agree that the terms and conditions of these Terms will apply to all such upgrades. Any third-party code that may be incorporated in the Site is covered by the applicable open source or third-party end User license agreement, if any, authorizing use of such code. The foregoing license grant is not a sale of the Site or any copy thereof, and [[env.siteName]] or its third party licensors or suppliers retain all right, title, and interest in and to the Site (and any copy of the Site). You agree to comply with all United States and foreign laws related to use of the Site and the Service. Standard carrier data charges may apply to your use of the Site.</p>
                <h3>Indemnity</h3>
                <p><strong>If You Violate our Policies or Infringe on the Rights of Others, You Will be Responsible for All of Our Resulting Losses and Legal Fees.</strong>You agree to indemnify and hold harmless [[env.siteName]]’s owners and its shareholders, officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), arising out of or in any way related to (i) your access to or use of the Site, (ii) your User Content, or (iii) your breach of any of these Terms.</p>
                <h3>Disclaimers</h3>
                <p><strong>The Only Promise we Make is that We Will Add Significant Value.</strong> THE SITE, INCLUDING WITHOUT LIMITATION ALL CONTENT AND OTHER SUBJECT MATTER INCLUDED WITHIN THE SITE, ARE PROVIDED ON AN "AS IS" AND “AS AVAILABLE” BASIS, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, [[env.siteName]] SPECIFICALLY DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.</p>
                <p>[[env.siteName]] takes no responsibility and assumes no liability for any User Content that you or your Followers or any third party distributes on the Site. You are solely responsible for your User Content and the consequences of distributing it, and you agree that we are only acting as a passive conduit for your and other Users’ online distribution of your and their User Content. You understand and agree that you may be exposed to User Content that is offensive, intrusive, objectionable, inappropriate for children, or otherwise unsuited to your purpose.</p>
                <h3>Limitation of Liability</h3>
                <p><strong>The Service is controlled and operated from its facilities in the United States.</strong> [[env.siteName]] makes no representations that the Service is appropriate or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own volition and are entirely responsible for compliance with all applicable national, state, local or other laws, statutes, directives, rules, regulations, and all interpretations or orders of any government, administrative or regulatory authority or court, including but not limited to those related to export and import of software, technical information or services. You may not use the Service if you are a resident of a country embargoed by the United States, or are a foreign person or entity blocked or denied by the United States government. Unless otherwise explicitly stated, all materials found on the Service are solely directed to individuals, companies, or other entities located in the United States.</p>
                <h3>Arbitration and Governing Law</h3>
                <p><strong>You Agree to Arbitrate Our Disputes in Northern California.</strong> For any dispute you have with [[env.siteName]], you agree to first contact us at <a href="mailto:[[env.supportEmail]]">[[env.supportEmail]]</a> and attempt to resolve the dispute with us informally. In the unlikely event that [[env.siteName]] has not been able to resolve a dispute it has with you after attempting to do so informally, we each agree to resolve any claim, dispute, or controversy (excluding claims for injunctive or other equitable relief) arising out of or in connection with or relating to these Terms, or the breach or alleged breach thereof (collectively, “Claims”), by binding arbitration by JAMS commenced and conducted in San Francisco, California. Each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules. The award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys’ fees and reasonable costs for expert and other witnesses, and any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall prevent either party from seeking injunctive or other equitable relief from the courts for matters related to data security, intellectual property or unauthorized access to the Service. ALL CLAIMS MUST BE BROUGHT IN THE PARTIES’ INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS. YOU AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND [[env.siteName]] ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</p>
                <p><strong>Governing Law.</strong> You agree that: (i) the Site shall be deemed solely based in California; and (ii) the Site shall be deemed a passive one that does not give rise to personal jurisdiction over [[env.siteName]], either specific or general, in jurisdictions other than California. These Terms shall be governed by the internal substantive laws of the State of California, without respect to its conflict of laws principles. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. We each agree to submit to the personal jurisdiction of a state court located in San Francisco County, California or the United States District Court for the Northern District of California, for any actions for which either party retains the right to seek injunctive or other equitable relief, as further described in the Arbitration provision above.</p>
                <h3>General Terms</h3>
                <p><strong>Notification Procedures and changes to these Terms.</strong> [[env.siteName]] may provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, “push” mobile notification, written or hard copy notice, or through posting of such notice on our website, as determined by [[env.siteName]] in our sole discretion. [[env.siteName]] reserves the right to determine the form and means of providing notifications to you, provided that you may opt out of certain means of notification as described in these Terms and our <a href="/help/privacy">Privacy Notice</a>. [[env.siteName]] may, in its sole discretion, modify or update these Terms from time to time, and so you should review this page periodically. Your continued use of the Service after any such change constitutes your acceptance of the new Terms.</p>
                <p><strong>Implied Agreement to Terms of Service.</strong> If you do not agree to any of these Terms or to any future Terms of Service, do not use or access (or continue to access) the Site. [[env.siteName]] is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us.</p>
                <p><strong>Assignment.</strong> These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by [[env.siteName]] without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.</p>
                <p><strong>Entire Agreement/Severability.</strong> These Terms, the <a href="/help/privacy">Privacy Notice</a>, the <a href="/help/use">Acceptable Use Policy</a> and the <a href="/help/copyright">Copyright Policy</a>, together with any amendments and any additional agreements you may enter into with [[env.siteName]] in connection with the Site, shall constitute the entire agreement between you and [[env.siteName]] concerning the Site. If any provision of these Terms is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of the Terms, which shall remain in full force and effect.</p>
                <p><strong>No Waiver.</strong> No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and [[env.siteName]]’s failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.</p>
                <p><strong>Contact.</strong> Please contact us at <a href="mailto:[[env.supportEmail]]">[[env.supportEmail]]</a> with any questions regarding these Terms.</p>
                <p><strong>Headings.</strong> The PARAGRAPH HEADINGS in this policy are only meant to help you quickly find paragraphs. They are not legal statements, policy statements or contract terms – they are only labels for reference purposes.</p>
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
      this.updateStyles({'--host-color': this.color.white2});
    }
  }
} window.customElements.define('page-terms', PageTerms);
