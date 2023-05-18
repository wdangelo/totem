import { Printer, Types } from 'node-thermal-printer';

export default async function handler(req, res) {
  // Cria uma nova instância do objeto Printer
  const printer = new Printer("EPSON", Types.EPSON);

  try {
    // Configura a conexão com a impressora
    printer.init();
    
    // Define o tamanho da fonte
    printer.setTextDoubleHeight();
    printer.setTextDoubleWidth();
    printer.println("Hello world");
    
    // Envia o trabalho de impressão para a impressora
    printer.cut();
    printer.execute((err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error printing: " + err);
      } else {
        console.log("Print job sent to printer");
        res.status(200).send("Print job sent to printer");
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error printing: " + err);
  } finally {
    // Fecha a conexão com a impressora
    printer.clear();
    printer.close();
  }
}


