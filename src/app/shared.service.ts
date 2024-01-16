import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setSearchQuery(query: string): void {
    this.searchQuery.next(query);
  }
  getSearchQuery(): BehaviorSubject<string> {
    return this.searchQuery;
  }
}
