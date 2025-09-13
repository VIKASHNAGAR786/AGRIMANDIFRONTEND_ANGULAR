import { Component } from '@angular/core';
import { AllBuyer, BuyerById } from '../../../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singelbuyerview',
  imports: [CommonModule],
  templateUrl: './singelbuyerview.component.html',
  styleUrl: './singelbuyerview.component.css'
})
export class SingelbuyerviewComponent {
  constructor(private userserivice: UserService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  buyerid: number = 0;
  private profileimageurl: string = '';
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const buyerid = +params['buyerid']; // ✅ convert to number
      if (buyerid) {
        this.loadbuyerdetails(buyerid);
      } else {
        this.loadbuyerdetails(buyerid);
      }
    });
  }

  loading: boolean = true;
  selectedbuyer: BuyerById | null = null;

  loadbuyerdetails(buyerid: number): void {
    this.loading = true;
    this.userserivice.GetBuyerById(buyerid).subscribe({
      next: (data: BuyerById) => {
        this.loading = false;
        this.selectedbuyer = data || null;
        //for profile image from query params
        this.route.queryParamMap.subscribe(params => {
          const Image = params.get('Image');
          this.profileimageurl = Image ? Image : '';
        });
        if (this.selectedbuyer) {
          this.selectedbuyer.profileImageUrl = this.profileimageurl;
        }
      },
      error: (error) => {
        this.loading = false;
        this.selectedbuyer = null;
        console.error('❌ Error loading product details:', error);
      }
    });
  }

  goBackToList(): void {
    this.router.navigate(['/buyer']);
  }

  contactBuyer(product: AllBuyer | BuyerById): void {
    console.log('📞 Contacting farmer for:', product);
  }

}
