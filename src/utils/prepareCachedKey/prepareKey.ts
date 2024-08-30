export const prepareKey = (args: (number | string | undefined)[]) => {
  return args
    .reduce<string>((acc, item, index) => item === undefined ? acc : `${acc}${0 === index ? '' : '-'}${item}`, '');
};