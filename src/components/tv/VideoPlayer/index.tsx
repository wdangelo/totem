import { Card } from "react-bootstrap";
import { style } from "./style";

export default function VideoPlayer() {
    const videoMp4 = '/video.mp4';
    const videoOgv = '/video.ogv';
    const videoWebm = '/video.webm';
    return(
        <Card style={style.card}>
            <Card.Body>
            <video
                style={style.video}
                controls
                autoPlay
                muted
                loop
                >
                <source src={videoMp4} type="video/mp4" />
                <source src={videoOgv} type="video/ogg" />
                <source src={videoWebm} type="video/webm" />
                {/* Adicione mais elementos <source> se quiser fornecer outros formatos de vídeo para compatibilidade com diferentes navegadores */}
                Seu navegador não suporta o elemento de vídeo.
                </video>
            </Card.Body>

        </Card>
    )
}