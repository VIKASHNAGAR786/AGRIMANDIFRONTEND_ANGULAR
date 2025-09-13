import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBuyer, BuyerById } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-buyer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buyer.component.html',
  styleUrl: './buyer.component.css'
})
export class BuyerComponent {
[x: string]: any;
  buyers: AllBuyer[] = [];
  loading: boolean = true;
  selectedbuyer: BuyerById | null = null;

  constructor(private userserivice: UserService,
    private router: Router,
    private route: ActivatedRoute,

  ) {}
  ngOnInit(): void {
    this.checkAndLoadData(); // Using the extracted method dir
  }
  checkAndLoadData() {
    this.route.params.subscribe(params => {
        this.loadallbuyers(() => {});
    });
  }
  
  loadallbuyers(callback?: () => void): void {
    this.loading = true; // ✅ Loading true jab call start karein
    this.userserivice.GetAllBuyers()
      .pipe(
        finalize(() => {
          this.loading = false; // ✅ Chahe success ho ya error, loading false
        })
      )
      .subscribe({
        next: (data) => {
          this.buyers = data;
          console.log('✅ All buyers loaded:', this.buyers);
          if (callback) {
            callback(); // after buyers loaded, call the next
          }
        },
        error: (error) => {
          console.error('❌ Error loading buyers:', error);
        }
      });
  }

  viewDetails(buyers: AllBuyer): void {
    this.router.navigate(['/buyer', buyers.buyerId], { 
    queryParams: { Image: buyers.profileImageUrl}
  });
  }
  goBackToList(): void {
    this.router.navigate(['/buyer']);
  }

  contactBuyer(product: AllBuyer | BuyerById): void {
    console.log('📞 Contacting farmer for:', product);
  }

}
