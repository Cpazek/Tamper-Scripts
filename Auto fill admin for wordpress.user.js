// ==UserScript==
// @name         Auto fill admin for wordpress
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	function KeyPress(e) {
		var evtobj = window.event? event : e
		if (evtobj.keyCode == 66 && evtobj.ctrlKey) {
			document.getElementById("user_login").value = "admin";
			document.getElementById("user_pass").focus();
			


		}
		
	}

	document.onkeydown = KeyPress;
})();