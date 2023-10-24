import type { Address, Hash } from 'viem'
import { parseEther } from 'viem'

interface Transaction {
  chainId: number
  from: Address
  hash?: Hash
  input: string
  to: Address
  value: string
}

interface TestTransaction {
  transaction: Transaction
  destinationChainId: number
  amount: bigint | number
  tokenAddress?: Address
  recipient?: Address
  description: string
}

export const PASSING_TEST_TRANSACTIONS: TestTransaction[] = [
  {
    transaction: {
      chainId: 1,
      from: '0x27229c5c34c018e6a43d2a00f8f81e06f54a9a5d',
      hash: '0xc97deae76c21cb57498d2873babd212fa589eae9e4d2e979f4a10a3428f376ee',
      input:
        '0xa11b11980000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000180000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000003782dace9d9000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a800000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000004d0e30db000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000a04ce654c1700000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000b5e620f480000000000000000000000000000000000000000000000000003782dace9d900000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000027229c5c34c018e6a43d2a00f8f81e06f54a9a5d000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a80000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e00000000000000000000000027229c5c34c018e6a43d2a00f8f81e06f54a9a5d000000000000000000000000000000000000000000000000000000000000dbe00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000000000000000000260000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a80000000000000000000000000000000000000000000000000000000000000580000000000000000000000000000000000000000000000000000000000000006400000000000000000000000027229c5c34c018e6a43d2a00f8f81e06f54a9a5d73796d62696f7369732d6170700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000001ce4e75e2bd6bbbacde1e10d6813228138337e86000000000000000000000000e3db9ad5a3c6387bece39fafc26dbb2b594fb7ff00000000000000000000000000000000000000000000000000000000000002e41e859a050000000000000000000000000000000000000000000000003782dace9d90000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c48f6bdeaa00000000000000000000000000000000000000000000000000000000000000090000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000378224e87c9b8000000000000000000000000000000000000000000000000000377a9ae76526d3c2000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e000000000000000000000000000000000000000000000000000000000653b51d1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000bcc2637dfa64999f75abb53a7265b5b4932e40eb00000000000000000000000000000000000000000000000000000000000000020000000000000000000000001ce4e75e2bd6bbbacde1e10d6813228138337e86000000000000000000000000e3db9ad5a3c6387bece39fafc26dbb2b594fb7ff00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000424e691a2aa0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000221b262dd800000000000000000000000000000000000000000000000000037915d9d196a94eb000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000006e2b76966cbd9cf4cc2fa0d76d24d5241e0abc2f000000000000000000000000e3db9ad5a3c6387bece39fafc26dbb2b594fb7ff00000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000c400000000000000000000000027229c5c34c018e6a43d2a00f8f81e06f54a9a5d00000000000000000000000039de19c9ff25693a2311aad1dc5c790194084a39000000000000000000000000b0d30ad9c1a7b303977db7ea073a4329d930d94c00000000000000000000000027229c5c34c018e6a43d2a00f8f81e06f54a9a5d000000000000000000000000000000000000000000000000000000000000014473796d62696f7369732d61707000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022812aa3caf000000000000000000000000a9305c3c14757bae2e73ef7f66fe241f5f6bf3470000000000000000000000005aea5775959fbc2557cc8789bc1bf90a239d9a91000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000a9305c3c14757bae2e73ef7f66fe241f5f6bf34700000000000000000000000027229c5c34c018e6a43d2a00f8f81e06f54a9a5d000000000000000000000000000000000000000000000000378f3beab68d14eb0000000000000000000000000000000000000000000000003773ece9b06260530000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a00000000000000000000000000000000000000000000006c00005600001a0020d6bdbf785aea5775959fbc2557cc8789bc1bf90a239d9a9141215aea5775959fbc2557cc8789bc1bf90a239d9a9100042e1a7d4d0000000000000000000000000000000000000000000000000000000000000000c0616e2b76966cbd9cf4cc2fa0d76d24d5241e0abc2f000000000000000000000000000000000000000000008b1ccac80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      to: '0x1dcfbc3fa01b2a86bc3a3f43479cce9e8d438adc',
      value: '4000000000000000000',
    },
    destinationChainId: 324,
    amount: parseEther('3.5'),
    tokenAddress: '0x0000000000000000000000000000000000000000',
    description: 'when bridging >= 2 ETH from Mainnet to ZK Sync',
  },
  {
    transaction: {
      chainId: 10,
      from: '0x2108791df451e953a0e356be2f5dca3e7b8e2a76',
      hash: '0xce06592607e69b1b20becfd1dba2b0ae1907b066f5fe15d8f960cf5c631d1cd3',
      input:
        '0xa11b119800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000000000000005667db60000000000000000000000000000000000000000000000000000000000000000000000000000000000000000292fc50e4eb66c3f6514b9e402dbc25961824d6200000000000000000000000000000000000000000000000000000000000001c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c316070000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c3160700000000000000000000000000000000000000000000000000000000000008a4ce654c17000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000493e00000000000000000000000000000000000000000000000000000000005667db60000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c31607000000000000000000000000e833d3ce2b1871fef88742e007254ff73b6d2866000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a80000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e0000000000000000000000002108791df451e953a0e356be2f5dca3e7b8e2a76000000000000000000000000000000000000000000000000000000000000dbe00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000000000000000000260000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a8000000000000000000000000000000000000000000000000000000000000058000000000000000000000000000000000000000000000000000000000000000640000000000000000000000002108791df451e953a0e356be2f5dca3e7b8e2a7673646b2d617070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f072f11bf151038bd8732cd1088b7c98762b839c000000000000000000000000eeae2132f2e21f68d862c535d7d9857803fbcf3f00000000000000000000000000000000000000000000000000000000000002e41e859a050000000000000000000000000000000000000000000000000000000005667db600000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c48f6bdeaa000000000000000000000000000000000000000000000000000000000000000d0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000561e9d600000000000000000000000000000000000000000000000000000000055e750e000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000000000000000000000000000000000018b5788695d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006148fd6c649866596c3d8a971fc313e5ece848820000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f072f11bf151038bd8732cd1088b7c98762b839c000000000000000000000000eeae2132f2e21f68d862c535d7d9857803fbcf3f000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c4e691a2aa000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000493e0000000000000000000000000000000000000000000000000000000000561e6ea000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000001111111254eeb25477b68fb85ed929f73a960582000000000000000000000000eeae2132f2e21f68d862c535d7d9857803fbcf3f00000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000044000000000000000000000000e833d3ce2b1871fef88742e007254ff73b6d286600000000000000000000000001a3c8e513b758ebb011f7afaf6c37616c9c24d90000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e0000000000000000000000002108791df451e953a0e356be2f5dca3e7b8e2a76000000000000000000000000000000000000000000000000000000000000a4b173646b2d6170700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c8bc80f1a8000000000000000000000000e833d3ce2b1871fef88742e007254ff73b6d286600000000000000000000000000000000000000000000000000000000055d530a000000000000000000000000000000000000000000000000000000000559d425000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000008e295789c9465487074a65b1ae9ce0351172393fea698b470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      to: '0x1a039ce63ae35a67bf0e9f6dbfae969639d59ec8',
      value: '0',
    },
    destinationChainId: 42161,
    amount: 90000000n,
    tokenAddress: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    recipient: '0xE833D3cE2B1871fef88742E007254fF73b6d2866',
    description: 'when bridging >= 90 USDC.e from Optimism to Arbitrum',
  },
  {
    transaction: {
      chainId: 10,
      from: '0xa99f898530df1514a566f1a6562d62809e99557d',
      hash: '0xa0d4809a4835d84d15467a9fddfde73d1e57fa5121e56fff2a0526c448011c21',
      input:
        '0xa11b119800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001800000000000000000000000004200000000000000000000000000000000000006000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000000011c37937e080000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000292fc50e4eb66c3f6514b9e402dbc25961824d6200000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000004d0e30db00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000a44ce654c1700000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000b5e620f480000000000000000000000000000000000000000000000000000011c37937e080000000000000000000000000004200000000000000000000000000000000000006000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a80000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000dbe00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000000000000000000260000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a800000000000000000000000000000000000000000000000000000000000005800000000000000000000000000000000000000000000000000000000000000064000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d73796d62696f7369732d617070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000983e6839e84004e78fbfe76431d879cf9cf2f084000000000000000000000000a6e6c78746f873db8545b7571dd1c5d87cc9576300000000000000000000000000000000000000000000000000000000000002e41e859a050000000000000000000000000000000000000000000000000011c37937e0800000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c48f6bdeaa0000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000b00000000000000000000000000000000000000000000000000110d9316ec00000000000000000000000000000000000000000000000000000010f903280265cf000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e000000000000000000000000000000000000000000000000000000000653d989f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000bcc2637dfa64999f75abb53a7265b5b4932e40eb0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000983e6839e84004e78fbfe76431d879cf9cf2f084000000000000000000000000a6e6c78746f873db8545b7571dd1c5d87cc9576300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000464e691a2aa000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000001b48eb57e00000000000000000000000000000000000000000000000000000110ed8b84a7330000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e000000000000000000000000025c030116feb2e7bba054b9de0915e5f51b03e31000000000000000000000000a6e6c78746f873db8545b7571dd1c5d87cc9576300000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000128000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000292fc50e4eb66c3f6514b9e402dbc25961824d620000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000138873796d62696f7369732d617070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000264ac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000012475ceafe6000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010f38fccf2933000000000000000000000000000000000000000000000000114865d812ebb843c00000000000000000000000000000000000000000000000000000000653d98aa000000000000000000000000000000000000000000000000000000000000002bdeaddeaddeaddeaddeaddeaddeaddeaddead1111000bb878c1b0c915c4faa5fffa6cabf0219da63d7f4cb800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004449404b7c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      to: '0x1a039ce63ae35a67bf0e9f6dbfae969639d59ec8',
      value: '5000000000000000',
    },
    destinationChainId: 5000,
    amount: parseEther('0.005'),
    tokenAddress: '0x0000000000000000000000000000000000000000',
    recipient: '0xA99F898530dF1514A566f1a6562D62809e99557D',
    description: 'when bridging ETH from Optimism to Mantle',
  },
  {
    transaction: {
      chainId: 8453,
      from: '0xa99f898530df1514a566f1a6562d62809e99557d',
      input:
        '0xa11b11980000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000001111111254eeb25477b68fb85ed929f73a960582000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad4000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000ee981b2459331ad268cc63ce6167b446af4161f80000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000000024812aa3caf000000000000000000000000e37e799d5077682fa0a244d46e5649f71457bd09000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca000000000000000000000000e37e799d5077682fa0a244d46e5649f71457bd090000000000000000000000006f0f6393e45fe0e7215906b6f9cfeff53ea139cf000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000000000000aca33af000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a100000000000000000000000000000000000000000000008300002000000600206b4be0b940414200000000000000000000000000000000000006d0e30db002a00000000000000000000000000000000000000000000000000000000000000001ee63c1e5814c36388be6f416a29c8d8eee81c771ce6be14b1842000000000000000000000000000000000000061111111254eeb25477b68fb85ed929f73a960582000000000000000000000000000000000000000000000000000000000000008b1ccac8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000000000000000000000000000000000000000001524ce654c17000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000493e0000000000000000000000000000000000000000000000000000000000adaa6ca000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a80000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000dbe00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000cb28fbe3e9c0fea62e0e63ff3f232cecfe555ad40000000000000000000000000000000000000000000000000000000000000260000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a800000000000000000000000000000000000000000000000000000000000005800000000000000000000000000000000000000000000000000000000000000064000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d73796d62696f7369732d617070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000dd1a897f92c14cda3ab7023b094615a7068d01fa0000000000000000000000007d6ec42b5d9566931560411a8652cea00b90d98200000000000000000000000000000000000000000000000000000000000002e41e859a05000000000000000000000000000000000000000000000000000000000adaa6ca00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c48f6bdeaa00000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ad612ea000000000000000000000000000000000000000000000000000000000ab708e1000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e000000000000000000000000000000000000000000000000000000000654079820000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006148fd6c649866596c3d8a971fc313e5ece848820000000000000000000000000000000000000000000000000000000000000002000000000000000000000000dd1a897f92c14cda3ab7023b094615a7068d01fa0000000000000000000000007d6ec42b5d9566931560411a8652cea00b90d98200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f44e691a2aa00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000003981ae0000000000000000000000000000000000000000000000000000000000ad5352b000000000000000000000000b79a4f5828eb55c10d7abf4bfe9a9f5d11aa84e00000000000000000000000006352a56caadc4f1e25cd6c75970fa768a3304e640000000000000000000000007d6ec42b5d9566931560411a8652cea00b90d98200000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000104000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000b8f275fbf7a959f4bce59999a2ef122a099e81a80000000000000000000000005523985926aa12ba58dc5ad00ddca99678d7227e000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d000000000000000000000000000000000000000000000000000000000000000173796d62696f7369732d617070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d4490411a32000000000000000000000000c27d980b71d5978f8b6de9e1ba01ed001d8760d3000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000c27d980b71d5978f8b6de9e1ba01ed001d8760d3000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d00000000000000000000000000000000000000000000000000000000073d1a4b00000000000000000000000000000000000000000000000000f2047f855daef000000000000000000000000000000000000000000000000000f42a8e4a37abbd00000000000000000000000000000000000000000000000000000000000000020000000000000000000000003254ae00947e44b7fd03f50b93b9acfed59f96200000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000038000000000000000000000000000000000000000000000000000000000000007e00000000000000000000000000000000000000000000000000000000000000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000002449f865422000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000104e5b07cdb0000000000000000000000006c83b0feef04139eb5520b1ce0e78069c6e7e2c500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000c27d980b71d5978f8b6de9e1ba01ed001d8760d300000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002ea0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000bb8ae7ab96520de3a18e5e111b5eaab095312d7fe840000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000003a451a74316000000000000000000000000ae7ab96520de3a18e5e111b5eaab095312d7fe8400000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000034000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064eb5625d9000000000000000000000000ae7ab96520de3a18e5e111b5eaab095312d7fe84000000000000000000000000dc24316b9ae028f1497c275eb9192a3ea0f67022000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000dc24316b9ae028f1497c275eb9192a3ea0f6702200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000843df0212400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000044000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000648a6a1e85000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000353c1f0bc78fbbc245b3c93ef77b1dcc5b77d2a000050000000000000000000000000000000000000000000000f449d321a885ea00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001a49f865422000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064d1660f99000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000a99f898530df1514a566f1a6562d62809e99557d00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      to: '0x6f0f6393e45fe0e7215906b6f9cfeff53ea139cf',
      value: '100000000000000000',
    },
    destinationChainId: 1,
    amount: parseEther('0.1'),
    tokenAddress: '0x0000000000000000000000000000000000000000',
    recipient: '0xa99f898530df1514a566f1a6562d62809e99557d',
    description: 'when bridging >= 0.1 ETH from Base to Mainnet',
  },
]
