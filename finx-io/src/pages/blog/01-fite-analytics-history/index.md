---
title: 'A short history of Fite Analytics'
date: '2021-03-02'
author: 'Geoff Fite'
featuredImage: ./boserup.png
previewText: 'Fite Analytics Origins'
---

![](boserup.png)
> **Ester Boserup**
> 
> -- <cite>Wood, J. (2020). Malthus and Boserup. In The Biography of Subsistence Farming: Population, Food and Family (Cambridge Studies in Biological and Evolutionary Anthropology, pp. 163-203). Cambridge: Cambridge University Press. doi:10.1017/9781139519700.006</cite>

# Necessity is the Mother of Invention

Fite Analytics will be 5 years old tomorrow! This post is a short history of why we did it. 

Having experienced start-up life twice before, I was not naive about the chances of success when I began in 2016. The basic 
idea wasn't that we'd just build a better product and expect them to sign up, that "our math will be superior", or that 
"we can build something that people didn't know they needed" because **gosh** we have so much experience. Rather, our idea 
was simple: in the Capital Markets Analytics space, there are a good amount of disappointed customers out there, and a Customer-First orientation 
is a great beach-head for a new company attempting to land on a crowded island. In fact, we saw the all-too-common contempt 
for customers amongst the big players as a gift that our future competition had laid at our feet.

It takes foolish audacity and a strong dose of delusional thinking to see opportunity in a startup, and I believe the trick is to
put yourself out there, **stay out there**, and wait for some sort of magic to happen. We were treading into waters that were 
well-mapped and fully dominated by a few monopoly players. As my former boss at IDC said to me when I approached him with the 
idea, 'sounds great, but all startups are risky, and this one looks too tough.'

Starting with the limited seed capital that was available (yours truly) we hoped that providing analytics across 
corporate and municipal bonds would be sufficient to gain a few customers. Unfortunately this turned out to be an 
incorrect assumption; every portfolio we ran for prospects as a means to sign them up included hard-to-source securities 
such as mortgage-backed structured products, asset-backed securities, or convertibles, not to mention bespoke short-term 
securities and hedged positions.

Therefore we had the decision to take the leap into the **entire** universe of Bonds, pun intended. Over the course of 2018 and 2019 
we were able source reference data for the entire global bond market, and a large swath of required ancillary data as well 
such as curves, rates and prices.

This would not have been possible without our partners, who are the gold standard in their own services: Intex, IHS 
Markit, Standard & Poors, Exchange Data Int'l, LSEG Mergent, and the MSRB.

One catch, however. That's a lot of data. Over 3 million securities, to be exact. Due to the fact that our 
service calculates very large sets of securities in short timeframes, we needed to make this data available with 
extremely low latency and at a reasonable cost.

Serendipity is important, too, as I learned when the release of AWS DynamoDB coincided with the work we were doing 
to architect an ultra-large-scale solution for analyzing securities. Thankfully this technology fit the bill and 
will carry us for the foreseeable future.

I am most thankful, however, for the team that assembled to do the work. We are a small but potent group of people, and even 
if we crash and burn it will have been a massive success in my mind to have had the pleasure of working with my team.

Ester was right, demand drives innovation.

-- Geoff Fite, 2021 March 02
