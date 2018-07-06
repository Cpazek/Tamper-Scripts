// ==UserScript==
// @name         copy wp admin password
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       https://*.salesforce.com/*
// @match       https://*.salesforce.com/*
// @grant    GM_setClipboard
// ==/UserScript==

(function() {
	'use strict';

	function KeyPress(e) {
		var evtobj = window.event? event : e
		if (evtobj.keyCode == 66 && evtobj.ctrlKey) {
			var aTags = document.getElementsByTagName("td");
			var searchText = "WP-Admin Password";


			//Finding The Password
			var pass;
			var found1;
			for (var i = 0; i < aTags.length; i++) {
				if (aTags[i].textContent == searchText) {
					//found 1 is the element that has the search phrase
					found1 = aTags[i];
					//this is the actual password
					//wp Admin Password
					GM_setClipboard (found1.nextSibling.firstChild.textContent);
					console.log("copied");

					break;
				}
			}
			//Finding a Dev url if they have one
			var pass3;
			var found3;
			var dev;
			for (var k = 0; k < aTags.length; k++) {
				if (aTags[k].textContent === "Development URL") {
					found3 = aTags[k];
					console.log(found3.nextSibling.firstChild.firstChild.childNodes.length);
					if(found3.nextSibling.firstChild.firstChild.childNodes.length === 0) {



						dev = false;
						console.log('dev')

					}else{
						window.open(found3.nextSibling.firstChild.firstChild + 'wp-admin', '_blank');

					}


					break;
				}

			}
			//fining the live url and going to it
			var pass2;
			var found2;
			if(!dev){
				for (var j = 0; j < aTags.length; j++) {
					if (aTags[j].textContent === "Website") {
						found2 = aTags[j];

						window.open(found2.nextSibling.firstChild.firstChild + 'wp-admin', '_blank');


						break;
					}

				}
			}
		}
	}
	document.onkeydown = KeyPress;
})();