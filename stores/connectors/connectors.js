import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  719: "https://puppynet.shibrpc.com",
  4002: "https://rpc.testnet.fantom.network"
};

let obj = {}
if(process.env.NEXT_PUBLIC_CHAINID == 719) {
  obj = { 719: RPC_URLS[719] }
} else {
  obj = { 4002: RPC_URLS[4002] }
}

export const network = new NetworkConnector({ urls: obj });

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)]
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    719: RPC_URLS[719],
    4002: RPC_URLS[4002]
  },
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[process.env.NEXT_PUBLIC_CHAINID],
  appName: "Solidly",
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
});
