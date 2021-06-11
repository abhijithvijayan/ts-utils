import {isEmail} from '../source';
import {EMPTY_STRING} from '../source/utils';

describe('Tests for isEmail()', () => {
  it('should return false for undefined', () => {
    expect(isEmail(undefined)).toEqual(false);
  });

  it('should return false for null', () => {
    expect(isEmail(null)).toEqual(false);
  });

  it('should return true for valid email(1)', () => {
    expect(isEmail('something@something.com')).toEqual(true);
  });

  it('should return true for valid email(2)', () => {
    expect(isEmail('someone@localhost.localdomain')).toEqual(true);
  });

  it('should return true for valid email(3)', () => {
    expect(isEmail('someone@127.0.0.1')).toEqual(true);
  });

  it('should return true for valid email(4)', () => {
    expect(isEmail('a@b.b')).toEqual(true);
  });

  it('should return true for valid email(5)', () => {
    expect(isEmail('a/b@domain.com')).toEqual(true);
  });

  it('should return true for valid email(6)', () => {
    expect(isEmail('{}@domain.com')).toEqual(true);
  });

  it('should return true for valid email(7)', () => {
    expect(isEmail("m*'!%@something.sa")).toEqual(true);
  });

  it('should return true for valid email(8)', () => {
    expect(isEmail('tu!!7n7.ad##0!!!@company.ca')).toEqual(true);
  });

  it('should return true for valid email(9)', () => {
    expect(isEmail('%@com.com')).toEqual(true);
  });

  it('should return true for valid email(10)', () => {
    expect(isEmail("!#$%&'*+/=?^_`{|}~.-@com.com")).toEqual(true);
  });

  it('should return true for valid email(11)', () => {
    expect(isEmail('USER@EXAMPLE.COM')).toEqual(true);
  });

  it('should return true for valid email(12)', () => {
    expect(isEmail('someone@do-ma-in.com')).toEqual(true);
  });

  it('should return true for valid email(13)', () => {
    expect(isEmail('a@p.com')).toEqual(true);
  });

  it('should return false for invalid email(1)', () => {
    expect(isEmail('somebody@example')).toEqual(false);
  });

  it('should return false for invalid email(2)', () => {
    expect(isEmail(' a@p.com')).toEqual(false);
  });

  it('should return false for invalid email(3)', () => {
    expect(isEmail('.wooly@example.com')).toEqual(false);
  });

  it('should return false for invalid email(4)', () => {
    expect(isEmail('wo..oly@example.com')).toEqual(false);
  });

  it('should return false for invalid email(5)', () => {
    expect(isEmail('invalid:email@example.com')).toEqual(false);
  });

  it('should return false for invalid email(6)', () => {
    expect(isEmail('@somewhere.com')).toEqual(false);
  });

  it('should return false for invalid email(7)', () => {
    expect(isEmail('example.com')).toEqual(false);
  });

  it('should return false for invalid email(8)', () => {
    expect(isEmail('@@example.com')).toEqual(false);
  });

  it('should return false for invalid email(9)', () => {
    expect(isEmail('a space@example.com')).toEqual(false);
  });

  it('should return false for invalid email(10)', () => {
    expect(isEmail('something@ex..ample.com')).toEqual(false);
  });

  it('should return false for invalid email(11)', () => {
    expect(isEmail('a\b@c')).toEqual(false);
  });

  it('should return false for invalid email(12)', () => {
    expect(isEmail(EMPTY_STRING)).toEqual(false);
  });

  it('should return false for invalid email(13)', () => {
    expect(isEmail(' ')).toEqual(false);
  });

  it('should return false for invalid email(14)', () => {
    expect(isEmail('someone@somewhere.com.')).toEqual(false);
  });

  it('should return false for invalid email(15)', () => {
    expect(isEmail('""test\blah""@example.com')).toEqual(false);
  });

  it('should return false for invalid email(16)', () => {
    expect(isEmail('"testblah"@example.com')).toEqual(false);
  });

  it('should return false for invalid email(17)', () => {
    expect(isEmail('someone@somewhere.com@')).toEqual(false);
  });

  it('should return false for invalid email(18)', () => {
    expect(isEmail('someone@somewhere_com')).toEqual(false);
  });

  it('should return false for invalid email(19)', () => {
    expect(isEmail('someone@some:where.com')).toEqual(false);
  });

  it('should return false for invalid email(20)', () => {
    expect(isEmail('.')).toEqual(false);
  });

  it('should return false for invalid email(21)', () => {
    expect(isEmail('F/s/f/a@feo+re.com')).toEqual(false);
  });

  it('should return false for invalid email(22)', () => {
    expect(
      isEmail('some+long+email+address@some+host-weird-/looking.com')
    ).toEqual(false);
  });

  it('should return false for invalid email(23)', () => {
    expect(isEmail('a @p.com')).toEqual(false);
  });

  it('should return false for invalid email(24)', () => {
    expect(isEmail('a\u0020@p.com')).toEqual(false);
  });

  it('should return false for invalid email(25)', () => {
    expect(isEmail('a\u0009@p.com')).toEqual(false);
  });

  it('should return false for invalid email(26)', () => {
    expect(isEmail('a\u000B@p.com')).toEqual(false);
  });

  it('should return false for invalid email(27)', () => {
    expect(isEmail('a\u000C@p.com')).toEqual(false);
  });

  it('should return false for invalid email(28)', () => {
    expect(isEmail('a\u2003@p.com')).toEqual(false);
  });

  it('should return false for invalid email(29)', () => {
    expect(isEmail('a\u3000@p.com')).toEqual(false);
  });

  it('should return false for invalid email(30)', () => {
    expect(isEmail('ddjk-s-jk@asl-.com')).toEqual(false);
  });

  it('should return false for invalid email(31)', () => {
    expect(isEmail('someone@do-.com')).toEqual(false);
  });

  it('should return false for invalid email(32)', () => {
    expect(isEmail('somebody@-p.com')).toEqual(false);
  });

  it('should return false for invalid email(33)', () => {
    expect(isEmail('somebody@-.com')).toEqual(false);
  });
});
