import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../../services/JournalEntries.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry:Object;

  constructor(private route: ActivatedRoute, private jeService: JournalEntries) { }

  ngOnInit() {
    this.route.params
        .mergeMap( (e:any) => this.jeService.getSingleEntry(e.id) )
        .subscribe( entry => {
          console.log(entry);
          this.entry = entry;
        });
  }

}
