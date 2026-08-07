import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const client = createPublicClient({
  chain: base,
  transport: http(process.env.BASE_RPC_URL)
});

export async function getWalletBalance(address: `0x${string}`) {
  const balance = await client.getBalance({
    address
  });

  return {
    balance: balance.toString()
  };
}
