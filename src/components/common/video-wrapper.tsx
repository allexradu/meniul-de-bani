'use client'
import { styled } from 'styled-components'

export const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.sizes[2]};
`

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
`
