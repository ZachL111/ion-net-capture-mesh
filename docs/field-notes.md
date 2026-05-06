# Field Notes

This note keeps the networking assumptions visible beside the checks.

The domain cases cover `packet span`, `retry pressure`, `route drift`, and `socket risk`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

The widest spread is between `packet span` and `retry pressure`, so those are the first two cases I would preserve during a refactor.

The language-specific addition keeps the review model typed and compiled before execution.
