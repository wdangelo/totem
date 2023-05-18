
export default function TiketAlert(props: {onClose: () => void}) {

    return(
        <div style={{zIndex: 9999 }}>

            <div>Imprimindo</div>

            <h2 onClick={props.onClose}>Fechar</h2>
        </div>
    )
}