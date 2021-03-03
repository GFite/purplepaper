import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import gql from 'graphql-tag'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useQuery } from '@apollo/react-hooks'
import { client, blockClient } from '../../apollo/client'

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

const CashFlowSample = props => {
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
          </StyledSectionFlex>
        </span>
            </StyledAbout>
        </Layout>
    )
}

export default CashFlowSample
