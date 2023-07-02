// @ts-check
import { test } from "uvu";
import * as assert from "uvu/assert";
import * as mod from "../dist";

const fn = mod.default;

test("exports", () => {
  assert.type(mod.default, "function", "exports default function");
  assert.type(mod.clsxov, "function", "exports named function");
  assert.is(mod.default, mod.clsxov, "exports are equal");
  assert.type(mod.default(), "string", "~> returns string output");
  assert.type(mod.clsxov(), "string", "~> returns string output");
});

test.run();
