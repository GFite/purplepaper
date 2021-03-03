---
title: Security Cash Flows
tags: cash-flows, documentation
---

# Security Cash Flows

The platform has the  ability to determine date and event specific cash flow payments across the lifetime of any security regardless of the number of coupon payments, rate changes, or prepayment forecasts.

In order to achieve this precision, we dynamically parse all security information and event schedules from our cloud database or with specifc routines 
that interface with our partners' libraries (i.e. Intex Subroutines). This allows us to determine static and dynamic projections of future cash flows and,
at the same time, ensure data consistency and analytic precision accross our horizontally scaled calculation grid.

## Total Cash Flows

The sum of all Principal and Interest cash flows given a par amount (default=100).  For Batch Analytics, bonds with options will generate cash flows to the worst/best date.  The API cash flows are to maturity.

## Interest Cash Flows

The calculated Interest cash flow for a future date given the last known rates as of a given date. This ensures time-machine functionality such that cash flows run in the past do not use future data.

## Other Principal Cash Flows

Includes bonds with sinking fund payments and RMBS principal and prepayments that are separate from redemption principal cash flow payments as of the cash flow date.

## Principal Cash Flows

Includes principal paid at maturity or worst/best date given a par amount (default=100).

## Call Cash Flows

Represents the explicit call price in relation to a given par amount (default=100) on a future date.

## Put Cash Flows

Represents the explicit put price in relation to a given par amount (default=100) on a future date.

## Accrued Interest

Interest accumulated since the last coupon payment date on a future date.

## Cash Flow Date

The yyyy-mm-dd date of the cash flow.

