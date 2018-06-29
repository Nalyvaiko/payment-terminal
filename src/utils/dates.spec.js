import {getFormattedDateTime} from './dates';

describe('Date Helper', () => {
  describe('getFormattedDateTime', () => {
    it('returns mm/dd hh:mm:ss formatted time when passed a date', () => {
      const date = new Date(99, 0, 24, 11, 33, 30, 0);
      expect(getFormattedDateTime(date)).toEqual('1/24 11:33:30');
    });

    it('pads single digit minute and second values with leading zeros', () => {
      const date = new Date(99, 0, 4, 11, 3, 2, 0);
      expect(getFormattedDateTime(date)).toEqual('1/4 11:03:02');
    });
  });
});
