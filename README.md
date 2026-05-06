# ion-net-capture-mesh

`ion-net-capture-mesh` keeps a focused TypeScript implementation around networking. The project goal is to design a TypeScript verification harness for capture systems, covering resource planning, capacity fixtures, and failure-oriented tests.

## Use Case

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Ion Net Capture Mesh Review Notes

The first comparison I would make is `packet span` against `retry pressure` because it shows where the rule is most opinionated.

## Highlights

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/ion-net-capture-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `retry pressure`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The TypeScript addition stays small enough to inspect in one sitting.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Future Work

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
