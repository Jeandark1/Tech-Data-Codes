import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';
import { Service } from '../types/interfaces';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  template: `
    <section id="flipping-cards" class="py-20 relative">
      <!-- Background with dark mode support -->
      <div class="absolute inset-0 bg-white dark:bg-darkBase-900"></div>
      <div class="relative z-10 container mx-auto px-6">
        <!-- Section Header with translation -->
        <div class="text-center mb-16">
          <h2 class="section-title">
            {{ isSpanish() ? 'Nuestros Servicios' : 'Our Services' }}
          </h2>
          <p class="section-subtitle">
            {{ isSpanish()
              ? 'Soluciones integrales para impulsar tu negocio digital'
              : 'Comprehensive solutions to boost your digital business' }}
          </p>
        </div>

        <!-- Flipping Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <!-- Card 1 - Tech Development -->
          <div class="cardWrapper group" style="width: 300px; height: 400px;">
            <div class="card">
              <!-- Front Face -->
              <div class="cardFace front">
                <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  💻
                </div>
                <h3 class="card-title">
                  {{ getTranslatedTitle('Tech Development') }}
                </h3>
                <p class="card-description">
                  {{ getTranslatedDescription('We create custom digital solutions: from fast websites to systems that automate your processes. Scalable technology to grow your business.') }}
                </p>
              </div>

              <!-- Back Face -->
              <div class="cardFace back">
                <h3 class="card-title">{{ getTranslatedTitle('Tech Development') }}</h3>
                <ul class="feature-list">
                  <li>{{ getTranslatedFeature('Custom systems and applications') }}</li>
                  <li>{{ getTranslatedFeature('Professional website development') }}</li>
                  <li>{{ getTranslatedFeature('High-conversion landing pages') }}</li>
                  <li>{{ getTranslatedFeature('Fully customized software') }}</li>
                </ul>
                <a href="https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20desarrollo%20tecnol%C3%B3gico" 
                   target="_blank" 
                   class="card-button" 
                   style="background-color: #096ab9;">
                  {{ isSpanish() ? 'Contáctanos' : 'Contact us' }}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2 - Education -->
          <div class="cardWrapper group" style="width: 300px; height: 400px;">
            <div class="card">
              <!-- Front Face -->
              <div class="cardFace front">
                <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  🎓
                </div>
                <h3 class="card-title">
                  {{ getTranslatedTitle('Education') }}
                </h3>
                <p class="card-description">
                  {{ getTranslatedDescription('Train with practical courses: master AI, social media and digital tools to save time and make smart decisions.') }}
                </p>
              </div>

              <!-- Back Face -->
              <div class="cardFace back">
                <h3 class="card-title">{{ getTranslatedTitle('Education') }}</h3>
                <ul class="feature-list">
                  <li>{{ getTranslatedFeature('In-person and virtual courses') }}</li>
                  <li>{{ getTranslatedFeature('Practical AI for business') }}</li>
                  <li>{{ getTranslatedFeature('AI applications in different fields') }}</li>
                  <li>{{ getTranslatedFeature('Technology management courses') }}</li>
                  <li>{{ getTranslatedFeature('Digital certification') }}</li>
                </ul>
                <a href="https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20cursos" 
                   target="_blank" 
                   class="card-button" 
                   style="background-color: #0db583;">
                  {{ isSpanish() ? 'Contáctanos' : 'Contact us' }}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3 - Digital Marketing -->
          <div class="cardWrapper group" style="width: 300px; height: 400px;">
            <div class="card">
              <!-- Front Face -->
              <div class="cardFace front">
                <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <h3 class="card-title">
                  {{ getTranslatedTitle('Digital Marketing') }}
                </h3>
                <p class="card-description">
                  {{ getTranslatedDescription('Boost your brand with 360° strategies: from targeted advertising to viral content. We use AI to maximize your ROI.') }}
                </p>
              </div>

              <!-- Back Face -->
              <div class="cardFace back">
                <h3 class="card-title">{{ getTranslatedTitle('Digital Marketing') }}</h3>
                <ul class="feature-list">
                  <li>{{ getTranslatedFeature('Facebook, Google, TikTok Ads') }}</li>
                  <li>{{ getTranslatedFeature('WhatsApp Business API') }}</li>
                  <li>{{ getTranslatedFeature('SEO Optimization') }}</li>
                  <li>{{ getTranslatedFeature('Social media management') }}</li>
                  <li>{{ getTranslatedFeature('Sales funnels and CRO') }}</li>
                  <li>{{ getTranslatedFeature('Viral content creation') }}</li>
                </ul>
                <a href="https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20marketing%20digital" 
                   target="_blank" 
                   class="card-button" 
                   style="background-color: #ffd166;">
                  {{ isSpanish() ? 'Contáctanos' : 'Contact us' }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transformation Process Section -->
    <section id="process-cards" class="py-20 bg-gray-50 dark:bg-darkBase-800 transition-colors">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white transition-colors">
            {{ isSpanish() ? 'Nuestro Proceso de Transformación' : 'Our Transformation Process' }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 transition-colors">
            {{ isSpanish()
              ? 'Acompañamos a tu empresa en cada etapa del crecimiento digital'
              : 'We guide your business through every stage of digital growth' }}
          </p>
        </div>

        <!-- Process Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center" style="display:flex;flex-wrap: wrap;justify-content: center;">
          
            <ng-container *ngFor="let phase of processPhases; let i = index; let last = last">
              <!-- Tarjeta de fase -->
              <div 
                class="process-card group relative bg-white dark:bg-darkBase-900 rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-500"
                [style.animation-delay]="(i * 100) + 'ms'"
                tabindex="0"
              >
                <!-- Animated Number Circle -->
                <div class="circle-num w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6
                            bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
                  {{ i + 1 }}
                </div>
                
                <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
                  {{ getPhaseTitle(phase.key) }}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {{ getPhaseDescription(phase.key) }}
                </p>
                
                <ul class="w-full space-y-2">
                  <li *ngFor="let point of getPhasePoints(phase.key)" 
                      class="flex items-start text-gray-700 dark:text-gray-300">
                    <span class="mr-2 text-blue-500">•</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <!-- Flecha, solo si NO es la última tarjeta -->
              <div *ngIf="!last" class="hidden md:flex items-center select-none">
                <span class="text-2xl text-blue-500 font-bold mx-2">——</span>
                <!-- O pon aquí el SVG si quieres -->
              </div>
            </ng-container>
          </div>

        
        
        


      </div>
    </section>
  `,
  styles: [`
    .cardWrapper {
      perspective: 1000px;
      cursor: pointer;
    }

    .card {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .cardFace {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .front {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: white;
    }

    .back {
      background: linear-gradient(135deg, #334155 0%, #475569 100%);
      color: white;
      transform: rotateY(180deg);
      overflow-y: auto;
    }

    .card-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .card-description {
      font-size: 16px;
      margin-bottom: 16px;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;
      width: 100%;
      text-align: left;
    }

    .feature-list li {
      padding: 8px 0;
      font-size: 14px;
      position: relative;
      padding-left: 20px;
    }

    .feature-list li:before {
      content: "•";
      position: absolute;
      left: 0;
      color: currentColor;
      font-weight: bold;
    }

    .card-button {
      padding: 10px 24px;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      color: white;
      margin-top: auto;
      text-decoration: none;
      display: inline-block;
      text-align: center;
    }

    .card-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      opacity: 0.9;
    }

    .cardWrapper:hover .card {
      transform: rotateY(180deg);
    }

    /* Dark mode adaptations */
    .dark .front {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }

    .dark .back {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    }

    /* Process Cards */
    .process-card {
      height: 100%;
      transform: scale(1);
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .process-card:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      z-index: 10;
    }

    /* Shake and zoom animation */
    @keyframes quickShake {
      0%, 100% { transform: translateX(0) scale(1); }
      20% { transform: translateX(-3px) rotate(-1deg) scale(1); }
      40% { transform: translateX(3px) rotate(1deg) scale(1); }
      60% { transform: translateX(-3px) rotate(-1deg) scale(1); }
      80% { transform: translateX(3px) rotate(1deg) scale(1); }
    }

    .process-card:hover {
      animation: quickShake 0.4s ease-in-out;
    }

    .process-card:hover .circle-num {
      transform: scale(1.1);
      transition: transform 0.3s ease-out;
    }

    /* Scrollbar styling for back face */
    .back::-webkit-scrollbar {
      width: 6px;
    }

    .back::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.1);
      border-radius: 3px;
    }

    .back::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.3);
      border-radius: 3px;
    }
  `]
})
export class ServicesComponent {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  // Process phases data
  processPhases = [
    { key: 'discovery' },
    { key: 'strategy' },
    { key: 'implementation' }
  ];

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedTitle(title: string): string {
    const translations: Record<string, string> = {
      'Tech Development': this.isSpanish() ? 'Desarrollo Tecnológico' : 'Tech Development',
      'Education': this.isSpanish() ? 'Educación Avanzada' : 'Education',
      'Digital Marketing': this.isSpanish() ? 'Marketing Digital' : 'Digital Marketing'
    };
    return translations[title] || title;
  }

