import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  searchQuery : string= '';
  isLoggedIn: boolean;

  constructor(private sharedService: SharedService) {}
  onLoginChange(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  onSearch(): void {
    this.sharedService.setSearchQuery(this.searchQuery);
  }

  onButtonClick(){
    this.searchQuery = ''; 
  }
}

