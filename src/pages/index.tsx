import { css } from "linaria";

const styles = {
  title: css`
    color: red;
  `,
};

export default () => {
  return <div className={styles.title}>hello world!!</div>;
};
