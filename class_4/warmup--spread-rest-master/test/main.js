import { expect } from "chai";
import lib from "../src/main";

describe('#combineArrays', () => {
  it('returns combined arrays', () => {
    expect(lib.combineArrays([1,2], [3,4])).to.eql([1,2,3,4]);
  });
});

describe('#calculateArrayMax', () => {
  it('returns array max', () => {
    expect(lib.calculateArrayMax([-17, 0, 143, 9])).to.equal(143);
  });
});

describe('#skipFirstThree', () => {
  it('returns array with all but first three', () => {
    expect(lib.skipFirstThree([0,1,2,3,4,5,6,7,8,9,10])).to.eql([3,4,5,6,7,8,9,10]);
  });
});

describe('#allOthersMapTimesTwo', () => {
  it('return array of everything after first two mult by two', () => {
    expect(lib.allOthersMapTimesTwo(1,2,3,4)).to.eql([6,8]);
    expect(lib.allOthersMapTimesTwo(1,2,3,4,5,6)).to.eql([6,8,10,12]);
  });
});
