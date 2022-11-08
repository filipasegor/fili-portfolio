import Image from 'next/image'
import {useState, useEffect} from "react"

import styles from '../../../styles/works/Suggested.module.scss'

export default function Suggested(props) {

  return (
    <>
    <div className={styles.suggestedWrapper}>
      <h1 className={styles.suggestedTitle}>
      See more
      </h1>
        {props.children}
    </div>
    </>
  )
}
