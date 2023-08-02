import { Card } from "react-bootstrap"
import styles from '@/styles/components/tv/Footer.module.css'

export default function Footer() {
    return(
        <Card>
            <footer className={styles.footer}>
                <section className={styles.boxNow}>
                    <div className={styles.boxNowSenha}>
                        <h1>senha</h1>
                        <h2>CX001</h2>
                    </div>
                    <div className={styles.boxNowGuiche}>
                        <h1>Guichê</h1>
                        <h2>01</h2>
                    </div>
                </section>

                <section className={styles.boxAfter}>
                    <div>
                        <h1>senha</h1>
                        <h2>CX003</h2>
                        <h2>REL002</h2>
                    </div>
                    <div>
                        <h1>Guichê</h1>
                        <h2>4</h2>
                        <h2>7</h2>
                    </div>
                </section>
            </footer>

        </Card>
    )
}