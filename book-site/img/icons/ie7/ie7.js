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
		'_i-calendar': '&#xe900;',
		'_i-catalog': '&#xe901;',
		'_i-empty-star': '&#xe902;',
		'_i-facebook': '&#xe903;',
		'_i-full-star': '&#xe904;',
		'_i-gaming': '&#xe905;',
		'_i-genres': '&#xe906;',
		'_i-laptop': '&#xe907;',
		'_i-like': '&#xe908;',
		'_i-linkedin': '&#xe909;',
		'_i-minus': '&#xe90a;',
		'_i-open-list': '&#xe90b;',
		'_i-play': '&#xe90c;',
		'_i-plus': '&#xe90d;',
		'_i-rating': '&#xe90e;',
		'_i-ring': '&#xe90f;',
		'_i-search': '&#xe910;',
		'_i-slide-down': '&#xe911;',
		'_i-slide-left': '&#xe912;',
		'_i-slide-right': '&#xe913;',
		'_i-smartphone': '&#xe914;',
		'_i-smartTV': '&#xe915;',
		'_i-sound': '&#xe916;',
		'_i-tablet': '&#xe917;',
		'_i-time': '&#xe918;',
		'_i-translate': '&#xe919;',
		'_i-twitter': '&#xe91a;',
		'_i-video-pause': '&#xe91b;',
		'_i-view': '&#xe91c;',
		'_i-VR': '&#xe91d;',
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
