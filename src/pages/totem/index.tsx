/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import Head from 'next/head'
import styles from '@/styles/pages/totem.module.css'
import { Card } from 'react-bootstrap';

export default function totem() {

    return(
        <>
        <Head>
          <title>Totem</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div style={{height: '100vh', width: '100vw'}}>
        <Card className={styles.card} >
          <main className={styles.main}>
            <h1>Estolha o Atendimento</h1>
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

