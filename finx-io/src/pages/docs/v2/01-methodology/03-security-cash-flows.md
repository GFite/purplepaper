---
title: Security Cash Flows
tags: cash-flows, documentation
---

# Security Cash Flows

Accurate cash flow forecasts are critical to generating usable analytics. The platform has the  ability to calculate cash flow payments that are 
specific to the day, as far into the future as required, across any number of coupon payments, rate changes, prepayment flows, 
or other events.

In order to achieve this precision, we hold all security schedules and other ancillary information in our database or accessible 
through our partner's libraries. Forward-looking calculations are run step-wise to generate scenario events each day, and this 
massive calculation load across a wide range of possible outcomes consumes computational capacity that is best served on a large, 
flexible compute grid.

In certain sectors of the Capital Markets individual securities are designed in such a way that cash flow forecasting becomes 
extremely difficult. Mortgage-backed securities are an example of this and a dominant portion of the investment universe, 
where individual securities can return variable coupon payments based on underlying loans (mortgages) paying off at unscheduled rates
due to resale, default, or refinancing. In these cases we must model the variability of cash flows, which is itself a statistical 
challenge requiring massive amounts of historical payment and other relevant data.

## Total Cash Flows

The sum of all Principal and Interest cash flows assuming a unit of 100, as of the monthly cash flow date generated based on a security’s coupon pay date.  For Batch Analytics, bonds with options will generate cash flows to the worst/best date.  The API cash flows are to maturity.

## Interest Cash Flows

The Interest cash flow based on the coupon payment frequency for the coupon paid as of the cash flow date.

## Other Principal Cash Flows

Includes bonds with sinking fund payments and RMBS principal and prepayments that are separate from redemption principal cash flow payments as of the cash flow date.

## Principal Cash Flows

Includes principal paid at maturity or worst/best date assuming a unit of 100.

## Call Cash Flows

Represents the explicit call price assuming a unit of 100 on the cash flow date as applicable as information only.

## Put Cash Flows

Represents the explicit put price assuming a unit of 100 on the cash flow date as applicable as information only.

## Accrued Interest

Interest accumulated since the last coupon payment date to the monthly cash flow date.

## Cash Flow Date

The yyyy-mm-dd date of the cash flow based on monthly intervals.

