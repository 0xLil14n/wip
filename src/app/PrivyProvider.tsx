"use client";
import { PrivyProvider } from "@privy-io/react-auth";

const Privy = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId="clsxr37ep00cixeva2gjllgli"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          // logo: "https://your-logo-url",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};
export default Privy;
