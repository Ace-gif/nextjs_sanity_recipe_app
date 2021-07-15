import Link from 'next/link'
import styles from '../styles/Home.module.css'

const about = () => {
    return (
        <div className={styles.main}>
            About Me

            <Link href="/" >
                <div className={styles.footer}>Home</div>
            </Link>
        </div>
    )
}

export default about
