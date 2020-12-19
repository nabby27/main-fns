export const mockDate = (expected: Date): () => void => {
  const _Date = Date;
  function MockDate(mockOverride?: Date | number): Date {
    return new _Date(mockOverride || expected);
  }

  MockDate.UTC = _Date.UTC;
  MockDate.parse = _Date.parse;
  MockDate.now = (): number => expected.getTime();
  MockDate.prototype = _Date.prototype;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global.Date = MockDate as any;

  return (): void => {
    global.Date = _Date;
  };
};
