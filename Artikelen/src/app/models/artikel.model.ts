import {Deserializable} from "./deserializable.model"

export class Artikel {
    sNaam:string = ""
    iPrijs:Number = 0
    sType:string=""

    constructor(sType = "artikel"){
        this.sType = sType
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}

export class CombiArtikel extends Artikel{

    aArtikels: Array<{id:Number, iAantal:Number}> = []
    constructor(){
       super("combi")
    }
    addArtikel(id:Number, iAantal){
        this.aArtikels.push({id, iAantal})
    }
}
