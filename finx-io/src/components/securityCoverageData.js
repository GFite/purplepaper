import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import gql from 'graphql-tag'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useQuery } from '@apollo/react-hooks'
import { client, blockClient } from '../apollo/client'

const StyledSectionFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 960px;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-left: 0;
    margin-top: 0rem;
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 640px) {
    display: none;
  }
  h1,
  h2 {
    max-width: 650px;
  }
  p {
    max-width: 650px;
  }
`

const Numbers = styled(StyledSectionFlex)`
  @media (max-width: 940px) {
    /* display: none; */
  }
`

const BigNumbers = styled(StyledSectionFlex)`
  font-size: 30px;
  font-weight: 700;
  flex-direction: column;
  @media (max-width: 960px) {
    font-size: 28px;
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

const ProtocolData = () => {
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

    UniStats.fees = [
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short'
        // maximumSignificantDigits: 5
      }).format(volume24Hour * 0.003)
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
    <Numbers id="about" style={{ flexDirection: 'column' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
        <BigNumbers>
          <span>
            Corporate <span style={{ opacity: '0.1' }}> bonds</span>
          </span>
          <p style={{ fontSize: '14px' }}>Excellent coverage of global bonds in all currencies, and the ability to shock
          rates and curves in any currency. Fixed, floating and benchmarked rates maintained several times per day.</p>
        </BigNumbers>
        <BigNumbers>
          <span>
            Municipal <span style={{ opacity: '0.1' }}> bonds</span>
          </span>
          <p style={{ fontSize: '14px' }}>Complete LSEG/Mergent coverage of the North American municipal market including
          full schedules.</p>
        </BigNumbers>
        <BigNumbers>
          <span>
            Government <span style={{ opacity: '0.1' }}> treasury</span>
          </span>
          <p style={{ fontSize: '14px' }}>Comprehensive global coverage of government-issued securities.</p>
        </BigNumbers>
        <BigNumbers>
          <span>
            Leveraged <span style={{ opacity: '0.1' }}>loans</span>
          </span>
          <p style={{ fontSize: '14px' }}>IHS Markit LX Universe with terms, conditions and cash flows.</p>
        </BigNumbers>
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
        <BigNumbers>
            <span>
              Mortgage-Backed <span style={{ opacity: '0.1' }}>securities</span>
            </span>
          <p style={{ fontSize: '14px' }}>Intex terms & conditions and cash flows plus AD&Co prepayment precision, in the cloud.
          </p>
        </BigNumbers>
        <BigNumbers>
            <span>
              Asset-Backed <span style={{ opacity: '0.1' }}>securities</span>
            </span>
          <p style={{ fontSize: '14px' }}>Intex terms & conditions and cash flows plus Fite prepayment models on student loans,
          credit cards and other asset-backed sectors.</p>
        </BigNumbers>
        <BigNumbers>
            <span>
              CMO CDO CLO<span style={{ opacity: '0.1' }}></span>
            </span>
          <p style={{ fontSize: '14px' }}>Loan-level analysis with complete introspection.</p>
        </BigNumbers>
        <BigNumbers>
            <span>
              Hedge <span style={{ opacity: '0.1' }}>templates</span>
            </span>
          <p style={{ fontSize: '14px' }}>We have dense modeling capabilities that allow you to form your own hedge positions, or
          perform pre-trade ex ante simulations of hedges.</p>
        </BigNumbers>
      </div>
    </Numbers>
  )
}

export default ProtocolData
