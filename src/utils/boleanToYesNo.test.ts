import booleanToYesNO from './boleanToYesNo';

describe('booleanToYesNO', () => {
  test('returns "Yes" when given true', () => {
    expect(booleanToYesNO(true)).toBe('Yes');
  });

  test('returns "NO" when given false', () => {
    expect(booleanToYesNO(false)).toBe('NO');
  });

  test('returns "NO" for null or undefined inputs', () => {
    expect(booleanToYesNO(null)).toBe('NO');
    expect(booleanToYesNO(undefined)).toBe('NO');
  });
});
