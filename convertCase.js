 /**
  * method
  * @param input {string} - input string
  * @param type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)
  */
 const convertCase = function (input, type) {
 	const exchange_type_set = ['ck', 'cs', 'kc', 'ks', 'sc', 'sk'];

 	if (typeof input !== 'string' || typeof type !== 'string' || exchange_type_set.indexOf(type) === -1) {
 		return false;
 	}

 	const regex_collection = {
 		'ck': function (arg) {
 			// camelCase to kebab-case
 			return arg.replace(/([a-z])([A-Z])/g, '$1-$2'); //todo set correct regex
 		},
 		'cs': function (arg) {
 			// camelCase to snake_case 
 			return arg.replace(/([a-z])([A-Z])/g, '$1_$2'); //todo set correct regex
 		},
 		'kc': function (arg) {
 			// kebab-case to camelCase
 			return arg.replace(/\-(.)/g, '$1'.toUpperCase());
 		},
 		'ks': function (arg) {
 			// kebab-case to snake_case
 			return arg.replace(/\-/g, '_');
 		},
 		'sc': function (arg) {
 			// snake_case to camelCase
 			return arg.replace('aa', 'bb'); //todo set correct regex
 		},
 		'sk': function (arg) {
 			// snake_case to kebab-case
 			return arg.replace(/_/g, '-');
 		},
 	}

 	return regex_collection[type](input);

 }
