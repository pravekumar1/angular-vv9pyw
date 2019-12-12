import {Ingradients} from '../shared/ingradients.model';

export class Recipes {
  constructor(public name: string, public description: string, public imagePath: string, public ingradients: Ingradients[]) {}
}