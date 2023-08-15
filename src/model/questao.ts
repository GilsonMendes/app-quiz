
export default class QuestaoModel {
  
    #id: number
    #enuciado: string
    #respostas: any[]
    #acertou: boolean
    // #respondida: boleano
    
    constructor(id: number, enuciado: string, resposta:any[], acertou: boolean){
    
        this.#id = id
        this.#enuciado = enuciado
        this.#respostas = resposta
        this.#acertou = acertou

    }

    get id() {
        
        return this.#id
    
    }


    get enuciado() {
        
        return this.#enuciado
    
    }


    get reposta() {
        
        return this.#respostas
    
    }


    get acertou() {
        
        return this.#acertou
    
    }




}