import { Component } from '@angular/core';
import { Item, ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Labomatic';
    items: Array<Item>;
    constructor(private apiService: ApiService) {
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        this.apiService.fetch().subscribe((data: Array<Item>) => {
            console.log(data);
            this.items = data;
        }, (err) => {
            console.log(err);
        });
    }
}
