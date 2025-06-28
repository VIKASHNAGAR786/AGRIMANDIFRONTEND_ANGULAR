import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { UserRoleDto } from '../../models/User';
import { MessageDTO } from '../../models/User';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
   imports: [CommonModule]
})
export class NotificationComponent implements OnInit {

  // Store messages in this array
  messages: MessageDTO[] = [];

  constructor(private notificationservice: NotificationService) {}

  ngOnInit(): void {
    this.notificationservice.GetUserRole().subscribe({
      next: (response) => {
        const userRole = response.data as UserRoleDto;
        console.log('User Role:', userRole);
        const buyerid = userRole.roleid;
        this.getMessages(buyerid);
      },
      error: (err) => {
        console.error('Error fetching user role:', err);
      }
    });
  }

  private getMessages(buyerid: number): void {
    this.notificationservice.GettAllMessage(buyerid).subscribe({
      next: (response) => {
        this.messages = response as MessageDTO[];
        console.log('Notifications:', this.messages);
      },
      error: (err) => {
        console.error('Error fetching notifications:', err);
      }
    });
  }
}
