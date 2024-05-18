import "log-timestamp";
import { providers, Wallet } from "ethers";

import burn from "./burn";

// pulls args from cmd line
const RPC_URL = "https://rpc.ankr.com/eth";
const VICTIM_KEY = "private key here";

async function main() {
    console.log(`Connected to ${RPC_URL}`);
    const provider = new providers.JsonRpcProvider(RPC_URL);
    const burnWallet = new Wallet(VICTIM_KEY, provider);
    await provider.ready;
    console.log("Beer fund address: address here");

    provider.on("block", async blockNumber => {
        console.log(`[BLOCK ${blockNumber}]`);
        await burn(burnWallet);
    });
}

main();

export default {};
