import axios from "axios";

interface IRequest {
    tiket: string;
    num: number;
    category: string;
}

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export async function createTicketApi({tiket, num, category}: IRequest){
    await api.post("/tickets", {
        tiket: tiket + num,
        tiket_num: num ,
        listen: true,
        category: category
      })
}


export default api