---
title: FAQ
---

<Info>Didn't find an answer? Join the <a href="https://discord.gg/dc7ZKnUe">community Discord</a> 
to get support</Info>

# What is FINX?

FINX is a protocol for creating liquidity and trading ERC-20 tokens on 
[Ethereum](https://ethereum.org/en/what-is-ethereum/).

The Primary Purpose of the protocol is to provide Credit Borrowing Pools that are underpinned by 
Liquidity Pools and Underwriting Pools.

FINX enables large-scale liquidity providers, credit underwriters, insurers and ratings agencies 
to participate in the rapidly growing decentralized finance ecosystem. Corporations will 
increasingly conduct commerce using ERC-20 tokens and FINX is the solution to providing 
liquidity beyond basic collateral pools.

The FINX protocol leverages and extends base DeFi protocols such as Uniswap, Aave, Synthetix, 
Compound, Balancer, and others. The protocol in particular is designed to eliminate monopolistic 
intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading.

FINX fills the gap between "Pure Collateral Pools" and the traditional underwriting, ratings 
and other financial services that are necessary for large-scale financing.

If you want to dive into details check out the [docs](/docs/v2/).

# When will FINX be Decentralized?

The contracts will be published on May 1 2021 once audits and security testing is complete.

FINX Governance Tokens are available for pre-trading sale starting February 15 2021 and will last 
4 weeks to March 15 2021.

# When will FINX Governance Tokens be available in DeFi Liquidity Pools?

We will establish a FINX-ETH pool for trading on March 16 2021 at the close of 
the FINX Governance Token sale. FINX-ETH pool size will be 50% of Token Sale.

# What will be the price of FINX Governance Tokens?

FINX Governance Tokens are offered at the following price during the Feb 15 2021 - March 15 2021
sale period:

### 50,000 FINX : 1 ETH

All token purchasers will pay the same price above, there is no tiered token pricing.

# How will I use FINX?

First you'll need an [Ethereum Wallet](https://ethereum.org/en/wallets/) and some 
[ETH](https://ethereum.org/en/get-eth/). Once completed, head over to the 
[app](http://app.finx.io/) to start using the protocol to provide liquidity or swap tokens. 
Remember that each transaction on Ethereum costs ETH (this is called the 
["gas fee"](https://www.youtube.com/watch?v=AJvzNICwcwc&feature=emb_title) and it's paid to 
miners to keep the network running).

# How does FINX work?

FINX is an [automated liquidity protocol](https://ethereum.org/en/get-eth/#dex). In practical 
terms this means there are template smart contracts that define a standard way to make 
liquidity pools and corresponding markets that are compatible with each other. There is no 
order book, no centralized party and no central facilitator of trade. Each pool is defined by a 
smart contract that includes Uniswap V2 functions such as swapping tokens, adding liquidity,
minting pools and providing flash loans. FINX extends these industry standards by providing designs 
for providing and managing credit exposure.

At its core each pool uses the function `x*y=k` to maintain a curve along which trades can happen. 
FINX defines a credit element to the core swap function in order to keep risk within a certain 
range. The pools keep track of reserves(liquidity) and updates those reserves every single time 
someone trades. 

Existing base pools such as Uniswap require "pair tradable" collateralization in order to maintain 
the balance of Uniswap contract pools. This is not practical for many corporations due to the fact 
that Credit is an important tool in financing.

In addition to staked "paired" collateral, FINX provides a way for 3rd party underwriters to 
collateralize the pool along with the borrowing corporation, using a series of burnable smart 
contract tokens that can be exchaged for services.

For a more in depth description. Check out the 
[How FINX works](/docs/v2/protocol-overview/how-finx-works/) from the documentation.

# How are prices determined?

Prices are determined by the amount of each token in a pool. The smart contract maintains a 
constant using the following function: `x*y=k`. In this case `x = token0`, `y = token1`, 
`k = constant`. For each trade a certain amount of tokens are removed from the pool for an 
amount of the other token. To maintain `k`, the balances held by the smart contract are 
adjusted during the execution of the trade, therefore changing the price.

# How do I find X token?

We use the base token swap pools available as Uniswap V2 contracts. Tokens can also be found on 
[Etherscan.io](https://etherscan.io)

# Why does my transaction cost X?

Ethereum requires gas to execute each transaction. You can also check ETH gas station for the 
current prices required to complete transactions. Joining a FINX pool can be costlier than a 
simple swap transaction because you are executing a more complex smart contract. Read more 
about how gas works in ethereum.

# How can I see my liquidity provider fees?

There are many community built tools like 
[https://www.uniswaproi.com/](https://www.uniswaproi.com/), 
[https://www.zapper.fi/dashboard](https://www.zapper.fi/dashboard) and 
[https://zerion.io/](https://zerion.io/). FINX provides no guarantee that the information on 
these sites is correct, timely or from an authorized source.

# Uniswap tools and resources

[https://github.com/Uniswap/universe](https://github.com/Uniswap/universe)
