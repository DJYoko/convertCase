 /**
  * method
  * @param input {string} - input string
  * @param type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)
  */
 const convertCase = function (input, type) {
 	const EXCHANGE_TYPE_LIST = ['ck', 'cs', 'kc', 'ks', 'sc', 'sk'];

 	if (typeof input !== 'string' || typeof type !== 'string' || EXCHANGE_TYPE_LIST.indexOf(type) === -1) {
 		return false;
 	}

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
 	}

 	return REGEX_LIST[type](input);

 }
