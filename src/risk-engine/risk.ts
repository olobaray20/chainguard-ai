export function calculateRiskScore(data: {
  balance: string;
}) {
  let score = 0;
  const findings: string[] = [];

  const balance = BigInt(data.balance);

  if (balance === BigInt(0)) {
    score += 10;
    findings.push("Wallet has no native token balance");
  }

  if (balance > BigInt("10000000000000000000")) {
    score -= 10;
    findings.push("Wallet has significant native token balance");
  }

  if (score < 0) score = 0;
  if (score > 100) score = 100;

  let level = "Low";

  if (score >= 70) {
    level = "High";
  } else if (score >= 30) {
    level = "Medium";
  }

  return {
    risk_score: score,
    risk_level: level,
    findings
  };
}
