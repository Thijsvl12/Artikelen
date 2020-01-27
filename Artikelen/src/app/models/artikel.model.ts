export class Artikel {
    sNaam:String = ""
    iPrijs:Number = 0
    sType:String=""

    constructor(sType = "artikel"){
        this.sType = sType
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
