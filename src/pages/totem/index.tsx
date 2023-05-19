/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import Head from 'next/head'
import styles from '@/styles/pages/totem.module.css'
import { Card } from 'react-bootstrap';
import NavTotem from '../../components/NavTotem';

export default function totem() {

    return(
        <>
        <Head>
          <title>Totem</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div style={{height: '100vh', width: '100vw', backgroundColor: '#003641'}}>

        <NavTotem />
        <Card className={styles.card} >
       
          <main className={styles.main}>
            <h1>Estolha o Atendimento</h1>
            <h2>Toque a tela para selecionar a opção desejada</h2>
            <div>
              <Link href="/totem/caixa"><p><button>Caixa</button></p></Link>
              <Link href="/totem/relacionamento"><p><button>Relacionamento</button></p></Link> 
            </div>      
  
          </main>
        </Card>
        </div>

  
      </>
    )
}

