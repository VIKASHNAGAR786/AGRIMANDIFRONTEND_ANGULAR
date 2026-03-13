import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { ColorserviceService } from '../../services/colorservice.service';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedColor = '#22c55e';
  styleVars: Record<string, string> = {};
  particles = Array.from({ length: 12 }, (_, index) => index);
  private readonly subscriptions = new Subscription();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private colorService: ColorserviceService
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.subscriptions.add(
      this.colorService.selectedColor$.subscribe((color) => {
        this.selectedColor = this.normalizeHexColor(color) || '#22c55e';
        this.setThemeVariables();
      })
    );

    this.setThemeVariables();
  }

  ngAfterViewInit(): void {
    // Reserved for future background effects.
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getParticleStyle(index: number): Record<string, string> {
    const left = (index * 8 + 6) % 95;
    const size = 8 + (index % 5) * 5;
    const delay = (index % 6) * 0.7;
    const duration = 12 + (index % 4) * 4;

    return {
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    };
  }

  private setThemeVariables(): void {
    const darkShade = this.adjustShade(this.selectedColor, -25);
    const softShade = this.adjustShade(this.selectedColor, 18);

    this.styleVars = {
      '--bg-primary': this.selectedColor,
      '--bg-dark': darkShade,
      '--bg-soft': softShade
    };
  }

  private normalizeHexColor(value: string): string | null {
    const trimmed = value?.trim();
    if (!trimmed) {
      return null;
    }

    const fullHexPattern = /^#([A-Fa-f0-9]{6})$/;
    const shortHexPattern = /^#([A-Fa-f0-9]{3})$/;

    if (fullHexPattern.test(trimmed)) {
      return trimmed;
    }

    const short = trimmed.match(shortHexPattern);
    if (short) {
      const [r, g, b] = short[1].split('');
      return `#${r}${r}${g}${g}${b}${b}`;
    }

    return null;
  }

  private adjustShade(hex: string, percent: number): string {
    const normalized = hex.replace('#', '');
    const parsed = parseInt(normalized, 16);
    const factor = percent / 100;

    const red = (parsed >> 16) & 0xff;
    const green = (parsed >> 8) & 0xff;
    const blue = parsed & 0xff;

    const apply = (channel: number) => {
      const next = channel + (factor >= 0 ? (255 - channel) * factor : channel * factor);
      return Math.max(0, Math.min(255, Math.round(next)));
    };

    const out = (apply(red) << 16) | (apply(green) << 8) | apply(blue);
    return `#${out.toString(16).padStart(6, '0')}`;
  }

}
