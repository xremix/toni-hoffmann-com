<?php

$uri =  $_SERVER['REQUEST_URI']; // prints /api/logger/all

// $str = 'Hello there';
$parameters = str_replace('/galleryimages/', '', $uri);
// $parameters = str_replace('/api/flickr/images/?id=', '', $uri);
$parts = explode('-', $parameters);
$farm = $parts[0];
$folder = $parts[1];
$file = $parts[2];
// $remoteImageUrl = 'https://farm'.$farm.'.staticflickr.com/'.$server.'/'.$id.'_'.$secret.'.jpg';
$remoteImageUrl = 'https://farm'.$farm.'.staticflickr.com/'.$folder.'/'.$file;

header('X-Original-Gallery-Url: '.$remoteImageUrl);

// $remoteImageUrl = "https://farm66.staticflickr.com/65535/51802011856_1dd9fa0b50_z.jpg";
$content = file_get_contents($remoteImageUrl);

foreach ($http_response_header as &$arrayvalue) {
    if(str_contains($arrayvalue, "Last-Modified")
        || str_contains($arrayvalue, "Last-Modified")
        || str_contains($arrayvalue, "Date")
        || str_contains($arrayvalue, "Expires")
        || str_contains($arrayvalue, "Age")
        || str_contains($arrayvalue, "ETag")
        || str_contains($arrayvalue, "imageheight")
        || str_contains($arrayvalue, "edge-control")
    ){
        header($arrayvalue);
    }


}


header('Content-Type: image/jpeg');
header('Cache-Control: public, max-age=31536000');
header('Access-Control-Allow-Origin: *');

echo $content;
?>