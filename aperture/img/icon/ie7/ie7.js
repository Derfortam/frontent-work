/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'_i-chill': '&#xe902;',
		'_i-compas': '&#xe903;',
		'_i-flower': '&#xe904;',
		'_i-focus-camera': '&#xe905;',
		'_i-hill': '&#xe906;',
		'_i-iso': '&#xe907;',
		'_i-location': '&#xe908;',
		'_i-riksgragsen': '&#xe909;',
		'_i-stock': '&#xe90a;',
		'_i-studio': '&#xe90b;',
		'_i-facebook-social': '&#xe900;',
		'_i-inst': '&#xe901;',
		'_i-twitter': '&#xe91a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/_i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
