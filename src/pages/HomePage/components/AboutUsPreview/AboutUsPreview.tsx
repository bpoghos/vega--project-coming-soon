import { Button } from 'react-bootstrap'
import styles from './AboutUsPreview.module.scss'
import { AboutUsPreviewContent } from '../../../../shared/enum'

const AboutUsPreview = () => {
    return (
        <section className={styles.aboutUsPreview}>
            <div className={styles.content}>
                <h2 className={styles.description}>{AboutUsPreviewContent.Description}</h2>
                <Button className={styles.button}>{AboutUsPreviewContent.ButtonText}</Button>
            </div>
        </section>
    )
}

export default AboutUsPreview
