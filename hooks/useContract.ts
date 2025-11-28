"use client"

import { useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export const usePasswordContract = () => {
  const { address } = useAccount()

  const {
    data: password,
    refetch: refetchPassword,
    isLoading: isPasswordLoading,
  } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getPassword",
  })

  const {
    data: length,
    refetch: refetchLength,
    isLoading: isLengthLoading,
  } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "passwordLength",
  })

  const {
    writeContractAsync,
    data: hash,
    error,
    isPending,
  } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) {
      refetchPassword()
      refetchLength()
    }
  }, [isConfirmed, refetchPassword, refetchLength])

  const regenerate = async () => {
    await writeContractAsync({
      address: contractAddress,
      abi: contractABI,
      functionName: "regenerate",
    })
  }

  return {
    data: {
      password: password as string | undefined,
      length: length ? Number(length) : 0,
    },
    actions: { regenerate },
    state: {
      isLoading:
        isPasswordLoading || isLengthLoading || isPending || isConfirming,
      isPending,
      isConfirming,
      isConfirmed,
      hash,
      error,
    },
  }
}
