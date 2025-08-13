import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetAllMessageUserBy_DTO, GetAllSenderAndBuyer } from '../../models/User';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MessageComponent implements OnInit, AfterViewInit {
  @ViewChild('messagesContainer', { static: false }) private messagesContainer!: ElementRef;

  private autoScroll = true;
  senderReceiverList: GetAllSenderAndBuyer[] = [];
  selectedUser: GetAllSenderAndBuyer | null = null;
  messages: GetAllMessageUserBy_DTO[] = [];
  searchQuery = '';
  public BASE_URL = environment.BASE_URL;

  constructor(private messageService: MessageService) {}

  async ngOnInit() {
    await this.loadSenderReceiverData();
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  /** Load all senders and receivers */
  private async loadSenderReceiverData(): Promise<void> {
    try {
      this.senderReceiverList = await firstValueFrom(
        this.messageService.GetAllSenderAndReceiverData()
      );
    } catch (err) {
      console.error('Error loading sender/receiver list', err);
    }
  }

  /** Select a user and load their messages */
  async selectUser(user: GetAllSenderAndBuyer) {
    if (this.selectedUser?.useridformessage === user.useridformessage) {
      return; // prevent duplicate fetch
    }

    this.selectedUser = user;

    try {
      this.messages = await firstValueFrom(
        this.messageService.GetAllMessageUserBy(user.useridformessage)
      );
      this.onMessagesUpdated();
    } catch (err) {
      console.error('Error loading messages for user', err);
    }
  }

  /** Filter sender/receiver list based on search query */
  get filteredSenderReceiverList(): GetAllSenderAndBuyer[] {
    if (!this.searchQuery.trim()) {
      return this.senderReceiverList;
    }
    const query = this.searchQuery.toLowerCase();
    return this.senderReceiverList.filter(item =>
      item.userName?.toLowerCase().includes(query)
    );
  }

  /** Called after messages are updated */
  private onMessagesUpdated() {
    if (this.autoScroll) {
      this.scrollToBottom();
    }
  }

  /** Smooth scroll to bottom */
  private scrollToBottom(): void {
    try {
      requestAnimationFrame(() => {
        this.messagesContainer.nativeElement.scrollTop =
          this.messagesContainer.nativeElement.scrollHeight;
      });
    } catch (err) {
      console.error('Scroll failed', err);
    }
  }

  /** Track scroll position to enable/disable auto scroll */
  onScroll() {
    const element = this.messagesContainer.nativeElement;
    const atBottom =
      element.scrollHeight - element.scrollTop - element.clientHeight < 50;
    this.autoScroll = atBottom;
  }
}