  getTranslatedDescription(description: string): string {
    const translations: Record<string, string> = {
      'We create custom digital solutions: from fast websites to systems that automate your processes. Scalable technology to grow your business.':
        this.isSpanish() ? 'Desarrollo de sistemas, páginas web y aplicaciones personalizadas con tecnología avanzada.' : description,
      'Train with practical courses: master AI, social media and digital tools to save time and make smart decisions.':
        this.isSpanish() ? 'Cursos prácticos de IA aplicada a negocios y manejo de tecnologías digitales.' : description,
      'Boost your brand with 360° strategies: from targeted advertising to viral content. We use AI to maximize your ROI.':
        this.isSpanish() ? 'Publicidad digital, administración de redes sociales y estrategias de embudos de venta.' : description
    };
    return translations[description] || description;
  }

  getTranslatedFeature(feature: string): string {
    const translations: Record<string, string> = {
      'Custom systems and applications': this.isSpanish() ? 'Sistemas y aplicaciones personalizadas' : feature,
      'Professional website development': this.isSpanish() ? 'Creación de páginas web profesionales' : feature,
      'High-conversion landing pages': this.isSpanish() ? 'Landing pages para ventas' : feature,
      'Fully customized software': this.isSpanish() ? 'Desarrollo de sistemas a medida' : feature,
      'In-person and virtual courses': this.isSpanish() ? 'Cursos presenciales y virtuales' : feature,
      'Practical AI for business': this.isSpanish() ? 'Cursos prácticos de IA para negocios' : feature,
      'AI applications in different fields': this.isSpanish() ? 'Cursos de IA aplicada a diferentes áreas' : feature,
      'Technology management courses': this.isSpanish() ? 'Cursos de manejo de tecnología' : feature,
      'Digital certification': this.isSpanish() ? 'Certificación digital' : feature,
      'Facebook, Google, TikTok Ads': this.isSpanish() ? 'Facebook, Google Ads, TikTok Ads' : feature,
      'WhatsApp Business API': this.isSpanish() ? 'WhatsApp Business API' : feature,
      'SEO Optimization': this.isSpanish() ? 'SEO (Posicionamiento orgánico)' : feature,
      'Social media management': this.isSpanish() ? 'Administración de redes sociales' : feature,
      'Sales funnels and CRO': this.isSpanish() ? 'Embudos de venta y optimización' : feature,
      'Viral content creation': this.isSpanish() ? 'Creación de contenido viral' : feature
    };
    return translations[feature] || feature;
  }

