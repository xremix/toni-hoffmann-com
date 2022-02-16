<?php

$uri =  $_SERVER['REQUEST_URI']; // prints /api/logger/all

// $str = 'Hello there';
$parameters = str_replace('/api/flickr/images/?id=', '', $uri);
$parts = explode('-', $parameters);
$farm = $parts[0];
$folder = $parts[1];
$file = $parts[2];
// $remoteImageUrl = 'https://farm'.$farm.'.staticflickr.com/'.$server.'/'.$id.'_'.$secret.'.jpg';
$remoteImageUrl = 'https://farm'.$farm.'.staticflickr.com/'.$folder.'/'.$file;


// $remoteImageUrl = "https://farm66.staticflickr.com/65535/51802011856_1dd9fa0b50_z.jpg";
$content = file_get_contents($remoteImageUrl);





// Last-Modified: Wed, 05 Jan 2022 20:49:11 GMT

// Via: 1.1 127feb674de1f66343675c9727fafd6c.cloudfront.net (CloudFront)
// Date: Tue, 18 Jan 2022 20:25:27 GMT
// Expires: Wed, 18 Jan 2023 20:25:27 GMT
// Age: 19
// X-Frame-Options: DENY
// ETag: "5eb484154034af01920a1adaf5985737.1"
// x-cache: Hit from cloudfront
// imageheight: 427
// Server: Jubilee
// edge-control: public, max-age=31536000
// p3p: CP="This is not a P3P policy. We respect your privacy."
// imagewidth: 640
// powered-by: Mutation/1.0
// x-ttfb: 0.1227
// ourvalues: Empower Passion (#5 of 5)
// surrogate-control: public, max-age=31536000
// origintype: X
// streaming: false
// x-amz-cf-id: smCj8tJPKKQlpTJnX0nIN6oiwbFJr4EdkmfG_FnrJJPZkwYipZDjmw==
// x-amz-cf-pop: DUS51-P1
// x-ttdb-l: 95260
// mib: 2
// x-request-id: ba160a34
// quote: "I'm not a kid anymore, I'm one of you, one of the X-Men. It means more to me than anything in the world."
// hiring: Change the world of photography with us. https://www.flickr.com/jobs/
// x-env: a=live, b=jubilee, c=77f4af62, e=5017319cdd8b6f0e8ca83f5d61e011f0dc7d4baa
// x-ua-compatible: IE=edge
header('Content-Type: image/jpeg');
header('Cache-Control: public, max-age=31536000');
header('Access-Control-Allow-Origin: *');
echo $content;
?>