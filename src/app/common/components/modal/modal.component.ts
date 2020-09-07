import { Component, OnInit, Input, Output, EventEmitter, HostListener, Host } from '@angular/core';
import  $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() visible: boolean = true;
  // @Output() modalLoad: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  

  ngOnInit(): void {
    // this.modalLoad.emit()
    // console.log(this.modalVisisble)
    console.log($);
  }


  closeModal() {
    // this.modalVisisble = false;
  }


  onClick(e) {
    // document.getElementById('exampleModal').modal('show')
    // var dailogue = document.getElementById('exampleModal');
    // dailogue.showModal()
    // var el = document.getElementById('exampleModal') as HTMLDivElement
    // el.modal('show')
  }


}
