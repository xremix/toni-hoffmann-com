<?php

// ATTENTION ! THIS SITE SEEMS TO BE NOT WORKING

header('Content-type: application/json');

$debug = true;
if(!$debug){
	ini_set('display_startup_errors',0);
	ini_set('display_errors',0);
	error_reporting(0);
}else{
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
}

require_once('../phpFlickr.php');
class MyFlickrApi{
	public $apiKey = 'null';
	public $cacheFolder = '../flickrcache';
	public $owner = null;
	private $api = null;

	function __construct($apiKey) {
		$this->apiKey = $apiKey;

       //Clear Cache
		if(isset($_GET['clearcache']) && $_GET['clearcache'] == 'true'){
			$files = glob($this->cacheFolder.'/*'); // get all file names
			foreach($files as $file){ // iterate files
				if(is_file($file)){
			    	unlink($file); // delete file
			    }
			}
			rmdir($this->cacheFolder);
		}

		//Create CACHE folder if needed
		if (!file_exists($this->cacheFolder)) {
			mkdir($this->cacheFolder, 0777, true);
		}

		$flickr = new phpFlickr($this->apiKey);
		$flickr->enableCache('fs', $this->cacheFolder, 43200); //12h caching

		$this->api = $flickr;
   }


	private function mapImage($flickrImage){
		$image = array(
			'url' => 'https://www.flickr.com/photos/'.$this->owner.'/'.$flickrImage['id'],
			//Cut out everything in [brackets]
			'title' => preg_replace('/[\[{\(].*[\]}\)]/U' , '', $flickrImage['title']),
			'image' => array(
				//100px
				'thumbnail' =>'https://farm'.$flickrImage['farm'].'.staticflickr.com/'.$flickrImage['server'].'/'.$flickrImage['id'].'_'.$flickrImage['secret'].'_t.jpg',
				//640px
				'small' =>'https://farm'.$flickrImage['farm'].'.staticflickr.com/'.$flickrImage['server'].'/'.$flickrImage['id'].'_'.$flickrImage['secret'].'_z.jpg',
				//1024px
				'middle' =>'https://farm'.$flickrImage['farm'].'.staticflickr.com/'.$flickrImage['server'].'/'.$flickrImage['id'].'_'.$flickrImage['secret'].'_b.jpg',
				//Original
				'large' =>'https://farm'.$flickrImage['farm'].'.staticflickr.com/'.$flickrImage['server'].'/'.$flickrImage['id'].'_'.$flickrImage['originalsecret'].'_o.'.$flickrImage['originalformat'],
				'original' =>'https://farm'.$flickrImage['farm'].'.staticflickr.com/'.$flickrImage['server'].'/'.$flickrImage['id'].'_'.$flickrImage['originalsecret'].'_o.'.$flickrImage['originalformat'],
			)
		);
		return $image;
	}
	function getGallery($galleryId){
		$result = $this->api->photosets_getPhotos($galleryId, 'original_format');
		$this->owner = $result['photoset']['owner'];
		$galleryPhotos = $result['photoset']['photo'];

		$gallery = array_map(array($this, 'mapImage'), $galleryPhotos);
		$gallery = array_reverse($gallery);
		return $gallery;
	}
}

$flickrAPI = new MyFlickrApi('a749634cca5e5b982665b4a86eb91195');

echo json_encode(
	array(
	"galleries"=>array(
		'favorites'=>$flickrAPI->getGallery('72157654640824909'),
		'favorites_landscape'=>$flickrAPI->getGallery('72157676998765436')
		)
	)
);
?>
