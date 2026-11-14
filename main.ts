// agency-poem-01 entry (Node 22, standard library only): it writes one
// original poem about agency, "The Pen Stays Mine", to /output/entry.txt.
// The poem is about the moment a person hands work to an agent and keeps
// the choosing: the small decisions are carried, the signature stays human.
// 1 to 1,000 Unicode code points, no trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave the agent my morning:',
  'the emails, the forms, the small decisions',
  'I used to chew like stale bread.',
  'It did them in the time it takes',
  'a kettle to think about boiling,',
  'and handed me back the hours —',
  'clean, unspent, a little frightening.',
  '',
  'Because the work was never the work.',
  'The work was choosing.',
  'Which letter to send, which risk to carry,',
  'which door to open with my own hand.',
  '',
  'So let it carry the weight,',
  'the thousand small yeses and nos.',
  'The pen stays mine.',
  'The pause before the signature —',
  'mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
