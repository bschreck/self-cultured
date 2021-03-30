import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon';
import { Btc, Eth, Xtz } from 'react-cryptocoins';
import { BTC_ADDRESS, ETH_ADDRESS, XTZ_ADDRESS, USDC_ADDRESS, DAI_ADDRESS } from '../types/constants'
import {Icon, InlineIcon } from '@iconify/react'
import usdcIcon from '@iconify-icons/cryptocurrency/usdc'



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
  },
  addressText: {
    margin: "5px",
    verticalAlign: "middle",
    display: "inline"
  },
  outerCryptoDiv: {
    display: "inline",
    margin: '20px'
  },
  donationsText: {
    display: "inline",
    verticalAlign: "middle"
  }
})


// TODO: make these into class, so can be dynamic
function MyBtcAddress(props) {
  const classes = useStyles()
  return <div className={classes.outerCryptoDiv}>
    <Btc className={classes.icon}/>
    <Typography className={classes.addressText} variant="body1">{props.address}</Typography>
  </div>
}


function MyEthAddress(props) {
  const classes = useStyles()
  return <div className={classes.outerCryptoDiv}>
    <Eth className={classes.icon} />
    <Typography className={classes.addressText} variant="body1">{props.address}</Typography>
  </div>
}

function MyXtzAddress(props) {
  const classes = useStyles()
  return <div className={classes.outerCryptoDiv}>
    <Xtz className={classes.icon} />
    <Typography className={classes.addressText} variant="body1">{props.address}</Typography>
  </div>
}

//function MyUSDCAddress(props) {
//  const classes = useStyles()
//  return <div className={classes.outerCryptoDiv}>
//    <Icon icon={usdcIcon} className={classes.icon} />
//    <Typography className={classes.addressText} variant="body1">{props.address}</Typography>
//  </div>
//}

type DonationsProps = {
  noMargin?: boolean
}

const Donations = ({ noMargin = undefined }: DonationsProps): ReactElement => {
  const classes = useStyles()
  return (
    <div style={noMargin ? {} : { width: '90%', margin: 'auto', textAlign: 'center', display: 'block' }}>
      {/*<Typography className={classes.donationsText} variant="body1">Crypto donations accepted:</Typography>*/}
      <MyBtcAddress address={BTC_ADDRESS}/>
      <MyEthAddress address={ETH_ADDRESS}/>
      {/*<MyUSDCAddress address={USDC_ADDRESS}/>*/}
      {/*<MyXtzAddress address={XTZ_ADDRESS}/>*/}
    </div>
  )
}

export default Donations
