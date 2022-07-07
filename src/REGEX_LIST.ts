const REGEX_LIST = {
  ck: (arg: string) => {
    // camelCase to chain-case
    return arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  },
  cs: (arg: string) => {
    // camelCase to snake_case
    return arg.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  },
  kc: (arg: string) => {
    // chain-case to camelCase
    const replacer = function (match: string) {
      return match.replace(/\-/g, '').toUpperCase();
    };
    return arg.replace(/\-[a-z]/g, replacer);
  },
  ks: (arg: string) => {
    // chain-case to snake_case
    return arg.replace(/\-/g, '_');
  },
  sc: (arg: string) => {
    // snake_case to camelCase
    const replacer = function (match: string) {
      return match.replace(/\_/g, '').toUpperCase();
    };
    return arg.replace(/\_[a-z]/g, replacer);
  },
  sk: (arg: string) => {
    // snake_case to chain-case
    return arg.replace(/_/g, '-');
  },
};

export default REGEX_LIST;
