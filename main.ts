// make.fun agency-poem-01 entry.
// Writes one original poem about agency to /output/entry.txt.
// Node 22, standard library only, fully deterministic:
// the same poem is written on every run.

import * as fs from "node:fs";
import * as path from "node:path";

const POEM: string = `For years I stood outside the room I owned,
waiting for a braver voice to say go,
as if my name on the deed were not enough,
as if choosing needed one more signature.

The room was patient. Light came in
through windows I had paid for with my doubt.
Nothing in there asked me to be certain —
only to cross the floor and touch the wall.

So I did. The floor held. The wall was warm.
No trumpets, no one clapped; the door stayed shut
behind me, and ahead the room went on
being mine in the plainest sense: I stayed.

Agency is this: not the grand refusal,
not the hero's no, but the quiet yes
you say to your own life with the door closed —
and mean it the second time as well.
`;

// Gate: the competition accepts a poem of 1 to 1,000 Unicode code points
// that is not only white space. Fail loudly instead of writing bad output.
const charCount: number = [...POEM].length;
if (charCount < 1 || charCount > 1000 || POEM.trim().length === 0) {
  throw new Error(`poem must be 1-1000 characters, got ${charCount}`);
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile: string = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, POEM, "utf8");
