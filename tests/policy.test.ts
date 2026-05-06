function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 69,
    "capacity": 92,
    "latency": 24,
    "risk": 24,
    "weight": 6,
    "score": 74,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 91,
    "capacity": 79,
    "latency": 27,
    "risk": 19,
    "weight": 13,
    "score": 163,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 79,
    "capacity": 91,
    "latency": 25,
    "risk": 15,
    "weight": 5,
    "score": 129,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
