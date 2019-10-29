import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/models/document';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  document: Document;
  private _docSub: Subscription;
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this._docSub = this.documentService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(document => this.document = document);
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }
  vote(choice) {
    if(choice == 1) {
      this.document.option1count++;
      this.editDoc()
    }
    if(choice == 2) {
      this.document.option2count++;
      this.editDoc()
    }
    if(choice == 3) {
      this.document.option3count++;
      this.editDoc()
    }
    if(choice == 4) {
      this.document.option4count++;
      this.editDoc()
    }
    if(choice == 5) {
      this.document.option5count++;
      this.editDoc()
    }
  }
}
