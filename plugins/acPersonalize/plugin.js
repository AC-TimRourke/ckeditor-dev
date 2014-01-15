/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

/**
 * @fileOverview The "selectall" plugin provides an editor command that
 *               allows selecting the entire content of editable area.
 *               This plugin also enables a toolbar button for the feature.
 */

(function() {
	CKEDITOR.plugins.add( 'acPersonalize', {
		//icons: 'acPersonalize', // %REMOVE_LINE_CORE%
		init: function( editor ) {
			editor.addCommand( 'acPersonalize', { modes:{wysiwyg:1,source:1 },
				exec: function( editor ) {
					designer.perstag.openmodal(editor.element.$.id);
				},
				canUndo: true
			});

			editor.ui.addButton && editor.ui.addButton( 'acPersonalize', {
				label: 'Personalize',
				command: 'acPersonalize',
				toolbar: 'links,10'
			});

			ac.ck.buttonForceLabel('acPersonalize');
		}
	});
})();
