import styles from '@/styles/modal.module.css'
import { useState } from 'react'

export default function ModalAlertCaixa (props: any) {
    const [status, setStatus] = useState('')


    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={() => props.onOptionSelected(1)}>Normal</button>
                <button onClick={() => props.onOptionSelected(2)}>Preferencial</button>
            </div>
        </div>
    )
}