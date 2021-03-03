import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import gql from 'graphql-tag'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useQuery } from '@apollo/react-hooks'
import { client, blockClient } from '../../apollo/client'

import { Link } from 'gatsby'

import Layout from '../../layouts'
import SEO from '../../components/seo'
import BG from '../../components/bg'

const StyledAbout = styled.div`
font-family: Lato;
display: grid;
grid-template-columns: 1fr 200px;
justify-content: space-between;
padding: 0 2rem;
padding-bottom: 4rem;
margin-bottom: 4rem;
padding-top: 2rem;

border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};

@media (max-width: 960px) {
font-family: Lato;
flex-direction: column;
grid-template-columns: 1fr;
margin-top: 0rem;
padding-top: 1rem;
}
`

const StyledSectionFlex = styled.div`
font-family: Lato;
padding: 0 0 4rem 0;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
max-width: 960px;
margin-left: 5rem;
@media (max-width: 1024px) {
font-family: Lato;
padding: 1rem;
margin-top: 0rem;
flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
}
@media (max-width: 960px) {
font-family: Lato;
padding: 1rem;
margin-left: 0;
margin-top: 0rem;
width: 100%;
flex-direction: column;
}
h1 {
font-family: Lato;
}
h2 {
font-family: Lato;
max-width: 650px;
}
p {
/* margin-bottom: 0.5rem; */
max-width: 650px;
font-family: Lato;
}
`

// const Numbers = styled(StyledSectionFlex)`
//   @media (max-width: 960px) {
//     display: none;
//   }
// `

const Title = styled.h1`
/* font-size: 3rem; */
margin-bottom: 4rem;
font-size: 72px;
font-family: Lato;
pointer-events: none;
white-space: wrap;
overflow-wrap: normal;
max-width: 1200px;
/* text-align: center; */
@media (max-width: 960px) {
font-family: Lato;
font-size: 2rem;
}
`

const InternalLink = styled(Link)`
border-radius: 8px;
color: ${({ theme }) => theme.textColor};
font-family: Lato;
font-weight: 600;

&:not(:last-child) {
margin-right: 1rem;
}

h2 {
font-family: Lato;
margin: 0;
}

transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
:hover {
transform: translate3d(2px, 2px, 10px);
}
`

export const GET_BLOCK = gql`
query blocks($timestamp: Int!) {
blocks(first: 1, orderBy: timestamp, orderDirection: asc, where: { timestamp_gt: $timestamp }) {
id
number
timestamp
}
}
`

export const ETH_PRICE = block => {
const queryString = block
? `
query bundles {
bundles(where: { id: ${1} } block: {number: ${block}}) {
id
ethPrice
}
}
`
: ` query bundles {
bundles(where: { id: ${1} }) {
id
ethPrice
}
}
`
return gql(queryString)
}

const APOLLO_QUERY = gql`
{
uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f") {
totalVolumeUSD
totalLiquidityUSD
pairCount
}
bundle(id: 1) {
ethPrice
}
}
`

export const UNISWAP_GLOBALS_24HOURS_AGO_QUERY = block => {
let queryString = `
query uniswapFactory {
uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", block: { number: ${block} }) {
totalVolumeUSD
totalLiquidityUSD
pairCount

    }
}
`
return gql(queryString)
}

