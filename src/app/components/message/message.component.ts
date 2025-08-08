import { Component, OnInit } from '@angular/core';
import { GetAllSenderAndBuyer } from '../../models/User';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  imports: [CommonModule]
})

export class MessageComponent implements OnInit {

  senderReceiverList: GetAllSenderAndBuyer[] = [];

  public BASE_URL = environment.BASE_URL; 
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadSenderReceiverData();
  }

  loadSenderReceiverData(): void {
    this.messageService.GetAllSenderAndReceiverdata().subscribe({
      next: (data) => {
        this.senderReceiverList = data;
      },
      error: (err) => {
        console.error('Error fetching sender/receiver data:', err);
      }
    });
  }
}