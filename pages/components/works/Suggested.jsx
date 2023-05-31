import Image from 'next/image'
import {useState, useEffect} from "react"

import styles from '../../../styles/works/Suggested.module.scss'
import { FormattedMessage } from "react-intl";


export default function Suggested(props) {

  return (
    <>
    <div className={styles.suggestedWrapper}>
      <h1 className={styles.suggestedTitle}>
        <FormattedMessage id="moreProjects" />
      </h1>
        {props.children}
    </div>
    </>
  )
}