const SampleInput = props => {
dayjs.extend(utc)
const utcCurrentTime = dayjs()
const utcOneDayBack = utcCurrentTime.subtract(1, 'day').unix()

    const { data: blockData } = useQuery(GET_BLOCK, {
        client: blockClient,
        variables: {
            timestamp: utcOneDayBack
        }
    })
    const oneDayBackBlock = blockData?.blocks?.[0]?.number
    const { data } = useQuery(APOLLO_QUERY, { pollInterval: 10000, client: client })

    const [oneDayResult, setOnedayResult] = useState()

    useEffect(() => {
        async function getData() {
            let result = await client.query({
                query: UNISWAP_GLOBALS_24HOURS_AGO_QUERY(oneDayBackBlock),

                fetchPolicy: 'cache-first'
            })
            if (result) {
                setOnedayResult(result?.data?.uniswapFactory)
            }
        }
        if (oneDayBackBlock) {
            getData()
        }
    }, [oneDayBackBlock])

    let UniStats = {
        key: function(n) {
            return this[Object.keys(this)[n]]
        }
    }

    if (data && oneDayResult) {
        const volume24Hour = parseFloat(data?.uniswapFactory?.totalVolumeUSD) - parseFloat(oneDayResult?.totalVolumeUSD)

        UniStats.volume = [
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                notation: 'compact',
                compactDisplay: 'short'
            }).format(volume24Hour)
        ]
        UniStats.liquidity = [
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                notation: 'compact',
                compactDisplay: 'short'
                // maximumSignificantDigits: 5
            }).format(data.uniswapFactory.totalLiquidityUSD)
        ]
        UniStats.exchanges = [Number.parseFloat(data?.uniswapFactory?.pairCount)]

        UniStats.ETHprice = [
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                notation: 'compact',
                compactDisplay: 'short',
                maximumSignificantDigits: 5
            }).format(parseFloat(data?.bundle?.ethPrice)),
            '<small> Uni ETH Price </small>'
        ]
    }

    return (
        <Layout path={props.location.pathname}>
            <BG />
            <SEO title="How It Works" path={props.location.pathname} />
            <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ paddingBottom: '4rem' }}>
            API Sample: Security Cash Flow
          </Title>
          <h2 style={{ fontFamily: 'Lato', paddingBottom: '4rem' }}>
            <span><strong>Tutorial on using the API to generate cash flows for a given security.</strong></span>{' '}
          </h2>

          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
              <h3>Coming Soon</h3>
              <div markdown={"1"}>
This document specifies the input file for running security analytics as a batch process. It also includes a tutorial
on how to submit a Batch.

# Batch Security Analytics Input File Specification

## File Format

plain text file, comma separated values (CSV)

## File Naming Convention

Please name your input file per the following convention:

[client_id]_[as_of_date]_SUBMIT.csv

Where:
- [client_id] is your Client Id which can be found in the FITE DApp (distributed application)
- [as_of_date] is the Effective Date formated &apos;yyyymmdd&apos; for which you want to run analytics; this date will be used for any of the input
records where as_of_date is not populated

Example Input File name:

3ba864a1-83b7-41bc-a27f-0d247b34ebeb_20211202_SUBMIT.csv

Any record in the above file that DOES NOT have an as_of_date will be populated with the date &apos;20211202&apos; or 02 DECEMBER 2021

## File Structure

### File Fields

Each row in the file must have the following fields:
- security_id (if blank then row skipped)
- as_of_date (if blank then date from input file name)
- price (if blank then 100)

### File Separator

Each row must have comma (&apos;,&apos;) separators.

### String / Text Field Treamtment and use of Quotes

Each row in the file is treated as string data (text), so quotes are not used to identify strings. No single or
double quotes are required in the file.

### File Headers

The file may have column (field) headers but headers are not required.

If the header row has the fields labeled exactly as follows:
- security_id
- as_of_date
- price
Then the file will be read according to the order of the columns and any other columns will be disregarded.

If the header row exists but does not contain one of the above fields, the header will be disregarded and the file
will be processed in the Default File Parsing Order.

### Default File Parsing Order

The following field order will be processed for each row in the input file:
- security_id
- as_of_date
- price

### Example File

```
security_id,as_of_date,price
912796G29,20210302,99.983958
```

The above file saved as [client_id]_[as_of_date]_SUBMIT.csv will generate a results file with one security result,
for 912796G29.



              </div>
          </StyledSectionFlex>
        </span>
            </StyledAbout>
        </Layout>
    )
}

export default SampleInput

