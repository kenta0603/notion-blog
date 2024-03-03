import styles from '../styles/post.module.css'

export const Callout = ({text}) => {

  return (
    <div className={styles.space}>
      <div className={styles.callout}>
          <div className={styles.calloutContent}>
            <p>{text}</p>
          </div>
      </div>
    </div>
  )
}