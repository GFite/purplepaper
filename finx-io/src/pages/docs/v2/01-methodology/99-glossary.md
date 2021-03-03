---
title: Glossary
subtitle: Glossary of Models, Calculations and other Terms
tags: glossary, documentation
---

# Glossary

## Accrued Interest

Interest accumulated since the last coupon payment date to the monthly cash flow date.

## Annual Yield

The coupon rate based on an annual compounding frequency.

## Asset Swap Spread

The difference between the bond’s yield to maturity and the corresponding LIBOR curve, expressed in basis points.

## Average Life

The weighted average life is the average length of time to the last principal payment.

## Call Cash Flows

Represents the explicit call price assuming a unit of 100 on the cash flow date as applicable as information only.

## Cash Flow Date

The yyyy-mm-dd date of the cash flow based on monthly intervals.

## Clean Price

Clean Price is the price (calculated or book) without accrued interest.

## Discount Margin

The yield spread above the reference index that estimates the expected return equating the present value of all expected future cash flows to the current market price for variable rate securities.

## Duration to Worst

The weighted average time based on the yield change calculated to the price to worst (best) date including call features as applicable.

## Duration to Worst (Annualized)

The Duration to Worst based on an annual compounding frequency.

## DV01

The Dollar Duration or DV01 of a bond measures the price change in dollar terms in response to a change in yield by a single basis point.

## Effective Convexity

Option adjusted Convexity helps to approximate the change in price that is not explained by Effective Duration.  Effective Convexity assumes that cash flow does change due to a change in interest rates.

## Effective Duration

Option adjusted Duration is the approximate percentage change in price for a
+/-100 basis point (bps) change in the underlying par government yield curve.  Effective Duration takes into account both the discounting that occurs at different interest rates as well as changes in cash flows.

For the Par Effective Duration, the theoretical par curve is shifted +/- 100 bps to determine the corresponding spot curves to value the security assuming a constant OAS based on the bond’s specific price.  The Par Effective Duration is the average percentage change in price of the bond versus its input price.  For Spot Effective Duration we assume a zero volatility and hold the bond’s ZVO or Z-spread constant.  

## Interest Cash Flows

The Interest cash flow based on the coupon payment frequency for the coupon paid as of the cash flow date.

## LIBOR Option Adjusted Spread (OAS)

The Option Adjusted Spread or OAS computed using the applicable LIBOR/Swap curve based on a bond’s currency as available.

## Local Duration

See Modified Duration.

## Macaulay Duration

The weighted average time to receipt of cash flows using the present value of each cash flow as the weight.  Macaulay Duration for Floaters is computed to the next reset date.

## Macaulay Duration to Worst

The Macaulay Duration to the worst cash flow date (ie. provides the lowest yield for callable securities or the highest yield for bonds with put options).

## Maturity Years

The length of time until the principal must be repaid with interest.

## Modified Duration

The Modified duration is a measure of a bond’s price sensitivity to changes in its yield to maturity.  The Macaulay’s duration is divided by a factor of (1+ y / m) where the (y) is the annual YTM and (m) is the total number of coupon payments per period.

## Modified Duration (Annualized)

The Annualized Modified Duration is a measure of a bond’s price sensitivity to changes in its yield to maturity taking into account the effect of compounding interest assuming a full annual holding period.  The Macaulay’s duration is divided by a factor of (1+ y / m) where the (y) is the annual YTM and (m) is the total number of coupon payments per period.

## Nominal Spread

A nominal yield spread is the difference between the bond’s yield to option and a similar maturity government bond’s yield that represents the discount factor that will equate the security’s cash flows to its current market price, expressed in basis points.

## Option Adjusted Spread (OAS)

The Option Adjusted Spread or OAS is the constant spread that can be applied to the risk-free rate of return which is then adjusted to take into account any embedded option(s) to discount the security’s cash flows to match its market price.  OAS is displayed in basis points (bp or 0.01%).

## Other Principal Cash Flows

Includes bonds with sinking fund payments and RMBS principal and prepayments that are separate from redemption principal cash flow payments as of the cash flow date.

## Principal Cash Flows

Includes principal paid at maturity or worst/best date assuming a unit of 100.

## Put Cash Flows

Represents the explicit put price assuming a unit of 100 on the cash flow date as applicable as information only.

## Spread Duration

The estimate of a bond’s price sensitivity when the spread of that specific bond changes.

## Stated Maturity

The length of time until the principal must be repaid with interest.

## Total Cash Flows

The sum of all Principal and Interest cash flows assuming a unit of 100, as of the monthly cash flow date generated based on a security’s coupon pay date.  For Batch Analytics, bonds with options will generate cash flows to the worst/best date.  The API cash flows are to maturity.

## Yield to Maturity

The theoretical internal rate of return that causes the present value, assuming neither options for bonds nor prepayments for mortgage backed securities, to equal the current market price of the bond.  It can be defined as an estimate of the total return of a bond assuming it is held to maturity and that all coupon and principal income is reinvested at a rate equal to the yield to maturity.  The yield to maturity takes into consideration the coupon income, interest-on-interest, and capital gains or losses due to the difference between the price paid when the bond was purchased, and par, the return of principal at maturity.  

## Yield to Maturity (Annualized)

The theoretical annualized internal rate of return based on a compounding period of one year which allows for a single point of comparison for bonds with differing coupon payment frequencies.

## Yield to Option

When a bond is callable, puttable, exchangeable, or has other features, the Yield to Option is the lowest or highest based on its yield to maturity, yield to call, yield to put or sinking fund, etc.

## Yield to Put

For bonds with a put option the bond holder has the option to sell the bond back to the issuer at a fixed price on a specified date (Yield to Best).

## Yield Value of 32nd

Measures the change in yield (in basis points) that would lead to a 1/32nd change (of 3.125 cents) in a bond’s price.  

## Zero Volatility Spread (ZVO)

Zero-volatility spread (ZVO or Z-spread) is the constant spread that equates the price of a security to the present value of its cash flows when added to the yield at each point on the government curve spot rate(s) where cash flow is received.   The ZVO is computed using the entire yield curve to value each individual cash flow for all fixed income securities.

