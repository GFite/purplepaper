import React from 'react'
import { Redirect } from '@reach/router'

// export default function Redirector({ path }) {
//   return <Redirect from={path} to={`/whitepaper.pdf`} noThrow />
// }

export default function Redirector({ path }) {
  return <Redirect from={path} to={`~/src/pages/whitepaper.md`} noThrow />
}
