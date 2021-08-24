import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { App } from 'src/app/models/app';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apps: Array<App> = [{
    title: 'Cope Stress - Daily Challenge',
    id: 'cope-stress',
    bannerUrl: '/assets/apps/The-Cope-Stress-App-Header.png',
    iconUrl: '/assets/apps/The-Cope-Stress-App-Icon.png',
    appStoreUrl: 'https://apps.apple.com/us/app/cope-stress-daily-challenge/id1545228555?ign-mpt=uo%3D2',
    primaryScreenshotUrl: '/assets/apps/The-Cope-Stress-App-Screenshot.png',
    primaryColor: '#329D9C',
    features: [{
      icon: 'fas fa-bath',
      title: 'Cope Stress',
      description: 'Over a hundred little lessons to get you more calm and forget about your daily stress.'
    },{
      icon: 'fas fa-rocket',
      title: 'Daily Challenge',
      description: 'Get out of your comfort zone gives you the best results.'
    },{
      icon: 'fas fa-bath',
      title: 'Learn how to calm',
      description: 'Continue to work on yourself every day, to get a mind change and see long term results.'
    }],
    shortDescription: 'Calm and increase your awareness with over a hundred different little fun lessons for every day.',
    description: `When was the last time you built a paper plane or walked in the rain?<br/>
<br/>
This App helps you to calm and increase your awareness with over a hundred different little fun lessons for every day. Challenge yourself, to be more in focus and less stressed.`
  },{
    title: 'Pretty GS1 Scanner',
    id: 'pretty-gs1-scanner',
    bannerUrl: '/assets/apps/The-Pretty-GS1-Reader-Header.png',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/4f/4f/8b/4f4f8bdd-ceec-4e28-f594-39edd5066ba0/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.png',
    appStoreUrl: 'https://apps.apple.com/us/app/pretty-gs1-reader/id1545547560',
    primaryScreenshotUrl: '/assets/apps/The-Pretty-GS1-Reader-Screenshot.png',
    primaryColor: '#1D6D90',
    screenshotUrls: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/22/cf/64/22cf64be-edaa-b6b4-b2dd-5af1694f195b/e5bab91f-7fc1-4c01-b662-42539f4b3af0_iPhone_XR_U002c_XS_Max_U002c_11__U2013_4@3x.png/1242x2688bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/2a/21/b6/2a21b62d-9fca-e99f-c62f-94b432fca846/0ad9ab2c-0710-4821-b599-f8abdd8d040b_iPhone_XR_U002c_XS_Max_U002c_11__U2013_5@3x.png/1242x2688bb.png',
      'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/09/54/a2/0954a211-f59c-fc6d-12b6-bd1c5ef92430/53704d02-b673-45e7-974a-48292e6ca272_iPhone_XR_U002c_XS_Max_U002c_11__U2013_3@3x.png/1242x2688bb.png',
      'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/07/40/72/0740729c-64b7-f412-9b84-159d8a76ba3a/66025b8c-bc2c-4fb5-970b-221bdfebba82_iPhone_XR_U002c_XS_Max_U002c_11__U2013_7@3x.png/1242x2688bb.png'
    ],
    features:[{
      icon: 'fas fa-barcode',
      title: 'Scan GS1 Barcodes',
      description: 'The App supports all common barcode types, but furthermore can understand the GS1 Standard and show all values that are inside of the barcode.'
    },{
      icon: 'fas fa-history',
      title: 'History',
      description: 'Keep track of your history and revisit your barcodes later.',
    },{
      icon: 'fas fa-share-square',
      title: 'Share',
      description: 'Share the total raw barcode with any other App or person, or copy the values out of the barcode'
    }],
    shortDescription: 'Probably the most beautiful pure GS1 Barcode Scanner, with an easy to use, functional design.',
    description: `Probably the most beautiful pure GS1 Barcode Scanner, with an easy to use, functional design. See all contents of GS1 barcodes and share them with others.<br/>
    <br/>
    The App will show the contents of any GS1 Barcode, like the GTIN, Expiration Date, Lot or Serial Number. These barcodes are often used on products in B2B areas like the healthcare industry. Have a history of all scanned barcodes and share them with other applications or people, by using the Pretty GS1 Scanner.<br/>
    <br/>
    Features:<br/>
    <br/>
    - Scan all common Barcode<br/>
    - See Details of GS1 Barcodes<br/>
    - Save a History of your scans<br/>
    - Share Barcodes with other Apps<br/>
    - Generates the scanned barcode as an image<br/>
    - Export the Barcodes<br/>
    - Shows all highlighted Application Identifier and Group Separator in the Raw Barcode<br/>
    - Import Barcode from the Gallery<br/>
    - Dark Mode Support<br/>
    - Works on iPhone, iPad and iPod Touch<br/>
    <br/>
    The app can scan the following barcodes:<br/>
    <br/>
    Code 39, Code 93, Code 128, EAN-8, EAN-13, Data Matrix, UPC-E, Aztec, PDF417, ITF14, Interleaved 2 of 5 codes<br/>
    <br/>
    The following GS1 Application Identifiers are supported:<br/>
    <br/>
    - Serial Shipping Container Code<br/>
    - GTIN<br/>
    - GTIN Of Contained Trade Items<br/>
    - Lot Number<br/>
    - Production Date<br/>
    - Due Date<br/>
    - Packaging Date<br/>
    - Best Before Date<br/>
    - Expiration Date<br/>
    - Product Variant<br/>
    - Serial Number<br/>
    - Secondary Data Fields<br/>
    - Count Of Items<br/>
    - Number Of Units Contained<br/>
    - Product Weight In KG<br/>
    - Lot Number N<br/>
    - Additional Product Identification<br/>
    - Customer Part Number<br/>
    - Made To Order Variation Number<br/>
    - Secondary Serial Number<br/>
    - Reference To Source Entity`
  },{
    title: 'Smart GS1 Barcode Generator',
    id: 'smart-gs1-barcode-generator',
    // bannerUrl: '',
    iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/2c/38/28/2c38286f-fd69-a3d2-ea4e-e4fc6111f40c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/300x300bb.png',
    appStoreUrl: 'https://apps.apple.com/ch/app/smart-gs1-barcode-generator/id1547589409',
    primaryScreenshotUrl: '',
    primaryColor: '#30999B', // just by color picker
    screenshotUrls: [
      'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/c0/3d/a1/c03da101-dbf8-7398-1ece-9c70d6bbf172/3087648c-7881-4a80-b726-d1c625a257a7_iPhone_6-5_-_1__U2013_1@3x.png/230x0w.png',
      'https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/65/85/33/658533a2-c42d-f071-d606-3ef13e10886d/156f48ef-2686-4bde-b6ab-fa12eadf9a9a_iPhone_6-5_-_2__U2013_1@3x.png/230x0w.png',
      'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/fd/25/c6/fd25c62c-5e02-bc39-3974-cdacba52dda5/1189da8f-dc3d-44d8-aa1e-3054725875e0_iPhone_6-5_-_3__U2013_1@3x.png/230x0w.png',
      'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/bc/90/cd/bc90cda0-31c9-e05b-bff5-e0cd1c1a6d81/0e96308a-9ea7-4e8d-853b-e21222699eba_iPhone_6-5_-_4__U2013_1@3x.png/230x0w.png'
    ],
    shortDescription: 'The handy Barcode Generator that allows you to generate GS1 and other Barcodes at your fingertips, without the need of knowing how the content is generated.',
    description: `<div>
      <div>
        <p>The handy Barcode Generator that allows you to generate GS1 and other Barcodes at your fingertips, without the need of knowing how the content is generated. Simply fill out the form with all the GS1 Application
          Identifiers desired.</p>
        <br>
        <p>Supports the following barcode types:</p>
        <p>Code 128, DataMatrix, QR Code, EAN 13, ITF-14, EAN 8, UPCE, UPCA</p>
        <br>
        <p>Allows you to fill in the application identifiers:</p>
        <p>- GTIN</p>
        <p>- Batch- / Lot-Number</p>
        <p>- Serial-Number</p>
        <p>- Production Date</p>
        <p>- Expiration Date</p>
        <p>- Due Date</p>
        <p>- Packaging Date</p>
        <p>- Best Before Date</p>
        <p>- Put in any raw content</p>
      </div>
    </div>`
  },{
    title: 'Geo File Converter',
    id: 'geo-file-converter',
    // bannerUrl: '',
    iconUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/52/a2/56/52a25652-33ba-088e-2b18-97c14131ea03/AppIcon-1x_U007emarketing-0-7-0-85-220.png/492x0w.png',
    appStoreUrl: 'https://apps.apple.com/de/app/geo-file-converter-gpx-kml/id1550304849',
    primaryScreenshotUrl: '',
    primaryColor: '#30999B', // just by color picker
    screenshotUrls: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/7b/ea/9e/7bea9edd-b2c2-a201-8968-bc04baf0b429/7440c837-fa00-4b59-87ad-f4c2cd2a6f46_iPhone_6-5_-_1__U2013_1@3x.png/230x0w.png',
      'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/15/3f/12/153f1260-4e92-7b96-d717-e4c1ffa842f1/660263d6-502e-4d54-b212-0c7bec6bfecb_iPhone_6-5_-_2__U2013_1@3x.png/230x0w.png',
      'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/a6/83/0b/a6830bdd-515b-6592-7046-3a1f61489664/05900277-d3a0-4c17-8873-0a441979501c_iPhone_6-5_-_3__U2013_1@3x.png/230x0w.png',
      'https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/50/03/e9/5003e920-a573-f6c1-a2a8-b2ccbe6d0038/ccb085bd-cae8-4b85-8b1c-36b132ca4879_iPhone_6-5_-_4__U2013_1@3x.png/230x0w.png'
    ],
    shortDescription: 'Your favorite Map doesn\'t support your GPS Maps files? Use this App to convert your hiking routes, run records, tracks or POI maps to the desired formats',
    description: `Your favorite Map doesn't support your GPS Maps files?<br/>
    <br/>
    Use this App to convert your hiking routes, run records, tracks or POI maps to the desired formats. You can use this map to import or export files with Applications like Google Earth (.kml / .kmz), GPS Receivers (.gpx), Webmaps in Browsers (.geoJSON), OmiExplorer (.kml, .gpx), TomTom (.gpx), Garmin(.gpx) and many more.<br/>
    <br/>
    Supported formats: KML, KMZ, GPX and GeoJSON<br/>
    Convert Map Name, Routes, Location Markers and POIs`
  },{
    title: 'ETF Saving Plan Calculator',
    id: 'etf-saving-plan-calculator',
    iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/62/1b/13/621b13a0-9c2a-c48d-2234-1feee8ab7ddc/AppIcon-1x_U007emarketing-0-7-0-85-220.png/300x300bb.png',
    appStoreUrl: 'https://apps.apple.com/us/app/savings-plan-calculator-etf/id1560548643',
    screenshotUrls: [
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/bf/b1/81/bfb1810b-6637-f486-b70b-8cc4b0dcd3fd/f59dcd6a-2e1c-4dea-a7ba-ca20954993df_iPhone_6-5_-_5__U2013_1@3x.png/1242x2688bb.png',
      'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/1a/e0/54/1ae054d0-3c3d-50f3-0b56-52e5812b5483/603afe34-a81a-411b-b429-d5516ed3b44e_iPhone_6-5_-_5__U2013_2@3x.png/1242x2688bb.png',
      'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/1a/e0/54/1ae054d0-3c3d-50f3-0b56-52e5812b5483/603afe34-a81a-411b-b429-d5516ed3b44e_iPhone_6-5_-_5__U2013_2@3x.png/1242x2688bb.png',
      'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/79/d2/21/79d221ac-79fa-f7b2-8631-0cb224731b0e/196682f4-71d0-4c30-850b-53586efcda1e_iPhone_6-5_-_5__U2013_4@3x.png/1242x2688bb.png'
    ],
    shortDescription: 'The most simple way to calculate the revenue of your ETF saving plans. Just fill in your parameters and see how your investment could increase over the next years.',
    description: `The most simple way to calculate the return from your ETF savings plan. Just fill in your parameters and see how your investment can perform over the next years.<br/>
    <br/>
    You can choose from a sample ETF to pre-fill the values for the yearly return and TER.<br/>
    <br/>
    The following parameters are available:
    <ul>
    <li>Start Invest</li>
    <li>Monthly Rate</li>
    <li>Years of Invest</li>
    <li>Annual Return</li>
    <li>Annual Fund Costs (TER)</li>
    <li>Rate Dynamic</li>
    <li>Yearly Inflation Adjustment</li>
    </ul>`
  },{
    title: 'Nautic Speed and Compass',
    id: 'boat-speedometer',
    iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/f0/91/40/f0914007-5770-3fc2-5fe3-47fb8d310d36/AppIcon-1x_U007emarketing-0-7-0-85-220.png/300x300bb.png',
    appStoreUrl: 'https://apps.apple.com/us/app/nautic-speed-and-compass/id1578165239',
    screenshotUrls: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/9b/f4/fa/9bf4fa85-d12c-8437-1447-efef61b35596/9938717a-9e1e-4125-af6d-7bfe11837766_App_Store_Screenshot_6_U002c5_-_1__U2013_1@3x.png/1242x2688bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/6a/07/b5/6a07b5d7-09b8-65c6-bbf0-0bead8abdd79/84433d15-81d5-4371-91ab-923f16a67632_App_Store_Screenshot_6_U002c5_-_1__U2013_2@3x.png/1242x2688bb.png',
      'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/1e/ef/34/1eef3437-3fdf-8cff-43ad-322f53cdac56/25529121-319a-4ff7-a1b9-401301d8440c_App_Store_Screenshot_6_U002c5_-_1__U2013_3@3x.png/1242x2688bb.png'
    ],
    shortDescription: 'Ever wondered which speed you are heading? Or which direction you are driving with your boat?',
    description: `Ever wondered which speed you are heading? Or which direction you are driving with your boat?<br/>
    <br/>
    This app will provide you all important information you need for your next boat ride.<br/>
    <ul>
    <li>Compass with the your direction</li>
    <li>See the current Speed in knots, miles or kilometers</li>
    <li>Set Speed Limits</li>
    <li>Simply switch between unites</li>
    <li>See a map of your cruise and share it with others</li>
    <li>See your maximum and average speed</li>
    <li>Works in Portrait and Landscape Mode</li>
    </ul>`
  },{
    title: 'Curve Tracker',
    id: 'curve-tracker',
    iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/83/74/ff/8374ffcf-868d-6758-d0c0-a19669de6400/AppIcon-1x_U007emarketing-0-7-0-85-220.png/300x300bb.png',
    bannerUrl: '/assets/apps/The-Cope-Stress-App-Header.png',
    appStoreUrl: 'https://apps.apple.com/us/app/moto-leaning-angle/id1579524063?ign-mpt=uo%3D2',
    screenshotUrls: [
      'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/4b/ae/dc/4baedcd4-2c3c-b02d-5fa4-6c5426058239/0f6bce03-3dc5-48ea-af86-f0c78a1df240_App_Store_Screenshot_6_U002c5_-_1__U2013_1@3x.png/1242x2688bb.png',
      'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/00/f5/ef/00f5ef9c-c0e5-10a3-ad96-ec9af6b4a39c/3dff279c-ec94-4496-ae19-10e933a1992e_App_Store_Screenshot_6_U002c5_-_1__U2013_2@3x.png/1242x2688bb.png',
      'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/48/86/23/488623e7-eb87-6f02-7eac-d4c37d100e90/73eee7be-f94c-4397-9765-5753201a075a_App_Store_Screenshot_6_U002c5_-_1__U2013_3@3x.png/1242x2688bb.png',
      'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/44/a3/16/44a316e6-677d-fb1e-46de-61626679add1/5b267f1b-7d68-416b-94df-db1b1b383e01_App_Store_Screenshot_6_U002c5_-_1__U2013_4@3x.png/1242x2688bb.png',
      'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/f8/a0/48/f8a04817-f130-2b03-b9b8-a2197b4552cb/4e23c449-f92b-4be5-93ee-fdf59684eb47_App_Store_Screenshot_6_U002c5_-_1__U2013_5@3x.png/1242x2688bb.png',
      'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/a7/0b/bb/a70bbb95-8af8-0b1b-9e2a-21e678b11cc6/3761af48-2326-485d-a928-22e686968b4f_App_Store_Screenshot_6_U002c5_-_1__U2013_6@3x.png/1242x2688bb.png'
    ],
    shortDescription: 'Ever wondered how good your cornering is, when driving your motorbike?',
    description: `Ever wondered how good your cornering is, when driving your motorbike?<br/>
<br/>
Moto Leaning Angle is your App to improve your driving by analyzing and tracking your rides with the sensors of your smartphone.<br/>
<br/>
Use this App to track your leaning angle while driving bike. It allows you to record a map with you route, that includes all the corners, including their speed and leaning angle.
Improve your driving skills and get a more secure driver.`
  }];

  constructor(private utilitiesService: UtilitiesService) { }

  public getApps(): Array<App> {
    return this.apps;
  }

  public getApp(id: String): App {
      return this.apps.filter(app => app.id === id)[0];
    }

}
