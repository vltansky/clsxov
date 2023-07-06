import {  expect, it } from "vitest";
import { clsxov } from './clsxov.js';


it("(compat) keeps object keys with truthy values", () => {
  expect(clsxov("text-red-400 text-red-600")).toEqual('text-red-600');
});
