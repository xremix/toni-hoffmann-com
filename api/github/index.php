<?php 
//HTTP Request docs http://requests.ryanmccue.info/docs/usage.html
// Github Token generation: https://github.com/settings/tokens
require_once './Requests.php';
Requests::register_autoloader();

$headers = array(
	'Accept' => 'application/json',
	'Authorization'=>'bearer f88a2488f75aa5ead8824995b9f102533b53013e'
	);
$data = '{ "query": "query { repositoryOwner(login: \"xremix\") { ... on User { pinnedRepositories(first:6) { edges { node { name description url } } } } } }" }';
$request = Requests::post('https://api.github.com/graphql', $headers, $data);
if(($request->status_code) === 200){
	header('Content-Type: application/json');
	echo $request->body;
}else{
	http_response_code($request->status_code);
	echo $request->body;
}
?>