import styles from './index.module.css'
function getImageUrl(path: string) {
  return new URL(path, import.meta.url).href
}

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.containerItem0}>
        <img className={styles.iconCircle1} src={getImageUrl('./images/img_0.png')} />
        <span className={styles.tag21}>构成指标</span>
      </div>
      <div className={styles.containerItem1}>
        <img className={styles.iconCircle2} src={getImageUrl('./images/img_1.png')} />
        <span className={styles.word12}>相关指标</span>
      </div>
      <div className={styles.containerItem2}>
        <img className={styles.iconPiece1} src={getImageUrl('./images/img_2.png')} />
        <span className={styles.label11}>影响度</span>
      </div>
      <div className={styles.containerItem3}>
        <img className={styles.horizontalLine} src={getImageUrl('./images/img_3.png')} />
        <span className={styles.label12}>相关度</span>
      </div>
    </div>
  )
}
export default Footer
