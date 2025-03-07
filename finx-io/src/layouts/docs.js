import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from './index'
import SidebarV2 from '../components/sidebarV2'
import SidebarV1 from '../components/sidebarV1'
import SEO from '../components/seo'
import TableofContents from '../components/toc'
import Github from '../images/githubicon.inline.svg'
import { GlobalStyle } from '../styles/theme'
import '../styles/prism-github.css'
// import { defaultModules } from "@pnotify/core";
// import { PNotify } from "../components/PNotify";
import { useMediaQuery } from '@react-hook/media-query'

const StyledDocs = styled.div`
  font-family: Lato;
  display: grid;
  grid-template-columns: 280px 1fr 180px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 80px;
  }
`;

const StyledMDX = styled.div`
  font-family: Lato;
  min-width: 550px;
  max-width: 768px;
  padding: 0;
  margin-bottom: 3rem;
  margin-top: 4rem;
  a {
    color: ${({ theme }) => theme.colors.link};
  }

  code {
    background-color: ${({ theme }) => theme.colors.grey2};
    color: ${({ theme }) => theme.colors.grey8};
  }

  @media (max-width: 960px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const StyledDocsNavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  margin-top: 2rem;
  padding-top: 3rem;
`;
const StyledDocsNav = styled.li`
  @media (max-width: 960px) {
    width: 100%;
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 0rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  small {
    font-size: 0.75rem;
    opacity: 0.6;
  }
`;

const StyledPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  /* align-items: center; */

  h1 {
    font-size: 2.5rem !important;
    margin-top: 0px !important;
  }

  a {
    color: ${({ theme }) => theme.colors.grey6};
    display: inherit;
    font-size: 0.825rem;
  }
`;

const StyledGithubIcon = styled(Github)`
  width: 16px;
  margin-right: 6px;
  path {
    fill: ${({ theme }) => theme.colors.grey9};
  }

  :before {
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;

    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.grey9};
    opacity: 0.2;
  }
`;

const StyledGithubLink = styled.a`
  padding-bottom: 1.5rem;
