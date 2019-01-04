// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
`

const Ring = styled.span`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  margin: 2px;
  border: 2px solid currentColor;
  border-radius: 50%;
  animation: ${rotate360} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;

  :nth-child(1) {
    animation-delay: -0.45s;
  }

  :nth-child(2) {
    animation-delay: -0.3s;
  }

  :nth-child(3) {
    animation-delay: -0.15s;
  }
`

export default function Spin(props: Props): React$Element<*> {
  return (
    <Wrapper {...props}>
      <Ring />
      <Ring />
    </Wrapper>
  )
}
