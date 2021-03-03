---
title: Municipal Bonds
tags: municipal, documentation
---

# 2021-02-26 Municipal Bond Update

This document includes a brief description of the Municipal Bonds Coverage Update that will be released on February 26, 2021.  

Fite Analytics LLC continues to review and enhance its breadth and expansion of data coverage as well as analytic modelling 
in the fixed income market.

## Overview 

The major modifications include full analytic coverage of the global universe of municipal bonds.  In addition, we will 
be introducing some slight modelling differences:

- Mandatory Puts – Fite Analytics has adjusted its treatment of mandatory puts on municipal securities.  Rather than 
  simply treat the security as a fixed to float instrument that persists past the mandatory put date, all cash flows 
  following the coupon on or immediately succeeding the mandatory put date will be truncated with all par arriving 
  on this date.  All floating and optionality features up until this date remain included in calculations.
  
- Amortizing Zero Coupon Securities – As part of the expanded universe of securities, Fite Analytics modelled these 
  amortization schedules as well as the optionality features over the lifetime ofthe security, differing from standard 
  yield formulas for zero coupon bonds that assume a bullet repayment of principal.
  
- Asset Backed Municipal Securities – Fite Analytics enhanced its modelling of asset backed securities by 
  utilizing the Intex subroutines to model the full deals rather than treating them as often vanilla securities. 
  
We are excited to deliver these coverage and model updates as we work to provide comprehensive coverage of the fixed 
income markets.