import {Deserializable} from "./deserializable.model"

export class Order {
    aArtikels:Array<OrderItem> = []
    iSubtotaalInc:number = 0
    iSubtotaalExcl:number = 0
    iBTW:number = 21
    dtCreated_at:Date

    constructor(){
        this.dtCreated_at = new Date
    }
    iOrderItem(oOrderItem:OrderItem){
        this.aArtikels.push(oOrderItem)
        this.iSubtotaalExcl = this._iSubtotaal()
        this.iSubtotaalInc = this._iSubtotaal(true)
    }
    private _iSubtotaal(BTW:boolean = false):number{
        let iSubTotaal = 0
        this.aArtikels.forEach(item=>{
            iSubTotaal += item.iSubTotaal
        })
        return BTW?iSubTotaal + (iSubTotaal/100*this.iBTW):iSubTotaal
    }
    sSubtotaal(BTW:boolean = false):string{
        return '€'+(BTW?this.iSubtotaalInc:this.iSubtotaalExcl).toFixed(2).replace('.', ',').replace(/\d(?=(\d{3})+\,)/g, '$&.');
    }
    sBtw():string{
        return '%'+this.iBTW
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}

export class OrderItem{
    id:string = ""
    iPrijs:number = 0
    iAantal:number = 0
    iSubTotaal: number = 0

    constructor(id:string, iPrijs:number, iAantal:number){
        this.id = id
        this.iPrijs = iPrijs
        this.iAantal = iAantal
        this.iSubTotaal = this._iSubTotaal()
    }

    private _iSubTotaal():number{
        return this.iPrijs*this.iAantal
    }
    sSubTotaal():string{
        return '€'+this.iSubTotaal.toFixed(2).replace('.', ',').replace(/\d(?=(\d{3})+\,)/g, '$&.');
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}
