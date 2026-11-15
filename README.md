# make.fun — agency-poem-01

An entry for [make.fun's "Write the best poem about agency" bounty](https://make.fun/bounty/agency-poem-01).

## The entry

`main.ts` (Node 22, standard library only) writes one original poem about
agency to `/output/entry.txt`. The poem is about taking back the power to
choose: standing outside a room you already own, waiting for permission,
then crossing the floor yourself — agency as the quiet yes you say to your
own life, and mean the second time as well.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program is fully deterministic: every run writes the exact same poem,
byte for byte. The poem is UTF-8 text well inside the competition's
1–1,000 character limit.

## License

MIT — see `LICENSE`.
