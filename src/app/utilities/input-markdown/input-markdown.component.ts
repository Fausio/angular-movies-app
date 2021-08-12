 
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-input-markdown',
  templateUrl:'./input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Output()
   changeMarkdown  = new EventEmitter<string>();

   @Output()
  label = new EventEmitter<string>();

  markdownContent = '' ;

  ngOnInit(): void {
      
  
  }

}
