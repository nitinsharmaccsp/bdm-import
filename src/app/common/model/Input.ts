export class InputModel {
constructor(public name:string , public value:string, public placeholder:string , public type:string , public readonly:boolean){
    this.name=name;
    this.value=value;
    this.placeholder=placeholder;
    this.type=type;
    this.readonly=readonly;
  }
}