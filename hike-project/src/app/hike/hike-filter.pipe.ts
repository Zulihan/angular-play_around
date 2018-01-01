import { Pipe, PipeTransform } from '@angular/core';
import { Hike } from './hike';

@Pipe({
    name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform { // PipeTransform est une interface. Utilisée pour la bonne pratique
    
    transform(value: Hike[], searchTerm: string = ''){
        if(searchTerm !== ''){
            let result = value.filter((hike: Hike) => hike.description.toLowerCase().includes(searchTerm) || hike.name.toLowerCase().includes(searchTerm) );
            return result;
        } else {
            return value; // value est un array Hike[]
        }
    }
}