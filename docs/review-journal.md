# Review Journal

I treated `ion-net-capture-mesh` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 207, lane `ship`
- `stress`: `retry pressure`, score 140, lane `ship`
- `edge`: `route drift`, score 178, lane `ship`
- `recovery`: `socket risk`, score 198, lane `ship`
- `stale`: `packet span`, score 174, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
