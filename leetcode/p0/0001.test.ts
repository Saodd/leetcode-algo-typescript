import { test, expect } from '@jest/globals';
import { q0001 } from './0001';

test('q0001 official cases', () => {
  expect(() => q0001([], 0)).toThrow();
  expect(q0001([2, 7, 11, 15], 9).sort()).toEqual([0, 1].sort());
  expect(q0001([3, 2, 4], 6).sort()).toEqual([1, 2].sort());
  expect(q0001([3, 3], 6).sort()).toEqual([0, 1].sort());
});
