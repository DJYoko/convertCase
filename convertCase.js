 /**
  * method
  * @param params {object}
  * @param params.input {string} - input string
  * @param params.type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)
  * @param params.constructor  {boolean} - is Constructor (Capitalize the 1st letter)
  */

 const convertCase = function (params) {

 	let return_string = '';

 	const REGEX_LIST = {
 		'ck': function (arg) {
 			// camelCase to kebab-case
 			return arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
 		},
 		'cs': function (arg) {
 			// camelCase to snake_case 
 			return arg.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
 		},
 		'kc': function (arg) {
 			// kebab-case to camelCase
 			const replacer = function (match) {
 				return match.replace(/\-/g, '').toUpperCase();
 			}
 			return arg.replace(/\-[a-z]/g, replacer);
 		},
 		'ks': function (arg) {
 			// kebab-case to snake_case
 			return arg.replace(/\-/g, '_');
 		},
 		'sc': function (arg) {
 			// snake_case to camelCase
 			const replacer = function (match) {
 				return match.replace(/\_/g, '').toUpperCase();
 			}
 			return arg.replace(/\_[a-z]/g, replacer);
 		},
 		'sk': function (arg) {
 			// snake_case to kebab-case
 			return arg.replace(/_/g, '-');
 		},
 	};

 	return_string = REGEX_LIST[params.type](params.input);

 	// constructor option
 	if (params.constructor === true && (params.type === 'kc' || params.type === 'sc')) {
 		return_string = return_string.charAt(0).toUpperCase() + return_string.slice(1);
 	}

 	return return_string;

 }