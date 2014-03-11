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
	CKEDITOR.plugins.add( 'acClose', {
		icons: 'acClose', // %REMOVE_LINE_CORE%
		init: function( editor ) {
			editor.addCommand( 'acClose', { modes:{wysiwyg:1,source:1 },
				exec: function( editor ) {
					//console.log($J(editor.element.$).data("partid"));
					var objid = editor.element.$;
					var obj = $J(editor.element.$);
					obj
						.blur()
						.removeClass('cke_currentlyediting')
						.css({ boxShadow: 'none' })
					;
					designer.mustsave("part", obj.data("partid"));
					designer.save();
				},
				canUndo: false
			});

			editor.ui.addButton && editor.ui.addButton( 'acClose', {
				label: ac.ck.str_Close_edit_mode,//'Close edit mode (Saves Automatically)',
				command: 'acClose',
				toolbar: 'links,10'
			});

			//ac.ck.buttonForceLabel('acClose');
		}
	});
})();
