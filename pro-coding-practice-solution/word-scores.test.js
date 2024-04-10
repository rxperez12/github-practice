import { it, expect } from "vitest";
import {
  scoreWords,
  scoreWordsDecomposed,
  scoreWordsWithMap
} from "./word-scores.js";


it("scoreWords: should find the scores for each word", function() {
  expect(scoreWords(["a", "b", "c"])).toEqual([1, 3, 3]);
  expect(scoreWords(["apple", "banana", "cherry"])).toEqual([9, 8, 14]);
  expect(scoreWords(["ha", "sh", "yo", "ax", "hm"]))
    .toEqual([5, 5, 5, 9, 7]);
});

it("scoreWords: should handle non-letter chars by returning null for word", function() {
  expect(scoreWords(["hi!!!", "hello???"])).toEqual([null, null]);
  expect(scoreWords(["When", "I'm", "64"])).toEqual([10, null, null]);
  expect(scoreWords(["what", "", "a", "", "strange", "", "arrray", "!"]))
    .toEqual([10, 0, 1, 0, 8, 0, 9, null]);
});

it("scoreWordsDecomposed: should find the scores for each word", function() {
  expect(scoreWordsDecomposed(["a", "b", "c"])).toEqual([1, 3, 3]);
  expect(scoreWordsDecomposed(["apple", "banana", "cherry"])).toEqual([9, 8, 14]);
  expect(scoreWordsDecomposed(["ha", "sh", "yo", "ax", "hm"]))
    .toEqual([5, 5, 5, 9, 7]);
});

it("scoreWordsDecomposed: should handle non-letter chars by returning null for word", function() {
  expect(scoreWordsDecomposed(["hi!!!", "hello???"])).toEqual([null, null]);
  expect(scoreWordsDecomposed(["When", "I'm", "64"])).toEqual([10, null, null]);
  expect(scoreWordsDecomposed(["what", "", "a", "", "strange", "", "arrray", "!"]))
    .toEqual([10, 0, 1, 0, 8, 0, 9, null]);
});

it("scoreWordsWithMap: should find the scores for each word", function() {
  expect(scoreWordsWithMap(["a", "b", "c"])).toEqual([1, 3, 3]);
  expect(scoreWordsWithMap(["apple", "banana", "cherry"])).toEqual([9, 8, 14]);
  expect(scoreWordsWithMap(["ha", "sh", "yo", "ax", "hm"]))
    .toEqual([5, 5, 5, 9, 7]);
});

it("scoreWordsWithMap: should handle non-letter chars by returning null for word", function() {
  expect(scoreWordsWithMap(["hi!!!", "hello???"])).toEqual([null, null]);
  expect(scoreWordsWithMap(["When", "I'm", "64"])).toEqual([10, null, null]);
  expect(scoreWordsWithMap(["what", "", "a", "", "strange", "", "arrray", "!"]))
    .toEqual([10, 0, 1, 0, 8, 0, 9, null]);
});