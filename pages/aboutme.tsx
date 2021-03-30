import React, { FC, ReactElement } from 'react'
import * as stylesSlug from '../styles/Slug.module.css'
import styles from '../styles/Shared.module.css'
import { PageHeading } from '../src/components/PageHeading'
import { Grid, Card, CardMedia, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { GetStaticPropsResult } from 'next'
import { getSortedTopics } from '../src/lib/posts'
import TopicsDisplay from '../src/components/TopicsDisplay'
import SocialIcons from '../src/components/SocialIcons'
import Donations from '../src/components/Donations'

type AboutMeProps = { topics: string[] }

export const AboutMe: FC<AboutMeProps> = ({ topics }): ReactElement => {
  const large = useMediaQuery('(min-width:700px)')
  return (
      <Grid container>
        <Grid item xs={12} className={styles.headings}>
          <Box p={5}>
            <Typography variant={large ? 'h1' : 'h4'}>{"About Me"}</Typography>
            <div className={stylesSlug['image-container']}>
              <Card className={stylesSlug['small-image']}>
                <CardMedia component="img" image={`/large/headshot.png`}>
                </CardMedia>
              </Card>
            </div>
            <div className={stylesSlug['post-container']}>
              <Typography variant={"body1"}>
                Hi! I'm Ben. I'm a software engineer and a ...
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <SocialIcons/>
        </Grid>
        <Grid item xs={12}>
          <Donations/>
        </Grid>
      </Grid>
  )
}

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    topics: string[]
  }>
> => {
  const sortedTopics = getSortedTopics()

  return {
    props: {
      topics: sortedTopics,
    },
  }
}

export default AboutMe
