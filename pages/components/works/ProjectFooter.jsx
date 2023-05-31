
import styles from '../../../styles/works/ProjectFooter.module.scss'
import { FormattedMessage } from "react-intl";

export default function ProjectFooter(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Line}></div>
        <p>
          <FormattedMessage id="deadline" /> {props.date}
        </p>
      </div>
    </>
  );
}
