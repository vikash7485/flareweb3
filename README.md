# 🔐 Random On-Chain Password Generator (Flare Network)

## **Contract Address**
**0x89cA9E23256a3667a1d859Fef2784d8a345aFb22**  
Explorer: https://coston2-explorer.flare.network/address/0x89cA9E23256a3667a1d859Fef2784d8a345aFb22


<img width="1892" height="877" alt="image" src="https://github.com/user-attachments/assets/75eb4ee7-345e-43b4-83eb-b74e69e411c2" />


---

## 📘 **Project Description**

This project is a decentralized on-chain **random password generator** built on the **Flare Coston2 Testnet**.  
It interacts with a deployed smart contract that generates and stores a random hex-encoded password on-chain.  
Users can connect their wallet, view the currently stored password, and regenerate a fresh one with a single transaction.

The generated passwords are fully **trustless**, **tamper-proof**, and **verifiable** directly on the blockchain.

---

## ✨ **Features**

### 🔹 **View Current Password**
Fetches the current password stored in the contract via `getPassword()`.

### 🔹 **Regenerate Password**
Triggers the contract’s `regenerate()` function to create a brand new on-chain password.

### 🔹 **Password Length Display**
Automatically reads the on-chain value from `passwordLength()`.

### 🔹 **Wallet-Gated UI**
Ensures only connected users can interact with the contract.

### 🔹 **Transaction Status Display**
Shows:
- Transaction hash  
- Pending status  
- Confirmation status  
- Error handling  

### 🔹 **Clean & Modern React UI**
Built with:
- Next.js / React  
- TailwindCSS  
- viem + wagmi  

---

## 🧩 **How It Solves Problems**

Traditional password generation relies on:
- Centralized services  
- Browsers  
- Client-side randomness that can be tampered with  

This project replaces that with **fully on-chain randomness**, providing:

### ✔ **Security**
Passwords cannot be altered or predicted by external systems.

### ✔ **Transparency**
Every generated password emits an event and is verifiable on the explorer.

### ✔ **Reliability**
The password is always accessible on-chain—no backend required.

### ✔ **Decentralization**
Uses smart contract logic instead of centralized servers.

---

## 🎯 **Use Cases**

- Generating random keys for blockchain demos  
- Educational tools showing contract interaction  
- Proof-of-concept for decentralized randomness  
- Wallet-generated secure secrets  
- Building more advanced authentication or secret-sharing systems  

---

This repository includes complete frontend integration with `wagmi` + `viem`, ensuring a smooth developer and user experience.


