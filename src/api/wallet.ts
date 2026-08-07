import { Router } from "express";

const router = Router();

router.post("/analyze_wallet_risk", async (req, res) => {
  const { wallet_address } = req.body;

  if (!wallet_address) {
    return res.status(400).json({
      error: "Wallet address is required"
    });
  }

  res.json({
    wallet_address,
    risk_score: 50,
    risk_level: "Medium",
    summary: "Wallet analysis endpoint is working",
    findings: [
      "Analysis engine connected"
    ]
  });
});

export default router;
