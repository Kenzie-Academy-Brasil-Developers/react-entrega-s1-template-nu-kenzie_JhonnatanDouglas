import styled, { css } from 'styled-components';

export const TittleFontDefault = css`
  font-family: var(--font-family-default);
  font-style: normal;
`

export const TittleH1 = styled.h1`
  ${TittleFontDefault}
  font-weight: var(--font-weight-1);
  font-size: var(--font-size-1);
  line-height: var(--line-height-1);
  color: var(--color-grey-4);
`

export const TittleH2 = styled.h2`
  ${TittleFontDefault}
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);
  color: var(--color-grey-4);
`

export const TittleH3 = styled.h3`
  ${TittleFontDefault}
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  color: var(--color-grey-4);
`

export const TittleH4 = styled.h4`
  ${TittleFontDefault}
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-4);
  line-height: var(--line-height-4);
  color: var(--color-grey-4);
`

export const Paragraph = styled.p`
  ${TittleFontDefault}
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-4);
  line-height: var(--line-height-5);
  color: var(--color-grey-2);
`

export const Label = styled.label`
  ${TittleFontDefault}
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-3);
  line-height: var(--line-height-5);
  color: var(--color-grey-4);
`

