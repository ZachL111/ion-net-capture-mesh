function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 73, slack: 48, drag: 23, confidence: 82 };
equal(domainReviewScore(item), 207);
equal(domainReviewLane(item), "ship");
