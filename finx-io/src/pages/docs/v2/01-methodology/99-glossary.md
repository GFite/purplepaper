---
title: Glossary
subtitle: Glossary of Models, Calculations and other Terms
tags: glossary, documentation
---

# Glossary

## Accrued Interest

Interest accumulated in the time window from any given date and the immediately preceding coupon date.

## Annual Yield

The coupon rate based on an annual compounding frequency.

## Asset Swap Spread

The difference between the bond’s yield to maturity and a maturity matched point on the LIBOR curve, expressed in basis points.

## Average Life

The weighted average length of time to the last principal payment.  For IO-tranches, this is the weighted average length of time
to the final interest interest payment.

## Call Cash Flows

Represents the explicit call price given a par amount (default=100) on a given date.

## Cash Flow Date

The yyyy-mm-dd date of the cash flow.

## Clean Price

Clean Price is the price (market, calculated, or book) without accrued interest.

## Discount Margin

The yield spread above the reference index that estimates the expected return equating the present value of all expected future cash flows to the current market price for variable rate securities.

## Duration to Worst

The weighted average time based on the yield change calculated to the price to worst (best) date.

## Duration to Worst (Annualized)

The Duration to Worst based on an annual compounding frequency.

## DV01

The Dollar Duration or DV01 of a bond measures the price change in dollar terms in response to a change in yield by a single basis point.

## Effective Convexity

Option adjusted Convexity helps to approximate the change in price that is not explained by Effective Duration.  Effective Convexity accounts for variable cash flows resulting from changes in interest rates.

## Effective Duration

Option adjusted Duration is the approximate percentage change in price for a +/-100 basis point (bps) change in the underlying par government yield curve.  Effective Duration takes into account both the discounting that occurs at different interest rates as well as changes in cash flows.

In Batch Analytics Effective Duration Par is Option Adjusted Duration.  For Spot Effective Duration we calculate Option Adjusted Duration with a zero volatility.  

## Interest Cash Flows

The calculated Interest cash flow on any future date.

## LIBOR Option Adjusted Spread (OAS)

The Option Adjusted Spread or OAS computed using the applicable LIBOR/Swap curve based on a bond’s currency as available.

## Local Duration

See Modified Duration.

## Macaulay Duration

The weighted average time to receipt of cash flows using the present value of each cash flow as the weight. 

## Macaulay Duration to Worst

The Macaulay Duration to the worst cash flow date (ie. provides the lowest yield for callable securities or the highest yield for bonds with put options).

## Maturity Years

The length of time until the principal must be repaid with interest.

## Modified Duration

The Modified duration is a measure of a bond’s price sensitivity to changes in its yield to maturity.  The Macaulay’s duration is divided by a factor of (1+ y / m) where the (y) is the annual YTM and (m) is the total number of coupon payments per period.  For variable rate securities, the modified duration tends toward the next reset date as the security's cash flows will change along with the yield.

## Modified Duration (Annualized)

The Annualized Modified Duration is a measure of a bond’s price sensitivity to changes in its yield to maturity taking into account the effect of compounding interest assuming a full annual holding period.  The Macaulay’s duration is divided by a factor of (1+ y / m) where the (y) is the annual YTM and (m) is the total number of coupon payments per period.

## Nominal Spread

A nominal yield spread is the difference between the bond’s yield to option and a similar maturity government bond’s yield that represents the discount factor that will equate the security’s cash flows to its current market price, expressed in basis points.

## Option Adjusted Spread (OAS)

The Option Adjusted Spread or OAS is the constant spread that can be applied to the risk-free rate of return which is then adjusted to take into account any embedded option(s) to discount the security’s cash flows to match its market price.  OAS is displayed in basis points (bp or 0.01%).

## Other Principal Cash Flows

Includes bonds with sinking fund payments and RMBS principal and prepayments that are separate from redemption principal cash flow payments as of the cash flow date.

## Principal Cash Flows

Includes principal paid at maturity or worst/best date given a par amount (default=100).

## Put Cash Flows

Represents the explicit put price given a par amount (default=100) on a given date.

## Spread Duration

The estimate of a bond’s price sensitivity to a +/- 1 basis point shift in spread (default=Option Adjusted Spread).

## Stated Maturity

The length of time until the principal must be repaid with interest.

## Total Cash Flows

The sum of all Principal and Interest cash flows given a par amount (default=100) on a given date. For Batch Analytics, bonds with options will generate cash flows to the worst/best date.  The API cash flows are to maturity.

## Yield to Maturity

The theoretical internal rate of return that causes the present value to equal the current market price of the bond.  It is an estimate of the total return of a bond assuming it is held to maturity and that all coupon and principal income is reinvested at a rate equal to the yield to maturity.  The yield to maturity takes into consideration the coupon income, interest-on-interest, and capital gains or losses due to the difference between the price paid when the bond was purchased, and par, the return of principal at maturity.  

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
