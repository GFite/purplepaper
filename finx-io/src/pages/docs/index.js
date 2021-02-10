import React from 'react'
import { Redirect } from '@react/router'

export default function Redirector({ path }) {
  return <Redirect from={path} to={`${path}v2/`} noThrow />
}
