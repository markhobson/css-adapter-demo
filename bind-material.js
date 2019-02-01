[].map.call(document.querySelectorAll('form > div'), function(el) {
	return new mdc.textField.MDCTextField(el);
});
