import {format} from 'date-fns'

import { Card } from "react-bootstrap";
import Image from "next/image";
import sicoobIcon from "../../../../public/tri.png"
import { useState } from 'react';
import styles from '@/styles/components/tv/TabNews.module.css'

export default function TabNews() {
    const data = new Date()
    const formtBrasil = 'dd/MM/yyyy'
    const formatHora = 'HH:mm'
    const dataFormat = format(data, formtBrasil)
    const horaFormat = format(data, formatHora)
    const [hour, setHour] = useState(horaFormat)
    const [date, setDate] = useState(dataFormat)

    setInterval(() => {
        setHour(horaFormat)
        setDate(dataFormat)
    },1000)

    return(
        <Card className={styles.card}>
            <Card.Body >
                <section>

                <div className={styles.head}>
                    <Image 
                        src={sicoobIcon} 
                        width={110}
                        height={100}
                        alt="Sicoob Icon"
                        style={{}}
                    />
                    <div>
                    <h1 className={styles.title}>SICOOB</h1>
                    <strong style={{color: 'white'}}>Centro Leste Paulista</strong>
                    </div>

                </div>

                <div className={styles.dateTime}>
                    <div className={styles.dateTimeBody} >
                        <h3>{date}</h3>
                        <h2>{hour}</h2>
                    </div>
                </div>

                </section>
            </Card.Body>
        </Card>

    )
}