[].map.call(document.querySelectorAll('.add-pet .name'), function(el) {
	return new mdc.textField.MDCTextField(el);
});

[].map.call(document.querySelectorAll('.add-pet .animal'), function(el) {
	return new mdc.select.MDCSelect(el);
});
