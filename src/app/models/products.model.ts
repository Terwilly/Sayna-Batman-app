export class Products{
  constructor(
    public id:number,
    public Nom_A: string,
    public imageUrl: string,
    public description: string,
    public Prix: number,
    public taille ?: number,
  ){
  }
}