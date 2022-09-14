import styles from './Hero.module.css'
import classNames from 'classnames/bind'

export default function Hero(props) {
  return (
    <section className={styles.sectionProcess}>
            <div>
                <div className={classNames(styles.processStepsContainer)}>
                    <div className={classNames(styles.processStepContainer, styles.processStep1)}>
                        <div className={styles.processStepTitleContainer}>
                          <h1 className={styles.processStepTitle}>{props.title1}</h1>
                          <div className={styles.processStepTitleOverlay}>{props.title1}</div>
                        </div>
                    </div>
                    <div className={classNames(styles.processStepContainer, styles.processStep2)}>
                        <div className={styles.processStepTitleContainer}>
                          <h1 className={styles.processStepTitle}>{props.title2}</h1>
                          <div className={styles.processStepTitleOverlay}>{props.title2}</div>
                        </div>
                    </div>
                    <div className={classNames(styles.processStepContainer, styles.processStep3)}>
                        <div className={styles.processStepTitleContainer}>
                          <h1 className={styles.processStepTitle}>{props.title3}</h1>
                          <div className={styles.processStepTitleOverlay}>{props.title3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}