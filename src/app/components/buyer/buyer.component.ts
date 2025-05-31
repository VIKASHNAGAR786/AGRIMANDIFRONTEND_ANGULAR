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
      const buyerid = params['buyerid'];
      if (buyerid) {
        // First load all buyers first
        this.loadallbuyers(() => {
          this.loadbuyerdetails(+buyerid);
        });
      } else {
        this.loadallbuyers();
      }
    });
  }
  

  loadbuyerdetails(buyerid: number): void {
    this.loading = true;
    this.userserivice.GetBuyerById(buyerid).subscribe({
      next: (data: BuyerById) => {
        this.loading = false;
  
        if (data) {
          const matchingBuyer = this.buyers.find(buyer => buyer.buyerId === buyerid);
  
          if (matchingBuyer && matchingBuyer.profileImageUrl) {
            data.profileImageUrl = matchingBuyer.profileImageUrl;
            console.log('✅ Profile image assigned from buyers array:', matchingBuyer.profileImageUrl);
          }
        }
  
        this.selectedbuyer = data || null;
        this.buyers = []; // now clear after using
        console.log('Selected Buyer:', this.selectedbuyer);
      },
      error: (error) => {
        this.loading = false;
        this.selectedbuyer = null;
        console.error('❌ Error loading product details:', error);
      }
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
    this.router.navigate(['/buyer', buyers.buyerId]);
  }
  goBackToList(): void {
    this.router.navigate(['/buyer']);
  }

  contactBuyer(product: AllBuyer | BuyerById): void {
    console.log('📞 Contacting farmer for:', product);
  }

}
