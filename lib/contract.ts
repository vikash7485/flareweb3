export const contractAddress =
  "0x89cA9E23256a3667a1d859Fef2784d8a345aFb22";

export const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "passwordHex",
        type: "string",
      },
    ],
    name: "PasswordGenerated",
    type: "event",
  },
  {
    inputs: [],
    name: "getPassword",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "passwordLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "regenerate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
