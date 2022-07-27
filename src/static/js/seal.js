document.currentScript = document.currentScript || (function() {
  const scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1];
})();
(function() {
	const default_size = "162x196";
	let size = default_size;
	const schama_name = document.currentScript.getAttribute('schama_name');
	const content_id = document.currentScript.getAttribute('content');
	try { size = document.currentScript.getAttribute('size'); }catch (e) {}
	
	if (size == undefined || size == null) size = default_size;


	const content = document.getElementById(content_id);

	const [width, height] = size.split("x");
	
	let shield_image = document.createElement("img");
	shield_image.src = "https://secure.convertize.com.br/static/media/pci-shield.svg";
	shield_image.alt = "Certificado PCI"
	
	if (width != undefined) shield_image.width = width;
	if (height != undefined) shield_image.height = height;

	let valid_url = document.createElement("a");
	valid_url.href = "https://secure.convertize.com.br/?s=" + schama_name;
	valid_url.target = "_blank";
	valid_url.ariaLabel = "Certificado PCI"
	valid_url.rel = "noreferrer"
	
	valid_url.appendChild(shield_image);
	content.appendChild(valid_url);
})();
