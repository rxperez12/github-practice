import { it, expect } from "vitest";
import {
  validateEdge,
  calcArea,
  calcHypotenuse,
  getHypotenuseAndAreaMsg,
  getResultsFromSideLengths
} from "./triangles.js";


it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  expect(validateEdge(20)).toBe(true);
  expect(validateEdge(0)).toBe(false);
  expect(validateEdge(55)).toBe(false);
  expect(validateEdge(-2)).toBe(false);
  expect(validateEdge(2.5)).toBe(false);
});

it('should calculate areas', function () {
  expect(calcArea(3, 4)).toEqual(6);
});

it('should calculate hypotenuses', function () {
  expect(calcHypotenuse(3, 4)).toEqual(5);
  expect(calcHypotenuse(5, 5)).toEqual(7);
});

it('should craft correct message', function () {
  expect(getHypotenuseAndAreaMsg(5, 6)).toEqual(
      "Hypotenuse is 5 and area is 6.");

  expect(getHypotenuseAndAreaMsg(50, 60)).toEqual(
      "Hypotenuse is 50 and area is 60." +
      " That's a really big triangle!");
});

it('should generate correct results', function () {
  expect(getResultsFromSideLengths(3, 4)).toEqual(
      {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});

  expect(getResultsFromSideLengths(0, 4)).toEqual(
      {aMsg: "Invalid!", bMsg: "", msg: ""});
});
