const booleanToYesNO = (value: boolean): string => {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'NO';
  }
  return 'NO';
};
export default booleanToYesNO;
