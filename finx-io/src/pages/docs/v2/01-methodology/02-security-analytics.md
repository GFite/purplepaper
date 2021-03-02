---
title: Security Analytics
tags: analytics, documentation
author: Geoff Fite
date: 2021-02-25
---

# Security Analytics

Fite Analytics follows industry-standard approaches to analyzing individual securities. At a high level, the following 
analytical approaches and components are used in our services:

- cashflow-based valuation
- rate calculation and variable rate modeling
- optionality and other event-based handling
- convertibility
- prepayment modeling
- default modeling
- sensitivity analysis
- ultra-low and negative rate environment calibration
- benchmark comparisons

# Security Risk Analytics

Security-level analytics are designed to provide a snapshot view of a security's risk characteristics. Generally 
speaking, security analytics are based on a cash-flow valuation approach with models making various input assumptions 
as forward values are calculated step-wise before discounting back to present value.

The outputs of this analysis allows us to generate a battery of analytics that represent various views of risk 
used across an array of use-cases. Risk measures in the bond sectors are expressed in groups of derived calculations 
covering **Yield, Duration, Spread and Sensitivity**.

## Yield

Yield is calculated across multiple baselines. The yield calculations you see are generated based on the particular API,
Batch or Report. Definitions of specific yield measures produced can be found in the [Glossary](glossary).

Yield falls into 3 main categories: Book Yield, Price Yield, and Benchmark Yield.

### Book Yield

### 'Yield-To's

### Benchmark Yield

## Duration

The industry has adopted several measures of Investment Horizon for bonds, usually expressed as a form of Duration. 
Each duration variant was created to suit specific use cases and is a set of assumptions about the behavior of 
the instrument as well as the instrument holder over the life of the security. Duration is a useful tool in constructing 
"ladders" of securities to suit a particular cash flow goal, or in measuring the change of a security's characteristics 
over time.

### Local Duration

### Modified Duration

### Macaulay Duration

### Effective Duration

### Spread Duration

## Spread

Spread is the difference in yields between two bonds, and is most useful in examining a particular instrument relative to 
its peers (and possibly all spreads against one or more benchmarks).

## Asset Swap Spreads

## Benchmark Spreads

## Option Adjusted Spreads

## Volatility Spreads

## Sensitivity

Sensitivity is the measure of a particular security's expected movement relative to a reference security or benchmark, 
expressed in percent change terms relative to the reference's change, potentially against a third (risk-free) reference 
benchmark.

While Duration is itself a measure of sensitivity in that the value will change with changes in interest rates, the 
most common measure is to measure the security's duration sensitivity as a way to eliminate rates and focus on movement 
relative to an underlying instrument or basket.

### Convexity

