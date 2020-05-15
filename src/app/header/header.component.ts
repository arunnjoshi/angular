import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featueSelected =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onnSelect(feature:string){
    this.featueSelected.emit(feature);
  }

}
