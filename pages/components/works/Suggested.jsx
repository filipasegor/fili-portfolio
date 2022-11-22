import Image from 'next/image'
import {useState, useEffect} from "react"

import styles from '../../../styles/works/Suggested.module.scss'

import rkeeper from '../../../public/rkeeper.png'
import charus_site from '../../../public/charus_site.png'
import bashnya from '../../../public/bashnya.png'
import som from '../../../public/som.png'
import olimpatlet from '../../../public/olimp_atlet.png'
import beans from '../../../public/beans.png'
import neo from '../../../public/neo.png'
import lk from '../../../public/lk.png'
import bionum from '../../../public/bionum.png'
import cil from '../../../public/cil.png'
import pack from '../../../public/pack.png'

import thumbShmot from '../../../public/thumbShmot.png'
import thumbCharus from '../../../public/thumbCharus.png'
import thumbNhs from '../../../public/thumbNhs.png'
import thumbBezlimit from '../../../public/thumbBezlimit.png'
import thumbDeff from '../../../public/thumbDeff.png'
import thumbIir from '../../../public/thumbIir.png'
import thumbMMS from '../../../public/thumbMMS.png'
import thumbLip from '../../../public/thumbLip.png'
import thumbRunup from '../../../public/thumbRunup.png'
import thumbNeosite from '../../../public/thumbNeosite.png'

export default function Suggested(props) {

  return (
    <>
    <div className={styles.suggestedWrapper}>
      <h1 className={styles.suggestedTitle}>
      Еще проекты:
      </h1>
        {props.children}
    </div>
    </>
  )
}
