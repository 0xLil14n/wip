"use client";
import { api } from "@/trpc/react";
import { useEffect, useState } from "react";

import { useAccount } from "wagmi";

const CreateHandle = () => {
  const [success, setSuccess] = useState(false);
  const [handle, setHandle] = useState("");
  const [address, setAddress] = useState<string | undefined>(undefined);
  const { address: addy } = useAccount();
  useEffect(() => {
    setAddress(addy);
  }, [addy]);

  const createPost = api.createAccount.create.useMutation({
    onSuccess: () => {
      setSuccess(true);
    },
  });

  if (!address) {
    return <w3m-button />;
  }

  return (
    <>
      {success && <div>success</div>}
      <h1>create handle</h1>

      <input
        onChange={(e) => setHandle(e.target.value)}
        value={handle}
        type="text"
        name="handle"
        style={{ border: "1px solid black" }}
      />
      <button
        onClick={() => {
          createPost.mutate({ handle, address });
        }}
      >
        submit
      </button>
    </>
  );
};

export default CreateHandle;
