import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../../services/JournalEntries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journalEntryList:Observable<Array<Object>>;

  constructor(private jeService: JournalEntries) { }

  ngOnInit() {
    this.journalEntryList = this.jeService.getEntries();
  }

}
