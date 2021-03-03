---
title: Security Analytics
tags: analytics, documentation
author: Geoff Fite
date: 2021-02-25
---

# Security Analytics

Fite Analytics follows industry-standard approaches to analyzing individual securities. At a high level, the following 
analytical approaches and components are used in our services:

- cashflow based valuation
- multiple interest rate processes and variable coupon modelling
- optionality and other event schedules
- convertibility
- prepayment modeling
- default modeling
- sensitivity analysis
- ultra-low and negative rate environment calibration
- benchmark comparisons

# Security Risk Analytics

Security-level analytics are designed to provide a snapshot view of a security's risk characteristics. These include 
static cashflow as well as path-dependent analytics.

All security-level analytics can also be bucketized into portfolio or sector level representations for higher level analysis.

## Yield Calculations

We calculate a variety of different yields for every security using market and/or book price.  We will show one and/or 
the other as specified in the return values of a the particular API, Batch or Report. Examples include:
Yield-to-Maturity, Yield-to-Worst, Yield-to-Call, Yield-to-Put, Current-Yield, etc.
Definitions of specific yield measures produced can be found in the [Glossary](./glossary).

### Book Yield

Book Yield is the yield calculated as of acquisition and is used to measure the cost basis as the security 
amortizes/appreciates over its remaining life.  Our default is to use Yield-To-Maturity but this can be toggled 
to specify any Yield-To-<Method>.

Book Yield is used in the context of portfolio analytics to determine Book Price and the corresponding Book OAS,
a required input to conduct sensitivity analysis on a portfolio's cost basis.

### Market Yield

Yield-To-**<Method>** are a range of analytic measures that estimate future return against various scenarios of a 
position-ending event. Many reports use Yield-To-Worst as a default but this can be toggled to specify 
any Yield-To-<Method>.

## Sensitivity

Sensitivity is the measure of a particular security's expected change in price in response to changes in a variety of 
factors.  The first and second order adjustments are Duration and Convexity respectively.

Duration can be used to measure the weighted average life of cash flows or the sensitivity of a security's price to 
changes in interest rates.  There are a variety of duration calculations each with their own methodologies regarding
path dependency and external or intrinsic yield benchmarks.  

Convexity, as a second order effect, how much one can expect changes to under/overshoot adjustments due to duration.

### Average Life

The weighted average life of principal repayments over the remaining life of a security.  This will be equal to the 
time to maturity for bullet securities and shorter for those with amortization schedules and/or prepayment.
Some structured securities distribute no principal (IO-Tranches), the average life of these securities are calculated
as the weighted average life of all remaining interest payments.

### Macaulay Duration

The weighted average time an investor must hold a bond until the present value of the bond’s cash flows is equal to the market 
value of the bond.  All cash flows are determined according to the parameters of any Yield-To-<Method>.

### Modified Duration

An adjusted version of the Macaulay Duration, which accounts for changes to any Yield-To-<Method>.  For non-floating rate
securities, the cash flows do not depend on the level of rates and the modified will be slightly shorter than the Macaulay Duration.
Floating rate securities will have much shorter modified durations as they are sensitive to changes in the yield and will tend toward
their reset date.

### Local Duration

Modified Duration expressed after adjusting for the local currency exchange rate. 

### Effective Duration

A measure of a security's sensitivity to parallel shifts to the discount curve.  Each curve is determined according to its currency 
denomination as well as its sector (e.g. U.S. Municipal Securities use the AAA Municipal Bond Curve while U.S. Corporates are 
benchmarked to the U.S. Par Curve).  

Non-path dependent securities are calculated using the Generalized Hull-White Trinomial Tree Algorithm allowing for a variety of interest
rate processes depending on volatility and drift parameters. Securities with path-dependent cash flows use a Monte-Carlo algorithm 
that follows the same interest rate process but dynamically determines cash flows at each step.
(See http://www-2.rotman.utoronto.ca/~hull/DownloadablePublications/Generalized%20HW%20model%20and%20Super%20Calibration.pdf)

### Key Rate Duration

A more robust measure of a security's sensitivity to changes in the discount curve.  Discount curves rarely shift in a parallel fashion;
thus, key rate durations probe the sensitivity of a security's duration to shifts in specific points on the curve.  

We use a centered difference method to calculate Key Rate Durations and Convexities, ensuring that the sum of all Key Rate analytics sum
to their parallel equivalent.

### Spread Duration

Effective Duration calculated based on parallel shifts of the security's spread by +/-1bp as opposed to shifts in the yield curve.

### Modified Convexity

The correction to duration that assumes no changes in cash flows.

### Effective Convexity

The correction to duration that incorporates the possibility of variable future cash flows.

## Spread

Spread is a measure of added risk in regards to a benchmark, often a specific discount curve with certain assumptions.

### Asset Swap Spread

The difference between the Yield-To-<Method> of a security and a duration matched rate on the Libor Swap Curve.

### Option Adjusted Spread

The added spread on top of a benchmark yield curve that takes into account the volatility and drift of future interest rate processes
as well as the corresponding variability of future cash flows.

### Zero Volatility Spread

Option Adjusted Spread calculated with a volatility of zero.
