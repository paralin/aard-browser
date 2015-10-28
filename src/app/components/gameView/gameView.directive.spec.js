/**
 * @todo Complete the test
 */
describe('directive gameView', function() {
  let vm;
  let element;
  let timeInMs;

  beforeEach(angular.mock.module('aard'));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });
});
