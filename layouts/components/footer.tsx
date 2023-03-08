import React from 'react'
import { Breakpoint, Container } from '@mui/material'
import Box from '@mui/material/Box'

interface FooterProps {
    maxWidth?: false | Breakpoint | undefined
}

export default function Footer({ maxWidth }: FooterProps) {
    return (
        <Box>
            <Container className='flex justify-center bg-primary-light leading-10' maxWidth='100%'>Footer</Container>
        </Box>
    )
}
