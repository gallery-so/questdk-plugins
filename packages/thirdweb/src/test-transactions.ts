import { type MintActionParams } from '@rabbitholegg/questdk'
import {
  createTestCase,
  type TestParams,
} from '@rabbitholegg/questdk-plugin-utils'

export const MINT_721: TestParams<MintActionParams> = {
  transaction: {
    chainId: 8453,
    from: '0xd3630ebe1225fd074106fb09260ba4d4cbd30f74',
    hash: '0xfa2097f242bdf8bf231f8e23c83a5051ca15c6a0ae6684824d9c2ee8bfef890c',
    input:
      '0x84bb1e42000000000000000000000000d3630ebe1225fd074106fb09260ba4d4cbd30f740000000000000000000000000000000000000000000000000000000000000001000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000002c2ad68fd900000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000080ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000002c2ad68fd9000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    to: '0xc7ded9c1bd13a19a877d196eeea9222ff6d40736',
    value: '777000000000000',
  },
  params: {
    chainId: 8453,
    contractAddress: '0xc7ded9c1bd13a19a877d196eeea9222ff6d40736',
    recipient: '0xd3630ebe1225fd074106fb09260ba4d4cbd30f74',
  },
}

export const MINT_1155: TestParams<MintActionParams> = {
  transaction: {
    chainId: 8453,
    from: '0x865C301c46d64DE5c9B124Ec1a97eF1EFC1bcbd1',
    hash: '0x2f0bba62facc408f510a1ca52e9e41f09e067646854ceda1c4e379caca6c946d',
    input:
      '0x57bc3d78000000000000000000000000865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000002c2ad68fd900000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000000080ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000002c2ad68fd9000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    to: '0x5625e0ae98C035407258D6752703fed917417Add',
    value: '777000000000000',
  },
  params: {
    chainId: 8453,
    contractAddress: '0x5625e0ae98C035407258D6752703fed917417Add',
    recipient: '0x865C301c46d64DE5c9B124Ec1a97eF1EFC1bcbd1',
  },
}

export const passingTestCases = [
  createTestCase(MINT_721, 'when mint ERC721'),
  createTestCase(MINT_1155, 'when mint ERC1155'),
]

export const failingTestCases = [
  createTestCase(MINT_721, 'when chainId is not correct', { chainId: 10 }),
  createTestCase(MINT_1155, 'when amount is not correct', { amount: 10 }),
]
