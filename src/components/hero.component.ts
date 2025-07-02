import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-techBlue-900 via-darkBase-900 to-innovationGreen-900 animate-gradient"></div>
      
      <!-- Particle Canvas -->
      <canvas #particleCanvas 
              class="absolute inset-0 w-full h-full opacity-30"
              [width]="canvasWidth()"
              [height]="canvasHeight()">
      </canvas>
      
      <!-- Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="max-w-5xl mx-auto">
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 animate-fade-in text-shadow-lg">
            {{ isSpanish() ? 'Construimos Ecosistemas' : 'We Build Digital' }}
            <span class="block bg-gradient-to-r from-accentGold-400 to-innovationGreen-400 bg-clip-text text-transparent animate-glow">
              {{ isSpanish() ? 'Digitales que Crean' : 'Ecosystems That Create' }}
            </span>
            <span class="block text-white">
              {{ isSpanish() ? 'Legados' : 'Legacies' }}
            </span>
          </h1>
          
          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up font-light">
            {{ isSpanish() 
              ? 'Donde el conocimiento, el software y el marketing convergen para transformar empresas y crear líderes tecnológicos.' 
              : 'Where knowledge, software, and marketing converge to transform businesses and create tech leaders.' 
            }}
          </p>
          
          <!-- Stats Preview -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-scale-in">
            <div *ngFor="let stat of heroStats" class="glass-effect rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-300">{{ stat.label }}</div>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button class="btn-primary text-lg px-8 py-4 hover:animate-pulse">
              {{ isSpanish() ? 'Explorar Soluciones' : 'Explore Our Solutions' }}
            </button>
            <button class="btn-secondary text-lg px-8 py-4">
              {{ isSpanish() ? 'Auditoría de Innovación' : 'Innovation Audit' }}
            </button>
          </div>
          
          <!-- Scroll Indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div *ngFor="let element of floatingElements; trackBy: trackByIndex" 
             class="absolute animate-float opacity-20"
             [style.left.%]="element.x"
             [style.top.%]="element.y"
             [style.animation-delay]="element.delay + 's'">
          <div class="text-4xl">{{ element.icon }}</div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  private languageService = inject(LanguageService);
  
  canvasWidth = signal(0);
  canvasHeight = signal(0);
  
  currentLanguage = this.languageService.currentLanguage;
  
  heroStats = [
    { value: '10K+', label: 'Professionals' },
    { value: '20+', label: 'SaaS Solutions' },
    { value: '120+', label: 'Brands' },
    { value: '50+', label: 'Startups' }
  ];
  
  floatingElements = [
    { icon: '💻', x: 10, y: 20, delay: 0 },
    { icon: '🚀', x: 85, y: 15, delay: 1 },
    { icon: '⚡', x: 15, y: 70, delay: 2 },
    { icon: '🎯', x: 90, y: 65, delay: 3 },
    { icon: '💡', x: 5, y: 45, delay: 4 },
    { icon: '🔧', x: 95, y: 40, delay: 5 }
  ];

  ngOnInit(): void {
    this.updateCanvasSize();
    window.addEventListener('resize', this.updateCanvasSize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateCanvasSize.bind(this));
  }

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  trackByIndex(index: number): number {
    return index;
  }

  private updateCanvasSize(): void {
    this.canvasWidth.set(window.innerWidth);
    this.canvasHeight.set(window.innerHeight);
  }
}