'use client'
import { styled } from 'styled-components'

export const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    margin-bottom: 20px;
    /* Remove any border property or change it to match your theme */
    border: 1px solid #269665; /* Change from black to your primary color */
    /* Also update any box-shadow */
    box-shadow: 0 2px 5px rgba(38, 150, 101, 0.1);
`

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none; /* Remove any border on the iframe itself */
`
