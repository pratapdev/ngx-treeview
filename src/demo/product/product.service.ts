import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../lib';

export class ProductService {
    getProducts(): TreeviewItem[] {
        const fruitCategory = new TreeviewItem({id: 1,
            text: 'Fruit', value: 1, children: [
                { id: 1,text: 'Apple', value: 11 },
                { id: 1,text: 'Mango', value: 12 }
            ]
        });
        const vegetableCategory = new TreeviewItem({
            id: 1,text: 'Vegetable', value: 2, children: [
                {id: 1, text: 'Salad', value: 21 },
                {id: 1, text: 'Potato', value: 22 }
            ]
        });
        vegetableCategory.children.push(new TreeviewItem({id: 1, text: 'Mushroom', value: 23, checked: false }));
        vegetableCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
        return [fruitCategory, vegetableCategory];
    }
}
