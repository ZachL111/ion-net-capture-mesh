import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 73, slack: 48, drag: 23, confidence: 82 };
assert.equal(domainReviewScore(item), 207);
assert.equal(domainReviewLane(item), "ship");
