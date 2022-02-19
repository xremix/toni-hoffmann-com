// const https = require('https')

// var x = "";
// https.get('https://www.toni-hoffmann.com/api/flickr/?gallery=winterlandscapes', (res) => {
//   res.on('data', (d) => {
//     x += d
//     process.stdout.write(d);
//   });

// });

// return;

var fs = require('fs');

var currentDate = new Date();
function twoDigit(s){
  return ("0" + s).slice(-2);
}
var dateString = `${currentDate.getFullYear()}-${twoDigit(currentDate.getMonth())}-${twoDigit(currentDate.getDate())}`;


var sites = [{
  url: '/',
  priority: '1.00',
},{
  url: '/photography',
  priority: '1.00',
}, {
  url: '/photography/landscapes/1',
  priority: '1.00',
}, {
  url: '/photography/landscapes/2',
  priority: '1.00',
}, {
  url: '/photography/landscapes/3',
  priority: '1.00',
}, {
  url: '/photography/landscapes/4',
  priority: '1.00',
}, {
  url: '/photography/landscapes/5',
  priority: '1.00',
}, {
  url: '/photography/landscapes/6',
  priority: '1.00',
}, {
  url: '/photography/landscapes/7',
  priority: '1.00',
}, {
  url: '/photography/winterlandscapes/1',
  priority: '1.00',
}, {
  url: '/photography/winterlandscapes/2',
  priority: '1.00',
},{
  url: '/photography/winterlandscapes/3',
  priority: '1.00',
}, {
  url: '/photography/cityscapes/1',
  priority: '1.00',
}, {
  url: '/photography/cityscapes/2',
  priority: '1.00',
}, {
  url: '/photography/cityscapes/3',
  priority: '1.00',
}, {
  url: '/photography/cityscapes/4',
  priority: '1.00',
}, {
  url: '/photography/subways/1',
  priority: '1.00',
}, {
  url: '/photography/products/1',
  priority: '1.00',
}, {
  url: '/photography/products/2',
  priority: '1.00',
}, {
  url: '/photography/products/3',
  priority: '1.00',
}, {
  url: '/photography/products/4',
  priority: '1.00',
}, {
  url: '/apps',
  priority: '1.00',
}, {
  url: '/apps/pretty-gs1-scanner',
  priority: '1.00',
}, {
  url: '/apps/smart-gs1-barcode-generator',
  priority: '1.00',
}, {
  url: '/apps/geo-file-converter',
  priority: '1.00',
}, {
  url: '/apps/etf-saving-plan-calculator',
  priority: '1.00',
}, {
  url: '/apps/boat-speedometer',
  priority: '1.00',
}, {
  url: '/apps/curve-tracker',
  priority: '1.00',
}, {
  url: '/apps/mindful-focus',
  priority: '1.00',
}, {
  url: '/apps/nautic-converter',
  priority: '1.00',
}, {
  url: '/development',
  priority: '0.8',
}, {
  url: '/music',
  priority: '0.8',
}, {
  url: '/contact',
  priority: '0.40',
}, {
  url: '/imprint',
  priority: '0.40',
}, {
  url: '/data-privacy',
  priority: '0.40',
}];


function chunkArray(myArray, chunk_size){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    var myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }

  return tempArray;
}


function loadImages(url){
  if(!url.includes('/photography/')){
    return '';
  }

  var album = url.slice('/photography/'.length).split('/')[0];
  var page =  url.slice('/photography/'.length).split('/')[1] - 1;
  var images = JSON.parse(fs.readFileSync(`../toni-hoffmann-com/api/images/${album}.json`));
  var pageImages = chunkArray(images, 21)[page];

  var output = pageImages.map(image =>`
  <image:image>
    <image:loc>https://www.toni-hoffmann.com/images/${album}/full/${image.url}</image:loc>
    <image:caption>${image.title}</image:caption>
  </image:image>
`).join('');
return output;
}

var sitesXml = sites.map(s =>{
  return `
  <url>
    <loc>https://www.toni-hoffmann.com${s.url}</loc>
    <lastmod>${dateString}</lastmod>
    <priority>${s.priority}</priority>${loadImages(s.url)}
  </url>`
}).join('');

var xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


${sitesXml}


</urlset>
`;


fs.writeFile('src/sitemap.xml', xmlContent, function (err) {
  if (err) throw err;
  console.log('Generated src/sitemap.xml');
});

var txtContent = sites.map(s =>{
  return `${s.url}
`
}).join('');
fs.writeFile('routes.txt', txtContent, function (err) {
  if (err) throw err;
  console.log('Generated routes.txt');
});
