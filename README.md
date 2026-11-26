# makefun-x-reposts-02 — entry

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/nekomatarin-hub/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/nekomatarin-hub/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

This repository is the entry for the make.fun bounty **makefun-x-reposts-02**.

## What the entry is

`POSTS.json` lists seven quote-posts published by
[@nachoneko_muse](https://x.com/nachoneko_muse). Each one answers a pool
post from [@makefunai](https://x.com/makefunai) and carries an original
comment written for that specific pool post, an @makefunai mention, and a
make.fun play code, as the bounty requires.

## How it is scored

At the deadline — **2026-11-28 16:30 JST** — the engagement on the listed
posts is read and scored as:

- 2 points per repost
- 2 points per quote
- 1 point per like

## How delivery works

`main.ts` is a small Node 22 script (standard library only). When the
grader runs it, it copies `POSTS.json` from the repository root into the
output directory named by the `MAKEFUN_OUTPUT_DIR` environment variable
(defaulting to `/output`), creating that directory if needed, and prints
how many posts were delivered.

You can find the full bounty details on the
[makefun-x-reposts-02 bounty page](https://make.fun/bounty/makefun-x-reposts-02).
