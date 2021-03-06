import { getSortedPostsData, getSortedTopics } from '../src/lib/posts'
import { GetStaticPropsResult } from 'next'
import { PostData } from '../src/types/posts'
import React, { ReactElement } from 'react'
import { Grid, Typography } from '@material-ui/core'
import styles from '../styles/Shared.module.css'
import Box from '@material-ui/core/Box'
import TopicsDisplay from '../src/components/TopicsDisplay'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Preview } from '../src/components/Preview'
import Head from 'next/head'
import { NAME, NAME_AND_DOMAIN } from '../src/types/constants'
import SocialIcons from '../src/components/SocialIcons'
import Donations from '../src/components/Donations'
import Link from 'next/link'
import { Chip } from '@material-ui/core'

const Home = ({ postsData, sortedTopics }: { postsData: PostData[]; sortedTopics: string[] }): ReactElement => {
  const large = useMediaQuery('(min-width:700px)')

  return (
    <>
      <Head>
        <title>{NAME}: Culturing myself one post at a time.</title>
        <meta
          name="description"
          content={`${NAME} is my personal blog where I write technically on things I'm interested in, most of which are non-technical.`}
        />
      </Head>
      <Grid container>
        <Grid item xs={12} className={styles.headings}>
          <Box p={5}>
            <Typography variant={large ? 'h1' : 'h4'}>{NAME_AND_DOMAIN}</Typography>
            <Typography className={styles.secondHeading} variant={large ? 'h6' : 'h6'}>
              Hi! I'm Ben Schreck. I write here on crypto, skateboarding, fermentation, gardening, and other non-connected things.
              <br></br>
              <Link href="/aboutme">
                More about me
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <SocialIcons/>
        </Grid>
        <Grid item xs={12}>
          <Donations/>
        </Grid>
        <Grid item xs={12}>
          <TopicsDisplay topics={sortedTopics} n={5} />
        </Grid>
        <Grid item xs={12}>
          <Box pt={3}>
            <Preview posts={postsData} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    postsData: PostData[]
    sortedTopics: string[]
  }>
> => {
  const sortedTopics = getSortedTopics()
  const postsData = getSortedPostsData()
  return {
    props: {
      postsData: postsData,
      sortedTopics,
    },
  }
}

export default Home
