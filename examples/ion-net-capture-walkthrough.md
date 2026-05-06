# Ion Net Capture Mesh Walkthrough

I use this file as a small checklist before changing the TypeScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 207 | ship |
| stress | retry pressure | 140 | ship |
| edge | route drift | 178 | ship |
| recovery | socket risk | 198 | ship |
| stale | packet span | 174 | ship |

Start with `baseline` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `packet span` against `retry pressure`, not the raw score alone.
