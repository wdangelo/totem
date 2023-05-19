/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { useRouter } from 'next/router';
import { useState } from "react";

import { Card } from "react-bootstrap";

import styles from '@/styles/pages/totem.module.css'
import sytlesTotemCaixa from '@/styles/components/TotemCaixa.module.css'
import TiketAlert from "@/components/TiketAlert";
import NavTotem from "@/components/NavTotem";

export default function relacionamento() {

    const [numberCx, setNumberCx] = useState<number>(1);

    const [numberRel, setNumberRel] = useState<number>(1);

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [activeButton, setActiveButton] = useState('')

    const router = useRouter()
  
    async function IncrementalNumberCaixaNormal() {
      
      setNumberCx(numberCx + 1 )
  
      const paddedNumber = numberCx.toString().padStart(4, '0')
  
      console.log('RLNR' + paddedNumber)

      setIsModalOpen(true)
      setActiveButton('button1')
      setTimeout(() => {
        setIsModalOpen(false)
        router.push('/totem')
      }, 5000)

      

    }
  

    function IncrementalNumberCaixaPreferencial() {
      
      setNumberRel(numberRel + 1 )
  
      const paddedNumber = numberRel.toString().padStart(4, '0')
  
      console.log('RLPR' + paddedNumber)
      setActiveButton('button2')
      setIsModalOpen(true)
      setTimeout(() => {
        setIsModalOpen(false)
        router.push('/totem')
      }, 5000)

    }


    const handleCloseModal = () => {
      setIsModalOpen(false)
      setActiveButton('')
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

                <p><button onClick={IncrementalNumberCaixaNormal}>Normal</button></p>
                <p><button onClick={IncrementalNumberCaixaPreferencial}>Preferencial</button></p>

                {
                
                isModalOpen && activeButton == 'button1' && (
                  <div className={sytlesTotemCaixa.modal}>
                    <TiketAlert onClose={handleCloseModal} />
                  </div>
                )}
                              {
                
                isModalOpen && activeButton == 'button2' && (
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