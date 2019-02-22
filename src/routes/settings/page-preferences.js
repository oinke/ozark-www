import {createMixin} from 'polymer-redux';
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/main-layout.js';
import '../../components/navigation/settings-navigation.js';
import '@polymer/app-route/app-location.js';
import store from '../../global/store.js';
const ReduxMixin = createMixin(store);

class PagePreferences extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: var(--black2-white1);
          color: var(--white2-black2);
        }
 
        .form {
          display: block;
          margin-top: 20px;
          background-color: var(--black2-white1);
          border-radius: 3px;
        }
        .form h1 {
          font-weight: 900;
          margin: 0px;
          border-bottom: 1px solid var(--black1-white2);
          padding: 15px;
          font-size: 17px;
        }
        .form-section {
          display: flex;
          padding-bottom: 30px;
          padding-top: 30px;
          border-bottom: 1px solid var(--black1-white2);
        }
        .form-title{
          width: 200px;
          text-indent: 24px;
          font-size: 16px;
          display: none;
        }
        .form-inputs{
          flex: 1;
          padding: 12px;
        }
        .btn-right {
          display: block;
          text-align: right;
        }
        .clicky {
          cursor: pointer;
        }
        select {
          width: 300px;
        }

        @media screen and (min-width: 900px){
          article {
            margin: 24px 12px 0 0;
          }
          .form-title {
            display: block;
          }
          input[type=text]  {
            max-width: 300px;
          }
          .form-inputs {
            padding: 0;
          }
          .flat-btn {
            width: 200px;
          }
        } 
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <main-layout narrow> 
        <div slot="aside">
          <settings-navigation></settings-navigation>
        </div>
        <div slot="body">
          <div class='form'>
            <h1>Edit Preferences</h1>
            <div class="form-section">
              <div class="form-title">Localization</div>
              <div class="form-inputs">
                <label>Language</label>
                <select value="{{newLanguage::input}}">                        
                  <option value="Català">Català</option>
                  <option value="Česky">Česky</option>
                  <option value="Dansk">Dansk</option>
                  <option value="Deutsch">Deutsch</option>
                  <option value="Ελληνικά">Ελληνικά</option>
                  <option value="English" selected="">English</option>
                  <option value="Español">Español</option>
                  <option value="Eesti">Eesti</option>
                  <option value="Basque">Basque</option>
                  <option value="Filipino">Filipino</option>
                  <option value="Français">Français</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Íslenska">Íslenska</option>
                  <option value="Italiano">Italiano</option>
                  <option value="Lietuviškai">Lietuviškai</option>
                  <option value="Nederlands">Nederlands</option>
                  <option value="Norsk">Norsk</option>
                  <option value="Polski">Polski</option>
                  <option value="Português">Português</option>                  
                  <option value="Română">Română</option>
                  <option value="Русский">Русский</option>
                  <option value="Slovenský">Slovenský</option>
                  <option value="Suomi">Suomi</option>
                  <option value="Svenska">Svenska</option>
                  <option value="ภาษาไทย">ภาษาไทย</option>
                  <option value="Türkçe">Türkçe</option>
                  <option value="日本語">日本語</option>
                  <option value="简体中文">简体中文</option>
                  <option value="繁體中文">繁體中文</option>
                  <option value="한국어">한국어</option>
                </select>
                <small>Help us translate the site.</small>
                <label>Time zone</label>
                <select value="{{timeZone::input}}">
                  <option value="Pacific/Midway">(UTC-11:00) Pacific/Midway</option>
                  <option value="Pacific/Niue">(UTC-11:00) Pacific/Niue</option>
                  <option value="Pacific/Pago_Pago">(UTC-11:00) Pacific/Pago_Pago</option>
                  <option value="America/Adak">(UTC-10:00) America/Adak</option>
                  <option value="Pacific/Honolulu">(UTC-10:00) Pacific/Honolulu</option>
                  <option value="Pacific/Rarotonga">(UTC-10:00) Pacific/Rarotonga</option>
                  <option value="Pacific/Tahiti">(UTC-10:00) Pacific/Tahiti</option>
                  <option value="US/Hawaii">(UTC-10:00) US/Hawaii</option>
                  <option value="Pacific/Marquesas">(UTC-09:30) Pacific/Marquesas</option>
                  <option value="America/Anchorage">(UTC-09:00) America/Anchorage</option>
                  <option value="America/Juneau">(UTC-09:00) America/Juneau</option>
                  <option value="America/Metlakatla">(UTC-09:00) America/Metlakatla</option>
                  <option value="America/Nome">(UTC-09:00) America/Nome</option>
                  <option value="America/Sitka">(UTC-09:00) America/Sitka</option>
                  <option value="America/Yakutat">(UTC-09:00) America/Yakutat</option>
                  <option value="Pacific/Gambier">(UTC-09:00) Pacific/Gambier</option>
                  <option value="US/Alaska">(UTC-09:00) US/Alaska</option>
                  <option value="America/Dawson">(UTC-08:00) America/Dawson</option>
                  <option value="America/Los_Angeles">(UTC-08:00) America/Los_Angeles</option>
                  <option value="America/Tijuana">(UTC-08:00) America/Tijuana</option>
                  <option value="America/Vancouver">(UTC-08:00) America/Vancouver</option>
                  <option value="America/Whitehorse">(UTC-08:00) America/Whitehorse</option>
                  <option value="Canada/Pacific">(UTC-08:00) Canada/Pacific</option>
                  <option value="Pacific/Pitcairn">(UTC-08:00) Pacific/Pitcairn</option>
                  <option value="US/Pacific">(UTC-08:00) US/Pacific</option>
                  <option value="America/Boise">(UTC-07:00) America/Boise</option>
                  <option value="America/Cambridge_Bay">(UTC-07:00) America/Cambridge_Bay</option>
                  <option value="America/Chihuahua">(UTC-07:00) America/Chihuahua</option>
                  <option value="America/Creston">(UTC-07:00) America/Creston</option>
                  <option value="America/Dawson_Creek">(UTC-07:00) America/Dawson_Creek</option>
                  <option value="America/Denver">(UTC-07:00) America/Denver</option>
                  <option value="America/Edmonton">(UTC-07:00) America/Edmonton</option>
                  <option value="America/Fort_Nelson">(UTC-07:00) America/Fort_Nelson</option>
                  <option value="America/Hermosillo">(UTC-07:00) America/Hermosillo</option>
                  <option value="America/Inuvik">(UTC-07:00) America/Inuvik</option>
                  <option value="America/Mazatlan">(UTC-07:00) America/Mazatlan</option>
                  <option value="America/Ojinaga">(UTC-07:00) America/Ojinaga</option>
                  <option value="America/Phoenix">(UTC-07:00) America/Phoenix</option>
                  <option value="America/Yellowknife">(UTC-07:00) America/Yellowknife</option>
                  <option value="Canada/Mountain">(UTC-07:00) Canada/Mountain</option>
                  <option value="US/Arizona">(UTC-07:00) US/Arizona</option>
                  <option value="US/Mountain">(UTC-07:00) US/Mountain</option>
                  <option value="America/Bahia_Banderas">(UTC-06:00) America/Bahia_Banderas</option>
                  <option value="America/Belize">(UTC-06:00) America/Belize</option>
                  <option value="America/Chicago">(UTC-06:00) America/Chicago</option>
                  <option value="America/Costa_Rica">(UTC-06:00) America/Costa_Rica</option>
                  <option value="America/El_Salvador">(UTC-06:00) America/El_Salvador</option>
                  <option value="America/Guatemala">(UTC-06:00) America/Guatemala</option>
                  <option value="America/Indiana/Knox">(UTC-06:00) America/Indiana/Knox</option>
                  <option value="America/Indiana/Tell_City">(UTC-06:00) America/Indiana/Tell_City</option>
                  <option value="America/Managua">(UTC-06:00) America/Managua</option>
                  <option value="America/Matamoros">(UTC-06:00) America/Matamoros</option>
                  <option value="America/Menominee">(UTC-06:00) America/Menominee</option>
                  <option value="America/Merida">(UTC-06:00) America/Merida</option>
                  <option value="America/Mexico_City">(UTC-06:00) America/Mexico_City</option>
                  <option value="America/Monterrey">(UTC-06:00) America/Monterrey</option>
                  <option value="America/North_Dakota/Beulah">(UTC-06:00) America/North_Dakota/Beulah</option>
                  <option value="America/North_Dakota/Center">(UTC-06:00) America/North_Dakota/Center</option>
                  <option value="America/North_Dakota/New_Salem">(UTC-06:00) America/North_Dakota/New_Salem</option>
                  <option value="America/Rainy_River">(UTC-06:00) America/Rainy_River</option>
                  <option value="America/Rankin_Inlet">(UTC-06:00) America/Rankin_Inlet</option>
                  <option value="America/Regina">(UTC-06:00) America/Regina</option>
                  <option value="America/Resolute">(UTC-06:00) America/Resolute</option>
                  <option value="America/Swift_Current">(UTC-06:00) America/Swift_Current</option>
                  <option value="America/Tegucigalpa">(UTC-06:00) America/Tegucigalpa</option>
                  <option value="America/Winnipeg">(UTC-06:00) America/Winnipeg</option>
                  <option value="Canada/Central">(UTC-06:00) Canada/Central</option>
                  <option value="Pacific/Galapagos">(UTC-06:00) Pacific/Galapagos</option>
                  <option value="US/Central">(UTC-06:00) US/Central</option>
                  <option value="America/Atikokan">(UTC-05:00) America/Atikokan</option>
                  <option value="America/Bogota">(UTC-05:00) America/Bogota</option>
                  <option value="America/Cancun">(UTC-05:00) America/Cancun</option>
                  <option value="America/Cayman">(UTC-05:00) America/Cayman</option>
                  <option value="America/Detroit">(UTC-05:00) America/Detroit</option>
                  <option value="America/Eirunepe">(UTC-05:00) America/Eirunepe</option>
                  <option value="America/Grand_Turk">(UTC-05:00) America/Grand_Turk</option>
                  <option value="America/Guayaquil">(UTC-05:00) America/Guayaquil</option>
                  <option value="America/Havana">(UTC-05:00) America/Havana</option>
                  <option value="America/Indiana/Indianapolis">(UTC-05:00) America/Indiana/Indianapolis</option>
                  <option value="America/Indiana/Marengo">(UTC-05:00) America/Indiana/Marengo</option>
                  <option value="America/Indiana/Petersburg">(UTC-05:00) America/Indiana/Petersburg</option>
                  <option value="America/Indiana/Vevay">(UTC-05:00) America/Indiana/Vevay</option>
                  <option value="America/Indiana/Vincennes">(UTC-05:00) America/Indiana/Vincennes</option>
                  <option value="America/Indiana/Winamac">(UTC-05:00) America/Indiana/Winamac</option>
                  <option value="America/Iqaluit">(UTC-05:00) America/Iqaluit</option>
                  <option value="America/Jamaica">(UTC-05:00) America/Jamaica</option>
                  <option value="America/Kentucky/Louisville">(UTC-05:00) America/Kentucky/Louisville</option>
                  <option value="America/Kentucky/Monticello">(UTC-05:00) America/Kentucky/Monticello</option>
                  <option value="America/Lima">(UTC-05:00) America/Lima</option>
                  <option value="America/Nassau">(UTC-05:00) America/Nassau</option>
                  <option value="America/New_York">(UTC-05:00) America/New_York</option>
                  <option value="America/Nipigon">(UTC-05:00) America/Nipigon</option>
                  <option value="America/Panama">(UTC-05:00) America/Panama</option>
                  <option value="America/Pangnirtung">(UTC-05:00) America/Pangnirtung</option>
                  <option value="America/Port-au-Prince">(UTC-05:00) America/Port-au-Prince</option>
                  <option value="America/Rio_Branco">(UTC-05:00) America/Rio_Branco</option>
                  <option value="America/Thunder_Bay">(UTC-05:00) America/Thunder_Bay</option>
                  <option value="America/Toronto">(UTC-05:00) America/Toronto</option>
                  <option value="Canada/Eastern">(UTC-05:00) Canada/Eastern</option>
                  <option value="Pacific/Easter">(UTC-05:00) Pacific/Easter</option>
                  <option value="US/Eastern">(UTC-05:00) US/Eastern</option>
                  <option value="America/Anguilla">(UTC-04:00) America/Anguilla</option>
                  <option value="America/Antigua">(UTC-04:00) America/Antigua</option>
                  <option value="America/Aruba">(UTC-04:00) America/Aruba</option>
                  <option value="America/Barbados">(UTC-04:00) America/Barbados</option>
                  <option value="America/Blanc-Sablon">(UTC-04:00) America/Blanc-Sablon</option>
                  <option value="America/Boa_Vista">(UTC-04:00) America/Boa_Vista</option>
                  <option value="America/Campo_Grande">(UTC-04:00) America/Campo_Grande</option>
                  <option value="America/Caracas">(UTC-04:00) America/Caracas</option>
                  <option value="America/Cuiaba">(UTC-04:00) America/Cuiaba</option>
                  <option value="America/Curacao">(UTC-04:00) America/Curacao</option>
                  <option value="America/Dominica">(UTC-04:00) America/Dominica</option>
                  <option value="America/Glace_Bay">(UTC-04:00) America/Glace_Bay</option>
                  <option value="America/Goose_Bay">(UTC-04:00) America/Goose_Bay</option>
                  <option value="America/Grenada">(UTC-04:00) America/Grenada</option>
                  <option value="America/Guadeloupe">(UTC-04:00) America/Guadeloupe</option>
                  <option value="America/Guyana">(UTC-04:00) America/Guyana</option>
                  <option value="America/Halifax">(UTC-04:00) America/Halifax</option>
                  <option value="America/Kralendijk">(UTC-04:00) America/Kralendijk</option>
                  <option value="America/La_Paz">(UTC-04:00) America/La_Paz</option>
                  <option value="America/Lower_Princes">(UTC-04:00) America/Lower_Princes</option>
                  <option value="America/Manaus">(UTC-04:00) America/Manaus</option>
                  <option value="America/Marigot">(UTC-04:00) America/Marigot</option>
                  <option value="America/Martinique">(UTC-04:00) America/Martinique</option>
                  <option value="America/Moncton">(UTC-04:00) America/Moncton</option>
                  <option value="America/Montserrat">(UTC-04:00) America/Montserrat</option>
                  <option value="America/Port_of_Spain">(UTC-04:00) America/Port_of_Spain</option>
                  <option value="America/Porto_Velho">(UTC-04:00) America/Porto_Velho</option>
                  <option value="America/Puerto_Rico">(UTC-04:00) America/Puerto_Rico</option>
                  <option value="America/Santo_Domingo">(UTC-04:00) America/Santo_Domingo</option>
                  <option value="America/St_Barthelemy">(UTC-04:00) America/St_Barthelemy</option>
                  <option value="America/St_Kitts">(UTC-04:00) America/St_Kitts</option>
                  <option value="America/St_Lucia">(UTC-04:00) America/St_Lucia</option>
                  <option value="America/St_Thomas">(UTC-04:00) America/St_Thomas</option>
                  <option value="America/St_Vincent">(UTC-04:00) America/St_Vincent</option>
                  <option value="America/Thule">(UTC-04:00) America/Thule</option>
                  <option value="America/Tortola">(UTC-04:00) America/Tortola</option>
                  <option value="Atlantic/Bermuda">(UTC-04:00) Atlantic/Bermuda</option>
                  <option value="Canada/Atlantic">(UTC-04:00) Canada/Atlantic</option>
                  <option value="America/St_Johns">(UTC-03:30) America/St_Johns</option>
                  <option value="Canada/Newfoundland">(UTC-03:30) Canada/Newfoundland</option>
                  <option value="America/Araguaina">(UTC-03:00) America/Araguaina</option>
                  <option value="America/Argentina/Buenos_Aires">(UTC-03:00) America/Argentina/Buenos_Aires</option>
                  <option value="America/Argentina/Catamarca">(UTC-03:00) America/Argentina/Catamarca</option>
                  <option value="America/Argentina/Cordoba">(UTC-03:00) America/Argentina/Cordoba</option>
                  <option value="America/Argentina/Jujuy">(UTC-03:00) America/Argentina/Jujuy</option>
                  <option value="America/Argentina/La_Rioja">(UTC-03:00) America/Argentina/La_Rioja</option>
                  <option value="America/Argentina/Mendoza">(UTC-03:00) America/Argentina/Mendoza</option>
                  <option value="America/Argentina/Rio_Gallegos">(UTC-03:00) America/Argentina/Rio_Gallegos</option>
                  <option value="America/Argentina/Salta">(UTC-03:00) America/Argentina/Salta</option>
                  <option value="America/Argentina/San_Juan">(UTC-03:00) America/Argentina/San_Juan</option>
                  <option value="America/Argentina/San_Luis">(UTC-03:00) America/Argentina/San_Luis</option>
                  <option value="America/Argentina/Tucuman">(UTC-03:00) America/Argentina/Tucuman</option>
                  <option value="America/Argentina/Ushuaia">(UTC-03:00) America/Argentina/Ushuaia</option>
                  <option value="America/Asuncion">(UTC-03:00) America/Asuncion</option>
                  <option value="America/Bahia">(UTC-03:00) America/Bahia</option>
                  <option value="America/Belem">(UTC-03:00) America/Belem</option>
                  <option value="America/Cayenne">(UTC-03:00) America/Cayenne</option>
                  <option value="America/Fortaleza">(UTC-03:00) America/Fortaleza</option>
                  <option value="America/Godthab">(UTC-03:00) America/Godthab</option>
                  <option value="America/Maceio">(UTC-03:00) America/Maceio</option>
                  <option value="America/Miquelon">(UTC-03:00) America/Miquelon</option>
                  <option value="America/Montevideo">(UTC-03:00) America/Montevideo</option>
                  <option value="America/Paramaribo">(UTC-03:00) America/Paramaribo</option>
                  <option value="America/Punta_Arenas">(UTC-03:00) America/Punta_Arenas</option>
                  <option value="America/Recife">(UTC-03:00) America/Recife</option>
                  <option value="America/Santarem">(UTC-03:00) America/Santarem</option>
                  <option value="America/Santiago">(UTC-03:00) America/Santiago</option>
                  <option value="America/Sao_Paulo">(UTC-03:00) America/Sao_Paulo</option>
                  <option value="Antarctica/Palmer">(UTC-03:00) Antarctica/Palmer</option>
                  <option value="Antarctica/Rothera">(UTC-03:00) Antarctica/Rothera</option>
                  <option value="Atlantic/Stanley">(UTC-03:00) Atlantic/Stanley</option>
                  <option value="America/Noronha">(UTC-02:00) America/Noronha</option>
                  <option value="Atlantic/South_Georgia">(UTC-02:00) Atlantic/South_Georgia</option>
                  <option value="America/Scoresbysund">(UTC-01:00) America/Scoresbysund</option>
                  <option value="Atlantic/Azores">(UTC-01:00) Atlantic/Azores</option>
                  <option value="Atlantic/Cape_Verde">(UTC-01:00) Atlantic/Cape_Verde</option>
                  <option value="Africa/Abidjan">(UTC+00:00) Africa/Abidjan</option>
                  <option value="Africa/Accra">(UTC+00:00) Africa/Accra</option>
                  <option value="Africa/Bamako">(UTC+00:00) Africa/Bamako</option>
                  <option value="Africa/Banjul">(UTC+00:00) Africa/Banjul</option>
                  <option value="Africa/Bissau">(UTC+00:00) Africa/Bissau</option>
                  <option value="Africa/Casablanca">(UTC+00:00) Africa/Casablanca</option>
                  <option value="Africa/Conakry">(UTC+00:00) Africa/Conakry</option>
                  <option value="Africa/Dakar">(UTC+00:00) Africa/Dakar</option>
                  <option value="Africa/El_Aaiun">(UTC+00:00) Africa/El_Aaiun</option>
                  <option value="Africa/Freetown">(UTC+00:00) Africa/Freetown</option>
                  <option value="Africa/Lome">(UTC+00:00) Africa/Lome</option>
                  <option value="Africa/Monrovia">(UTC+00:00) Africa/Monrovia</option>
                  <option value="Africa/Nouakchott">(UTC+00:00) Africa/Nouakchott</option>
                  <option value="Africa/Ouagadougou">(UTC+00:00) Africa/Ouagadougou</option>
                  <option value="America/Danmarkshavn">(UTC+00:00) America/Danmarkshavn</option>
                  <option value="Antarctica/Troll">(UTC+00:00) Antarctica/Troll</option>
                  <option value="Atlantic/Canary">(UTC+00:00) Atlantic/Canary</option>
                  <option value="Atlantic/Faroe">(UTC+00:00) Atlantic/Faroe</option>
                  <option value="Atlantic/Madeira">(UTC+00:00) Atlantic/Madeira</option>
                  <option value="Atlantic/Reykjavik">(UTC+00:00) Atlantic/Reykjavik</option>
                  <option value="Atlantic/St_Helena">(UTC+00:00) Atlantic/St_Helena</option>
                  <option value="Europe/Dublin">(UTC+00:00) Europe/Dublin</option>
                  <option value="Europe/Guernsey">(UTC+00:00) Europe/Guernsey</option>
                  <option value="Europe/Isle_of_Man">(UTC+00:00) Europe/Isle_of_Man</option>
                  <option value="Europe/Jersey">(UTC+00:00) Europe/Jersey</option>
                  <option value="Europe/Lisbon">(UTC+00:00) Europe/Lisbon</option>
                  <option value="Europe/London">(UTC+00:00) Europe/London</option>
                  <option value="GMT">(UTC+00:00) GMT</option>
                  <option value="UTC" selected="">(UTC+00:00) UTC</option>
                  <option value="Africa/Algiers">(UTC+01:00) Africa/Algiers</option>
                  <option value="Africa/Bangui">(UTC+01:00) Africa/Bangui</option>
                  <option value="Africa/Brazzaville">(UTC+01:00) Africa/Brazzaville</option>
                  <option value="Africa/Ceuta">(UTC+01:00) Africa/Ceuta</option>
                  <option value="Africa/Douala">(UTC+01:00) Africa/Douala</option>
                  <option value="Africa/Kinshasa">(UTC+01:00) Africa/Kinshasa</option>
                  <option value="Africa/Lagos">(UTC+01:00) Africa/Lagos</option>
                  <option value="Africa/Libreville">(UTC+01:00) Africa/Libreville</option>
                  <option value="Africa/Luanda">(UTC+01:00) Africa/Luanda</option>
                  <option value="Africa/Malabo">(UTC+01:00) Africa/Malabo</option>
                  <option value="Africa/Ndjamena">(UTC+01:00) Africa/Ndjamena</option>
                  <option value="Africa/Niamey">(UTC+01:00) Africa/Niamey</option>
                  <option value="Africa/Porto-Novo">(UTC+01:00) Africa/Porto-Novo</option>
                  <option value="Africa/Sao_Tome">(UTC+01:00) Africa/Sao_Tome</option>
                  <option value="Africa/Tunis">(UTC+01:00) Africa/Tunis</option>
                  <option value="Arctic/Longyearbyen">(UTC+01:00) Arctic/Longyearbyen</option>
                  <option value="Europe/Amsterdam">(UTC+01:00) Europe/Amsterdam</option>
                  <option value="Europe/Andorra">(UTC+01:00) Europe/Andorra</option>
                  <option value="Europe/Belgrade">(UTC+01:00) Europe/Belgrade</option>
                  <option value="Europe/Berlin">(UTC+01:00) Europe/Berlin</option>
                  <option value="Europe/Bratislava">(UTC+01:00) Europe/Bratislava</option>
                  <option value="Europe/Brussels">(UTC+01:00) Europe/Brussels</option>
                  <option value="Europe/Budapest">(UTC+01:00) Europe/Budapest</option>
                  <option value="Europe/Busingen">(UTC+01:00) Europe/Busingen</option>
                  <option value="Europe/Copenhagen">(UTC+01:00) Europe/Copenhagen</option>
                  <option value="Europe/Gibraltar">(UTC+01:00) Europe/Gibraltar</option>
                  <option value="Europe/Ljubljana">(UTC+01:00) Europe/Ljubljana</option>
                  <option value="Europe/Luxembourg">(UTC+01:00) Europe/Luxembourg</option>
                  <option value="Europe/Madrid">(UTC+01:00) Europe/Madrid</option>
                  <option value="Europe/Malta">(UTC+01:00) Europe/Malta</option>
                  <option value="Europe/Monaco">(UTC+01:00) Europe/Monaco</option>
                  <option value="Europe/Oslo">(UTC+01:00) Europe/Oslo</option>
                  <option value="Europe/Paris">(UTC+01:00) Europe/Paris</option>
                  <option value="Europe/Podgorica">(UTC+01:00) Europe/Podgorica</option>
                  <option value="Europe/Prague">(UTC+01:00) Europe/Prague</option>
                  <option value="Europe/Rome">(UTC+01:00) Europe/Rome</option>
                  <option value="Europe/San_Marino">(UTC+01:00) Europe/San_Marino</option>
                  <option value="Europe/Sarajevo">(UTC+01:00) Europe/Sarajevo</option>
                  <option value="Europe/Skopje">(UTC+01:00) Europe/Skopje</option>
                  <option value="Europe/Stockholm">(UTC+01:00) Europe/Stockholm</option>
                  <option value="Europe/Tirane">(UTC+01:00) Europe/Tirane</option>
                  <option value="Europe/Vaduz">(UTC+01:00) Europe/Vaduz</option>
                  <option value="Europe/Vatican">(UTC+01:00) Europe/Vatican</option>
                  <option value="Europe/Vienna">(UTC+01:00) Europe/Vienna</option>
                  <option value="Europe/Warsaw">(UTC+01:00) Europe/Warsaw</option>
                  <option value="Europe/Zagreb">(UTC+01:00) Europe/Zagreb</option>
                  <option value="Europe/Zurich">(UTC+01:00) Europe/Zurich</option>
                  <option value="Africa/Blantyre">(UTC+02:00) Africa/Blantyre</option>
                  <option value="Africa/Bujumbura">(UTC+02:00) Africa/Bujumbura</option>
                  <option value="Africa/Cairo">(UTC+02:00) Africa/Cairo</option>
                  <option value="Africa/Gaborone">(UTC+02:00) Africa/Gaborone</option>
                  <option value="Africa/Harare">(UTC+02:00) Africa/Harare</option>
                  <option value="Africa/Johannesburg">(UTC+02:00) Africa/Johannesburg</option>
                  <option value="Africa/Khartoum">(UTC+02:00) Africa/Khartoum</option>
                  <option value="Africa/Kigali">(UTC+02:00) Africa/Kigali</option>
                  <option value="Africa/Lubumbashi">(UTC+02:00) Africa/Lubumbashi</option>
                  <option value="Africa/Lusaka">(UTC+02:00) Africa/Lusaka</option>
                  <option value="Africa/Maputo">(UTC+02:00) Africa/Maputo</option>
                  <option value="Africa/Maseru">(UTC+02:00) Africa/Maseru</option>
                  <option value="Africa/Mbabane">(UTC+02:00) Africa/Mbabane</option>
                  <option value="Africa/Tripoli">(UTC+02:00) Africa/Tripoli</option>
                  <option value="Africa/Windhoek">(UTC+02:00) Africa/Windhoek</option>
                  <option value="Asia/Amman">(UTC+02:00) Asia/Amman</option>
                  <option value="Asia/Beirut">(UTC+02:00) Asia/Beirut</option>
                  <option value="Asia/Damascus">(UTC+02:00) Asia/Damascus</option>
                  <option value="Asia/Famagusta">(UTC+02:00) Asia/Famagusta</option>
                  <option value="Asia/Gaza">(UTC+02:00) Asia/Gaza</option>
                  <option value="Asia/Hebron">(UTC+02:00) Asia/Hebron</option>
                  <option value="Asia/Jerusalem">(UTC+02:00) Asia/Jerusalem</option>
                  <option value="Asia/Nicosia">(UTC+02:00) Asia/Nicosia</option>
                  <option value="Europe/Athens">(UTC+02:00) Europe/Athens</option>
                  <option value="Europe/Bucharest">(UTC+02:00) Europe/Bucharest</option>
                  <option value="Europe/Chisinau">(UTC+02:00) Europe/Chisinau</option>
                  <option value="Europe/Helsinki">(UTC+02:00) Europe/Helsinki</option>
                  <option value="Europe/Kaliningrad">(UTC+02:00) Europe/Kaliningrad</option>
                  <option value="Europe/Kiev">(UTC+02:00) Europe/Kiev</option>
                  <option value="Europe/Mariehamn">(UTC+02:00) Europe/Mariehamn</option>
                  <option value="Europe/Riga">(UTC+02:00) Europe/Riga</option>
                  <option value="Europe/Sofia">(UTC+02:00) Europe/Sofia</option>
                  <option value="Europe/Tallinn">(UTC+02:00) Europe/Tallinn</option>
                  <option value="Europe/Uzhgorod">(UTC+02:00) Europe/Uzhgorod</option>
                  <option value="Europe/Vilnius">(UTC+02:00) Europe/Vilnius</option>
                  <option value="Europe/Zaporozhye">(UTC+02:00) Europe/Zaporozhye</option>
                  <option value="Africa/Addis_Ababa">(UTC+03:00) Africa/Addis_Ababa</option>
                  <option value="Africa/Asmara">(UTC+03:00) Africa/Asmara</option>
                  <option value="Africa/Dar_es_Salaam">(UTC+03:00) Africa/Dar_es_Salaam</option>
                  <option value="Africa/Djibouti">(UTC+03:00) Africa/Djibouti</option>
                  <option value="Africa/Juba">(UTC+03:00) Africa/Juba</option>
                  <option value="Africa/Kampala">(UTC+03:00) Africa/Kampala</option>
                  <option value="Africa/Mogadishu">(UTC+03:00) Africa/Mogadishu</option>
                  <option value="Africa/Nairobi">(UTC+03:00) Africa/Nairobi</option>
                  <option value="Antarctica/Syowa">(UTC+03:00) Antarctica/Syowa</option>
                  <option value="Asia/Aden">(UTC+03:00) Asia/Aden</option>
                  <option value="Asia/Baghdad">(UTC+03:00) Asia/Baghdad</option>
                  <option value="Asia/Bahrain">(UTC+03:00) Asia/Bahrain</option>
                  <option value="Asia/Kuwait">(UTC+03:00) Asia/Kuwait</option>
                  <option value="Asia/Qatar">(UTC+03:00) Asia/Qatar</option>
                  <option value="Asia/Riyadh">(UTC+03:00) Asia/Riyadh</option>
                  <option value="Europe/Istanbul">(UTC+03:00) Europe/Istanbul</option>
                  <option value="Europe/Kirov">(UTC+03:00) Europe/Kirov</option>
                  <option value="Europe/Minsk">(UTC+03:00) Europe/Minsk</option>
                  <option value="Europe/Moscow">(UTC+03:00) Europe/Moscow</option>
                  <option value="Europe/Simferopol">(UTC+03:00) Europe/Simferopol</option>
                  <option value="Europe/Volgograd">(UTC+03:00) Europe/Volgograd</option>
                  <option value="Indian/Antananarivo">(UTC+03:00) Indian/Antananarivo</option>
                  <option value="Indian/Comoro">(UTC+03:00) Indian/Comoro</option>
                  <option value="Indian/Mayotte">(UTC+03:00) Indian/Mayotte</option>
                  <option value="Asia/Tehran">(UTC+03:30) Asia/Tehran</option>
                  <option value="Asia/Baku">(UTC+04:00) Asia/Baku</option>
                  <option value="Asia/Dubai">(UTC+04:00) Asia/Dubai</option>
                  <option value="Asia/Muscat">(UTC+04:00) Asia/Muscat</option>
                  <option value="Asia/Tbilisi">(UTC+04:00) Asia/Tbilisi</option>
                  <option value="Asia/Yerevan">(UTC+04:00) Asia/Yerevan</option>
                  <option value="Europe/Astrakhan">(UTC+04:00) Europe/Astrakhan</option>
                  <option value="Europe/Samara">(UTC+04:00) Europe/Samara</option>
                  <option value="Europe/Saratov">(UTC+04:00) Europe/Saratov</option>
                  <option value="Europe/Ulyanovsk">(UTC+04:00) Europe/Ulyanovsk</option>
                  <option value="Indian/Mahe">(UTC+04:00) Indian/Mahe</option>
                  <option value="Indian/Mauritius">(UTC+04:00) Indian/Mauritius</option>
                  <option value="Indian/Reunion">(UTC+04:00) Indian/Reunion</option>
                  <option value="Asia/Kabul">(UTC+04:30) Asia/Kabul</option>
                  <option value="Antarctica/Mawson">(UTC+05:00) Antarctica/Mawson</option>
                  <option value="Asia/Aqtau">(UTC+05:00) Asia/Aqtau</option>
                  <option value="Asia/Aqtobe">(UTC+05:00) Asia/Aqtobe</option>
                  <option value="Asia/Ashgabat">(UTC+05:00) Asia/Ashgabat</option>
                  <option value="Asia/Atyrau">(UTC+05:00) Asia/Atyrau</option>
                  <option value="Asia/Dushanbe">(UTC+05:00) Asia/Dushanbe</option>
                  <option value="Asia/Karachi">(UTC+05:00) Asia/Karachi</option>
                  <option value="Asia/Oral">(UTC+05:00) Asia/Oral</option>
                  <option value="Asia/Samarkand">(UTC+05:00) Asia/Samarkand</option>
                  <option value="Asia/Tashkent">(UTC+05:00) Asia/Tashkent</option>
                  <option value="Asia/Yekaterinburg">(UTC+05:00) Asia/Yekaterinburg</option>
                  <option value="Indian/Kerguelen">(UTC+05:00) Indian/Kerguelen</option>
                  <option value="Indian/Maldives">(UTC+05:00) Indian/Maldives</option>
                  <option value="Asia/Colombo">(UTC+05:30) Asia/Colombo</option>
                  <option value="Asia/Kolkata">(UTC+05:30) Asia/Kolkata</option>
                  <option value="Asia/Kathmandu">(UTC+05:45) Asia/Kathmandu</option>
                  <option value="Antarctica/Vostok">(UTC+06:00) Antarctica/Vostok</option>
                  <option value="Asia/Almaty">(UTC+06:00) Asia/Almaty</option>
                  <option value="Asia/Bishkek">(UTC+06:00) Asia/Bishkek</option>
                  <option value="Asia/Dhaka">(UTC+06:00) Asia/Dhaka</option>
                  <option value="Asia/Omsk">(UTC+06:00) Asia/Omsk</option>
                  <option value="Asia/Qyzylorda">(UTC+06:00) Asia/Qyzylorda</option>
                  <option value="Asia/Thimphu">(UTC+06:00) Asia/Thimphu</option>
                  <option value="Asia/Urumqi">(UTC+06:00) Asia/Urumqi</option>
                  <option value="Indian/Chagos">(UTC+06:00) Indian/Chagos</option>
                  <option value="Asia/Yangon">(UTC+06:30) Asia/Yangon</option>
                  <option value="Indian/Cocos">(UTC+06:30) Indian/Cocos</option>
                  <option value="Antarctica/Davis">(UTC+07:00) Antarctica/Davis</option>
                  <option value="Asia/Bangkok">(UTC+07:00) Asia/Bangkok</option>
                  <option value="Asia/Barnaul">(UTC+07:00) Asia/Barnaul</option>
                  <option value="Asia/Ho_Chi_Minh">(UTC+07:00) Asia/Ho_Chi_Minh</option>
                  <option value="Asia/Hovd">(UTC+07:00) Asia/Hovd</option>
                  <option value="Asia/Jakarta">(UTC+07:00) Asia/Jakarta</option>
                  <option value="Asia/Krasnoyarsk">(UTC+07:00) Asia/Krasnoyarsk</option>
                  <option value="Asia/Novokuznetsk">(UTC+07:00) Asia/Novokuznetsk</option>
                  <option value="Asia/Novosibirsk">(UTC+07:00) Asia/Novosibirsk</option>
                  <option value="Asia/Phnom_Penh">(UTC+07:00) Asia/Phnom_Penh</option>
                  <option value="Asia/Pontianak">(UTC+07:00) Asia/Pontianak</option>
                  <option value="Asia/Tomsk">(UTC+07:00) Asia/Tomsk</option>
                  <option value="Asia/Vientiane">(UTC+07:00) Asia/Vientiane</option>
                  <option value="Indian/Christmas">(UTC+07:00) Indian/Christmas</option>
                  <option value="Antarctica/Casey">(UTC+08:00) Antarctica/Casey</option>
                  <option value="Asia/Brunei">(UTC+08:00) Asia/Brunei</option>
                  <option value="Asia/Choibalsan">(UTC+08:00) Asia/Choibalsan</option>
                  <option value="Asia/Hong_Kong">(UTC+08:00) Asia/Hong_Kong</option>
                  <option value="Asia/Irkutsk">(UTC+08:00) Asia/Irkutsk</option>
                  <option value="Asia/Kuala_Lumpur">(UTC+08:00) Asia/Kuala_Lumpur</option>
                  <option value="Asia/Kuching">(UTC+08:00) Asia/Kuching</option>
                  <option value="Asia/Macau">(UTC+08:00) Asia/Macau</option>
                  <option value="Asia/Makassar">(UTC+08:00) Asia/Makassar</option>
                  <option value="Asia/Manila">(UTC+08:00) Asia/Manila</option>
                  <option value="Asia/Shanghai">(UTC+08:00) Asia/Shanghai</option>
                  <option value="Asia/Singapore">(UTC+08:00) Asia/Singapore</option>
                  <option value="Asia/Taipei">(UTC+08:00) Asia/Taipei</option>
                  <option value="Asia/Ulaanbaatar">(UTC+08:00) Asia/Ulaanbaatar</option>
                  <option value="Australia/Perth">(UTC+08:00) Australia/Perth</option>
                  <option value="Asia/Pyongyang">(UTC+08:30) Asia/Pyongyang</option>
                  <option value="Australia/Eucla">(UTC+08:45) Australia/Eucla</option>
                  <option value="Asia/Chita">(UTC+09:00) Asia/Chita</option>
                  <option value="Asia/Dili">(UTC+09:00) Asia/Dili</option>
                  <option value="Asia/Jayapura">(UTC+09:00) Asia/Jayapura</option>
                  <option value="Asia/Khandyga">(UTC+09:00) Asia/Khandyga</option>
                  <option value="Asia/Seoul">(UTC+09:00) Asia/Seoul</option>
                  <option value="Asia/Tokyo">(UTC+09:00) Asia/Tokyo</option>
                  <option value="Asia/Yakutsk">(UTC+09:00) Asia/Yakutsk</option>
                  <option value="Pacific/Palau">(UTC+09:00) Pacific/Palau</option>
                  <option value="Australia/Darwin">(UTC+09:30) Australia/Darwin</option>
                  <option value="Antarctica/DumontDUrville">(UTC+10:00) Antarctica/DumontDUrville</option>
                  <option value="Asia/Ust-Nera">(UTC+10:00) Asia/Ust-Nera</option>
                  <option value="Asia/Vladivostok">(UTC+10:00) Asia/Vladivostok</option>
                  <option value="Australia/Brisbane">(UTC+10:00) Australia/Brisbane</option>
                  <option value="Australia/Lindeman">(UTC+10:00) Australia/Lindeman</option>
                  <option value="Pacific/Chuuk">(UTC+10:00) Pacific/Chuuk</option>
                  <option value="Pacific/Guam">(UTC+10:00) Pacific/Guam</option>
                  <option value="Pacific/Port_Moresby">(UTC+10:00) Pacific/Port_Moresby</option>
                  <option value="Pacific/Saipan">(UTC+10:00) Pacific/Saipan</option>
                  <option value="Australia/Adelaide">(UTC+10:30) Australia/Adelaide</option>
                  <option value="Australia/Broken_Hill">(UTC+10:30) Australia/Broken_Hill</option>
                  <option value="Antarctica/Macquarie">(UTC+11:00) Antarctica/Macquarie</option>
                  <option value="Asia/Magadan">(UTC+11:00) Asia/Magadan</option>
                  <option value="Asia/Sakhalin">(UTC+11:00) Asia/Sakhalin</option>
                  <option value="Asia/Srednekolymsk">(UTC+11:00) Asia/Srednekolymsk</option>
                  <option value="Australia/Currie">(UTC+11:00) Australia/Currie</option>
                  <option value="Australia/Hobart">(UTC+11:00) Australia/Hobart</option>
                  <option value="Australia/Lord_Howe">(UTC+11:00) Australia/Lord_Howe</option>
                  <option value="Australia/Melbourne">(UTC+11:00) Australia/Melbourne</option>
                  <option value="Australia/Sydney">(UTC+11:00) Australia/Sydney</option>
                  <option value="Pacific/Bougainville">(UTC+11:00) Pacific/Bougainville</option>
                  <option value="Pacific/Efate">(UTC+11:00) Pacific/Efate</option>
                  <option value="Pacific/Guadalcanal">(UTC+11:00) Pacific/Guadalcanal</option>
                  <option value="Pacific/Kosrae">(UTC+11:00) Pacific/Kosrae</option>
                  <option value="Pacific/Norfolk">(UTC+11:00) Pacific/Norfolk</option>
                  <option value="Pacific/Noumea">(UTC+11:00) Pacific/Noumea</option>
                  <option value="Pacific/Pohnpei">(UTC+11:00) Pacific/Pohnpei</option>
                  <option value="Asia/Anadyr">(UTC+12:00) Asia/Anadyr</option>
                  <option value="Asia/Kamchatka">(UTC+12:00) Asia/Kamchatka</option>
                  <option value="Pacific/Fiji">(UTC+12:00) Pacific/Fiji</option>
                  <option value="Pacific/Funafuti">(UTC+12:00) Pacific/Funafuti</option>
                  <option value="Pacific/Kwajalein">(UTC+12:00) Pacific/Kwajalein</option>
                  <option value="Pacific/Majuro">(UTC+12:00) Pacific/Majuro</option>
                  <option value="Pacific/Nauru">(UTC+12:00) Pacific/Nauru</option>
                  <option value="Pacific/Tarawa">(UTC+12:00) Pacific/Tarawa</option>
                  <option value="Pacific/Wake">(UTC+12:00) Pacific/Wake</option>
                  <option value="Pacific/Wallis">(UTC+12:00) Pacific/Wallis</option>
                  <option value="Antarctica/McMurdo">(UTC+13:00) Antarctica/McMurdo</option>
                  <option value="Pacific/Auckland">(UTC+13:00) Pacific/Auckland</option>
                  <option value="Pacific/Enderbury">(UTC+13:00) Pacific/Enderbury</option>
                  <option value="Pacific/Fakaofo">(UTC+13:00) Pacific/Fakaofo</option>
                  <option value="Pacific/Tongatapu">(UTC+13:00) Pacific/Tongatapu</option>
                  <option value="Pacific/Chatham">(UTC+13:45) Pacific/Chatham</option>
                  <option value="Pacific/Apia">(UTC+14:00) Pacific/Apia</option>
                  <option value="Pacific/Kiritimati">(UTC+14:00) Pacific/Kiritimati</option>     
                </select>
                <label>Currency</label>
                <select value="{{currency::input}}">
                  <option value="AUD">Australian dollars ($)</option>
                  <option value="BHD">Bahrain dinars (BD)</option>
                  <option value="BTC" selected="">Bitcoin (Ƀ)</option>
                  <option value="BRL">Brazil reals (R$)</option>
                  <option value="GBP">British pounds (£)</option>
                  <option value="BND">Brunei dollars ($)</option>
                  <option value="CAD">Canadian dollars ($)</option>
                  <option value="CNY">Chinese yuan (¥)</option>
                  <option value="CZK">Czech koruny (Kč)</option>
                  <option value="DKK">Danish kroner (kr)</option>
                  <option value="EGP">Egyptian pounds (£)</option>
                  <option value="EUR">Euros (€)</option>
                  <option value="HKD">Hong Kong dollars ($)</option>
                  <option value="HUF">Hungarian forints (Ft)</option>
                  <option value="INR">Indian rupees (₹)</option>
                  <option value="IDR">Indonesian rupiahs (Rp)</option>
                  <option value="ILS">Israeli shekels (₪)</option>
                  <option value="JPY">Japanese yen (¥)</option>
                  <option value="JOD">Jordanian dinars (JD)</option>
                  <option value="KZT">Kazakh tenge (лв)</option>
                  <option value="KWD">Kuwaiti dinars (K.D.)</option>
                  <option value="LTL">Lithuanian litai (Lt)</option>
                  <option value="MYR">Malaysian ringgits (RM)</option>
                  <option value="MXN">Mexican pesos ($)</option>
                  <option value="NZD">New Zealand dollars ($)</option>
                  <option value="NOK">Norwegian kroner (kr)</option>
                  <option value="PKR">Pakistan rupees (₨)</option>
                  <option value="PHP">Philippine pesos (₱)</option>
                  <option value="PLN">Polish zloty (zł)</option>
                  <option value="QAR">Qatar riyals (﷼)</option>
                  <option value="RON">Romanian leu (L)</option>
                  <option value="RUB">Russian rubles (руб)</option>
                  <option value="SAR">Saudi riyals (﷼)</option>
                  <option value="RSD">Serbian dinars (Дин.)</option>
                  <option value="SGD">Singapore dollars ($)</option>
                  <option value="ZAR">South African rands (R)</option>
                  <option value="KRW">South Korean won (₩)</option>
                  <option value="SEK">Swedish kronor (kr)</option>
                  <option value="CHF">Swiss francs (CHF)</option>
                  <option value="TWD">Taiwan dollars (NT$)</option>
                  <option value="THB">Thai baht (฿)</option>
                  <option value="TRY">Turkish liras (₤)</option>
                  <option value="USD">U.S. dollars ($)</option>
                  <option value="AED">United Arab Emirates dirhams (AED)</option>
                  <option value="VND">Vietnamese dong (₫)</option>
                </select>
              </div>
            </div>              
            <div class="form-section">
              <div class="form-title">Privacy</div>
              <div class="form-inputs">

                <div class="radio">
                <label>Profile visibility</label></br>
                  <input type="radio" name="profile" value="everyone" id="everyone" checked="{{visabilityEveryone}}" on-change="_visability">
                  <label for="everyone" class="side-label">Everyone</label>
                  <input type="radio" name="profile" value="private" id="private" checked="{{visabilityPrivate}}" on-change="_visability">
                  <label for="private" class="side-label">Private</label>
                </div>

                <div class="radio">
                <label>Messages</label></br>
                  <input type="radio" name="messages" value="everyone" id="everyone" checked="{{messagesEveryone}}" on-change="_messages">
                  <label for="everyone" class="side-label">Everyone</label>
                  <input type="radio" name="messages" value="ifollow" id="ifollow" checked="{{messagesIfollow}}" on-change="_messages">
                  <label for="ifollow" class="side-label">People I follow</label>
                  <input type="radio" name="messages" value="none" id="none" checked="{{messagesNone}}" on-change="_messages">
                  <label for="none" class="side-label">No one</label>
                </div>
              </div> 
            </div>
            <div class="btn-right">
              <button class="flat-btn" on-click="_save">[[btntext]]</button>
            </div>
          </div>
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
      route: {
        type: Object,
        observer: '_routeChanged',
      },
      userid: {
        type: String,
      },
      btntext: {
        type: String,
        value: 'Save Preferences',
      },
    };
  }

  static mapStateToProps(state, element) {
    return {
      fullname: state.fullname,
      userid: state.userid,
      language: state.language,
      mode: state.mode,
      env: state.env,
      color: state.color,
    };
  }


  _visability(e) {
    this.visability = e.target.value;
  }

  _messages(e) {
    this.messages = e.target.value;
  }
  _save() {
    this.btntext = 'Saving...';
    const language = this.newLanguage || 'English';
    localStorage.setItem('language', this.newLanguage);
    const timeZone = this.timeZone || 'UTC';
    const currency = this.currency || 'BTC';
    const visability = this.visability || 'everyone';
    const messages = this.messages || 'everyone';

    console.log(language);
    console.log(timeZone);
    console.log(currency);
    console.log(visability);
    console.log(messages);

    this.dispatchAction({
      type: 'CHANGE_LANGUAGE',
      language: language,
    });

    const data = {language, timeZone, currency, visability, messages};
    const token = localStorage.getItem('jwt');
    const url = `${this.env.apiUrl}/users/preferences/`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.btntext = 'Save Profile';
        })
        .catch((error) => console.log('Error:', error));
  }

  _routeChanged() {
    if (this.route.path == '/settings/preferences/') {
      const token = localStorage.getItem('jwt');
      const url = `${this.env.apiUrl}/users/preferences/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            this.language = response.language;
            this.timeZone = response.timeZone;
            this.currency = response.currency;
            this.visability = response.visability;
            this.messages = response.messages;
          })
          .catch((error) => console.log('Error:', error));
    }
  }
  _mode() {
    this.updateStyles({'--blue-color': this.color.blue});
    this.updateStyles({'--grey-color': this.color.grey});
    this.updateStyles({'--red-color': this.color.red});
    this.updateStyles({'--green-color': this.color.green});
    if (this.mode === 'light') {
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
} window.customElements.define('page-preferences', PagePreferences);
