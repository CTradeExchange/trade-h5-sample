import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BasicLayout } from '@/layouts'
import { Container } from '@mui/material'
import { useTranslation } from 'next-i18next'

function Home() {
    const { t, i18n } = useTranslation(['common'])
    return <BasicLayout>
        <Container className='flex justify-center pt-20'>
            {t('home.text')}
        </Container>
    </BasicLayout>
}

export const getStaticProps: GetStaticProps = async (req) => ({
    props: {
        ...(await serverSideTranslations(`${req.locale}`, ['common', 'auth'])),
    },
})

export default Home
