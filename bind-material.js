[].map.call(document.querySelectorAll('.add-pet .name, .add-pet .pet'), function(el) {
	return new mdc.textField.MDCTextField(el);
});
