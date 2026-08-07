import { Router } from "express";
import { getWalletBalance } from "../blockchain/base";

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

    res.json({
      wallet_address,
      risk_score: 50,
      risk_level: "Medium",
      summary: "Wallet analysis completed",
      blockchain_data: walletData,
      findings: [
        "Wallet balance retrieved successfully"
      ]
    });

  } catch (error) {
    res.status(500).json({
      error: "Failed to analyze wallet"
    });
  }
});

export default router;
