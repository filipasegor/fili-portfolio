import styles from '../../../styles/works/TaskDesc.module.scss'

import { FormattedMessage } from "react-intl";

export default function TaskDesc(props) {

  return (
    <div className={styles.innerWrapper}>
        {/* <h3 className={styles.name}
        >
          <FormattedMessage id={props.taskName} />
        </h3>
        <p>
          <FormattedMessage id={props.taskDesc} />
        </p> */}
        {props.children}
    </div>
  );
}
