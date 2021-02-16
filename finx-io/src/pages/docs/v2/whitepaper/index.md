# FINX

## Protocol Whitepaper

***Version 1.0***

[info@finx.io](mailto:info@finx.io)

#### [Geoffrey Fite](mailto:geoff@fiteanalytics.com)

#### *February 15 2021*

---

## Abstract

This document describes the theory, design, definitions and implementation of the FINX protocol version 1.0.

The FINX protocol (FINX) is a Corporate Debt Financing protocol that matches investors, borrowers and stakeholders in Decentralized Capital Pools.

The FINX protocol is a series of Ethereum ERC20 contracts which extend several of the emerging standard DeFi protocols (Uniswap V2, Aave V2, Balancer, and others). The FINX protocol is open source under GPL and we encourage extension of the functionality to create a decentralized financial system for the future.

FINX provisions Decentralized Pools which are assembled and used by Liquidity Providers, Borrowers, Debt Service Providers, and Stakeholders. FINX defines the roles by which any individual, corporation, government or other entity can interact with the FINX Credit DEX (Distributed Exchange). FINX also establishes the Information Security, Governance, Audit, and other necessary structures in order for the ecosystem to flourish for the benefit of all.

FINX establishes Decentralized Risk Assessment that weigh Opinions based on
a range of factors, which are collectively valued by the community and which represent the decentralized risk in the system. The intent of the design is to eliminate certain features such as those which create the need for the "Too Big to Fail" doctrine, government-established interest rates, and licenses of privilege which redirect profits. The FINX DRA Contract is a contribution to the Decentralized Finance space as an ecosystem of credit.

FINX defines a collection of Oracles which provide inputs from Stakeholders in order to facilitate the automation of collateral monitoring, valuation, settlement and liquidation of Non-Token-Collateralized Debt Pools.

FINX provides an extension to the Graph protocol for the Debt Capital Markets in order to enhance the ecosystem, increase awareness, and maximize community safety and security.

---

## Introduction

Corporations that require access to Debt Financing have multiple sources when it comes to securing capital but all sources are slow and expensive for Borrowers and Lenders alike. Typical sources of capital for corporations include bank lending, issuing equity (stocks) on a centralized exchange, issuing public debt securities (bonds), and the private equity and debt markets. All of these currently available options come at a high cost, take significant amounts of time and resources, and diminish the overall liquidity available to the economy as a whole. Even during ultra-low rate environments such as the current 2016- period, high origination costs and servicing expense of corporate debt has persisted. For unrated debt, borrowing interest rates for corporations can be 10% over more above indices such as LIBOR or SOPHR. For "investment grade" rated debt, borrowing rates can be low, but the origination and rating process is extremely expensive and time consuming.

Some of today’s stakeholders in the corporate debt markets -- Underwriters, Ratings Agencies, Traders, Broker/Dealers -- rely on centralized control of the financial markets to generate fees. Many of the critical components of our current financial system are provided by monopolistic arrangements, some of which are directly sanctioned and supported by law. As a result, automation and innovation in Debt Capital has been severely constrained and a significant amount of capital has been redirected away from the Lenders and Borrowers, towards large intermediaries that seek to preserve their privileged status.

These high costs of borrowing restrict investor returns, and in turn limits the availability of capital to the market as a whole. There is no 'instant' capital available to corporations when they need it.

We believe that the debt-capital markets are underfunded as a result of high fees, bureaucratic processes, and monopoly barriers to entry for both Borrowers and Investors. The FINX Protocol seeks to address these problems through Decentralization, Transparency, Information Security, Auditability and Speed that will benefit all stakeholders and anyone wishing to gain access to this very large market.

The innovation in Web3 technology, specifically Ethereum 2.0 and the ERC20 contract standard, provide the opportunity to practically provide an alternative debt financing market. FINX is created to assist corporations doing commerce in the Tokenized Economy and to encourage the facilitation of credit therein.

The FINX Protocol is a Distributed Capital Market that provides on-demand access to capital for corporations of all sizes, while at the same time providing high-return, low-risk tokens that are accessible to any investor globally. This will result in greatly expanded liquidity for corporations and enhanced opportunities for all market participants.

---

## Basic Concepts

