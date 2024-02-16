"use client";
import { LensConfig, production } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { LensProvider as Provider } from "@lens-protocol/react-web";

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};

const LensProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider config={lensConfig}>{children}</Provider>
);

export default LensProvider;
