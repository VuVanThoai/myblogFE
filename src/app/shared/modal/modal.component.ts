import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() onClickContinuous = new EventEmitter();
  @Output() onClickCancel = new EventEmitter();

  @Input() title?: string;
  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
