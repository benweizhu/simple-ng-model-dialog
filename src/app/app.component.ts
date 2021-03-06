import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {
  }

  ngOnInit() {

  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
