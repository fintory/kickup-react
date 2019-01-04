// @flow
import styled, { css } from 'styled-components'
import { media } from 'styled-bootstrap-grid'
import { rgba } from 'polished'
import { colors } from 'constants'

const backgroundColors = {
  default: colors.primary,
  light: colors.primaryLight,
  dark: colors.primaryDark,
  white: colors.white,
  transparent: 'transparent',
}

const fontColors = {
  default: colors.white,
  light: colors.primary,
  dark: colors.white,
  white: colors.primary,
  transparent: colors.white,
}

export const Button = styled.button`
  background-color: ${(props: { variant: string }) => backgroundColors[props.variant]};
  color: ${(props: { variant: string }) => fontColors[props.variant]};
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 14px;
  padding: 14px 16px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  outline: none;
  appearance: none;
  border: 0;
  width: ${(props: { block: boolean }) => (props.block ? '100%' : 'auto')}
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  transition: opacity 100ms linear;

  ${(props: { small?: boolean }) =>
    props.small &&
    css`
      padding: 8px 12px;
    `}

  ${(props: { margin: number }) =>
    props.margin &&
    css`
      margin-left: ${props.margin}px;
      margin-right: ${props.margin}px;
    `}

  :not([disabled]):hover {
    color: ${(props: { variant: string }) => fontColors[props.variant]};
    opacity: 0.9;
  }

  ${(props: { variant: string, disabled: boolean }) =>
    props.disabled &&
    css`
      opacity: 0.9;
      cursor: not-allowed;

      background-color: ${colors.shadeBeta};
      color: ${rgba(colors.white, 0.95)};
    `}

  ${media.lg`
    font-size: 14px;
  `}
`

export const Spinner = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition-duration: 250ms;
  position: absolute;
  top: -28px;
  height: 28px;
  left: 0;
  transform: ${(props: { loading: boolean }) =>
    props.loading ? 'translate3d(0, 2.5rem, 0)' : 'translate3d(0, 0, 0)'};
`

export const Content = styled.span`
  display: inline-block;
  width: 100%;
  transition-duration: 250ms;
  transform: ${(props: { loading: boolean }) =>
    props.loading ? 'translate3d(0, 2.5rem, 0)' : 'translate3d(0, 0, 0)'};

  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-top: -3px;
    margin-right: 12px;
  }
`
