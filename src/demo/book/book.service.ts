import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../lib';

export class BookService {
    getBooks(): TreeviewItem[] {
        const childrenCategory = new TreeviewItem({id: 1,
            text: 'Children', value: 1, collapsed: true, children: [
                { id: 1,text: 'Baby 3-5', value: 11 },
                { id: 1,text: 'Baby 6-8', value: 12 },
                { id: 1,text: 'Baby 9-12', value: 13 }
            ]
        });
        const itCategory = new TreeviewItem({
            id: 1,text: 'IT', value: 9, children: [
                {
                    id: 1,text: 'Programming', value: 91, children: [{id:1,
                        text: 'Frontend', value: 911, children: [
                            { id: 1,text: 'Angular 1', value: 9111 },
                            { id: 1,text: 'Angular 2', value: 9112 },
                            { id: 1,text: 'ReactJS', value: 9113, disabled: true }
                        ]
                    }, {
                        id: 1,text: 'Backend', value: 912, children: [
                            { id: 1,text: 'C#', value: 9121 },
                            { id: 1,text: 'Java', value: 9122 },
                            { id: 1,text: 'Python', value: 9123, checked: false, disabled: true }
                        ]
                    }]
                },
                {
                    id: 1,text: 'Networking', value: 92, children: [
                        { id: 1,text: 'Internet', value: 921 },
                        { id: 1,text: 'Security', value: 922 }
                    ]
                }
            ]
        });
        const teenCategory = new TreeviewItem({
            id: 1,text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
                { id: 1,text: 'Adventure', value: 21 },
                { id: 1,text: 'Science', value: 22 }
            ]
        });
        const othersCategory = new TreeviewItem({ id: 1,text: 'Others', value: 3, checked: false, disabled: true });
        return [childrenCategory, itCategory, teenCategory, othersCategory];
    }
}
