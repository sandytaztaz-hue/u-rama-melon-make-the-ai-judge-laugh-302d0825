import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a lunch abandoned in the office fridge so long
// that HR offers to make it a tax dependent. Concrete scene (the shared
// fridge), one real month (March), one named office actor (HR), and the
// punchline is the bureaucracy adopting the lunch — the joke turns on the
// last clause. Dodges the field's saturated angles: the printer (25 titles),
// meetings/standup (21+), HR "we're a family" / burnout, "per my last
// email", the office plant, and the calendar invite. Fridge: zero hits in
// all 342 field titles. Tight wording: every word earns its place, no
// setup that needs explaining, reads cleanly aloud in one breath.
const LINE =
  "My lunch has sat in the office fridge since March, and HR just asked if I want to claim it as a dependent.";

// Gate guard: the competition requires 1 to 200 characters of UTF-8 text,
// not only whitespace. Fail loudly rather than submit an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Deterministic by construction: the same single line is written on every run.
// No randomness, no clock, no network — the output is byte-identical each time.