`;

const Docs = props => {
    const [, forceUpdate] = useState(null);
    const data = useStaticQuery(graphql`
        {
          site {
            siteMetadata {
              commit
              repository
            }
          }
          allMdx(filter: { fileAbsolutePath: { regex: "/docs/" } }, sort: { order: ASC, fields: fileAbsolutePath }) {
            edges {
              node {
                id
                excerpt(pruneLength: 40)
                headings {
                  value
                  depth
                }
                frontmatter {
                  title
                }
                fields {
                  slug
                  subDir
                  rawSlug
                  parentDir
                }
              }
              next {
                frontmatter {
                  title
                }
                fields {
                  slug
                  subDir
                  parentDir
                  topLevelDir
                }
              }
              previous {
                frontmatter {
                  title
                }
                fields {
                  slug
                  parentDir
                  subDir
                  topLevelDir
                }
              }
            }
          }
        }
      `);
  const isV1 = props.path.slice(0, 8) === '/docs/v1';
  const isMobile = useMediaQuery('(max-width: 960px)');

  useEffect(() => {
      forceUpdate(true);
      try {
          document.getElementById('get_api_key_button').onclick = () => {
              // const notice = PNotify.noticeNotification('Get API Key', 'Enter an email address to associate to your API key.', true);
              // notice.on('pnotify:confirm', e => {
              //     notice.cancelClose();
              //     let update_params = null;
              //     const email_address = e.detail.value;
              //     if (email_address === "") {
              //         update_params = {
              //             title: 'Oops!',
              //             text: 'Please a valid email address.'
              //         };
              //     }
              //     else
              //         update_params = {
              //             title: `Requesting API key for ${email_address}`,
              //             text: 'Your API key request status will be emailed to you shortly.',
              //             icon: true,
              //             sticker: true,
              //             type: 'info',
              //             hide: true,
              //             modules: new Map(defaultModules),
              //             delay: Infinity
              //         };
              //     notice.update(update_params);
              //     if (update_params.title !== 'Oops!') {
              //         //'https://sandbox.finx.io/api/generate-key/'
              //         fetch('http://54.200.36.82/api/generate-key/', {
              //             method: 'POST',
              //             headers: {
              //                 'Content-Type': 'application/json',
              //                 'Accept': 'application/json'
              //             },
              //             body: JSON.stringify({email_address: email_address})
              //         }).then(response => response.json());
              //     }
              // });

              const email_address = prompt('Please enter your email address');
              if (email_address != null) {
                  if (email_address !== '') {
                      alert(`Requesting API key for ${email_address}. Your API key request status will be emailed to you shortly.`);
                      fetch('https://sandbox.finx.io/api/generate-key/', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                          },
                          body: JSON.stringify({email_address: email_address})
                      }).then(response => response.json())
                  }
                  else
                      alert('Please enter a valid email address');
              }
          };
      }
      catch(e) {
          console.log(e);
      }
  });


  return (
    <Layout path={props.location.pathname} isDocs={true}>
      <SEO title={props.pageContext.frontmatter.title} path={props.location.pathname} />
      <GlobalStyle />
      {data.allMdx.edges
        .filter(({ node }) => {
          return node.fields.slug === props.path
        })
        .map(({ node }) => {
          const title = node.fields.subDir
            .replace(/\d+-/g, '')
            .replace(/-/g, ' ')
            .replace(/(^|\s)\S/g, function(t) {
              return t.toUpperCase()
            })
          return (
            <SEO
              key={node.fields.slug}
              title={props.pageContext.frontmatter.title}
              site={'Fite Analytics ' + title}
              path={props.location.pathname}
              description={node.excerpt}
            />
          )
        })}
      <StyledDocs id="docs-header">
        {!isMobile && (isV1 ? <SidebarV1 parent={'/docs/'} {...props} /> : <SidebarV2 parent={'/docs/'} {...props} />)}
        <StyledMDX>
          <StyledPageTitle>
            <small style={{ marginBottom: '.5rem' }}>
              {data.allMdx.edges
                .filter(({ node }) => {
                  return node.fields.slug === props.path && node.fields.slug !== '/docs/v2/'
                })
                .map(({ node }) => {
                  return node.fields.rawSlug
                    .split('/')[3]
                    .replace(/\d+-/g, '')
                    .replace(/-/g, ' ')
                    .replace(/(^|\s)\S/g, function(t) {
                      return t.toUpperCase()
                    })
                })}
            </small>
            <h1>{props.pageContext.frontmatter.title}</h1>
            <div style={{ display: 'flex' }}>
              {data.allMdx.edges
                .filter(({ node }) => {
                  return node.fields.slug === props.path && node.fields.slug !== '/docs/v2/'
                })
                .map(({ node }) => {
                  return (
                    <StyledGithubLink
                      key={node.id}
                      href={
                        data.site.siteMetadata.repository +
                        '/tree/' +
                        data.site.siteMetadata.commit +
                        '/src/pages' +
                        node.fields.rawSlug.slice(0, -1) +
                        '.md'
                      }
                    >
                      <StyledGithubIcon /> Improve this article
                    </StyledGithubLink>
                  )
                })}
            </div>
          </StyledPageTitle>

          {props.children}

          {data.allMdx.edges
            .filter(({ node }) => {
              return node.fields.slug === props.path
            })
            .map(({ node, next, previous }) => {
              return (
                <StyledDocsNavWrapper key={node.id}>
                  <StyledDocsNav>
                    {/* index_bak.md file is considered the "last" based on the sort order. Check to remove links when not relevant */}
                    {previous &&
                      node.fields.slug !== '/docs/v2/' &&
                      previous.fields.parentDir === node.fields.parentDir && (
                        <StyledLink style={{ alignItems: 'flex-end' }} to={previous.fields.slug} rel="prev">
                          <small>Previous</small>
                          <span>← {previous.frontmatter.title}</span>
                        </StyledLink>
                      )}
                  </StyledDocsNav>
                  <StyledDocsNav>
                    {/* index_bak.md file is considered the "last" based on the sort order. Check to remove when not relevant */}
                    {next && next.fields.slug !== '/docs/v2/' && next.fields.parentDir === node.fields.parentDir && (
                      <StyledLink style={{ alignItems: 'flex-start' }} to={next.fields.slug} rel="next">
                        <small>Next</small>
                        <span>{next.frontmatter.title} →</span>
                      </StyledLink>
                    )}
                    {node.fields.slug === '/docs/v2/' && (
                      <StyledLink style={{ alignItems: 'flex-start' }} to={'/docs/v2/protocol-overview/'} rel="next">
                        <small>Next</small>
                        <span>How Fite Analytics works →</span>
                      </StyledLink>
                    )}
                  </StyledDocsNav>
                </StyledDocsNavWrapper>
              )
            })}
        </StyledMDX>

        {data ? (
          data.allMdx.edges
            .filter(({ node }) => {
              return node.fields.slug === props.path
            })
            .map(({ node }) => {
              return <TableofContents path={props.path} key={node.id} headings={node.headings} />
            })
        ) : (
          <div style={{ width: '160px', height: '60px' }}></div>
        )}
      </StyledDocs>
    </Layout>
  )
}

export default Docs
