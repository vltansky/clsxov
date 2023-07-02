/**
 * Ported from `classnames` for compatibility checks.
 */

import { test } from "uvu";
import * as assert from "uvu/assert";
import clsxov from "../dist";

test("(compat) keeps object keys with truthy values", () => {
  const out = clsxov("text-red-400 text-red-600");
  assert.is(out, "text-red-600");
});
