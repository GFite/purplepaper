import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Button } from '../components/button'
import Wizard from '../components/wizard'
import ProtocolData from '../components/protocolData'
import PlatformData from '../components/platformData'

import { useDarkMode } from '../contexts/Application'

import { CardBGImage, CardFade, CardNoise, StyledExternalLink } from '../components/utils'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-WWQGVVV'
}

TagManager.initialize(tagManagerArgs)

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  /* max-width: 1200px; */
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  opacity: 0.2;
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    max-height: 1220px;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  font-family: Lato;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 960px) {
    margin-bottom: 0;
    font-family: Lato;
    padding: 2rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-family: Lato;
  justify-content: center;
  will-change: transform;
  margin: 3rem 0 4rem 0;
  margin-bottom: 12rem;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
    margin-bottom: 4rem;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 96px;
  margin: 4rem 0 3rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Lato', 'GT Haptik Regular';
  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`
const StyledBodySubTitle = styled.h2`
  font-family: Lato;
  @media (max-width: 640px) {
    text-align: left;
    font-family: Lato;
  }
`

const StyledBodySubText = styled.h3`
  font-family: Lato;
  max-width: 960px;
  text-align: center;
  line-height: 160%;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBannerImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 260px;
  max-width: 720px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 0px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
  }
`

const StyledProductImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 220px;
  max-width: 220px;
  background-color: none;
  border-radius: 0px;
  box-shadow: ${({ theme }) => theme.shadows.huge};

  /* @media (max-width: 960px) {
    min-width: 120px;
    max-width: 120px;
  } */
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }

  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-family: Lato;
  }
  p {
    margin-bottom: 0.5rem;
    font-family: Lato;
  }
`

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const IndexPage = props => {
  const isDark = useDarkMode()

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      newYear: file(relativePath: { eq: "newyear.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      banner: file(relativePath: { eq: "fite_partners.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      batch: file(relativePath: { eq: "batch.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      api: file(relativePath: { eq: "api.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      security_analytics: file(relativePath: { eq: "bonds_colorful.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolio_analytics: file(relativePath: { eq: "portfolio.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sybil: file(relativePath: { eq: "sybil.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tokenlists: file(relativePath: { eq: "tokenlists.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discord: file(relativePath: { eq: "discord_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reddit: file(relativePath: { eq: "reddit_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discourse: file(relativePath: { eq: "discourse.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        <CardNoise />
        <CardBGImage isDark={isDark} />
        <CardFade />
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'A fully decentralized protocol for automated corporate liquidity'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Capital Markets Data & Analytics</StyledBodyTitle>
          <StyledBodySubTitle style={{ marginBottom: '3rem' }}>
            Comprehensive coverage of the global bond markets, in the cloud.
          </StyledBodySubTitle>
          <StyledItemRow>
            <Button
              style={{
                background: `linear-gradient(128.17deg, #7A1C99 -14.78%, #D3FF7A 110.05%)`,
                color: 'white',
                fontSize: '20px'
              }}
              href="/how-it-works"
            >
              How It Works
            </Button>
            <Button
              outlined
              to="/docs/v2/methodology/glossary"
              as={Link}
              style={{
                fontSize: '20px'
              }}
            >
              Documentation
            </Button>
            <Button
              outlined
              to="/faq"
              as={Link}
              style={{
                fontSize: '20px'
              }}
            >
              FAQ
            </Button>
          </StyledItemRow>
        </StyledTitle>
        <ProtocolData />

        <DeveloperSection data={data} props={props} />
        <ProductsSection data={data} props={props} />
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Lato';
  margin-top: 10rem;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
`

const DeveloperSection = props => {
  return (
    <>
      <StyledSectionTitle>One Subscription for All Sectors of the Global Bond Markets.</StyledSectionTitle>
      <StyledBodySubText>
        A single subscription includes all reference data -- terms and conditions, schedules, curves, swap rates and prepayment models.
      </StyledBodySubText>
        <PlatformData />
      <StyledBannerImage fadeIn={false} fluid={props.data.banner.childImageSharp.fluid} />
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionTitle>Analytics for Securities and Portfolios</StyledSectionTitle>
      <StyledBodySubText>
          Analyze any security as of any date, at any price.<br/>Submit 3 data points - <strong>SECURITY ID, DATE,
          PRICE</strong> - and receive a full analysis of the security.
      </StyledBodySubText>
        <StyledBodySubText>
            Analyze any portfolio as of any date, at market or scenario prices.<br/>Submit portfolio holdings information
            and receive calculations on <strong>Portfolio Risk, Return and Performance Attribution.</strong>
        </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'/docs/v2/methodology/security-analytics'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.security_analytics.childImageSharp.fluid} />Security Analytics
        </StyledExternalLink>
        <StyledExternalLink href={'/docs/v2/methodology/portfolio-analytics'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.portfolio_analytics.childImageSharp.fluid} />Portfolio Analytics
        </StyledExternalLink>
      </StyledItemRow>

      <StyledSectionTitle>Get Results via API or Batch</StyledSectionTitle>
      <StyledBodySubText>
            Make individual API requests over HTTP, or send us a large list of securities to analyze and we will send you back the
            results. All of our calculations are available through either delivery mode, including complex result sets such as
            cash flow vectors, scenario and stress tests, and key rate durations.
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'/how-it-works'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.api.childImageSharp.fluid} />API
        </StyledExternalLink>
        <StyledExternalLink href={'/how-it-works'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.batch.childImageSharp.fluid} />BATCH
        </StyledExternalLink>
      </StyledItemRow>

      <StyledSectionTitle>Superpowers for Quantitative Developers.</StyledSectionTitle>
      <StyledBodySubText>
        Check out the <Link to="/docs/v2/">documentation</Link>, the{' '}
        <Link to="/docs/v2/technology/developer-guide">quick start</Link> or a guide below to integrate your workflows and
          your portfolio content with APIs and batch processes.
      </StyledBodySubText>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
      </StyledSectionFlex>

      <StyledSectionTitle>A global community of Bond Enthusiasts.</StyledSectionTitle>
      <StyledBodySubText>
        Learn more about Fite Analytics, chat with the team, others in the community, and have your say in shaping the future
        of the platform.
      </StyledBodySubText>
      <StyledItemRow>
        <StyledExternalLink href={'https://discord.gg/edAfmhvSev'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.discord.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://twitter.com/fiteanalytics'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.twitter.childImageSharp.fluid} />
        </StyledExternalLink>
        <StyledExternalLink href={'https://www.reddit.com/r/fiteanalytics'} target="_blank">
          <StyledProductImage fadeIn={false} fluid={props.data.reddit.childImageSharp.fluid} />
        </StyledExternalLink>
      </StyledItemRow>
    </>
  )
}