The 3 basic building blocks of the FINX Protocol are ROLES, POOLS, and TOKENS.

### ROLES
- [Liquidity Providers](#liquidity-providers)
- [Debt Service Providers](#debt-service-providers)
- [Borrowers](#borrowers)
- [Stakeholders](#finx-stakeholders)

The FINX Protocol is decentralized so that any wallet can interact with the protocol as any role.

### POOLS
- [Liquidity Pools](#liquidity-pools)
- [Credit Pools](#credit-pools)
- [Borrowing Pools](#borrowing-pools)

In standard Uniswap V2 contracts provided by Uniswap, Balancer and others, capital pools are made up of ERC20 tokens that have a Redemption Value that equals Market Price. FINX extends the pool types to allow a mechanism for non-market-priced exchange of value as contribution to the collateral requirements of standard Uniswap V2 contracts. Wallets may interact with any Pool subject to the conditions of that pool and constrained by the actions available against the pool.

### TOKENS
- [Swappable Pairs](#swappable-pairs)
- [FINX](#token-finx)
- [FINXC](#token-finxc)
- [USDC](https://www.centre.io/)

The FINX protocol facilitates pools make from ERC20 Tokens. FINX participates in the Uniswap project [tokenlists.org](https://tokenlists.org) and uses the emerging industry standard Token List.

#### Liquidity Providers

A Liquidity Provider is a counterparty that places Tokens into a Liquidity Pool and thereby claims a portion of the
pool and its proceeds or losses.

Liquidity Providers may select Capital Pools according to characteristics that meet certain objectives and risk
profiles.

#### Debt Service Providers

A Debt Service Provider is a counterparty that provides value to the Credit

#### Borrowers

A Borrower is a counterparty that borrows Tokens from a Lending Pool and thereby establishes a loan with the
pool that is to be repaid according to the pool-defined set of Capital Flows and Capital Limits.

Borrowers my borrow from any Lending Pool for which they are qualified (see Borrower Qualification)

##### Borrower Qualification

Borrow Qualification is the process by which a Borrow is qualified to borrow from a specific Lending Pool. Qualification
is similar to traditional underwriting, where a third party guarantees the difference between any Collateral placed by
the Borrower and the amount of the loan taken by the Borrower.

Borrower qualification may be at the discretion of third parties, but in the FINX base qualification contract implements
the following logic:

`Qualified Borrowing Amount = Collateral Pool Deposit Balance + Credit Pool Deposit Balance`

For example, if a Borrower wishes to deposit 10 ETH into a Collateral Pool and borrow 100 ETH from a Lending Pool then
the amount to be deposited to the Credit Pool is 90 ETH.

#### Stakeholders

A FINX Stakeholder is a counterparty that holds FINX tokens and stakes them with the Protocol, thereby providing a
Security Buffer to underwrite the protocol.

#### Liquidity Pools

A Capital Pool is a reserve of a currency. A Uniswap V2 Capital Pool has an address as do all ERC20 contracts once deployed and carries swappable balances of tokens. Some tokens are ERC20 contracts, and can also be pools.

Available tokens are all commonly-traded stablecoin equivalents (USD, EUR, GBP, YEN…), and Bitcoin and ETH20 tokens
that have sufficient capitalization and liquidity (BTC, ETH, USDC, DAI, UNI, BAL, AAVE).

There are several types of Capital Pool used in the FINX Protocol. Each is described below:
- Liquidity Pools
- Credit Pools
- Lending Pools

See End Notes for a bried disussion of Capital Pool complexity and its impact on transaction fees (gas costs).

#### Credit Pools

A Credit Pool is a pool of tokens provided by Stakeholders and Debt Service Providers, that can be allocated to a loan
taken out against the Lending Pool in addition to any tokens on deposit by the Borrower as collateral.

Borrowers claim use of tokens in the Credit Pool by possessing FINXC tokens in the wallet that is used to establish the
loan. Borrowers my acquire FINXC tokens only at the discretion of authorized Debt Service Providers.

### Token Flows

A Token Flow is a contracted schedule of future transactions. Token Flows are defined in the Flow Contract portion
of a FINXC Contract. Token Flows define the payment schedule, interest rate, prepayment rules and other
events that determine when tokens are exchanged to fulfill the contract(s).

### Capital Limits

Capital Limits are a set of rules that govern how currencies flow amongst counterparties (Lenders, Borrowers,
Stakeholders).

### Collateral Pool

A Collateral Pool is a pool of tokens provided by Borrowers that can be allocated to a loan and taken out against the
Lending Pool as collateral. Collateral Pool portions may be paired with Credit Pool portions to offset loan collateral
deposit requirements.

The Uniswap V2 swap and flash loan contracts  require matched Collateral to Debt, subject to various measures such as
Loan-to-Value and swap pool mechanics that determine interest rates.

The FINX Protocol adds Credit Pools that can be matched with Collateral Pools in Uniswap V2 swap and flash loan
contracts in order to extend crypto lending to corporations.

### Lending Pool

A Lending Pool is a pool of tokens that is used to fund loans to Borrowers. The Lending Pool is backed by Collateral
Pools and Credit Pools. Lending Pools generate interest as AAVE v2 contracts.

### Token FINX

The FINX token is designed to provide Safety to the FINX Protocol. FINX tokens may be staked in the FINX Safety
Module as a liquidity reserve for FINX Borrower Pool contracts and
insurance for the ecosystem as a whole.

In order for a Decentralized Exchange to be resilient, it must have critical mass and the appropriate level of controls
such that the health of the ecosystem takes priority over invididual stakeholder interests; and, that individual
stakeholders may conduct any transaction they choose with any other party so long as it does not harm the overall
health of the ecosystem.

Therefore FINX tokens are a Proxy of Trust, in which stakeholders agree as a group to support the ecosystem for
themselves and their peers. FINX Tokens, when staked, make the holder of those tokens a Stakeholder in the Ecosystem in
literal terms. Stakeholders (by weight of their staked FINX) vote on all changes to the Protocol in a purely egalitarian
democracy.

FINX tokens when staked receive rewards according to the [FINX Safety Incentives Schedule](#safety-incentives).

#### Safety Incentives

35,000 FINX distributed to the Safety Module every 24 hours (continually). Each stakeholder receives their portion of the
pool in FINX safety incentive tokens.

Staked FINX has a cooldown period of 10 days, which is the time that will elapse between when you request to withdraw any
staked FINX and the time when it will be unlocked for conversion back to unstaked FINX in your wallet.

### Token FINXC

The FINXC token is the work token by which Debt Service Providers will exchange services and that can be used by the
bearer as collateral against debt.

The FINXC token is intended to have a value of 1 USDC at all times, and is managed to that end in a pool at a ratio of
1 USDC : 1 FINXC. That is, the goal is to have 1 FINXC have a net present value of 1 USDC.

### Monetary Policy

The Monetary Policy sets the parameters for the ecosystem to self-determine interest rates. FINX protocol selects pools
in the Aave protocol and return standard money-market rates. See[Aave Money Markets](https://https://app.aave.com/markets)

### Risk Policy

The Risk Policy sets the parameters for the ecosystem to set pool levels required for appropriate reserve for [Expected
Loss](#expected-loss). The FINX protocol reserve levels are as follows:

- Borrower Pool (1 ETH : 1800 USDC)
- Liquidity Module (1 ETH : 1800 USDC)
- Protocol Safety Reserve (2 FINX : .000555 ETH : 1 USDC)
- Credit Loss Reserve (2 FINX : .00055 ETH : 1 USDC)
- Extreme Loss Reserve (5 FINX : .000555 ETH : 1 USDC)
- FINX Work Pool (1 FINXC : 1 USDC)

Token flows are distributed as follows:

- Loans taken from Borrower Pool
- Repayments plus interest repaid to Borrower Pool
- 100% of repayments distributed to Liquidity Pool
- 60% of interest distributed to Liquidity Pool
- 40% of interest is distributed to FINX Work Pool
- 20% of interest paid distributed to reserves
    - 25% Protocol Safety Reserve
    - 50% Liquidity Module
    - 20% Credit Loss Reserve
    - 5% Extreme Loss Reserve

### InfoSec Policy

The InfoSec Policy sets the processes and measurement of the security of the protocol from nefarious actors, breaches,
and fraud of any kind.
