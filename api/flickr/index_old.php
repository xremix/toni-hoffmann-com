<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');


// ini_set('display_errors', 1); 
// ini_set('display_startup_errors', 1); 
// error_reporting(E_ALL);

ini_set('display_startup_errors',0);
ini_set('display_errors',0);
error_reporting(0);

require_once('phpFlickr.php');

$cacheFolder = 'flickrcache';

//Clear Cache
if(isset($_GET['clearcache']) && $_GET['clearcache'] == 'true'){
	$files = glob($cacheFolder.'/*'); // get all file names
	foreach($files as $file){ // iterate files
		if(is_file($file)){
			unlink($file); // delete file
		}
	}
	rmdir($cacheFolder);
}

//Create CACHE folder if needed
if (!file_exists($cacheFolder)) {
	mkdir($cacheFolder, 0777, true);
}


$galleryId = '';
switch ($_GET['gallery']) {
	case 'landscapes':
		$galleryId = '72157654640824909';
		break;
	case 'winterlandscapes':
		$galleryId = '72157715976193327';
		break;
	case 'products':
		$galleryId = '72157677274403177';
		break;
	case 'cityscapes':
		$galleryId = '72157651879434002';
		break;
	case 'subways':
		$galleryId = '72157712884553776';
		break;
	default:
		//Defaults to landscapes
		$galleryId = '72157654640824909';
}

// Schlüssel:
// e7da1d0ca4852b3df27b4f80a4b4823b
//
// Geheimer Schlüssel:
// 7e95185c889e5a23

// $f = new phpFlickr("dce51f73b3ac52030add5bf0678ae405");

// $recent = $f->photos_getRecent();

// var_dump($recent);
// exit();
$privateSecret = "7e95185c889e5a23";
// $flickr = new phpFlickr("a749634cca5e5b982665b4a86eb91195");
$flickr = new phpFlickr("dce51f73b3ac52030add5bf0678ae405", $privateSecret, true);
$flickr->enableCache("fs", $cacheFolder, 43200); //12h caching
// echo phpversion();
// echo "abc";
$result = $flickr->photosets_getPhotos($galleryId, "originalformat");
// var_dump($result);
$galleryPhotos = $result['photoset']['photo'];

if(isset($_GET['raw']) && $_GET['raw'] == 'true'){
 echo json_encode($result);
 exit();
}

$gallery = array();
$galleryId = 0;
foreach ($galleryPhotos as $galleryPhoto) {
	$obj;
	// https://www.flickr.com/services/api/misc.urls.html
	//500px
	$obj["thumbnail"] ='https://farm'.$galleryPhoto['farm'].'.staticflickr.com/'.$galleryPhoto['server'].'/'.$galleryPhoto['id'].'_'.$galleryPhoto['secret'].'.jpg';
	//640px
	$obj["middleurl"] ='https://farm'.$galleryPhoto['farm'].'.staticflickr.com/'.$galleryPhoto['server'].'/'.$galleryPhoto['id'].'_'.$galleryPhoto['secret'].'_z.jpg';
	//1024px
	$obj["url"] ='https://farm'.$galleryPhoto['farm'].'.staticflickr.com/'.$galleryPhoto['server'].'/'.$galleryPhoto['id'].'_'.$galleryPhoto['secret'].'_b.jpg';
	//Original
	$obj["bigurl"] ='https://farm'.$galleryPhoto['farm'].'.staticflickr.com/'.$galleryPhoto['server'].'/'.$galleryPhoto['id'].'_'.$privateSecret.'_o.'.$galleryPhoto["originalformat"];
	$obj["originalurl"] ='https://farm'.$galleryPhoto['farm'].'.staticflickr.com/'.$galleryPhoto['server'].'/'.$galleryPhoto['id'].'_'.$privateSecret.'_o.'.$galleryPhoto["originalformat"];
	$obj["linkUrl"] = 'https://www.flickr.com/photos/'.$result['photoset']['owner'].'/'.$galleryPhoto['id'];
	//Cut out everyting in [brackets]
	$obj["title"] = preg_replace('/[\[{\(].*[\]}\)]/U' , '', $galleryPhoto['title']);
	$obj["alt"] = preg_replace('/[\[{\(].*[\]}\)]/U' , '', $galleryPhoto['title']).' from Toni Hoffmann';

	array_push($gallery, $obj);
}
$gallery = array_reverse($gallery);
echo json_encode($gallery);
?>
