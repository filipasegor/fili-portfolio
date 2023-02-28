import styles from '../../../styles/works/Bubbles.module.scss'

export default function Bubble(props) {
  return (
    <>
    <div className={styles.Wrapper}>
        <div className={styles.smallBubble}>
            <h3 className={styles.headerWrapper}>
                {props.small_H}
            </h3>
            <div className={styles.textWrapper}>
                {props.small_P}
            </div>
        </div>
        <div className={styles.largeBubble}>
            <h3 className={styles.headerWrapper}>
                {props.large_H}
            </h3>
            <div className={styles.textWrapper}>
                <div className={styles.textWrapperInner}>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
