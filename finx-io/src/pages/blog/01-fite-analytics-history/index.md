---
title: 'A short history of Fite Analytics'
date: '2021-02-25'
author: 'Geoff Fite'
featuredImage: ./boserup.png
previewText: 'Fite Analytics Origins'
---

![](boserup.png)
> Ester Boserup
> 
> -- <cite>Wood, J. (2020). Malthus and Boserup. In The Biodemography of Subsistence Farming: Population, Food and Family (Cambridge Studies in Biological and Evolutionary Anthropology, pp. 163-203). Cambridge: Cambridge University Press. doi:10.1017/9781139519700.006</cite>

# Necessity is the Mother of Invention

Fite Analytics will be 5 years old tomorrow and it is a happy birthday. I founded this business under the (probably not 
mistaken) assumption that I was unemployable but that I wanted to keep working. Having been a part of start-ups 
before, I was not naive about the chances of success, but I did believe that there was pain others were experiencing 
that we could uniquely address in ways that other people couldn't.

We formed this company to be an alternative to the large, monopolistic vendors in capital markets analytics that 
dominate the landscape. 5 years ago there was very little choice amongst vendors for any specific need, and virtually 
none of them were able to provide everything required to satisfy a large capital markets  business. The large customers 
in capital markets (asset servicing companies, banks, insurance, asset management) had grown accustomed to paying 
ultra-high fees for services that had a single supplier and that had not modernized (because they don't have to).

Starting with the limited seed capital that was available (yours truly) we hoped that providing analytics across 
corporate and municipal bonds would be sufficient to gain a few customers. Unfortunately this turned out to be an 
incorrect assumption; every portfolio we ran for prospects as a means to sign them up included hard-to-source securities 
such as mortgage-backed structured products, asset-backed securities, or convertibles, not to mention short-term 
securities and hedged positions.

Therefore we had the decision to take the leap into the **entire** pool, pun intended. Over the course of 2018 and 2019 
we were able source reference data for the entire global bond market, and a large swath of required ancillary data as well 
such as curves, rates and prices.

This would not have been possible without our partners, who are the gold standard in their own services: Intex, IHS 
Markit, Standard & Poors, Exchange Data Int'l, LSEG Mergent, and the MSRB.

One catch, however. That's a lot of data. Over 30 million securities, to be exact. Due to the fact that our 
service calculates very large sets of securities in short timeframes, we needed to make this data available with 
extremely low latency and at a reasonable cost.

Serendipity is important, too, as I learned when the release of AWS DynamoDB coincided with the work we were doing 
to architect an ultra-large-scale solution for analyzing securities. Thankfully this technology fit the bill and 
will carry us for the foreseeable future.

Ester was right, demand drives innovation.

-- Geoff Fite, Feb 25 2025
