import styled from '@emotion/styled'

export const PaddedParagraph = styled.p`
  margin: 0;
  padding: 0 6rem;
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

export const Definitions = styled.dl`
  padding: 0 1rem;
  text-align: left;
`

export const Term = styled.dt`
  font-weight: bold;
  padding: 0 1rem;
`

export const Def = styled.dd`
  padding-left: 1rem;
  font-size: 0.8em;
`
