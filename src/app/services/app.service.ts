import { Injectable } from '@angular/core';
import { App } from 'src/app/models/app';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apps: Array<App> = [
    {
      description: "Your favorite Map doesn't support your GPS Maps files? \n" +
        '\n' +
        'Use this App to convert your hiking routes, run records, tracks or POI maps to the desired formats. You can use this map to import or export files with Applications like Google Earth (.kml / .kmz), GPS Receivers (.gpx), Webmaps in Browsers (.geoJSON), OmiExplorer (.kml, .gpx), TomTom (.gpx), Garmin(.gpx) and many more.\n' +
        '\n' +
        'The converter can also reduce the quality of maps, to support GPX files for hardware devices like Garmin Navigation Devices, etc.\n' +
        '\n' +
        'Supported formats: KML, KMZ, GPX and GeoJSON\n' +
        'Convert Map Name, Routes, Location Markers and POIs. Coordinates will also include the name and elevation.',
      iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/c9/77/8b/c9778b94-9286-cfe6-3064-9bdf52f33a98/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/6e/3f/5f/6e3f5f22-fc0b-0c3b-bf87-ab9e763e3dcc/34b54c75-07a0-4d10-a2b5-920317fe3410_iPhone_6-5_-_1__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/a8/a1/d2/a8a1d243-ca62-4841-0468-724c1e84b10b/660263d6-502e-4d54-b212-0c7bec6bfecb_iPhone_6-5_-_2__U2013_1@3x.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/a5/3e/61/a53e618b-0a24-6822-fda2-8ac2c78c35ff/05900277-d3a0-4c17-8873-0a441979501c_iPhone_6-5_-_3__U2013_1@3x.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/27/00/df/2700df90-656b-d131-683a-50570880e6fa/ccb085bd-cae8-4b85-8b1c-36b132ca4879_iPhone_6-5_-_4__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/be/97/90/be9790fc-999a-bd65-e87e-dd2a6437816e/91da182a-fc37-451c-9afb-d6a90a98d081_iPhone_6-5_-_5__U2013_1@3x.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/82/ce/26/82ce269c-1211-2ce2-0080-adf5ec57210c/2647b76d-7b12-4384-8f0b-ddc2ef3c628e_iPhone_6-5_-_6__U2013_1@3x.png/1024x1024bb.png'
      ],
      title: 'Geo File Converter - GPX KML',
      id: 'geo-file-converter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1550304849?mt=8'
    },
    {
      description: 'Do you want to see the altitude, pressure and coordinates in a beautiful designed App?\n' +
        '\n' +
        'Then menti is your App!\n' +
        '\n' +
        '- See your altitude in realtime\n' +
        '- See your altitude history\n' +
        '- Measure the current pressure with the built in barometer\n' +
        '- See your current coordinates\n' +
        '- Including a beautiful outdoor map\n' +
        '- When does the sun go up or down?\n' +
        '- Switch between GPS and Barometer for altitude\n' +
        '- Included background tracking\n' +
        '- Supports all common units\n' +
        '- Works offline, without internet connection\n' +
        '- Store your favorite altitude points\n' +
        '\n' +
        'Internet connection will only be required for the map and location name.\n' +
        '\n' +
        'Thanks to jcomp, for providing the vector landscape on freepik.com',
      iconUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/3c/d8/ee/3cd8eefc-824f-19c9-cc27-cbaab256efc7/Icon-60@2x.png.png/120x120bb.png',
      screenshotUrls: [
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/c5/da/2d/c5da2db9-f5ea-350c-8633-cf7ceb58d70a/e5122550-e5ea-4811-bfcd-6ae8189caaf7_App_Store_Screenshot_6_U002c5_-_1.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/13/8e/2f/138e2f16-a5cb-8d0e-ad8d-4b3f222c3de0/e96c8e73-025a-4087-9ab2-f2e1295fe154_App_Store_Screenshot_6_U002c5_-_2.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/af/99/6c/af996c98-f5f4-823c-7da3-4924f770ab02/28712e9b-1e74-475a-be54-0c782d0a2b5d_App_Store_Screenshot_6_U002c5_-_3.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/3e/f3/25/3ef3252c-40cf-1175-7d40-6f7aeb785a4c/eab2e98f-2baa-4b41-a686-affb238e315a_App_Store_Screenshot_6_U002c5_-_4.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/15/6d/40/156d407a-3713-5750-87ec-2e6e56992eac/46c72fb7-2c4c-469f-903e-618c7a7f7bb3_App_Store_Screenshot_6_U002c5_-_5.png/1024x1024bb.png'
      ],
      title: 'menti - altimeter & barometer',
      id: 'mentialtimeterbarometer',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1644751217?mt=8'
    },
    {
      description: 'Ever wondered how good your cornering is, when driving your motorbike?\n' +
        '\n' +
        'Curve Tracker is the App to improve your driving by analyzing and tracking your rides with the sensors of your smartphone.\n' +
        '\n' +
        'Curve Tracker was #5 in the German payed Navigation App Charts!\n' +
        '\n' +
        'Use this App to track your leaning angle while driving bike. It allows you to record a map with you route, that includes all the corners, including their speed, g-force and leaning angle changes while driving through the corner, with beautiful visualisations.\n' +
        'Improve your driving skills and get a more secure driver.\n' +
        '\n' +
        '- See your leaning angle in curves\n' +
        '- Track your ride on a map and export as .gpx\n' +
        '- See a visual graph of all curves\n' +
        '- See a curve in detail to analyze it\n' +
        '- See a detailed overview of your limits\n' +
        '- See trip 0-100km/h and 60-120km/h acceleration of a trip\n' +
        '- iCloud support\n' +
        '- Different Themes\n' +
        '\n' +
        'Please do not try to discover the maximum lean angle of your bike. This App should just be used as a guidance, not as a challenge. The developer is not responsible for any damage caused by the driver leaning too far into the curve or similar.\n' +
        '\n' +
        'Thanks to Dan Garri, Casey Horner, Ümit Yildirim, Taneli Lahtinen and Ryan Searle for making the images available on unsplash.com.',
      iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/d6/86/28/d686280d-e470-04ca-48fa-97ae288f84ac/Icon-60@2x.png.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/e2/b4/59/e2b4591b-72e3-d6c5-4c2f-429012dff260/4fc12753-1b6c-425d-ba64-43065578714f_App_Store_Screenshot_6_U002c5_-_1__U2013_1.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/4e/51/f3/4e51f353-9c6d-5ab0-1d92-63a7d03f0a61/88f32619-3faf-49aa-91e2-3363e0017041_App_Store_Screenshot_6_U002c5_-_1__U2013_2.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/10/fb/53/10fb535f-6c64-bf96-8223-b72e32031172/7045eb48-dedf-45a6-9427-575ca64475fc_App_Store_Screenshot_6_U002c5_-_1__U2013_3.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/5d/ba/a8/5dbaa8df-59b3-22e9-a25b-934010f30308/a0277509-ada0-46ef-8f9d-46d14d95840c_App_Store_Screenshot_6_U002c5_-_1__U2013_4.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/36/6e/54/366e546a-6905-cd6e-88a9-922121ac01c4/fbfb983e-08b0-4d1f-bf8a-a7d6da5a7c01_App_Store_Screenshot_6_U002c5_-_1__U2013_5.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/c6/05/f2/c605f279-2ced-ef80-6355-acd9a7dbdc59/ca5fa839-2025-4db4-8ccc-3f83470f7077_App_Store_Screenshot_6_U002c5_-_1__U2013_6.png/1024x1024bb.png'
      ],
      title: 'Curve Tracker for Motorbike',
      id: 'curve-tracker',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1579524063?mt=8'
    },
    {
      description: 'Calculate and plan your ETF investments with the simple and intuitive calculators of ETF Calculator Pro.\n' +
        'ETF Calculator Pro is the Pro App of "Savings Plan Calculator ETF" with more features and calculators.\n' +
        '\n' +
        'ETF Calculator:\n' +
        '- Savings Plan Calculator\n' +
        '- Withdrawal Plan Calculator\n' +
        '- Rebalancing Calculator\n' +
        '- ETF Comparison\n' +
        '\n' +
        'Pro Features:\n' +
        '- Calculate the annual return of ETF / funds\n' +
        '- Select sample ETFs or save your own ETFs.\n' +
        '- Calculate your annuity or ETF withdrawals \n' +
        '- Calculate your annual ETF / fund rebalancing\n' +
        '- Use sample ETFs calculated from historical data\n' +
        '- Simple and intuitive user interface\n' +
        '\n' +
        'Try the free savings plan ETF calculator to get an idea of the savings plan calculator.\n' +
        '\n' +
        'Need more features in the calculators or have ideas for new ones? Then feel free to contact us via the app settings.\n' +
        '\n' +
        'Thanks to @darshan394, @ryoji__iwata and @fahrulazmi, for providing the images on Unsplash.',
      iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/d2/cf/f9/d2cff9f3-83d1-8a5e-61b1-cdb961a97577/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/31/86/82/31868230-3bf2-c102-f00a-bbed5afebefd/5688c0e4-d51e-4fba-8e0f-26262d8504ed_iPhone_6-5_-_1.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/8c/4f/68/8c4f6832-f78d-6c01-93dc-fb2bdf369375/2e2bb86f-4654-4916-b472-21c033d2f1fd_iPhone_6-5_-_2.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/fe/27/76/fe27765e-f21a-90ce-c512-5ef28506c3dc/e22fa096-0208-4b97-9ade-712d0fd8516f_iPhone_6-5_-_3.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/e3/7e/98/e37e98fe-1a98-1f63-d2f2-3cb6b49a9c5b/ae946d95-f185-485d-9cec-7542ba5d1c52_iPhone_6-5_-_4.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/45/4f/88/454f884d-b6fa-3054-dda3-67db2f5731d0/425fd3f6-e398-4449-a508-25667b2773d8_iPhone_6-5_-_5.png/1024x1024bb.png'
      ],
      title: 'ETF Calculator Pro Savingsplan',
      id: 'ETFCalculatorProSavingsplan',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6443707329?mt=8'
    },
    {
      description: 'The most simple way to calculate the return from your ETF savings plan. Just fill in your parameters and see how your investment can perform over the next years.\n' +
        '\n' +
        'You can choose from a sample ETF to pre-fill the values for the yearly return and TER.\n' +
        '\n' +
        'The following parameters are available:\n' +
        '\n' +
        '- Start Invest\n' +
        '- Monthly Rate\n' +
        '- Years of Invest\n' +
        '- Annual Return\n' +
        '- Annual Fund Costs (TER)\n' +
        '- Rate Dynamic\n' +
        '- Yearly Inflation Adjustment',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/ed/c8/0b/edc80b61-9e87-1e89-bda6-9d07d8b65359/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/17/03/74/17037474-2260-223c-ac7b-def07385e670/ebe6c771-7fcc-42c5-a09d-9124d0282e95_iPhone_6-5_-_1.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ae/8c/f8/ae8cf8be-cfc4-2ede-0bce-bb1138d34195/0e8f1d75-2534-4e9d-a6bc-168d8f3e8f24_iPhone_6-5_-_2.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/1c/a1/08/1ca10865-4721-ed6e-29cc-76d643d9043d/b5c2a96d-a203-431f-9796-219b152b573e_iPhone_6-5_-_3.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/c0/42/9a/c0429a5a-4a3a-55b3-e3a9-b785a7ee0a49/ce3c446d-776e-451b-ac4c-4f06651337bb_iPhone_6-5_-_4.png/1024x1024bb.png'
      ],
      title: 'Savings Plan Calculator ETF',
      id: 'etf-saving-plan-calculator',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1560548643?mt=8'
    },
    {
      description: 'Nautic Converter is the tool for boat drivers, that will help to convert all common boat units. It combines all common units for the Seafaring. Simple to use on the sea or lake, with the intuitive user interface.\n' +
        '\n' +
        '- Convert distances, like miles, meters, kilometers, miles and feet\n' +
        '- Convert speeds, like knots, Nautic miles per hour, km/h, mph, meters per second\n' +
        '- See the Beaufort scale and the wave heights\n' +
        '- Convert all common coordinate systems like DD, DDM, DMS, UTM and Gauss Krüger\n' +
        '- Pick the coordinates on the map, or by your current location\n' +
        '- See the most common Seafarer Knots\n' +
        '\n' +
        "I'm happy to improve the App by your suggested feedback, so feel free to reach out to me.\n" +
        '\n' +
        'Thanks to Aaron Burden for providing the compass image on unsplash.com',
      iconUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/bf/59/ae/bf59ae9b-4675-3599-336b-54b7cbe0f378/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/3a/6c/ed/3a6cedf0-d2a8-391c-6771-11e17b1071e0/39899669-a6e9-4bb9-993a-da91f93747e0_App_Store_Screenshot_6_U002c5_-_1__U2013_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/fa/af/11/faaf1188-0473-f48d-b335-9ac4be0a3a30/94acfd43-f888-41fc-a60f-8bc49df0d553_App_Store_Screenshot_6_U002c5_-_1__U2013_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/44/47/4c/44474c3e-4874-5642-f03d-b2859010fce2/5ada742a-23c6-4867-84a5-bf37db2cd8cd_App_Store_Screenshot_6_U002c5_-_1__U2013_3.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ff/5a/ca/ff5aca32-cc23-2342-9fe6-72f8e4e1e63c/413d13ff-b407-48ea-962d-f576f81536f0_App_Store_Screenshot_6_U002c5_-_1__U2013_4.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c5/3f/fb/c53ffb33-811a-fcaf-3e4b-99d7d8de7403/54424c44-a0cd-440d-9c4f-ef71575a5014_App_Store_Screenshot_6_U002c5_-_5.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/44/87/0b/44870bf1-819a-f24f-3285-c57effb6dcbc/0852603d-2012-4f2c-8e90-b1eefbb28d64_App_Store_Screenshot_6_U002c5_-_6.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/7e/0e/3c/7e0e3c3c-9b5d-ab6d-aa0d-d60b9b5d8529/901d7d16-fe70-4645-8a05-65c184c9cda2_App_Store_Screenshot_6_U002c5_-_7.png/1024x1024bb.png'
      ],
      title: 'Nautic Converter - Boat Tool',
      id: 'nautic-converter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1588238361?mt=8'
    },
    {
      description: 'Probably the most beautiful pure GS1 Barcode Scanner, with an easy to use, functional design. See all contents of GS1 barcodes and share them with others.\n' +
        '\n' +
        'The App will show the contents of any GS1 Barcode, like the GTIN, Expiration Date, Lot or Serial Number. These barcodes are often used on products in B2B areas like the healthcare industry. Have a history of all scanned barcodes and share them with other applications or people, by using the Pretty GS1 Scanner.\n' +
        '\n' +
        'Features:\n' +
        '\n' +
        '- Scan all common Barcode\n' +
        '- See Details of GS1 Barcodes\n' +
        '- Save a History of your scans\n' +
        '- Share Barcodes with other Apps\n' +
        '- Generates the scanned barcode as an image\n' +
        '- Export the Barcodes\n' +
        '- Shows all highlighted Application Identifier and Group Separator in the Raw Barcode\n' +
        '- Import Barcode from the Gallery\n' +
        '- Dark Mode Support\n' +
        '- Works on iPhone, iPad and iPod Touch\n' +
        '\n' +
        'The app can scan the following barcodes:\n' +
        '\n' +
        'Code 39, Code 93, Code 128, EAN-8, EAN-13, Data Matrix, UPC-E, Aztec, PDF417, ITF14, Interleaved 2 of 5 codes\n' +
        '\n' +
        'The following GS1 Application Identifiers are supported:\n' +
        '\n' +
        '- (00) Serial Shipping Container Code\n' +
        '- (01) GTIN\n' +
        '- (02) GTIN of contained Trade Items\n' +
        '- (10) Lot Number\n' +
        '- (11) Production Date\n' +
        '- (12) Due Date\n' +
        '- (13) Packaging Date\n' +
        '- (15) Best Before Date\n' +
        '- (17) Expiration Date\n' +
        '- (20) Product Variant\n' +
        '- (21) Serial Number\n' +
        '- (22) Secondary Data Fields\n' +
        '- (30) Count of Items\n' +
        '- (37) Number of Units Contained\n' +
        '- (310) Product Weight in KG\n' +
        '- (23n) Lot Number of N\n' +
        '- (240) Additional Product Identification\n' +
        '- (241) Customer Part Number\n' +
        '- (242) Made to Order Variation Number\n' +
        '- (250) Secondary Serial Number\n' +
        '- (251) Reference to Source Entity\n' +
        '- (392) Price - Single Monetary Area\n' +
        '- (393) Price and ISO\n' +
        '- (395) Price per UOM\n' +
        '- (422) Country of Origin\n' +
        '- (714) National Healthcare Reimbursement Number AIM',
      iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/3a/9d/ac/3a9dac19-858a-22b4-9371-eb3ab066ee81/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/b5/b3/a8/b5b3a8a9-f6d5-e19f-8e0a-b30f41e4463b/44c7d905-69b4-44c1-acd1-66355ca63cee_iPhone_6-5_-_1@3x.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/9e/eb/35/9eeb3505-9bd1-3be2-80aa-7b9bbec97eff/1d7fab49-2a74-4727-a348-cbc9260d44b9_iPhone_6-5_-_2@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/1f/56/51/1f565100-638b-3a17-dbe1-38c987b57e93/c190f749-0f6e-49a9-b982-e3f286d97f1f_iPhone_6-5_-_3@3x.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/c5/b0/c6/c5b0c60d-5da4-1cad-2725-8f22b6175b28/7decb761-0172-4c20-902b-70121a3a89f8_iPhone_6-5_-_4@3x.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/88/3f/81/883f8129-c22d-df87-76d8-d1719144655f/e69d6ad5-6b0f-4d83-b779-7f6ddf46a1b8_iPhone_6-5_-_5@3x.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/88/ac/eb/88aceb47-db92-0de4-4917-ebc671eb547f/8e5ca588-9742-47f9-bab8-c7484acc1aa9_iPhone_6-5_-_6@3x.png/1024x1024bb.png'
      ],
      title: 'Pretty GS1 Barcode Scanner',
      id: 'pretty-gs1-scanner',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1545547560?mt=8'
    },
    {
      description: 'Are you in trouble and need an emergency number? Or tell others where you exactly at, right now?\n' +
        'Better prepare yourself.\n' +
        '\n' +
        'It was never easier to load your current GPS Coordinates, or the address where you are.\n' +
        '\n' +
        'No internet is required to load your Coordinates and you can simply share them via SMS, directly from the App. So you can even ask for help without a internet connection. \n' +
        'And if your iPhone has a internet connection, the App will load your current address and show your location on the Map.\n' +
        '\n' +
        '@darshan394, @ryoji__iwata and @fahrulazmi, for providing the images on Unsplash.',
      iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/a4/ad/f4/a4adf451-82a0-e8c6-4cd3-b559725766f8/Icon-60@2x.png.png/120x120bb.png',
      screenshotUrls: [
        'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/2c/31/eb/2c31eb7d-4281-8b9a-7aeb-f3602722365c/149c6e30-70f2-4d71-8e45-a854237f8d79_App_Store_Screenshot_6_U002c5_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/2a/11/9e/2a119e8d-419a-2df9-5168-ba7c278a2de1/28f03cba-250c-4b3a-ab5c-8f6961ef1741_App_Store_Screenshot_6_U002c5_-_2.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ac/94/49/ac9449ec-5a3e-2892-8b09-35a409777972/0b5cac70-9de0-4deb-9776-f36fb1b8fb7d_App_Store_Screenshot_6_U002c5_-_4.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/38/d1/2c/38d12cbb-5f9e-bed1-817c-95fc621625d1/2a5630f4-21b9-4ac6-b872-b6724ed622b0_App_Store_Screenshot_6_U002c5_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/7d/09/7c/7d097c81-7821-03d6-c270-15b6038413e5/5dab8275-eac2-40c1-8a3d-5730a071ce49_App_Store_Screenshot_6_U002c5_-_3__U2013_4.png/1024x1024bb.png'
      ],
      title: 'SOS - This is my Location',
      id: 'sos-location',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1640902948?mt=8'
    },
    {
      description: 'Easily convert all common coordinates with the Coordinate Converter App. \n' +
        '\n' +
        'The App supports converting DD, DMS, DDM and UTM. You can also choose coordinates from your current location or select them on a map.',
      iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/b5/d6/51/b5d651b2-735c-f417-d762-aad7572427ad/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ac/e3/09/ace30940-f904-42c7-311b-331eb2313438/6459abbe-a757-4618-81b3-8c1ec7515de3_App_Store_Screenshot_6_U002c5_-_1.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/20/25/cf/2025cfdf-9253-0a00-d6db-1f5bd63fd0a8/95b1bdbd-f0c3-474e-aba7-bdaa5ed421a9_App_Store_Screenshot_6_U002c5_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/47/7a/e1/477ae182-db12-aab2-2e3d-29ff6f51f665/06a02e84-037f-4f3f-ab10-58492206de92_App_Store_Screenshot_6_U002c5_-_3.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/e3/be/44/e3be44ba-b79c-9f81-2a98-190f048c6393/10c9ea8c-ee41-4b12-8fcd-ba837abc8580_App_Store_Screenshot_6_U002c5_-_3__U2013_1.png/1024x1024bb.png'
      ],
      title: 'Convert Coordinates DD DMS DDM',
      id: 'coordinate-converter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1639685414?mt=8'
    },
    {
      description: 'Ever wondered which speed you are heading with your boat? Or which direction you are cruising?\n' +
        '\n' +
        'This app will provide you all important information you need for your next boat ride.\n' +
        '\n' +
        '- Compass with the your direction\n' +
        '- See the current speed in knots, miles or kilometers\n' +
        '- Set speed limits\n' +
        '- Simply switch between unites\n' +
        '- See a map of your cruise and share it with others\n' +
        '- See your maximum and average speed\n' +
        '- See your heel angle while driving and on the map in the logbook\n' +
        '\n' +
        '\n' +
        'Thanks a lot to @nikldn for providing the boat image on https://unsplash.com',
      iconUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/e2/ca/62/e2ca6218-38ab-6994-fcc0-36619e0bfbfe/Icon-83.5@2x.png.png/167x167bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/bf/dc/89/bfdc89af-94a4-750d-6c99-e06fb479907f/5b55c724-d504-4123-a1eb-f18d064c128f_App_Store_Screenshot_6_U002c5_-_1__U2013_1@3x.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/0f/04/37/0f04376d-ea03-1d00-ba75-563dc719755b/a8e0e6e3-4d74-48b6-9f31-c940c7202e6a_App_Store_Screenshot_6_U002c5_-_1__U2013_2@3x.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/95/c6/14/95c614e3-b824-d7d5-4df4-d94c1b677d9d/59fd10d6-1709-4fc4-ba51-0e926dd3538b_App_Store_Screenshot_6_U002c5_-_1__U2013_4@3x.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/48/f8/9a/48f89a7d-40d9-dfbb-2fe3-f0aada8939a6/2bcd849a-cee8-48c5-ae85-44b4b0cd5e56_App_Store_Screenshot_6_U002c5_-_1__U2013_3@3x.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/b4/06/54/b4065457-c9aa-fab9-959c-a4edbe8ffec3/d7ef70cc-df28-4fe1-a857-ec23d499d47b_App_Store_Screenshot_6_U002c5_-_1__U2013_5@3x.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/52/7a/06/527a066b-d276-e859-52b5-08a9b3b50441/369d776e-46da-4f6e-b7e0-39b9be31f7a1_App_Store_Screenshot_6_U002c5_-_1__U2013_6@3x.png/1024x1024bb.png'
      ],
      title: 'Nautic Speed and Compass',
      id: 'boat-speedometer',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1578165239?mt=8'
    },
    {
      description: 'When was the last time you built a paper plane or walked in the rain? \n' +
        '\n' +
        'This App helps you to calm and increase your awareness with over a hundred different little fun lessons for every day. Challenge yourself, to be more in focus and less stressed.',
      iconUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/f1/fb/87/f1fb879a-3400-94a3-df40-3a2e4a40fc40/Icon-60@2x.png.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/2b/b3/46/2bb3461c-46cc-bc23-0a4e-b1255730c194/dac1d55c-7129-4cbc-8762-d13be7ee7a84_App_Store_Screenshot_6_U002c5@3x.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/e5/b0/7d/e5b07d14-3eb7-bc60-312d-59f09d53c7eb/516cfa70-2b0f-4738-ae39-f8f7b47e0a03_App_Store_Screenshot_6_U002c5__U2013_1@3x.png/1024x1024bb.png',
        'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/39/60/fe/3960fe2a-526a-0657-04ac-baf286c750dd/65e7a9d3-8f3f-4822-b12d-400706084fe1_App_Store_Screenshot_6_U002c5__U2013_2@3x.png/1024x1024bb.png'
      ],
      title: 'Cope Stress - Daily Challenge',
      id: 'cope-stress',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1545228555?mt=8'
    },
    {
      description: 'The handy Barcode Generator that allows you to generate GS1 and other Barcodes at your fingertips, without the need of knowing how the content is generated. Simply fill out the form with all the GS1 Application Identifiers desired.\n' +
        '\n' +
        'Supports the following barcode types:\n' +
        'Code 128, DataMatrix, QR Code, EAN 13, ITF-14, EAN 8, UPCE, UPCA\n' +
        '\n' +
        'Allows you to fill in the application identifiers:\n' +
        '- GTIN\n' +
        '- Batch- / Lot-Number\n' +
        '- Serial-Number\n' +
        '- Production Date\n' +
        '- Expiration Date\n' +
        '- Due Date\n' +
        '- Packaging Date\n' +
        '- Best Before Date\n' +
        '- Put in any raw content',
      iconUrl: undefined,
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/c0/3d/a1/c03da101-dbf8-7398-1ece-9c70d6bbf172/3087648c-7881-4a80-b726-d1c625a257a7_iPhone_6-5_-_1__U2013_1@3x.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/65/85/33/658533a2-c42d-f071-d606-3ef13e10886d/156f48ef-2686-4bde-b6ab-fa12eadf9a9a_iPhone_6-5_-_2__U2013_1@3x.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/fd/25/c6/fd25c62c-5e02-bc39-3974-cdacba52dda5/1189da8f-dc3d-44d8-aa1e-3054725875e0_iPhone_6-5_-_3__U2013_1@3x.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/bc/90/cd/bc90cda0-31c9-e05b-bff5-e0cd1c1a6d81/0e96308a-9ea7-4e8d-853b-e21222699eba_iPhone_6-5_-_4__U2013_1@3x.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/4a/07/fb4a07c0-34d4-5274-9bfe-f7b80bcbdbf9/e4279c23-ad21-49bc-9120-383e83079d59_iPhone_6-5_-_5__U2013_1@3x.png/1024x1024bb.png',
        'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/32/0f/ac/320fac85-5cd7-6bd5-f617-fd6f7130dd3e/759676e0-129d-49ba-af6a-3b44cf4682eb_iPhone_6-5_-_6__U2013_1@3x.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/7c/69/a7/7c69a7e8-62cd-2e0f-0c00-507ea91201f5/3f6b38d9-8a07-4773-9e7a-a7f949c010a4_iPhone_6-5_-_7_-_1@3x.png/1024x1024bb.png',
        'https://is3-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/90/a7/8d/90a78d2a-151d-85e3-84ca-1e21b61761d6/d60f2cf7-7e69-4d84-b888-58e101fc445f_iPhone_6-5_-_8_-_1@3x.png/1024x1024bb.png'
      ],
      title: 'Smart GS1 Barcode Generator',
      id: 'smart-gs1-barcode-generator',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1547589409?mt=8'
    },
    {
      description: 'How long are you in focus? Should you take a break?\n' +
        '\n' +
        'With Mindful Focus you can see how long you are working concentrated on your computer without having a break. While checking when your last computer input was, this App will let you know when you had your last off-screen break. Therefore Mindful Focus will automatically recognize breaks you do.\n' +
        '\n' +
        'Mindful Focus will sit in your Macs toolbar, while not interrupting or disturbing your focus. This will help you getting a better awareness of your focus times and if you take enough breaks to stay concentrated. \n' +
        '\n' +
        '\n' +
        'Thanks to David van Dijk (@dvandijk) for publishing the photo on unsplash.com',
      iconUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/60/0a/80/600a802c-82be-852f-d87b-098c745dffc3/AppIcon.icns/256x256bb.png',
      screenshotUrls: [
        'https://is2-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/1b/0f/80/1b0f8093-32a1-6572-3b83-bb13cb211cd3/f290f04e-d804-4674-ba03-60690db72684_Screenshot__U2013_1.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/e9/d4/ea/e9d4eafe-a8c9-b714-e82c-43e9986aa205/5fcd1b01-f163-4da9-a617-15943d91272a_Screenshot__U2013_2.png/1024x1024bb.png',
        'https://is4-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/27/11/64/271164d1-49ef-f6d3-229d-29dabea1644c/782f3b24-1c0f-41a2-8c42-74d4757bf44e_Screenshot__U2013_3.png/1024x1024bb.png'
      ],
      title: 'Mindful Focus - Time Awareness',
      id: 'mindful-focus',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1586293102?mt=8'
    }
  ]
  
  .sort((a, b) => a.title.localeCompare(b.title));

  public getApps(): Array<App> {
    return this.apps;
  }

  public getApp(id: String): App {
      return this.apps.filter(app => app.id === id)[0];
    }

}
