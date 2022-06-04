describe('match-url', () => {
  it('should match a url with regex', () => {
    const { matchUrl } = require('./match-url')
    window.location.assign("/test");
    const callback = jest.fn();
    matchUrl(/^\/test/, callback);
    expect(callback).toHaveBeenCalled();
  })
  it('should match not a url with regex', () => {
    const { matchUrl } = require('./match-url')
    window.location.assign("/notMatch");
    const callback = jest.fn();
    matchUrl(/^\/test/, callback);
    expect(callback).toHaveBeenCalledTimes(0);
  })
  it('should match a negated url with regex', () => {
    const { matchUrl } = require('./match-url')
    window.location.assign("/test");
    const callback = jest.fn();
    matchUrl(/^\/notMatch/, callback, { negate: true });
    expect(callback).toHaveBeenCalled();
  })
  it('should not match a negated url with regex', () => {
    const { matchUrl } = require('./match-url')
    window.location.assign("/test");
    const callback = jest.fn();
    matchUrl(/^\/test/, callback, { negate: true });
    expect(callback).toHaveBeenCalledTimes(0);
  })
})