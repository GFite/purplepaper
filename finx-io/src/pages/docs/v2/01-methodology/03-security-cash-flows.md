---
title: Security Cash Flows
tags: cash-flows, documentation
---

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

