import { Injectable } from '@angular/core';
import { BinarySearchTree } from '../../lib/BinarySearchTree';

@Injectable()
export class TranslateService {
  constructor(){
    console.log('Translation service');
  }

  id:number;
  dict: any;

  help(){
    this.id = this.id || Math.random();
    console.log('Help:' + this.id );
  }

  config(conf:any){
    if (conf.dictionary) {
      this.dict = conf.dictionary;
    }
  }

  getTranslator(){
    return id => {
      return this.dict[id] || 'Not found';
    };
  }
}
