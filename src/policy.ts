export interface Signal {
  demand: number;
  capacity: number;
  latency: number;
  risk: number;
  weight: number;
}

export const threshold = 170;
const riskPenalty = 5;
const latencyPenalty = 3;
const weightBonus = 6;

export function score(signal: Signal): number {
  return signal.demand * 2 + signal.capacity + signal.weight * weightBonus
    - signal.latency * latencyPenalty - signal.risk * riskPenalty;
}

export function classify(signal: Signal): "accept" | "review" {
  return score(signal) >= threshold ? "accept" : "review";
}
