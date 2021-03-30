import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  buttonPadding: {
    margin: '20px',
    padding: 3,
  },
  buttonPaddingNoMargin: {
    marginRight: '10px',
    marginTop: '3px',
  },
  innerTypo: {
    margin: "5px",
    verticalAlign: "middle",
    display: "inline"
  },
  icon: {
    verticalAlign: "middle",
  }
})


type SocialIconsProps = {
  noMargin?: boolean
}

const SocialIcons = ({ noMargin = undefined }: SocialIconsProps): ReactElement => {
  const classes = useStyles()
  // TODO: refactor into a list
  return (
    <div style={noMargin ? {} : { width: '90%', margin: 'auto', textAlign: 'center', display: 'block' }}>
        <a className={noMargin ? classes.buttonPaddingNoMargin : classes.buttonPadding} href="https://twitter.com/benschreck">
          <TwitterIcon className={classes.icon}/>
          <Typography className={classes.innerTypo}>@benschreck</Typography>
        </a>
        <a className={noMargin ? classes.buttonPaddingNoMargin : classes.buttonPadding}  href="https://www.instagram.com/culturedben">
          <InstagramIcon className={classes.icon}/>
          <Typography className={classes.innerTypo}>@culturedben</Typography>
        </a>
        <a className={noMargin ? classes.buttonPaddingNoMargin : classes.buttonPadding}  href="https://www.github.com/bschreck">
          <GitHubIcon className={classes.icon}/>
          <Typography className={classes.innerTypo}>@bschreck</Typography>
        </a>
    </div>
  )
}

export default SocialIcons
