import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const PaddedParagraph = styled.p`
  padding: 1rem;
`

export const Code = styled.div`
  width: 100%;
  padding: 1rem;
  overflow-wrap: anywhere;
  display: inline-block;
  overflow: auto;
  pre {
    white-space: pre-wrap;
  }
  * {
    display: block;
  }
  a,
  code,
  em,
  strong {
    display: inline-block;
  }
  style,
  blockquote {
    white-space: pre-wrap;
  }
`
