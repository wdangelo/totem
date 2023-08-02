/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useRouter } from 'next/router';
import { useState } from "react";
import { format } from 'date-fns';
import { Card } from "react-bootstrap";

import styles from '@/styles/pages/totem.module.css'
import sytlesTotemCaixa from '@/styles/components/TotemCaixa.module.css'
import TiketAlert from "@/components/TiketAlert";
import NavTotem from "@/components/NavTotem";

import api, {createTicketApi} from "../../../services/axios"

export default function relacionamento() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [activeButton, setActiveButton] = useState('')

    const router = useRouter()
  
    async function handleRegister(tiket: string, category: string) {

      let tiket_num = await api.get('/tickets/list-first-rel')
        .then((res) => { 
          const tiket_num = res.data.tiket_num as number
          return tiket_num
        }).catch((err) => {
          const tiket_num = 0
          return tiket_num
        })

        const ticketDate = await api.get('/tickets/list-first-rel')
        .then((res) => { 
          const date = res.data.created_at
          return date
        }).catch((err) => {
          const tiket_num = 0
          return tiket_num
        })
        
        let dateNow = new Date()

        const formatDateTicket = new Date(ticketDate)
        const dateFormtNow = format(dateNow, 'dd/MM/yyyy')
        const ticketDateFormat = format(formatDateTicket, 'dd/MM/yyyy')

      setIsModalOpen(true)
      setActiveButton('RELACIONAMENTO')
      setTimeout(() => {
        if(tiket_num === undefined || tiket_num === 0 || dateFormtNow !== ticketDateFormat) {
          
          createTicketApi({
            tiket,
            num: 1 ,
            category 
          })
        }
  
        if(tiket_num) {
          let num = tiket_num+=1
          setActiveButton('RELACIONAMENTO')
          createTicketApi({
            tiket,
            num,
            category
          })
        }
        setIsModalOpen(false)
        router.push('/totem')
      }, 5000)

    }


    const handleCloseModal = () => {
      setIsModalOpen(false)
      //setActiveButton('')
    }
    return(
        <>
        <Head>
          <title>Totem</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#003641'  }}>
        <NavTotem />
        <Card className={styles.card} style={{zIndex: 9998}}>
          <main className={styles.main}>
          <h1>Atendimento Relacionamento</h1>
            <h2>Escolha a opção desejada</h2>
            <div >

            <p><button onClick={() => handleRegister("RELNRL", "RELACIONAMENTO")} >Normal</button></p>
                <p><button onClick={() => handleRegister("RELPRF", "RELACIONAMENTO_PREF")} >Preferencial</button></p>

                {
                
                isModalOpen && activeButton == 'RELACIONAMENTO' && (
                  <div className={sytlesTotemCaixa.modal}>
                    <TiketAlert onClose={handleCloseModal} />
                  </div>
                )}
                              {
                
                isModalOpen && activeButton == 'RELACIONAMENTO_PREF' && (
                  <div className={sytlesTotemCaixa.modal}>
                    <TiketAlert onClose={handleCloseModal} />
                  </div>
                )}
                
            </div>      
  
          </main>
        </Card>
        </div>

  
      </>
    )
}