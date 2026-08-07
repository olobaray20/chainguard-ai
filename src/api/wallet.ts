import { Router } from "express";
import { getWalletBalance } from "../blockchain/base";
import { calculateRiskScore } from "../risk-engine/risk";

const router = Router();

router.post("/analyze_wallet_risk", async (req, res) => {
  try {
    const { wallet_address } = req.body;

    if (!wallet_address) {
      return res.status(400).json({
        error: "Wallet address is required"
      });
    }

    const walletData = await getWalletBalance(wallet_address);

    const riskAnalysis = calculateRiskScore(walletData);

    res.json({
      wallet_address,
      blockchain_data: walletData,
      ...riskAnalysis,
      summary: "Wallet risk analysis completed"
    });

  } catch (error) {
    res.status(500).json({
      error: "Failed to analyze wallet"
    });
  }
});

export default router;