  // Process phase translations
  getPhaseTitle(key: string): string {
    const titles: Record<string, string> = {
      'discovery': this.isSpanish() ? 'Descubrimiento' : 'Discovery',
      'strategy': this.isSpanish() ? 'Estrategia' : 'Strategy',
      'implementation': this.isSpanish() ? 'Implementación' : 'Implementation'
    };
    return titles[key] || key;
  }

  getPhaseDescription(key: string): string {
    const descriptions: Record<string, string> = {
      'discovery': this.isSpanish()
        ? 'Analizamos tus necesidades y objetivos comerciales'
        : 'We analyze your needs and business goals',
      'strategy': this.isSpanish()
        ? 'Diseñamos un plan personalizado para tu negocio'
        : 'We design a customized plan for your business',
      'implementation': this.isSpanish()
        ? 'Ejecutamos la solución con tecnología de punta'
        : 'We implement the solution with cutting-edge technology'
    };
    return descriptions[key] || key;
  }

  getPhasePoints(key: string): string[] {
    const points: Record<string, string[]> = {
      'discovery': this.isSpanish()
        ? [
          'Análisis de mercado',
          'Evaluación tecnológica',
          'Identificación de oportunidades'
        ]
        : [
          'Market analysis',
          'Technology assessment',
          'Opportunity identification'
        ],
      'strategy': this.isSpanish()
        ? [
          'Plan de transformación digital',
          'Hoja de ruta tecnológica',
          'Estrategia de implementación'
        ]
        : [
          'Digital transformation plan',
          'Technology roadmap',
          'Implementation strategy'
        ],
      'implementation': this.isSpanish()
        ? [
          'Desarrollo de soluciones',
          'Capacitación del equipo',
          'Soporte continuo'
        ]
        : [
          'Solution development',
          'Team training',
          'Ongoing support'
        ]
    };
    return points[key] || [];
  }
}