# FINX

## Protocol Whitepaper

***Version 1.0***

[info@finx.io](mailto:info@finx.io)

#### [Geoffrey Fite](mailto:geoff@fiteanalytics.com)

#### *February 15 2021*

---

## Abstract

This document describes the theory, design, definitions and implementation of the FINX protocol version 1.0.

The FINX protocol is a Corporate Debt Financing protocol that matches investors, borrowers and stakeholders in
Decentralized Capital Pools.

The FINX protocol is an Ethereum ERC20 contract which extends the following protocols: Uniswap V2 protocol, Aave V2 protocol, and Balancer protocol. The FINX protocol is open source and we encourage others to extend the functionality to create a decentralized financial system for the future.

FINX provisions decentralize lending pools which are assembled and used by Liquidity Providers, Borrowers, and Credit Providers. FINX defines the roles by which any individual, corporation, government or other entity can interact with the FINX Credit DEX (Distributed Exchange).

FINX provides a collection of Oracles which provide inputs from Stakeholders in order to facilitate the automation of collateral monitoring, valuation, settlement and liquidation of Non-Token-Collateralized Debt Pools.

---

## Introduction

Corporations that require access to Debt Financing have multiple sources when it comes to securing capital but all sources are slow and expensive for Borrowers and Lenders alike. Typical sources of capital for corporations include bank lending, the ‘public’ bond markets, senior/subordinated debt, and private equity lending. All of the currently available options come at a high cost, take significant amounts of time and resources, and diminish the overall liquidity available to our economy. Even during ultra-low rate environments such as the 2016-2020 period, high costs persisted among unrated debt, with such companies paying spreads above LIBOR of 500 bps or more. For rated debt, the process to obtain a rating is extremely expensive, and despite over-subscription of most ‘investment-grade’ offerings these securities are generally unattractive to most investors as historical spread to money policy has remained extremely tight.

Some of today’s stakeholders in the corporate debt markets -- Underwriters, Ratings Agencies, Traders, Broker/Dealers -- rely on friction to generate fees that pay for their value-add. This has caused an inability to automate the origination and underwriting process, as well as the issuance and ratings process; to automate would reduce fee-based income.

High costs of borrowing restrict investor returns, and in turn limits the availability of capital to the market as a whole. "Cost of Sales" in issuing corporate debt includes significant human energy on activitie such as Underwriting, Collateral Valuation, and issuing Ratings. The problem is compounded by the fact that information is monopoly-priced, and as the result many investors cannot afford to purchase the information reuquired to analyze the security. High yielding securities are generally more expensive to analyze so only wealthy firms have been able to invest in certain segments of the market.

We believe that the debt-capital markets are underfunded as a result of high fees and high barriers to entry for both Borrowers and Investors. The FINX Protocol seeks to solve these problems through Technology and Transparent Policy that can be understood by all stakeholders, and that gives anyone the ability to participate in the market.

The FINX Protocol is a Distributed Capital Market that provides on-demand access to capital for corporations of all sizes, while at the same time providing high-return, low-risk securities that are accessible to any investor globally. This will result in greatly expanded liquidity for corporations and enhanced opportunities for investors.

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
- [FINXL](#token-finxl)
- [FINXC](#token-finxc)
- [FINXB](#token-finxb)

The FINX protocol facilitates pools make from ERC20 Tokens. FINX participates in the Uniswap project [tokenlists.org](https://tokenlists.org) and uses the emerging industry standard Token List.

#### Liquidity Providers

A Liquidity Provider is a counterparty that places Tokens into a Liquidity Pool and thereby claims a portion of the
pool and its proceeds or losses.

Liquidity Providers may select Capital Pools according to characteristics that meet certain objectives and risk
profiles.

#### Debt Service Providers

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

