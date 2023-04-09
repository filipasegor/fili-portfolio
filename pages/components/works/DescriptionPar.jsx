import styles from '../../../styles/works/DescriptionPar.module.scss'

export default function DescriptionPar(props) {

  return (
    <>
      <div className={styles.TextWrapper}>
          <div className={styles.Wrapper}
          style={
            {fontFamily: props.heading ? "RooftopBold" : "RooftopRegular",
              paddinTop: props.heading ? "-10px" : " ",
              marginBottom: props.lastChild ? "25px" : ""
            }
          }
          >
            {props.children}
          </div>
      </div>
    </>
  );
}
