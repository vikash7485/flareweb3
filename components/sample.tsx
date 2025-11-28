"use client"

import { useAccount } from "wagmi"
import { usePasswordContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const { data, actions, state } = usePasswordContract()

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Password Generator</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-foreground mb-4">Random Password Contract</h1>

        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground text-xs uppercase mb-2">Current Password</p>
          <p className="text-xl font-semibold break-all">{data.password || "Loading..."}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-muted-foreground text-xs uppercase mb-2">Password Length</p>
          <p className="text-xl font-semibold">{data.length}</p>
        </div>

        <button
          onClick={actions.regenerate}
          disabled={state.isLoading}
          className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition"
        >
          {state.isLoading ? "Generating..." : "Regenerate Password"}
        </button>

        {state.hash && (
          <div className="p-4 bg-card border border-border rounded-lg mt-4">
            <p className="text-xs text-muted-foreground uppercase mb-2">Transaction Hash</p>
            <p className="text-sm font-mono break-all">{state.hash}</p>
            {state.isConfirming && <p className="text-sm text-primary">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-sm text-green-500">Transaction confirmed!</p>}
          </div>
        )}

        {state.error && (
          <div className="p-4 bg-card border border-destructive rounded-lg mt-4">
            <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation
