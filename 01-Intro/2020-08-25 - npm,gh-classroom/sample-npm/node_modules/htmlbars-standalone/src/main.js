import {
  compile,
  template
} from './htmlbars/htmlbars-compiler/compiler';

import hooks from './htmlbars/htmlbars-runtime/hooks';
import {

	handleRedirect

} from './htmlbars/htmlbars-runtime/hooks';

import render from './htmlbars/htmlbars-runtime/render';



import DOMHelper from './htmlbars/dom-helper';

import { blockFor, RenderState, renderAndCleanup } from './htmlbars/htmlbars-util/template-utils';


module.exports = {
	DOMHelper: DOMHelper,
	
	Compiler: {
		compile: compile,
		template: template		
	},

	Runtime: {
		Hooks: {
			Default: hooks,
			Helpers: {
				handleRedirect: handleRedirect
			}
		},
		render: render
	},

	Util: {
		Template: {
			blockFor: blockFor,
			RenderState: RenderState,
			renderAndCleanup: renderAndCleanup
		}
	}

};