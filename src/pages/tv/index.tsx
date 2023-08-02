import styles from '@/styles/pages/tv.module.css'
import VideoPlayer from '@/components/tv/VideoPlayer';
import TabNews from '@/components/tv/TabNews';
import Footer from '@/components/tv/Footer';


export default function tv() {

    return(

        <main className={styles.main}>
            <div className={styles.painel}>
                <VideoPlayer/>
                <TabNews />
                <Footer />
         </div>   
            

        </main>
    )
}