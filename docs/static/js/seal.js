document.currentScript = document.currentScript || (function() {
  const scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1];
})();
(function() {
	const schama_name = document.currentScript.getAttribute('schama_name');
	const content_id = document.currentScript.getAttribute('content');
	const content = document.getElementById(content_id);
	
	let shield_image = document.createElement("img");
	shield_image.src = "https://secure.convertize.com.br/static/media/pci-shield.png";

	let valid_url = document.createElement("a");
	valid_url.href = "https://secure.convertize.com.br/?s=" + schama_name;
	
	valid_url.appendChild(shield_image);
	content.appendChild(valid_url);
})();