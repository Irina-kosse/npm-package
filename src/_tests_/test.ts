import { quadraticEquation } from "../quadratic"

test('should have array of numbers', () => {
    expect(quadraticEquation(1, 6, 5)).toEqual(
      expect.arrayContaining([expect.any(Number)])
    );
});

test('should return array of roots if discriminant > 0', () => {
    expect(quadraticEquation(1, 6, 5)).toEqual(
      expect.arrayContaining([-1, -5])
    );
});

test('should return array of equal roots', () => {
    expect(quadraticEquation(1, -6, 9)).toEqual(
      expect.arrayContaining([3, 3])
    );
});

test('should return array of real and imaginary root', () => {
    expect(quadraticEquation(1, -6, 9)).toEqual(
      expect.arrayContaining([3, 3])
    );
});