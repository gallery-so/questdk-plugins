import { type Address, zeroAddress } from 'viem'
import { Chains } from './utils'

// Tokens
const ETHER = zeroAddress
const ARBITRUM_BTC = '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f'
const ARBITRUM_LTC = '0x48107d739110835dea6f83d8597252764a96b80d'
const ARBITRUM_ADA = '0xe5cdbed3bc0df7d3637cc78bb6b55ede6d7f3ef5'
const ARBITRUM_DOGE = '0x5e90df307b07076c42b0516c683c45e10f362c18'
const ARBITRUM_SHIB = '0x5033833c9fe8b9d3e09eed2f73d2aaf7e3872fd1'
const ARBITRUM_ARB = '0x912ce59144191c1204e64559fe8253a0e49e6548'
const ARBITRUM_SOL = '0xa26a142bb3e9d5503b882d17cff43a37b62ee1be'
const ARBITRUM_MATIC = '0x561877b6b3dd7651313794e5f2894b2f18be0766'
const ARBITRUM_AVAX = '0x71cb836342a9072d39fa100e2d44a982aff4b54d'
const ARBITRUM_GBP = '0x1AE27D9068DaDf10f611367332D162d184ed3414'
const ARBITRUM_EUR = '0x116172B2482c5dC3E6f445C16Ac13367aC3FCd35'
const ARBITRUM_JPY = '0x95e0e6230e9E965A4f12eDe5BA8238Aa04a85Bc6'
const ARBITRUM_AUD = '0x7E141940932E3D13bfa54B224cb4a16510519308'
const ARBITRUM_CAD = '0x398B09b68AEC6C58e28aDe6147dAC2EcC6789737'
const ARBITRUM_XAG = '0x4b64f0bf6b1bffc23cca3c8dcd08dde4627aba9b'
const ARBITRUM_XAU = '0xB021806e885806A7bd8A33135838AcBE2187Fc09'
const ARBITRUM_MXN = '0xa411c9aa00e020e4f88bc19996d29c5b7adb4acf'
const ARBITRUM_ATOM = '0xa213b4436e70802a3a0bf1b6d1146bd57cdc9a6b'
const ARBITRUM_DOT = '0xe8f12f5492ec28609d2932519456b7436d6c93bd'
const ARBITRUM_BNB = '0x20865e63b111b2649ef829ec220536c82c58ad7b'
const ARBITRUM_PEPE = '0x23d939e0209714a6cae01d75a45562eb71cfe1a3'
const ARBITRUM_XRP = '0x13f6afb1621aa94c85be868882b586e46ba9f67e'
const ARBITRUM_CRV = '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978'
const ARBITRUM_MKR = '0x0c2b3e31639bbc8c7ee3f1dcf86adbe658377e50'
const ARBITRUM_OP = '0xb45c25ec37e73215ec0df3772d700747974c9a94'
const ARBITRUM_LINK = '0xf97f4df75117a78c1a5a0dbb814af92458539fb4'
const ARBITRUM_INJ = '0x2a2053cb633cad465b4a8975ed3d7f09df608f80'
const ARBITRUM_PYTH = '0xE4D5c6aE46ADFAF04313081e8C0052A30b6Dd724'
const ARBITRUM_BONK = '0x09199d9a5f4448d0848e4395d065e1ad9c4a1f74'
const ARBITRUM_TIA = '0x94d23f048d858d8cf19bb85e45b499643de921ac'
const ARBITRUM_SEI = '0x67a24ce4321ab3af51c2d0a4801c3e111d88c9d9'
const ARBITRUM_SUI = '0xf2f23c6eea68c151e9138cb232057ffed601405a'

export const VAULT_CONTRACT = '0xc4abade3a15064f9e3596943c699032748b13352'
export const TOKENFARM_CONTRACT = '0x60b8C145235A31f1949a831803768bF37d7Ab7AA'
export const VLP_CONTRACT = '0xc5b2d9fda8a82e8dcecd5e9e6e99b78a9188eb05'
export const VELA_CONTRACT = '0x088cd8f5ef3652623c22d48b1605dcfe860cd704'

/* 
  A list of token ids can be found here: https://docs.vela.exchange/vela-knowledge-base/developers/asset-pairs-and-velaid
*/

export const TOKEN_TO_ID: { [token: string]: bigint } = {
  [ETHER]: 2n,
  [ARBITRUM_BTC]: 1n,
  [ARBITRUM_LTC]: 3n,
  [ARBITRUM_ADA]: 4n,
  [ARBITRUM_DOGE]: 5n,
  [ARBITRUM_SHIB]: 6n,
  [ARBITRUM_ARB]: 7n,
  [ARBITRUM_SOL]: 8n,
  [ARBITRUM_MATIC]: 9n,
  [ARBITRUM_AVAX]: 10n,
  [ARBITRUM_GBP]: 11n,
  [ARBITRUM_EUR]: 12n,
  [ARBITRUM_JPY]: 13n,
  [ARBITRUM_AUD]: 14n,
  [ARBITRUM_CAD]: 15n,
  [ARBITRUM_XAG]: 24n,
  [ARBITRUM_XAU]: 25n,
  [ARBITRUM_MXN]: 28n,
  [ARBITRUM_ATOM]: 31n,
  [ARBITRUM_DOT]: 32n,
  [ARBITRUM_BNB]: 33n,
  [ARBITRUM_PEPE]: 34n,
  [ARBITRUM_XRP]: 35n,
  [ARBITRUM_CRV]: 36n,
  [ARBITRUM_MKR]: 37n,
  [ARBITRUM_OP]: 38n,
  [ARBITRUM_LINK]: 39n,
  [ARBITRUM_INJ]: 40n,
  [ARBITRUM_PYTH]: 41n,
  [ARBITRUM_BONK]: 42n,
  [ARBITRUM_TIA]: 43n,
  [ARBITRUM_SEI]: 44n,
  [ARBITRUM_SUI]: 45n,
}

export const CHAIN_TO_TOKENS: { [chainId: number]: Address[] } = {
  [Chains.ARBITRUM_ONE]: [
    ETHER,
    ARBITRUM_BTC,
    ARBITRUM_LTC,
    ARBITRUM_ADA,
    ARBITRUM_DOGE,
    ARBITRUM_SHIB,
    ARBITRUM_ARB,
    ARBITRUM_SOL,
    ARBITRUM_MATIC,
    ARBITRUM_AVAX,
    ARBITRUM_GBP,
    ARBITRUM_EUR,
    ARBITRUM_JPY,
    ARBITRUM_AUD,
    ARBITRUM_CAD,
    ARBITRUM_XAG,
    ARBITRUM_XAU,
    ARBITRUM_MXN,
    ARBITRUM_ATOM,
    ARBITRUM_DOT,
    ARBITRUM_BNB,
    ARBITRUM_PEPE,
    ARBITRUM_XRP,
    ARBITRUM_CRV,
    ARBITRUM_MKR,
    ARBITRUM_OP,
    ARBITRUM_LINK,
    ARBITRUM_INJ,
    ARBITRUM_PYTH,
    ARBITRUM_BONK,
    ARBITRUM_TIA,
    ARBITRUM_SEI,
    ARBITRUM_SUI,
  ],
}
