const { Keypair } = require('@solana/web3.js');
const fs = require('fs');

// 1. Create a brand new wallet for the agent
const agentWallet = Keypair.generate();

const secretKey = Array.from(agentWallet.secretKey);
const publicKey = agentWallet.publicKey.toBase58();

console.log("=== AGENT CREATED ===");
console.log("Public Address:", publicKey);
console.log("=====================");
console.log("SAVE THIS: Your Secret Key has been saved to 'agent-dna.json'");

// 2. Save the "DNA" (Secret Key) to a file
// This is what the agent will "pass down" during inheritance!
fs.writeFileSync('agent-dna.json', JSON.stringify(secretKey));