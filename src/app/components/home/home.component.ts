import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ColorserviceService } from '../../services/colorservice.service';
import * as AOS from 'aos';
import { LoginService } from '../../services/login.service';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true, // 👈 Add this line
  imports: [CommonModule, RouterModule, TranslateModule], // 👈 This makes ngFor and routing work
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private colorService: ColorserviceService,
    private loginService: LoginService,
    private userInfo: UserinfowithloginService
  ) {}

  selectedColor = '#22c55e';
  currentUserName = '';
  private readonly subscriptions = new Subscription();

  heroHighlights = [
    { icon: 'bi-shield-check', title: 'Verified Profiles', detail: 'Trusted farmers and buyers on every transaction' },
    { icon: 'bi-graph-up-arrow', title: 'Live Market Insights', detail: 'Better price discovery with mandi intelligence' },
    { icon: 'bi-lightning-charge', title: 'Fast Trade Workflow', detail: 'List, negotiate, and close deals in minutes' }
  ];

  metrics = [
    { value: '10K+', label: 'Farmers Onboarded' },
    { value: '50K+', label: 'Successful Orders' },
    { value: '20+', label: 'States Active' },
    { value: '4.8/5', label: 'Average User Rating' }
  ];

  projectNarrative = [
    'AgriMandi is built to bridge the gap between farmers and buyers through a transparent digital marketplace. The platform focuses on fair pricing, faster negotiations, and dependable trade relationships.',
    'In many regions, farmers still face fragmented market access and delayed price visibility. AgriMandi improves this by enabling direct discovery, verified communication, and structured transaction workflows.',
    'Our goal is to represent the true spirit of Indian agriculture: local strength, regional diversity, and technology-enabled growth that benefits both producers and procurement partners.'
  ];

  indiaMarketFacts = [
    {
      title: 'Diverse Crop Ecosystem',
      description: 'India has one of the world\'s most diverse agricultural landscapes, from cereals and pulses to horticulture and cash crops.',
      icon: 'bi-flower1',
      accent: 'Production'
    },
    {
      title: 'Mandi-Driven Trade Backbone',
      description: 'Traditional mandi networks remain central to price discovery, aggregation, and regional commodity movement.',
      icon: 'bi-shop-window',
      accent: 'Markets'
    },
    {
      title: 'Millions of Smallholders',
      description: 'A large share of production comes from small and marginal farmers, making market accessibility and trust critical.',
      icon: 'bi-people',
      accent: 'Community'
    },
    {
      title: 'Digital Transformation Opportunity',
      description: 'Modern platforms can reduce information gaps, improve buyer reach, and create stronger farm-to-market efficiency.',
      icon: 'bi-cpu',
      accent: 'Technology'
    }
  ];

  features = [
    {
      title: 'Direct Farm-to-Buyer Marketplace',
      description: 'Farmers publish produce instantly and buyers discover quality stock without unnecessary intermediaries.',
      image: 'images/3.jpg'
    },
    {
      title: 'Transparent Communication',
      description: 'Negotiation flows are simple and documented so both sides can trade with confidence and clarity.',
      image: 'images/2.jpg'
    },
    {
      title: 'Secure and Structured Transactions',
      description: 'From order confirmation to payment, each step is designed to reduce risk and improve accountability.',
      image: 'images/6.jpeg'
    },
    {
      title: 'Regional Reach with Local Trust',
      description: 'Scale your network beyond local mandis while preserving trust through verified identities and reviews.',
      image: 'images/5.jpeg'
    }
  ];

  steps = [
    {
      number: 1,
      title: 'Create Account',
      description: 'Join as a farmer or buyer with a verified profile and basic business information.',
      icon: 'bi-person-plus'
    },
    {
      number: 2,
      title: 'List or Discover Produce',
      description: 'Farmers add quantity, quality and expected price while buyers search using smart filters.',
      icon: 'bi-search'
    },
    {
      number: 3,
      title: 'Connect and Negotiate',
      description: 'Use chat and contact tools to finalize price, delivery plan, and order requirements.',
      icon: 'bi-chat-dots'
    },
    {
      number: 4,
      title: 'Place Order Securely',
      description: 'Confirm transaction details with secure workflows built for transparent trading.',
      icon: 'bi-shield-lock'
    },
    {
      number: 5,
      title: 'Track and Rate Experience',
      description: 'Monitor order completion and leave feedback to strengthen marketplace trust.',
      icon: 'bi-star'
    }
  ];

  testimonials = [
    {
      quote:
        'AgriMandi helped me connect with more serious buyers in less time. My produce sells faster and at better rates.',
      name: 'Ramesh Kumar',
      role: 'Farmer, Madhya Pradesh'
    },
    {
      quote:
        'The platform makes procurement simple. We can compare quality and close deals directly with farmers we trust.',
      name: 'Anjali Sharma',
      role: 'Retail Buyer, Jaipur'
    }
  ];

  insights = [
    {
      title: '5 Ways Farmers Can Improve Listing Performance',
      description: 'Practical steps to write better product listings that attract faster and higher-quality responses.',
      image: 'images/latest.png'
    },
    {
      title: 'Digital Agriculture Trends in 2026',
      description: 'A quick look at market connectivity, pricing intelligence, and technology adoption in agriculture.',
      image: 'images/latest.png'
    },
    {
      title: 'How Buyers Can Source Better at Scale',
      description: 'Build repeatable sourcing operations while maintaining quality and transparent trade relationships.',
      image: 'images/latest.png'
    }
  ];

  faqs = [
    {
      question: 'How do I start using AgriMandi?',
      answer: 'Sign up with your role, complete your profile, and begin listing or browsing produce immediately.'
    },
    {
      question: 'Is AgriMandi free for farmers and buyers?',
      answer: 'Yes. Registration and core marketplace usage are free for both farmers and buyers.'
    },
    {
      question: 'How is trust maintained in transactions?',
      answer: 'Verified accounts, transparent communication, and feedback-driven reputation improve trade confidence.'
    },
    {
      question: 'Can I use AgriMandi across states?',
      answer: 'Yes. The platform is designed to connect participants from multiple states and trading regions.'
    }
  ];

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['auth/login']);
      return;
    }

    this.subscriptions.add(
      this.colorService.selectedColor$.subscribe((color) => {
        this.selectedColor = color || '#22c55e';
      })
    );

    this.currentUserName = this.userInfo.getUserName() || 'AgriMandi User';

    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
