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
  currentUserName = 'Farmer Friend';
  isLoggedIn = false;
  private readonly subscriptions = new Subscription();

  heroHighlights = [
    { icon: 'bi-activity', title: 'Live Price Feed', detail: 'Daily mandi rates from multiple districts in one place' },
    { icon: 'bi-geo-alt', title: 'Location Wise Compare', detail: 'Check district and market wise price difference quickly' },
    { icon: 'bi-bar-chart', title: 'Better Sale Decisions', detail: 'Use modal, min and max trends before selling produce' }
  ];

  metrics = [
    { value: '500+', label: 'Mandis Tracked' },
    { value: '100+', label: 'Commodities' },
    { value: '24x7', label: 'Price Access' },
    { value: '1 Goal', label: 'Farmer Profit' }
  ];

  projectNarrative = [
    'AgriMandi ka core mission simple hai: kisan ko behtar rate decision dena. Home page ka focus ab seedha live mandi data par hai, jisse user ko project ka real value pehle screen par hi samajh aaye.',
    'District, market, commodity aur date filters ke saath farmer turant dekh sakta hai ki kis mandi me modal price strong chal raha hai. Isse guessing kam hoti hai aur negotiation power badhti hai.',
    'Yeh platform sirf listing nahi, balki practical market intelligence deta hai jo harvesting, transport timing aur selling strategy me direct help karta hai.'
  ];

  mandiFocusAreas = [
    {
      title: 'Live Mandi Rates',
      description: 'Daily updated mandi price records for transparent decision making.',
      icon: 'bi-broadcast',
      accent: 'Realtime'
    },
    {
      title: 'Smart Filters',
      description: 'State, district, commodity and date filters for precise view.',
      icon: 'bi-funnel',
      accent: 'Precision'
    },
    {
      title: 'Farmer Friendly UI',
      description: 'Clear cards, trends and comparisons that are easy to understand.',
      icon: 'bi-person-check',
      accent: 'Usability'
    },
    {
      title: 'Action Ready Insight',
      description: 'Min, max and modal prices to support better sale planning.',
      icon: 'bi-lightning',
      accent: 'Outcome'
    }
  ];

  farmerBenefits = [
    {
      title: 'Know Best Market Before You Move',
      description: 'Compare nearby mandis and choose where to sell for stronger returns.',
      image: 'images/3.jpg'
    },
    {
      title: 'Plan Harvest and Transport Better',
      description: 'Use weekly movement and trend sense to time your produce flow.',
      image: 'images/2.jpg'
    },
    {
      title: 'Negotiate with Confidence',
      description: 'When you know market band, you negotiate from data not guesswork.',
      image: 'images/6.jpeg'
    },
    {
      title: 'Track More Commodities in One Place',
      description: 'Single dashboard for grains, vegetables, pulses and more categories.',
      image: 'images/5.jpeg'
    }
  ];

  flowSteps = [
    {
      number: 1,
      title: 'Choose State and District',
      description: 'Select your mandi area to get relevant records only.',
      icon: 'bi-map'
    },
    {
      number: 2,
      title: 'Pick Commodity',
      description: 'Focus on the exact crop you are planning to sell.',
      icon: 'bi-basket'
    },
    {
      number: 3,
      title: 'Set Date Range',
      description: 'Check today, 2 day and weekly trend quickly.',
      icon: 'bi-calendar-event'
    },
    {
      number: 4,
      title: 'Read Price Insights',
      description: 'Use min, max, modal and comparison cards for action.',
      icon: 'bi-graph-up-arrow'
    },
    {
      number: 5,
      title: 'Take Selling Decision',
      description: 'Move produce with more confidence and better expected return.',
      icon: 'bi-check2-circle'
    }
  ];

  useCases = [
    {
      quote: 'A wheat farmer compares two nearby markets and chooses the mandi with better modal price.',
      name: 'Use Case 1',
      role: 'Price Comparison'
    },
    {
      quote: 'A vegetable grower tracks 7 day movement and delays sale by one day for better rates.',
      name: 'Use Case 2',
      role: 'Timing Strategy'
    }
  ];

  quickGuides = [
    {
      title: 'How to read modal price quickly',
      description: 'Understand modal value as practical market benchmark for decision.',
      image: 'images/latest.png'
    },
    {
      title: 'How to compare district wise rates',
      description: 'Use filters to scan better districts without manual searching.',
      image: 'images/latest.png'
    },
    {
      title: 'How to use date presets for fast check',
      description: 'Today, 2 days and 7 days presets for quick market trend reading.',
      image: 'images/latest.png'
    }
  ];

  faqs = [
    {
      question: 'Kya mandi rates real-time hote hain?',
      answer: 'Data periodic refresh ke through update hota hai, isliye daily decision making ke liye reliable hai.'
    },
    {
      question: 'Main apne district ki specific commodity dekh sakta hu?',
      answer: 'Haan, state + district + commodity filters se exact data dekha ja sakta hai.'
    },
    {
      question: 'Modal price ka use kya hai?',
      answer: 'Modal price se aapko market ka practical center rate milta hai jo negotiation me helpful hota hai.'
    },
    {
      question: 'Kya mobile par bhi easy use hoga?',
      answer: 'Home aur mandi sections responsive hain, isliye mobile par bhi clear view milta hai.'
    }
  ];

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();

    this.subscriptions.add(
      this.colorService.selectedColor$.subscribe((color) => {
        this.selectedColor = color || '#22c55e';
      })
    );

    this.currentUserName = this.userInfo.getUserName() || 'Farmer Friend';

    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
  }

  goToMandiRates(): void {
    this.router.navigate(['/mandi-rates']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
