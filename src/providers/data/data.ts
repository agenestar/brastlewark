import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  
  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getGnomes(filter) {
    return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .map(res => res.json().Brastlewark);
  }

  getFilterOptions() {
    return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .map(res => {
        let gnomes: any;
        let hairColors: any;
        let profesions: any = []
    
        gnomes = res.json().Brastlewark;
      
        hairColors = [...Array.from(new Set(gnomes.map(item => item.hair_color)))]
        
        gnomes.forEach(item => {
          item.professions.forEach(prof => {
            if (profesions.indexOf(prof) === -1)
              profesions.push(prof)
          })
        })

        return { 
          hairColors, 
          profesions 
        }       
      })
    
   
    
  }
}
/**
 *  let hairColors: Array<string>
        let profesions: Array<string>
        
        res = res.json().Brastlewark

        hairColors = [...Array.from(new Set(res.map(item => item.hair_color)))]
      
      })
 */