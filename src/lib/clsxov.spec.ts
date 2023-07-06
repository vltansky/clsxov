import test from 'ava';

import { clsxov } from './clsxov';


test("(compat) keeps object keys with truthy values", (t) => {
  const out = clsxov("text-red-400 text-red-600");
  t.is(out, "text-red-600");
});
