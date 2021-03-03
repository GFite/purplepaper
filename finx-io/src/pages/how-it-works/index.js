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
import Button from '../../components/button'

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

const About = props => {
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
            How It Works
          </Title>
          <h2 style={{ fontFamily: 'Lato', paddingBottom: '4rem' }}>
            <span><strong>Batch Analytics and APIs </strong></span> for analyzing individual securities and portfolios.{' '}
          </h2>
            <h4>Send us a small amount of information (security id, date, price) and we send you back a battery of analytics on any security we cover (over 30 million).</h4>
            <h4>Send your portfolio holdings and/or transactions and receive detailed analysis and reports.</h4>
          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
              <h3>Batch Security Analytics</h3>
            <p>The <strong>Batch Security Analytics Service</strong> is a method to calculate large numbers of securities with a single
            request. Batch runs can contain up to 1,000,000 securities per batch.</p>
            <h4>The batch process is as follows:</h4>
            <ol type="1">
                <li>Submit a batch request file (&quot;SUBMIT_FILE&quot;)</li>
                <li>Fite Analytics processes calculations and generates results on the cloud platform</li>
                <li>Retrieve batch results file (&quot;RESULTS_FILE&quot;)</li>
            </ol>
            <h4>Files can be submitted and retrieved using a choice of:</h4>
            <ul>
                <li>Amazon Web Services S3 Buckets</li>
                <li>SFTP site</li>
                <li>Email</li>
            </ul>
            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
              <InternalLink to="/how-it-works/sample-input">
                  <strong>Security Analytics Input File Example and Tutorial</strong> <span style={{ fontSize: '11px' }}>↗</span>
              </InternalLink>
            </div>
          </StyledSectionFlex>

          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
            <h3>Batch Portfolio Analytics</h3>
              <p>Portfolios may be submitted for analysis using the <strong>Batch Portfolio Analytics Service</strong>. Portfolio snapshots (holdings) and/or
            portfolio transaction history is submitted via batch submit files, or maintained over time. We accommodate multiple formats and input styles.</p>
            <p>Contact us for information on the range of portfolio analytics available in batch format.</p>
            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
              <InternalLink to="/how-it-works/sample-portfolio-report">
                  <strong>Sample Portfolio Report</strong> <span style={{ fontSize: '11px' }}>↗</span>
              </InternalLink>
            </div>
          </StyledSectionFlex>

          <StyledSectionFlex id="about" style={{ flexDirection: 'column' }}>
              <h3>APIs</h3>
            <h4>APIs are currently available via HTTP (REST).</h4>
            <p>Each data point in the Batch RESULTS_FILE, or in the <a href={"/docs/v2/methodology/glossary"}>Glossary</a> can be calculated for any
            security at any point in time using minimal input parameters.</p>
            <p>API technical documentation, including the list of functions and data points, is available <a href={"/docs/v2/technology/api"}>here</a>.</p>
            <div style={{ display: 'flex', width: '100%', margin: 0 }}>
              <InternalLink to="/how-it-works/api-risk-sample">
                  <strong>Sample API Risk</strong> <span style={{ fontSize: '11px' }}>↗</span>
              </InternalLink>
              <InternalLink to="/how-it-works/api-cash-flow-sample">
                  <strong>Sample API Cash Flow</strong> <span style={{ fontSize: '11px' }}>↗</span>
              </InternalLink>
            </div>
          </StyledSectionFlex>
<div>
    <Button  href="/">
        home
    </Button>
</div>

        </span>
            </StyledAbout>
        </Layout>
    )
}

export default About
