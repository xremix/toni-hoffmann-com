import { Injectable } from '@angular/core';
import { App } from 'src/app/models/app';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apps: Array<App> = [
    {
      description: 'Know what your rabbit can safely eat - before feeding.\n' +
        '\n' +
        'Bunny Herbs helps rabbit owners identify plants from a photo and quickly check whether a plant is likely edible, unknown, or not safe for rabbits. It is designed for real-world moments: in the garden, on walks, and while foraging.\n' +
        '\n' +
        'What you can do with Bunny Herbs:\n' +
        '\n' +
        '- Identify plants with your camera\n' +
        '- Check rabbit feeding safety in seconds\n' +
        '- Spot potentially toxic or inedible plants early\n' +
        '- Use a searchable plant library for rabbit-relevant plant info\n' +
        '- Save plants to your favorites and picking list\n' +
        '- Built for rabbit owners who want fast guidance and safer decisions every day.\n' +
        '\n' +
        'Important: Bunny Herbs is an educational support tool and does not replace veterinary advice. Always double-check uncertain matches before feeding.',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/22/ec/1122ecfe-ee1a-8df6-ba75-9041abfd9654/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9c/7f/52/9c7f52ca-13c3-e161-6451-b0091f2d0535/iPhone_Screenshot_EN_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8c/7d/eb/8c7deb36-32f7-0db2-8204-9838138437ad/iPhone_Screenshot_EN_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/66/19/26/66192677-4bf0-53e7-b532-822a667f1411/iPhone_Screenshot_EN_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7f/06/ff/7f06ffd1-eadd-92a2-7e6d-e3d4eddb9962/iPhone_Screenshot_EN_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/07/da/2e/07da2e1c-5e0b-2996-b7f8-0c13d3f110f2/iPhone_Screenshot_EN_5.png/1024x1024bb.png'
      ],
      title: 'Bunny Herbs - Identify Plants',
      id: 'bunny-herbs',
      appStoreUrl: 'https://apps.apple.com/us/app/bunny-herbs-identify-plants/id6774941705'
    },
    {
      description: 'Photo Cleaner is the fastest way to reclaim iPhone storage by intelligently identifying and removing duplicate, blurry, low-quality, and oversized photos - all without sacrificing your best shots.\n' +
        '\n' +
        'Core Features:\n' +
        'Smart Duplicate Detection – AI-powered visual fingerprinting finds exact duplicates and similar photos with adjustable sensitivity\n' +
        '\n' +
        'Photo Quality Analysis – Automatically identify blurry, overexposed, underexposed, and low-contrast images\n' +
        '\n' +
        'Storage Insights – Quickly spot large files and video bottlenecks clogging your iPhone\n' +
        '\n' +
        'Fast Batch Actions – Multi-select, compare side-by-side, and delete with one tap\n' +
        '\n' +
        'Full-Screen Comparison – View photos at full resolution to make confident deletion decisions before freeing space\n' +
        '\n' +
        'Smart Organization – Photos grouped by day for chronological browsing and easy bulk cleanup\n' +
        '\n' +
        'Swipe-to-Clean Mode – One-handed swiping for rapid photo sorting and decision-making\n' +
        '\n' +
        '100% Safe – Only you control what gets deleted—every action is reversible until final confirmation\n' +
        '\n' +
        'Perfect for:\n' +
        'Reclaiming gigabytes of iPhone storage instantly\n' +
        'Eliminating duplicate burst shots and photo library clutter\n' +
        'Organizing and backing up your best memories\n' +
        'Freeing up space without removing important photos',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/52/7c/19/527c1929-3292-6d80-0ed5-811cc16110d3/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/93/f6/f7/93f6f705-27e6-67c6-8479-172c71081ef7/iPhone_Screenshot_EN_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9a/e7/25/9ae72591-cb30-5f68-6c6a-77d7c9d21ab7/iPhone_Screenshot_EN_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/89/86/068986f8-c749-519b-03f0-7b16bc14f5ed/iPhone_Screenshot_EN_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/eb/d6/64/ebd66443-803c-049e-db41-d28404e120f4/iPhone_Screenshot_EN_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f0/90/3d/f0903d5e-7734-8eac-747e-9efef093fa14/iPhone_Screenshot_EN_5.png/1024x1024bb.png'
      ],
      title: 'YAPA - Photo and Video Cleaner',
      id: 'yapa-photo-video-cleaner',
      appStoreUrl: 'https://apps.apple.com/us/app/yapa-photo-and-video-cleaner/id6761560987'
    },
    {
      description: 'Airport Weather helps pilots and aviation enthusiasts quickly check weather along planned routes. Add a departure and optional destination airport, then view current METAR conditions and TAF forecasts in a clean, flight-focused interface. Flight category indicators (VFR, MVFR, IFR, LIFR), wind, visibility, and temperature are shown at a glance so you can assess conditions faster.\n' +
        '\n' +
        'Feature Highlights\n' +
        '\n' +
        '- Search airports by ICAO, IATA, city, or airport name\n' +
        '- Plan flights with departure plus optional destination\n' +
        '- Save, reorder, and delete flights for quick daily access\n' +
        '- View live METAR and TAF data per airport\n' +
        '- Tap between departure and destination weather in one route view\n' +
        '- See flight category status with color-coded VFR/MVFR/IFR/LIFR indicators\n' +
        '- Open a built-in legend explaining flight category criteria\n' +
        '- Uses cached weather as fallback for improved offline resilience',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/32/fc/17/32fc1717-21f3-b60e-03f7-ddc8941065cd/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ce/f9/66/cef9669a-95d9-fd69-443b-993f507bf6fb/Airport_Weather_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b3/4c/f3/b34cf328-7a9f-e875-eef3-19d0acec2978/Airport_Weather_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ad/32/cd/ad32cd2d-acb3-9ba5-683b-6f8c3f26faca/Airport_Weather_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3b/0d/f2/3b0df239-9fe6-e11a-0fef-c4689849193c/Airport_Weather_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bc/0a/34/bc0a3400-9629-89a0-0b8f-9c30f24332bb/Airport_Weather_5.png/1024x1024bb.png'
      ],
      title: 'Airport Weather - METAR TAF',
      id: 'airport-weather',
      appStoreUrl: 'https://apps.apple.com/us/app/airport-weather-metar-taf/id6759194897'
    },
    {
      description: "Track anything with style! Click Counter is an elegant and intuitive app that helps you count and track whatever matters to you. Whether you're counting repetitions at the gym, tracking daily habits, or monitoring any recurring events, Click Counter makes it effortless and enjoyable.\n" +
        '\n' +
        'Key Features:\n' +
        '• Beautiful, minimalist interface with smooth animations\n' +
        '• Create multiple counters for different tracking needs\n' +
        '• Visualize your counts with elegant charts and trends\n' +
        '• View detailed history of all your counting sessions\n' +
        '• Export your data as CSV for further analysis\n' +
        '• Haptic and audio feedback for a satisfying counting experience\n' +
        '• Works offline - your data is stored locally\n' +
        '• iCloud sync between devices\n' +
        '\n' +
        'Download Click Counter today and start tracking what matters to you with style and simplicity!',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/a6/a5/dea6a563-3724-a0f9-ecf9-79c43b3fde44/AppIcon60x60@2x.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cc/c7/ab/ccc7ab0b-439d-b908-dd28-4ae21312f910/en_iPhone_16_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8a/01/e7/8a01e743-5d59-e542-e6b8-cf6f92d11d77/en_iPhone_16_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/3f/6d/2a/3f6d2a3f-4275-ce18-06fc-4648f41f521c/en_iPhone_16_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4a/3b/a8/4a3ba819-84f0-2479-6ec4-5c1c089c2d8f/en_iPhone_16_-_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/04/de/be/04debef9-01f1-d221-c1bd-60234ce67834/en_iPhone_16_-_5.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fe/e3/14/fee314c3-6eff-437e-f9c8-433d9fa51bf2/en_iPhone_16_-_6.png/1024x1024bb.png'
      ],
      title: 'Clicker - Tally People Counter',
      id: 'ClickerTallyPeopleCounter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6743347394?mt=8'
    },
    {
      description: 'CamperCheck - Professionelle Wohnmobil-Begutachtung\n' +
        '\n' +
        'Die mobile App für Gutachter des CGF e.V.. CamperCheck digitalisiert und standardisiert den gesamten Begutachtungsprozess von Wohnmobilen und Campingfahrzeugen.\n' +
        '\n' +
        'Hauptfunktionen:\n' +
        '• Strukturierte Fahrzeugaufnahme mit vordefiniertem Prüfkatalog\n' +
        '• Detaillierte Dokumentation von Fahrzeugdaten, Zustand und Mängeln\n' +
        '• Integrierte Fotodokumentation mit direkter Kameraanbindung\n' +
        '• Automatische PDF-Berichterstellung im professionellen Format\n' +
        '• Offline-Nutzung möglich\n' +
        '• Intuitive Benutzeroberfläche für effizientes Arbeiten\n' +
        '\n' +
        'Ideal für:\n' +
        '• Fahrzeuggutachter\n' +
        '• Wohnmobilhändler\n' +
        '• Sachverständige\n' +
        '• Prüforganisationen\n' +
        '• Vermietungsunternehmen\n' +
        '\n' +
        'Sparen Sie Zeit bei der Dokumentation und erstellen Sie professionelle Gutachten direkt vor Ort. CamperCheck unterstützt Sie bei der vollständigen und rechtssicheren Begutachtung von Wohnmobilen.\n' +
        '\n' +
        'Grafik von @piecdesmit auf Unslpash.com',
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/2e/e5/232ee5a7-fb39-7a87-7193-5c79930747f8/AppIcon-0-0-1x_U007epad-0-1-85-220.png/360x360bb.png",
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/66/a5/83/66a583c9-72a8-98f4-eefe-039c567cee05/en_iPhone_16_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/14/76/62/147662ab-d97d-6f2e-05cc-e89beb035ab8/en_iPhone_16_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/96/d5/a8/96d5a8ea-4247-ca30-1a6b-59e29e4ad35f/en_iPhone_16_-_3.png/1024x1024bb.png'
      ],
      title: 'Camper Check - CGF e.V.',
      id: 'CamperCheckCGFeV',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6741871215?mt=8'
    },
    {
      description: 'Your health wrapped together!\n' +
        '\n' +
        'How many steps did you take in one day?\n' +
        'On which day of the week are you most active?\n' +
        'Find out how active you were and discover exciting insights into your everyday life.\n' +
        '\n' +
        '- Do you consume more calories than an elephant eats in a day?\n' +
        '- Can you climb Mount Everest with your altitude meters?\n' +
        '- And do you prefer to be active at the weekend?\n' +
        '- And much more\n' +
        '\n' +
        'Discover more about your last year!\n' +
        '\n' +
        'The app is not medical advice, but simply a motivating overview of your health. All statistical data was taken from the WHO. Data protection is very important to us, no data leaves your device.',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/db/55/80/db558094-fd73-cecf-4fee-7d9590ae66c3/AppIcon60x60@2x.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8f/af/85/8faf8573-8c62-afee-70ef-55fb4eac8899/en_iPhone_16_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4e/9e/f3/4e9ef37a-a37f-b6ca-2977-e05785545ecb/en_iPhone_16_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fb/73/00/fb730029-f9e4-2935-3f45-865269cfde5b/en_iPhone_16_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e3/b2/33/e3b23359-6e71-df8f-56f3-863bc417e01a/en_iPhone_16_-_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8e/c7/eb/8ec7ebff-159a-a876-a706-79620e7e2556/en_iPhone_16_-_5.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b4/3d/03/b43d03b1-f85d-40fb-63ff-269c5223b134/en_iPhone_16_-_6.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1e/e7/09/1ee70903-78df-69fa-9693-864cea031253/en_iPhone_16_-_7.png/1024x1024bb.png'
      ],
      title: 'Health Year - Wrapped Together',
      id: 'HealthYearWrappedTogether',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6739226786?mt=8'
    },
    {
      description: 'Take control of your health with Cardio Buddy!\n' +
        '\n' +
        'Easily track your blood pressure, heart rate, weight, measured arm, and time of day. Understand your readings better with clear explanations of blood pressure categories.\n' +
        '\n' +
        'With its simple input process, using the app is a breeze – a smooth and enjoyable experience. Plus, HealthKit integration keeps everything connected. No hidden costs, no data tricks – your privacy matters!\n' +
        '\n' +
        'Cardio Buddy does not provide medical advice. Consult your healthcare professional for proper interpretation of your values.\n' +
        'Download Cardio Buddy now and start your journey to better health!',
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2c/1c/90/2c1c9005-3883-2873-1b96-55963d9e1ecd/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/360x360bb.png",
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/be/96/fa/be96fa46-46ef-8d28-b076-408c10093589/en_iPhone_16_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e0/25/64/e0256495-baf2-00c9-a952-f71549414257/en_iPhone_16_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fd/66/5b/fd665ba7-17b1-32b6-64fa-dffd04cc5428/en_iPhone_16_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a3/ae/14/a3ae141a-1358-eaa7-da34-c075bdf1dd08/en_iPhone_16_-_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8f/15/eb/8f15eb96-1614-42a2-aa4c-04687841b90c/en_iPhone_16_-_5.png/1024x1024bb.png'
      ],
      title: 'Cardio Buddy - Blood Pressure',
      id: 'CardioBuddyBloodPressure',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6738396170?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7f/0d/9b/7f0d9b43-5bf9-9f60-105d-eced04b55464/AppIcon-0-0-2x_U007epad-0-5-0-85-220.png/167x167bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/bf/dc/89/bfdc89af-94a4-750d-6c99-e06fb479907f/5b55c724-d504-4123-a1eb-f18d064c128f_App_Store_Screenshot_6_U002c5_-_1__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/0f/04/37/0f04376d-ea03-1d00-ba75-563dc719755b/a8e0e6e3-4d74-48b6-9f31-c940c7202e6a_App_Store_Screenshot_6_U002c5_-_1__U2013_2@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/95/c6/14/95c614e3-b824-d7d5-4df4-d94c1b677d9d/59fd10d6-1709-4fc4-ba51-0e926dd3538b_App_Store_Screenshot_6_U002c5_-_1__U2013_4@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/48/f8/9a/48f89a7d-40d9-dfbb-2fe3-f0aada8939a6/2bcd849a-cee8-48c5-ae85-44b4b0cd5e56_App_Store_Screenshot_6_U002c5_-_1__U2013_3@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/b4/06/54/b4065457-c9aa-fab9-959c-a4edbe8ffec3/d7ef70cc-df28-4fe1-a857-ec23d499d47b_App_Store_Screenshot_6_U002c5_-_1__U2013_5@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/52/7a/06/527a066b-d276-e859-52b5-08a9b3b50441/369d776e-46da-4f6e-b7e0-39b9be31f7a1_App_Store_Screenshot_6_U002c5_-_1__U2013_6@3x.png/1024x1024bb.png'
      ],
      title: 'Nautic Speed and Compass',
      id: 'boat-speedometer',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1578165239?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/a0/33/75/a03375e4-04f3-ab46-d151-9769f054f78c/AppIcon60x60@2x.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/e2/b4/59/e2b4591b-72e3-d6c5-4c2f-429012dff260/4fc12753-1b6c-425d-ba64-43065578714f_App_Store_Screenshot_6_U002c5_-_1__U2013_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/4e/51/f3/4e51f353-9c6d-5ab0-1d92-63a7d03f0a61/88f32619-3faf-49aa-91e2-3363e0017041_App_Store_Screenshot_6_U002c5_-_1__U2013_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/10/fb/53/10fb535f-6c64-bf96-8223-b72e32031172/7045eb48-dedf-45a6-9427-575ca64475fc_App_Store_Screenshot_6_U002c5_-_1__U2013_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/5d/ba/a8/5dbaa8df-59b3-22e9-a25b-934010f30308/a0277509-ada0-46ef-8f9d-46d14d95840c_App_Store_Screenshot_6_U002c5_-_1__U2013_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/36/6e/54/366e546a-6905-cd6e-88a9-922121ac01c4/fbfb983e-08b0-4d1f-bf8a-a7d6da5a7c01_App_Store_Screenshot_6_U002c5_-_1__U2013_5.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/c6/05/f2/c605f279-2ced-ef80-6355-acd9a7dbdc59/ca5fa839-2025-4db4-8ccc-3f83470f7077_App_Store_Screenshot_6_U002c5_-_1__U2013_6.png/1024x1024bb.png'
      ],
      title: 'Curve Tracker for Motorbike',
      id: 'curve-tracker',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1579524063?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/75/7c/5a/757c5aa6-6f30-6bb4-80a8-bd9fbf64aeb2/AppIcon60x60@2x.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/2c/31/eb/2c31eb7d-4281-8b9a-7aeb-f3602722365c/149c6e30-70f2-4d71-8e45-a854237f8d79_App_Store_Screenshot_6_U002c5_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/2a/11/9e/2a119e8d-419a-2df9-5168-ba7c278a2de1/28f03cba-250c-4b3a-ab5c-8f6961ef1741_App_Store_Screenshot_6_U002c5_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ac/94/49/ac9449ec-5a3e-2892-8b09-35a409777972/0b5cac70-9de0-4deb-9776-f36fb1b8fb7d_App_Store_Screenshot_6_U002c5_-_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/38/d1/2c/38d12cbb-5f9e-bed1-817c-95fc621625d1/2a5630f4-21b9-4ac6-b872-b6724ed622b0_App_Store_Screenshot_6_U002c5_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/7d/09/7c/7d097c81-7821-03d6-c270-15b6038413e5/5dab8275-eac2-40c1-8a3d-5730a071ce49_App_Store_Screenshot_6_U002c5_-_3__U2013_4.png/1024x1024bb.png'
      ],
      title: 'SOS - This is my Location',
      id: 'sos-location',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1640902948?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3e/5d/25/3e5d25db-49cb-02c4-e539-8d193283dbfa/AppIcon-Calculator-Pro76x76@2x_U007eipad.png/152x152bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/31/86/82/31868230-3bf2-c102-f00a-bbed5afebefd/5688c0e4-d51e-4fba-8e0f-26262d8504ed_iPhone_6-5_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/8c/4f/68/8c4f6832-f78d-6c01-93dc-fb2bdf369375/2e2bb86f-4654-4916-b472-21c033d2f1fd_iPhone_6-5_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/fe/27/76/fe27765e-f21a-90ce-c512-5ef28506c3dc/e22fa096-0208-4b97-9ade-712d0fd8516f_iPhone_6-5_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/e3/7e/98/e37e98fe-1a98-1f63-d2f2-3cb6b49a9c5b/ae946d95-f185-485d-9cec-7542ba5d1c52_iPhone_6-5_-_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/45/4f/88/454f884d-b6fa-3054-dda3-67db2f5731d0/425fd3f6-e398-4449-a508-25667b2773d8_iPhone_6-5_-_5.png/1024x1024bb.png'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/88/c0/73/88c073ce-e050-adc6-9f08-36e0c88d934a/AppIcon-Calculator76x76@2x_U007eipad.png/152x152bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/17/03/74/17037474-2260-223c-ac7b-def07385e670/ebe6c771-7fcc-42c5-a09d-9124d0282e95_iPhone_6-5_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ae/8c/f8/ae8cf8be-cfc4-2ede-0bce-bb1138d34195/0e8f1d75-2534-4e9d-a6bc-168d8f3e8f24_iPhone_6-5_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/1c/a1/08/1ca10865-4721-ed6e-29cc-76d643d9043d/b5c2a96d-a203-431f-9796-219b152b573e_iPhone_6-5_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/c0/42/9a/c0429a5a-4a3a-55b3-e3a9-b785a7ee0a49/ce3c446d-776e-451b-ac4c-4f06651337bb_iPhone_6-5_-_4.png/1024x1024bb.png'
      ],
      title: 'Savings Plan Calculator ETF',
      id: 'etf-saving-plan-calculator',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1560548643?mt=8'
    },
    {
      description: "This app is the perfect companion for all cycling enthusiasts, whether you're a pro or a casual rider. Transform your iPhone into a powerful bike computer with a variety of useful features:\n" +
        '\n' +
        '- Overview: See all your trips in the map overview. You can try to fill the map and explore new areas around you\n' +
        '- Detailed Live Data: See your Speed, burned calories or made altitude live\n' +
        '- Import / Export Trips: Import .gpx Files with trips or any planned route, so you can follow the path\n' +
        '- Smart Algorithms: The App can recognize your pauses, burned calories, find the highest point, the peak of your tour or highlight your fastest part of your tour\n' +
        '\n' +
        'Thanks to Sebastian Marx for providing the background pictures on unsplash.',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d8/61/ec/d861ec8c-d005-9b96-777c-0465ced76028/AppIcon60x60@2x.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/16/86/b8/1686b862-8cc9-d781-1415-b5e6634f9d7c/6e31c05c-b6a8-4c2c-a8fd-3138dc68cdaa_iPhone_EN_-_1.jpg/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/73/54/e5/7354e517-ffca-9292-bf7a-e8b40ef2836b/5600b62c-e820-49fc-88a2-dc263735438c_iPhone_EN_-_2.jpg/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/50/aa/40/50aa40ff-3ec5-97c9-2948-7cbf1fba9cc0/d83b631d-e3a6-48ee-a4a2-2d81bf91090c_iPhone_EN_-_3.jpg/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/03/08/d5/0308d5a7-7160-a828-045b-db658dcde0a5/c849698b-f491-4dc5-aaab-35bf8c613a7d_iPhone_EN_-_4.jpg/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9c/6f/d1/9c6fd1da-99aa-34cf-03d7-e032dc3e9ed9/7a56796b-9bcc-439a-a6f7-283f2fed71ba_iPhone_EN_-_5.jpg/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/01/1b/df/011bdf7e-7ee2-a5a8-0398-86cf8813f4c5/589637f4-d278-4d7f-a061-61ffc8a0435d_iPhone_EN_-_6.jpg/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fc/01/ab/fc01ab9f-8a46-0985-ac47-26856dff4188/4009ca17-f54d-47f9-a406-46bbe1d68025_iPhone_EN_-_7.jpg/1024x1024bb.png'
      ],
      title: 'Bike Speed & Tour Tracker',
      id: 'BikeSpeedTourTracker',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6468916330?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b6/53/0d/b6530df0-d464-33c8-5dfa-4aab941d6d59/AppIcon.icns/256x256bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/1b/0f/80/1b0f8093-32a1-6572-3b83-bb13cb211cd3/f290f04e-d804-4674-ba03-60690db72684_Screenshot__U2013_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/e9/d4/ea/e9d4eafe-a8c9-b714-e82c-43e9986aa205/5fcd1b01-f163-4da9-a617-15943d91272a_Screenshot__U2013_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/27/11/64/271164d1-49ef-f6d3-229d-29dabea1644c/782f3b24-1c0f-41a2-8c42-74d4757bf44e_Screenshot__U2013_3.png/1024x1024bb.png'
      ],
      title: 'Mindful Focus - Time Awareness',
      id: 'mindful-focus',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1586293102?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/a6/9d/3c/a69d3c76-3755-d445-a45c-edda46db4406/AppIcon-2x_U007epad-0-5-0-85-220.png/167x167bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/b5/b3/a8/b5b3a8a9-f6d5-e19f-8e0a-b30f41e4463b/44c7d905-69b4-44c1-acd1-66355ca63cee_iPhone_6-5_-_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/9e/eb/35/9eeb3505-9bd1-3be2-80aa-7b9bbec97eff/1d7fab49-2a74-4727-a348-cbc9260d44b9_iPhone_6-5_-_2@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/1f/56/51/1f565100-638b-3a17-dbe1-38c987b57e93/c190f749-0f6e-49a9-b982-e3f286d97f1f_iPhone_6-5_-_3@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c5/b0/c6/c5b0c60d-5da4-1cad-2725-8f22b6175b28/7decb761-0172-4c20-902b-70121a3a89f8_iPhone_6-5_-_4@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/88/3f/81/883f8129-c22d-df87-76d8-d1719144655f/e69d6ad5-6b0f-4d83-b779-7f6ddf46a1b8_iPhone_6-5_-_5@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/88/ac/eb/88aceb47-db92-0de4-4917-ebc671eb547f/8e5ca588-9742-47f9-bab8-c7484acc1aa9_iPhone_6-5_-_6@3x.png/1024x1024bb.png'
      ],
      title: 'Pretty GS1 Barcode Scanner',
      id: 'pretty-gs1-scanner',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1545547560?mt=8'
    },
    {
      description: 'Easily convert all common coordinates with the Coordinate Converter App. \n' +
        '\n' +
        'The App supports converting DD, DMS, DDM and UTM. You can also choose coordinates from your current location or select them on a map.',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/be/61/98/be6198f7-a765-41b9-a6ff-26f92821d26f/AppIcon-2x_U007epad-0-5-0-85-220.png/167x167bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ac/e3/09/ace30940-f904-42c7-311b-331eb2313438/6459abbe-a757-4618-81b3-8c1ec7515de3_App_Store_Screenshot_6_U002c5_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/20/25/cf/2025cfdf-9253-0a00-d6db-1f5bd63fd0a8/95b1bdbd-f0c3-474e-aba7-bdaa5ed421a9_App_Store_Screenshot_6_U002c5_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/47/7a/e1/477ae182-db12-aab2-2e3d-29ff6f51f665/06a02e84-037f-4f3f-ab10-58492206de92_App_Store_Screenshot_6_U002c5_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/e3/be/44/e3be44ba-b79c-9f81-2a98-190f048c6393/10c9ea8c-ee41-4b12-8fcd-ba837abc8580_App_Store_Screenshot_6_U002c5_-_3__U2013_1.png/1024x1024bb.png'
      ],
      title: 'Convert Coordinates DD DMS DDM',
      id: 'coordinate-converter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1639685414?mt=8'
    },
    {
      description: 'This Photo Sort App helps to easily sort a picture of random unorganized pictures. Effortlessly transform your chaotic photo collection into your organized folder structure. \n' +
        'It will help you\n' +
        '\n' +
        '- Sort pictures by date to a specific folder\n' +
        '- Quickly move favorite photos and delete unwanted ones\n' +
        '- Compare images to find the sharpest and most stunning shots\n' +
        '- View the photos on a map\n' +
        '- Use shortcuts to default folders for faster photo management\n' +
        '\n' +
        'Simplify your photo sorting today with the Photo Sort to Folders App!',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/79/71/54/79715458-61aa-fe26-4fee-fd561ab4ee3a/App_Icon.icns/256x256bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/06/df/12/06df123c-210b-2ac4-b1fc-abd10f739000/dba66022-a88c-4f9e-881f-182968ba0c6e_Photo_Sorter_Screenshot.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/75/43/a6/7543a6c5-dd17-7b2a-fe00-23414163c12e/7752fda1-cf19-44ab-8586-a7037eb652a5_Photo_Sorter_Screenshot-1.png/1024x1024bb.png'
      ],
      title: 'Photo Sort to Folders',
      id: 'PhotoSorttoFolders',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id6503186648?mt=8'
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
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/2c/38/28/2c38286f-fd69-a3d2-ea4e-e4fc6111f40c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/360x360bb.png",
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/c0/3d/a1/c03da101-dbf8-7398-1ece-9c70d6bbf172/3087648c-7881-4a80-b726-d1c625a257a7_iPhone_6-5_-_1__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/65/85/33/658533a2-c42d-f071-d606-3ef13e10886d/156f48ef-2686-4bde-b6ab-fa12eadf9a9a_iPhone_6-5_-_2__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fd/25/c6/fd25c62c-5e02-bc39-3974-cdacba52dda5/1189da8f-dc3d-44d8-aa1e-3054725875e0_iPhone_6-5_-_3__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/bc/90/cd/bc90cda0-31c9-e05b-bff5-e0cd1c1a6d81/0e96308a-9ea7-4e8d-853b-e21222699eba_iPhone_6-5_-_4__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/fb/4a/07/fb4a07c0-34d4-5274-9bfe-f7b80bcbdbf9/e4279c23-ad21-49bc-9120-383e83079d59_iPhone_6-5_-_5__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/32/0f/ac/320fac85-5cd7-6bd5-f617-fd6f7130dd3e/759676e0-129d-49ba-af6a-3b44cf4682eb_iPhone_6-5_-_6__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/7c/69/a7/7c69a7e8-62cd-2e0f-0c00-507ea91201f5/3f6b38d9-8a07-4773-9e7a-a7f949c010a4_iPhone_6-5_-_7_-_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/90/a7/8d/90a78d2a-151d-85e3-84ca-1e21b61761d6/d60f2cf7-7e69-4d84-b888-58e101fc445f_iPhone_6-5_-_8_-_1@3x.png/1024x1024bb.png'
      ],
      title: 'Smart GS1 Barcode Generator',
      id: 'smart-gs1-barcode-generator',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1547589409?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/28/f6/07/28f6071c-0ab3-171f-b421-9a7453c2c6a4/AppIcon-2x_U007epad-0-5-0-85-220.png/167x167bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/3a/6c/ed/3a6cedf0-d2a8-391c-6771-11e17b1071e0/39899669-a6e9-4bb9-993a-da91f93747e0_App_Store_Screenshot_6_U002c5_-_1__U2013_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/fa/af/11/faaf1188-0473-f48d-b335-9ac4be0a3a30/94acfd43-f888-41fc-a60f-8bc49df0d553_App_Store_Screenshot_6_U002c5_-_1__U2013_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/44/47/4c/44474c3e-4874-5642-f03d-b2859010fce2/5ada742a-23c6-4867-84a5-bf37db2cd8cd_App_Store_Screenshot_6_U002c5_-_1__U2013_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ff/5a/ca/ff5aca32-cc23-2342-9fe6-72f8e4e1e63c/413d13ff-b407-48ea-962d-f576f81536f0_App_Store_Screenshot_6_U002c5_-_1__U2013_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/c5/3f/fb/c53ffb33-811a-fcaf-3e4b-99d7d8de7403/54424c44-a0cd-440d-9c4f-ef71575a5014_App_Store_Screenshot_6_U002c5_-_5.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/44/87/0b/44870bf1-819a-f24f-3285-c57effb6dcbc/0852603d-2012-4f2c-8e90-b1eefbb28d64_App_Store_Screenshot_6_U002c5_-_6.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/7e/0e/3c/7e0e3c3c-9b5d-ab6d-aa0d-d60b9b5d8529/901d7d16-fe70-4645-8a05-65c184c9cda2_App_Store_Screenshot_6_U002c5_-_7.png/1024x1024bb.png'
      ],
      title: 'Nautic Converter - Boat Tool',
      id: 'nautic-converter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1588238361?mt=8'
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
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/43/dd/69/43dd6942-72a9-46c0-e526-75e728907e41/AppIcon60x60@2x.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/c5/da/2d/c5da2db9-f5ea-350c-8633-cf7ceb58d70a/e5122550-e5ea-4811-bfcd-6ae8189caaf7_App_Store_Screenshot_6_U002c5_-_1.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/13/8e/2f/138e2f16-a5cb-8d0e-ad8d-4b3f222c3de0/e96c8e73-025a-4087-9ab2-f2e1295fe154_App_Store_Screenshot_6_U002c5_-_2.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/af/99/6c/af996c98-f5f4-823c-7da3-4924f770ab02/28712e9b-1e74-475a-be54-0c782d0a2b5d_App_Store_Screenshot_6_U002c5_-_3.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/3e/f3/25/3ef3252c-40cf-1175-7d40-6f7aeb785a4c/eab2e98f-2baa-4b41-a686-affb238e315a_App_Store_Screenshot_6_U002c5_-_4.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/15/6d/40/156d407a-3713-5750-87ec-2e6e56992eac/46c72fb7-2c4c-469f-903e-618c7a7f7bb3_App_Store_Screenshot_6_U002c5_-_5.png/1024x1024bb.png'
      ],
      title: 'menti - altimeter & barometer',
      id: 'mentialtimeterbarometer',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1644751217?mt=8'
    },
    {
      description: 'When was the last time you built a paper plane or walked in the rain? \n' +
        '\n' +
        'This App helps you to calm and increase your awareness with over a hundred different little fun lessons for every day. Challenge yourself, to be more in focus and less stressed.',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/f1/fb/87/f1fb879a-3400-94a3-df40-3a2e4a40fc40/Icon-60@2x.png.png/120x120bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/2b/b3/46/2bb3461c-46cc-bc23-0a4e-b1255730c194/dac1d55c-7129-4cbc-8762-d13be7ee7a84_App_Store_Screenshot_6_U002c5@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/e5/b0/7d/e5b07d14-3eb7-bc60-312d-59f09d53c7eb/516cfa70-2b0f-4738-ae39-f8f7b47e0a03_App_Store_Screenshot_6_U002c5__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/39/60/fe/3960fe2a-526a-0657-04ac-baf286c750dd/65e7a9d3-8f3f-4822-b12d-400706084fe1_App_Store_Screenshot_6_U002c5__U2013_2@3x.png/1024x1024bb.png'
      ],
      title: 'Cope Stress - Daily Challenge',
      id: 'cope-stress',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1545228555?mt=8'
    },
    {
      description: "Your favorite Map doesn't support your GPS Maps files? \n" +
        '\n' +
        'Use this App to convert your hiking routes, run records, tracks or POI maps to the desired formats. You can use this map to import or export files with Applications like Google Earth (.kml / .kmz), GPS Receivers (.gpx), Webmaps in Browsers (.geoJSON), OmiExplorer (.kml, .gpx), TomTom (.gpx), Garmin(.gpx) and many more.\n' +
        '\n' +
        'The converter can also reduce the quality of maps, to support GPX files for hardware devices like Garmin Navigation Devices, etc.\n' +
        '\n' +
        'Supported formats: KML, KMZ, GPX and GeoJSON\n' +
        'Convert Map Name, Routes, Location Markers and POIs. Coordinates will also include the name and elevation.',
      iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/52/6f/57/526f5794-58dc-37fd-1868-87327f6622f3/AppIcon-2x_U007epad-0-5-0-85-220.png/167x167bb.png',
      screenshotUrls: [
        'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/6e/3f/5f/6e3f5f22-fc0b-0c3b-bf87-ab9e763e3dcc/34b54c75-07a0-4d10-a2b5-920317fe3410_iPhone_6-5_-_1__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/a8/a1/d2/a8a1d243-ca62-4841-0468-724c1e84b10b/660263d6-502e-4d54-b212-0c7bec6bfecb_iPhone_6-5_-_2__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/a5/3e/61/a53e618b-0a24-6822-fda2-8ac2c78c35ff/05900277-d3a0-4c17-8873-0a441979501c_iPhone_6-5_-_3__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/27/00/df/2700df90-656b-d131-683a-50570880e6fa/ccb085bd-cae8-4b85-8b1c-36b132ca4879_iPhone_6-5_-_4__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/be/97/90/be9790fc-999a-bd65-e87e-dd2a6437816e/91da182a-fc37-451c-9afb-d6a90a98d081_iPhone_6-5_-_5__U2013_1@3x.png/1024x1024bb.png',
        'https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/82/ce/26/82ce269c-1211-2ce2-0080-adf5ec57210c/2647b76d-7b12-4384-8f0b-ddc2ef3c628e_iPhone_6-5_-_6__U2013_1@3x.png/1024x1024bb.png'
      ],
      title: 'Geo File Converter - GPX KML',
      id: 'geo-file-converter',
      appStoreUrl: 'https://itunes.apple.com/us/app/undefined/id1550304849?mt=8'
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
