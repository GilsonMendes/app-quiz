import RespostaModal from "./resposta"

export default class QuestaoModel {
  
    #id: number
    #enuciado: string
    #respostas: RespostaModal[]
    #acertou: boolean
    // #respondida: boleano
    
    constructor(id: number, enuciado: string, resposta:RespostaModal[], acertou: boolean){
    
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

    get respondida(){
        
        for(let resposta of this.#respostas){
                
                if(resposta.revelada) return true
        
        }

        return false
    
    }




}