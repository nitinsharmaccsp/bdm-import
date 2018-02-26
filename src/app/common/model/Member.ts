export class Member {
    constructor(public name:string , public partyId:string, public subscriberId?:string){
        this.name=name;
        this.partyId = partyId;
        this.subscriberId = subscriberId;
      }
    }