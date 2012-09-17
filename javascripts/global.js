var APP = APP || {};

// checkbox replace
APP.checkboxes = {
	
	init: function() {
		
		// set some variables
		var replaceState = 'replace';
		var initState = 'replace-js';
		var checkedState = 'replace-checked';
		var focusState = 'replace-focus';
		
		// get all the checkboxes
		var checkboxes = document.getElementsByTagName('input');
		
		// loop through the checkboxes
		for (var i = 0; i < checkboxes.length; i++) {
			
			var elm = checkboxes[i];
			var parent = elm.parentNode;
			
			if (elm.getAttribute('type') === 'checkbox' && APP.hasClass(parent,replaceState)) {
				
				// add replace-js class
				APP.addClass(parent,initState);
				
				// add class if pre-checked
				if (elm.checked) {
					APP.addClass(parent,checkedState);
				}
				
				// bind focus event
				elm.onfocus = function() {
					APP.addClass(this.parentNode,focusState);
				};
				
				// bind blur event
				elm.onblur = function() {
					APP.removeClass(this.parentNode,focusState);
				};
				
				// bind click event
				elm.onclick = function() {
					
					if (this.checked) {
						APP.addClass(this.parentNode,checkedState);
					} else {
						APP.removeClass(this.parentNode,checkedState);
					}
					
				};
				
			}
			
		}
		
	}
	
};


// radio button replace
APP.radiobuttons = {
	
	init: function() {
		
		// set some variables
		var replaceState = 'replace';
		var initState = 'replace-js';
		var checkedState = 'replace-checked';
		var focusState = 'replace-focus';
		
		// get all the checkboxes
		var radiobuttons = document.getElementsByTagName('input');
		
		// loop through the checkboxes
		for (var i = 0; i < radiobuttons.length; i++) {
			
			var elm = radiobuttons[i];
			var parent = elm.parentNode;
			
			if (elm.getAttribute('type') === 'radio' && APP.hasClass(parent,replaceState)) {
				
				// add replace-js class
				APP.addClass(parent,initState);
				
				// add class if pre-checked
				if (elm.checked) {
					APP.addClass(parent,checkedState);
				}
				
				
				// bind focus event
				elm.onfocus = function() {
					APP.addClass(this.parentNode,focusState);
				};
				
				// bind blur event
				elm.onblur = function() {
					APP.removeClass(this.parentNode,focusState);
				};
				/*
				// bind click event
				elm.onclick = function() {
					
					if (this.checked) {
						APP.addClass(this.parentNode,checkedState);
					} else {
						APP.removeClass(this.parentNode,checkedState);
					}
					
				};*/
				
			}
			
		}
		
	}
	
};


// utilities
APP.hasClass = function(ele, cls) {
	return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};
APP.addClass = function(ele, cls) {
	if (!this.hasClass(ele, cls)) ele.className += " " + cls;
};
APP.removeClass = function(ele, cls) {
	if (APP.hasClass(ele, cls)) {
	var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		ele.className = ele.className.replace(reg, ' ');
	}
};


// run this thing!
APP.checkboxes.init();
APP.radiobuttons.init();


// make console.log safe to use
window.console||(console={log:function(){}});