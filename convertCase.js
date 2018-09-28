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

 	switch (exchange_type_set.indexOf(type)) {
 		case 0:
 			// camelCase to kebab-case
 			break;
 		case 1:
 			// camelCase to snake_case 
 			break;
 		case 2:
 			// kebab-case to camelCase
 			break;
 		case 3:
 			// kebab-case to snake_case
 			break;
 		case 4:
 			// kebab-case to snake_case
 			break;
 		case 5:
 			// snake_case to kebab-case
 			break;
 	}

 }
