export class Product{
   category: string;
   customizables: string[];
   title: string;
   id: number;
   description: string;
   mainPoints: string[];

  constructor(category: string, customizables: string[], id: number, title: string, description: string, mainPoits: string[]){
    this.category = category;
    this.customizables = customizables;
    this.id = id;
    this.title = title;
    this.description = description;
    this.mainPoints = mainPoits;
  }


}
