import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-md border-b border-white/10">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-techBlue-500 to-innovationGreen-500 rounded-lg flex items-center justify-center animate-glow">
              <span class="text-white font-bold text-lg">TDC</span>
            </div>
            <div class="hidden md:block">
              <h1 class="text-xl font-display font-bold text-gray-900 dark:text-white">
                Tech Data Codes
              </h1>
              <p class="text-sm text-gray-700 dark:text-gray-600">Digital Ecosystem Architects</p>
            </div>
          </div>

          <!-- Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <a *ngFor="let item of navigationItems" 
               [href]="item.href"
               class="text-gray-700 dark:text-gray-900 hover:text-techBlue-500 dark:hover:text-techBlue-400 font-medium transition-colors duration-200 relative group">
              {{ item.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-techBlue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-4">
            <!-- Language Toggle -->
            <button 
              (click)="toggleLanguage()"
              class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200">
              <span class="text-lg">{{ currentLanguage().flag }}</span>
              <span class="hidden sm:block text-sm font-medium">{{ currentLanguage().code.toUpperCase() }}</span>
            </button>

            <!-- Theme Toggle -->
            <button 
              (click)="toggleTheme()"
              class="p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200">
              <span class="text-xl">{{ isDark() ? '☀️' : '🌙' }}</span>
            </button>

            <!-- CTA Button -->
            <a href="https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20desarrollo%20tecnol%C3%B3gico" 
            class="btn-primary hidden sm:block">
              {{ currentLanguage().code === 'es' ? 'Consulta Gratuita' : 'Free Consultation' }}
            </a>

            

            <!-- Mobile Menu Toggle -->
            <button 
              (click)="toggleMobileMenu()"
              class="lg:hidden p-2 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <div class="w-6 h-6 flex flex-col justify-center space-y-1">
                <span class="w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300" 
                      [class.rotate-45]="mobileMenuOpen()" 
                      [class.translate-y-1.5]="mobileMenuOpen()"></span>
                <span class="w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300" 
                      [class.opacity-0]="mobileMenuOpen()"></span>
                <span class="w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300" 
                      [class.-rotate-45]="mobileMenuOpen()" 
                      [class.-translate-y-1.5]="mobileMenuOpen()"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden mt-4 pb-4" [class.hidden]="!mobileMenuOpen()">
          <div class="flex flex-col space-y-4">
            <a *ngFor="let item of navigationItems" 
               [href]="item.href"
               class="text-gray-700 dark:text-gray-300 hover:text-techBlue-500 dark:hover:text-techBlue-400 font-medium transition-colors duration-200 py-2">
              {{ item.label }}
            </a>
            <button class="btn-primary w-full sm:hidden">
              {{ currentLanguage().code === 'es' ? 'Consulta Gratuita' : 'Free Consultation' }}
            </button>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);

  mobileMenuOpen = signal(false);
  
  // Computed properties
  isDark = this.themeService.isDark;
  currentLanguage = this.languageService.currentLanguage;

  navigationItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Impacto', href: '#metrics' },
    { label: 'Equipo', href: '#team' },
    { label: 'Casos de Éxito', href: '#success' },
    { label: 'Contacto', href: '#contact' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    const currentCode = this.languageService.getCurrentLanguageCode();
    const newCode = currentCode === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newCode);
    this.updateNavigationLabels();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  private updateNavigationLabels(): void {
    const isSpanish = this.languageService.getCurrentLanguageCode() === 'es';
    this.navigationItems = isSpanish ? [
      { label: 'Inicio', href: '#hero' },
      { label: 'Servicios', href: '#services' },
      { label: 'Impacto', href: '#metrics' },
      { label: 'Equipo', href: '#team' },
      { label: 'Casos de Éxito', href: '#success' },
      { label: 'Contacto', href: '#contact' }
    ] : [
      { label: 'Home', href: '#hero' },
      { label: 'Services', href: '#services' },
      { label: 'Impact', href: '#metrics' },
      { label: 'Team', href: '#team' },
      { label: 'Success Stories', href: '#success' },
      { label: 'Contact', href: '#contact' }
    ];
  }
}