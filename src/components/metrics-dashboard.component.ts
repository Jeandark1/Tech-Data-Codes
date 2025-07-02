import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';
import { Metric } from '../types/interfaces';

@Component({
  selector: 'app-metrics-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="metrics" class="py-20 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gray-50 dark:bg-darkBase-800"></div>
      
      <div class="relative z-10 container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">
            {{ isSpanish() ? 'Impacto Medible' : 'Measurable Impact' }}
          </h2>
          <p class="section-subtitle">
            {{ isSpanish() 
              ? 'Nuestros resultados hablan por sí solos. Cada número representa vidas transformadas y negocios revolucionados.' 
              : 'Our results speak for themselves. Every number represents lives transformed and businesses revolutionized.' 
            }}
          </p>
        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div *ngFor="let metric of metrics; trackBy: trackById" 
               class="metric-card text-center group">
            <!-- Icon -->
            <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {{ metric.icon }}
            </div>
            
            <!-- Animated Counter -->
            <div class="text-4xl md:text-5xl font-bold mb-2" [ngClass]="metric.color">
              {{ animatedValues[metric.id] || 0 }}{{ metric.suffix || '' }}
            </div>
            
            <!-- Label -->
            <div class="text-gray-600 dark:text-gray-400 font-medium">
              {{ getTranslatedLabel(metric.label) }}
            </div>
            
            <!-- Progress Bar -->
            <div class="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div class="h-2 rounded-full transition-all duration-1000 ease-out"
                   [ngClass]="getProgressBarColor(metric.color)"
                   [style.width.%]="getProgressPercentage(metric.id)">
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Impact Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Global Reach -->
          <div class="service-card text-center">
            <div class="text-3xl mb-4">🌍</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {{ isSpanish() ? 'Alcance Global' : 'Global Reach' }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ isSpanish() 
                ? 'Presente en más de 15 países, conectando talentos y oportunidades a nivel mundial.' 
                : 'Present in over 15 countries, connecting talents and opportunities worldwide.' 
              }}
            </p>
            <div class="flex justify-center space-x-2">
              <span *ngFor="let country of topCountries" class="text-2xl">{{ country }}</span>
            </div>
          </div>

          <!-- Satisfaction Rate -->
          <div class="service-card text-center">
            <div class="text-3xl mb-4">⭐</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {{ isSpanish() ? 'Satisfacción Cliente' : 'Client Satisfaction' }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ isSpanish() 
                ? 'Índice de satisfacción del 98% basado en más de 1,000 evaluaciones.' 
                : '98% satisfaction rate based on over 1,000 evaluations.' 
              }}
            </p>
            <div class="text-3xl font-bold text-accentGold-500">98%</div>
          </div>

          <!-- Innovation Index -->
          <div class="service-card text-center">
            <div class="text-3xl mb-4">🚀</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {{ isSpanish() ? 'Índice de Innovación' : 'Innovation Index' }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ isSpanish() 
                ? 'Liderando la transformación digital con tecnologías emergentes.' 
                : 'Leading digital transformation with emerging technologies.' 
              }}
            </p>
            <div class="text-3xl font-bold text-innovationGreen-500">A+</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MetricsDashboardComponent implements OnInit {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  metrics: Metric[] = [];
  animatedValues: { [key: string]: number } = {};
  
  topCountries = ['🇺🇸', '🇪🇸', '🇲🇽', '🇨🇴', '🇦🇷', '🇵🇪'];

  ngOnInit(): void {
    this.metrics = this.dataService.getMetrics();
    this.startCountAnimation();
  }

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  trackById(index: number, metric: Metric): string {
    return metric.id;
  }

  getTranslatedLabel(label: string): string {
    const translations: { [key: string]: string } = {
      'Professionals Trained': this.isSpanish() ? 'Profesionales Formados' : 'Professionals Trained',
      'SaaS Solutions': this.isSpanish() ? 'Soluciones SaaS' : 'SaaS Solutions',
      'Brands Positioned': this.isSpanish() ? 'Marcas Posicionadas' : 'Brands Positioned',
      'Startups Accelerated': this.isSpanish() ? 'Startups Aceleradas' : 'Startups Accelerated'
    };
    return translations[label] || label;
  }

  getProgressBarColor(color: string): string {
    const colorMap: { [key: string]: string } = {
      'text-techBlue-500': 'bg-techBlue-500',
      'text-innovationGreen-500': 'bg-innovationGreen-500',
      'text-accentGold-500': 'bg-accentGold-500',
      'text-purple-500': 'bg-purple-500'
    };
    return colorMap[color] || 'bg-gray-500';
  }

  getProgressPercentage(metricId: string): number {
    const current = this.animatedValues[metricId] || 0;
    const metric = this.metrics.find(m => m.id === metricId);
    if (!metric) return 0;
    
    return (current / metric.value) * 100;
  }

  private startCountAnimation(): void {
    this.metrics.forEach(metric => {
      this.animateValue(metric.id, 0, metric.value, 2000);
    });
  }

  private animateValue(key: string, start: number, end: number, duration: number): void {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOutCubic);
      
      this.animatedValues[key] = current;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }
}