import { Component, inject, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Services
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

// Components
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { MetricsDashboardComponent } from './components/metrics-dashboard.component';
import { ServicesComponent } from './components/services.component';
import { TeamComponent } from './components/team.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    MetricsDashboardComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-lightBase-50 dark:bg-darkBase-900 transition-colors duration-300">
      <!-- Header -->
      <app-header></app-header>
      
      <!-- Main Content -->
      <main>
        <!-- Hero Section -->
        <app-hero></app-hero>
        
        <!-- Services Section -->
        <app-services></app-services>
        
        <!-- Metrics Dashboard -->
        <app-metrics-dashboard></app-metrics-dashboard>
        
        <!-- Team Section -->
        <app-team></app-team>
        
        <!-- Success Stories Section -->
        <section id="success" class="py-20 bg-white dark:bg-darkBase-900">
          <div class="container mx-auto px-6">
            <div class="text-center mb-16">
              <h2 class="section-title">
                {{ isSpanish() ? 'Casos de Éxito' : 'Success Stories' }}
              </h2>
              <p class="section-subtitle">
           Descubre cómo hemos transformado empresas y acelerado el crecimiento de nuestros clientes.
                  
              </p>
            </div>
            
            <!-- Success Stories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div *ngFor="let story of successStories; let i = index" 
                   class="bg-white dark:bg-darkBase-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                   [style.animation-delay.ms]="i * 200">
                
                <!-- Story Image -->
                <div class="h-48 overflow-hidden">
                  <img [src]="story.image" 
                       [alt]="story.title"
                       class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                </div>
                
                <!-- Story Content -->
                <div class="p-6">
                  <!-- Category Badge -->
                  <span class="inline-block px-3 py-1 bg-techBlue-100 dark:bg-techBlue-900 text-techBlue-600 dark:text-techBlue-300 text-xs font-semibold rounded-full mb-3">
                    {{ getTranslatedCategory(story.category) }}
                  </span>
                  
                  <!-- Story Title -->
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {{ story.title }}
                  </h3>
                  
                  <!-- Story Description -->
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ story.description }}
                  </p>
                  
                  <!-- Metrics -->
                  <div class="grid grid-cols-3 gap-4">
                    <div *ngFor="let metric of story.metrics" class="text-center">
                      <div class="text-lg font-bold text-techBlue-500">{{ metric.value }}</div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">{{ metric.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-gradient-to-br from-techBlue-500 to-innovationGreen-500 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
          </div>
          
          <div class="relative z-10 container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                {{ isSpanish() ? '¿Listo para Transformar tu Ecosistema Digital?' : 'Ready to Transform Your Digital Ecosystem?' }}
              </h2>
              
              <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {{ isSpanish() 
                  ? 'Únete a empresas líderes que ya están construyendo el futuro con nuestras soluciones integradas.' 
                  : 'Join leading companies that are already building the future with our integrated solutions.' 
                }}
              </p>
              
              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button class="bg-white text-techBlue-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {{ isSpanish() ? 'Auditoría Gratuita' : 'Free Audit' }}
                </button>
                
                <button class="border-2 border-white text-white hover:bg-white hover:text-techBlue-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  {{ isSpanish() ? 'Ver Demo en Vivo' : 'See Live Demo' }}
                </button>
              </div>
              
              <!-- Contact Info -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div class="text-center">
                  <div class="text-3xl mb-2">📧</div>
                  <h3 class="font-semibold mb-1">Email</h3>
                  <p class="opacity-90">hello&#64;techdatacodes.com</p>
                </div>
                
                <div class="text-center">
                  <div class="text-3xl mb-2">💬</div>
                  <h3 class="font-semibold mb-1">{{ isSpanish() ? 'Chat en Vivo' : 'Live Chat' }}</h3>
                  <p class="opacity-90">{{ isSpanish() ? 'Disponible 24/7' : 'Available 24/7' }}</p>
                </div>
                
                <div class="text-center">
                  <div class="text-3xl mb-2">📱</div>
                  <h3 class="font-semibold mb-1">{{ isSpanish() ? 'Consulta Rápida' : 'Quick Consultation' }}</h3>
                  <p class="opacity-90">{{ isSpanish() ? 'Respuesta en 24h' : '24h Response' }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `
})
export class App implements OnInit {
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);

  successStories = [
    {
      id: 'saas-platform',
      title: 'Revolutionary SaaS Platform',
      description: 'Developed a comprehensive SaaS solution that transformed business operations for multiple clients.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Tech Development',
      metrics: [
        { label: 'User Growth', value: '300%' },
        { label: 'Revenue', value: '250%' },
        { label: 'Time Saved', value: '40h/week' }
      ]
    },
    {
      id: 'marketing-campaign',
      title: 'Digital Transformation Campaign',
      description: 'Executed a comprehensive digital marketing strategy that revolutionized client engagement.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Digital Marketing',
      metrics: [
        { label: 'Leads', value: '450%' },
        { label: 'Conversion', value: '180%' },
        { label: 'ROI', value: '320%' }
      ]
    },
    {
      id: 'education-program',
      title: 'Professional Certification Program',
      description: 'Launched an innovative educational program that trained thousands of tech professionals.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Virtual Education',
      metrics: [
        { label: 'Students', value: '5,000+' },
        { label: 'Job Rate', value: '92%' },
        { label: 'Rating', value: '4.9/5' }
      ]
    }
  ];

  ngOnInit(): void {
    // Initialize theme and language services
    console.log('Tech Data Codes website initialized');
  }

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedCategory(category: string): string {
    const translations: { [key: string]: string } = {
      'Tech Development': this.isSpanish() ? 'Desarrollo Tecnológico' : 'Tech Development',
      'Digital Marketing': this.isSpanish() ? 'Marketing Digital' : 'Digital Marketing',
      'Virtual Education': this.isSpanish() ? 'Educación Virtual' : 'Virtual Education'
    };
    return translations[category] || category;
  }
}

bootstrapApplication(App);