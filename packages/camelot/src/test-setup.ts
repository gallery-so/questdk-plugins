import {
  PARASWAP_BALANCER,
  PARASWAP_CURVE,
  PARASWAP_MEGASWAP,
  PARASWAP_MULTISWAP,
  PARASWAP_SIMPLESWAP,
  PARASWAP_UNISWAP,
  SWAP_WRONG_PARTNER,
  V2_SWAP_ETH,
  V2_SWAP_TOKENS,
  V2_TOKENS_TO_ETH,
  V3_EXACT_OUTPUT,
  V3_EXACT_OUTPUT_SINGLE,
  V3_SWAP_ETH,
  V3_TOKEN_TO_ETH,
  YAK_ETH_TO_TOKENS,
  YAK_TOKENS_TO_ETH,
  YAK_TOKENS_TO_TOKENS,
} from './test-transactions'
import { Tokens } from './utils'
import { GreaterThanOrEqual } from '@rabbitholegg/questdk'
import { createTestCase } from '@rabbitholegg/questdk-plugin-utils'
import { parseEther, parseUnits } from 'viem'

export const passingTestCases = [
  createTestCase(V2_SWAP_ETH, 'when swapping ETH for tokens'),
  createTestCase(V2_SWAP_TOKENS, 'when swapping tokens for tokens'),
  createTestCase(V2_TOKENS_TO_ETH, 'when swapping Tokens for ETH V2'),
  createTestCase(V3_SWAP_ETH, 'when swapping ETH for tokens V3'),
  createTestCase(V3_TOKEN_TO_ETH, 'when swapping Tokens for ETH V3'),
  createTestCase(
    V3_EXACT_OUTPUT_SINGLE,
    'when swapping Tokens for ETH V3 (exactOutputSingle)',
  ),
  createTestCase(V3_EXACT_OUTPUT, 'when swapping Tokens V3 (exactOutput)'),
  createTestCase(PARASWAP_SIMPLESWAP, 'for simple swap'),
  createTestCase(PARASWAP_MULTISWAP, 'for multi swap'),
  createTestCase(PARASWAP_MEGASWAP, 'for mega swap'),
  createTestCase(PARASWAP_UNISWAP, 'for directUniV3Swap'),
  createTestCase(PARASWAP_BALANCER, 'for directBalancerV2'),
  createTestCase(PARASWAP_CURVE, 'for directCurveV2Swap'),
  createTestCase(YAK_ETH_TO_TOKENS, 'for native aggregator (eth to tokens)'),
  createTestCase(YAK_TOKENS_TO_ETH, 'for native aggregator (tokens to eth)'),
  createTestCase(
    YAK_TOKENS_TO_TOKENS,
    'for native aggregator (tokens to tokens)',
  ),
  createTestCase(V2_SWAP_ETH, 'any/any V2', {
    tokenIn: undefined,
    tokenOut: undefined,
    amountIn: undefined,
    amountOut: undefined,
  }),
  createTestCase(V3_TOKEN_TO_ETH, 'any/any V2', {
    tokenIn: undefined,
    tokenOut: undefined,
    amountIn: undefined,
    amountOut: undefined,
  }),
  createTestCase(PARASWAP_SIMPLESWAP, 'any/any V2', {
    tokenIn: undefined,
    tokenOut: undefined,
    amountIn: undefined,
    amountOut: undefined,
  }),
  createTestCase(YAK_ETH_TO_TOKENS, 'any/any Yak router', {
    tokenIn: undefined,
    tokenOut: undefined,
    amountIn: undefined,
    amountOut: undefined,
  }),
]

export const failingTestCases = [
  createTestCase(V2_SWAP_TOKENS, 'when chainId is incorrect', { chainId: 10 }),
  createTestCase(V2_SWAP_TOKENS, 'when tokenIn is incorrect (V2)', {
    tokenIn: Tokens.WETH,
  }),
  createTestCase(V2_SWAP_TOKENS, 'when tokenOut is incorrect (V2)', {
    tokenOut: Tokens.WETH,
  }),
  createTestCase(V2_SWAP_ETH, 'when amountIn is insufficient (V2)', {
    amountIn: GreaterThanOrEqual(parseEther('0.1')),
  }),
  createTestCase(V2_SWAP_TOKENS, 'when amountOut is insufficient (V2)', {
    amountOut: GreaterThanOrEqual(parseUnits('20', 6)),
  }),
  createTestCase(V2_SWAP_TOKENS, 'when recipient in incorrect (V2)', {
    recipient: '0x12e80D4b52023eDd8cB2294C6948D4c5d5D5D266',
  }),
  createTestCase(PARASWAP_SIMPLESWAP, 'when tokenIn is incorrect (paraswap)', {
    tokenIn: Tokens.WETH,
  }),
  createTestCase(PARASWAP_MULTISWAP, 'when tokenOut is incorrect (paraswap)', {
    tokenOut: Tokens.WETH,
  }),
  createTestCase(
    PARASWAP_MEGASWAP,
    'when amountIn is insufficient (paraswap)',
    {
      amountIn: GreaterThanOrEqual(parseEther('1000')),
    },
  ),
  createTestCase(
    PARASWAP_MULTISWAP,
    'when amountOut is insufficient (paraswap)',
    {
      amountOut: GreaterThanOrEqual(parseEther('1000')),
    },
  ),
  createTestCase(V3_EXACT_OUTPUT, 'when tokenIn is incorrect (V3)', {
    tokenIn: Tokens.WETH,
  }),
  createTestCase(V3_SWAP_ETH, 'when tokenOut is incorrect (V3)', {
    tokenOut: Tokens.WETH,
  }),
  createTestCase(V3_TOKEN_TO_ETH, 'when amountIn is insufficient (V3)', {
    amountIn: GreaterThanOrEqual(parseEther('1000')),
  }),
  createTestCase(
    YAK_TOKENS_TO_TOKENS,
    'when tokenIn is incorrect (Yak router)',
    {
      tokenIn: Tokens.WETH,
    },
  ),
  createTestCase(
    YAK_TOKENS_TO_TOKENS,
    'when tokenOut is incorrect (Yak router)',
    {
      tokenOut: Tokens.WETH,
    },
  ),
  createTestCase(
    YAK_ETH_TO_TOKENS,
    'when amountIn is insufficient (Yak router)',
    {
      amountIn: GreaterThanOrEqual(parseEther('1000')),
    },
  ),
  createTestCase(
    YAK_ETH_TO_TOKENS,
    'when amountOut is insufficient (Yak router)',
    {
      amountOut: GreaterThanOrEqual(parseEther('1000')),
    },
  ),
  createTestCase(
    V3_EXACT_OUTPUT_SINGLE,
    'when amountOut is insufficient (V3)',
    {
      amountOut: GreaterThanOrEqual(parseEther('1000')),
    },
  ),
  createTestCase(
    SWAP_WRONG_PARTNER,
    'if swap did not originate from camelot (paraswap)',
  ),
]
