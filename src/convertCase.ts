
interface Window {
    convertCase(params): void;
}
declare var window: Window;

import REGEX_LIST from './REGEX_LIST';

/**
 * method
 * @param params {object}
 * @param params.input {string} - input string
 * @param params.type  {string} - type of exchange (cs,ck,sc,sk,ks,kc)
 * @param params.isConstructor  {boolean} - is Constructor (Capitalize the 1st letter)
 */
window.convertCase = (params: any) => {

    let return_string = '';
    return_string = REGEX_LIST[params.type](params.input);

    // is_constructor option
    if (params.is_constructor === true && (params.type === 'kc' || params.type === 'sc')) {
    // isConstructor option
    if (params.isConstructor === true && (params.type === 'kc' || params.type === 'sc')) {
        return_string = return_string.charAt(0).toUpperCase() + return_string.slice(1);
    }

    return return_string;

}