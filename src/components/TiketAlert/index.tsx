
export default function TiketAlert(props: {onClose: () => void}) {

    const conteudo = "Contedudo aqui"

    function printData(){
        const printWindow = window.open('', '', 'width=800,height=600')
        printWindow?.document.open()
        printWindow?.document.write( conteudo)
        printWindow?.document.close()
        printWindow?.print()
        
    }

    return(
        <div style={{zIndex: 9999, color: 'black' }}>

            <div>
                <h1 style={{color: '#003641', fontWeight: 700}}>Imprimindo</h1>
                <h2 style={{color: '#003641', fontWeight: 700}}>Retire sua senha</h2>
                <div id="conteudo">{conteudo}</div>
                <button onClick={printData}>Imprimir</button>
            </div>
            
        </div>
    )
}