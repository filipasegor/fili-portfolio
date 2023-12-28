import styles from "./styles.module.scss";

export default function Headline(props) {
  return (
    <>
      <h1 className={styles.headline} style={props.style}>
        {props.children}
      </h1>
    </>
  );
}
