export function generateAIExplanation(data: {
  risk_score: number;
  risk_level: string;
  findings: string[];
}) {
  return {
    explanation: `This wallet has a ${data.risk_level} risk rating with a score of ${data.risk_score}/100.`,
    reasoning: data.findings,
    confidence: 0.85
  };
}
