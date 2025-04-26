import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBuyer } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-buyer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buyer.component.html',
  styleUrl: './buyer.component.css'
})
export class BuyerComponent {
  buyers: AllBuyer[] = [];

  constructor(private userserivice: UserService) {}
  ngOnInit(): void {
    this.userserivice.GetAllBuyers().subscribe(data => {
      this.buyers = data; // ✅ No need to map again
      console.log(this.buyers);
    });
  }
}
