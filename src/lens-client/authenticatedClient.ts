import { LensClient, development } from "@lens-protocol/client";
import { WalletClient } from "viem";

export async function getAuthenticatedClient(
  walletClient: WalletClient,
  profileId: string,
) {
  const lensClient = new LensClient({
    environment: development,
  });

  const address = walletClient?.account?.address;
  if (!address) throw new Error("No address found");

  const { id, text } = await lensClient.authentication.generateChallenge({
    signedBy: address,
    for: profileId,
  });
  const signature = await walletClient.signMessage({
    account: address,
    message: text,
  });

  lensClient.authentication.authenticate({ id, signature });

  return lensClient;
}
