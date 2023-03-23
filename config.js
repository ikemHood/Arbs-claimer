const RPC_ARBITRUM_HTTP = "https://arb-mainnet.g.alchemy.com/v2/A04H1Fkkg23itl8oWdVYTas9XHJ2-9MQ"; // <- Put your Arbitrum http from alchemy
const RPC_ETHEREUM_WSS = "wss://eth-mainnet.g.alchemy.com/v2/uJv3oHD9VmO9XzBUvjDGmBBYjUu0vrW7" // "wss://eth-mainnet.g.alchemy.com/v2/sMsdjLabS-N1kSGcpMn23Q21UOcZQP"; // <- Put your Ethereum wss from alchemy

// Add you accounts
export const ACCOUNTS = [
  {
    privateKey: "",
    addressToSendTokens: ""
  },
  {
    privateKey: "",
    addressToSendTokens: ""
  },
  // ... add more here
];

// Add dexes to approve if needed
export const DEXES = {
  UNISWAP: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
  CAMELOT: "0xc873fEcbd354f5A56E00E710B90EF4201db2448d"
};

export const CONFIG = {
  rpc_arb_http: RPC_ARBITRUM_HTTP,
  rpc_eth_wss: RPC_ETHEREUM_WSS,
  arbTokenAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
  distributorAddress: "0x67a24CE4321aB3aF51c2D0a4801c3E111D88C9d9"
};