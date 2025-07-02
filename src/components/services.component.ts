import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';
import { Service } from '../types/interfaces';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-20 relative">
      <!-- Background -->
      <div class="absolute inset-0 bg-white dark:bg-darkBase-900"></div>
      
      <div class="relative z-10 container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">
            {{ isSpanish() ? 'Ecosistema de Servicios' : 'Service Ecosystem' }}
          </h2>
          <p class="section-subtitle">
            {{ isSpanish() 
              ? 'Integramos desarrollo tecnológico, educación virtual y marketing digital para crear soluciones completas que transforman negocios.' 
              : 'We integrate tech development, virtual education, and digital marketing to create complete solutions that transform businesses.' 
            }}
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div *ngFor="let service of services; let i = index" 
               class="service-card group relative overflow-hidden"
               [class.animate-slide-up]="true"
               [style.animation-delay.ms]="i * 200">
            
            <!-- Service Icon -->
            <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {{ service.icon }}
            </div>
            
            <!-- Service Title -->
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ getTranslatedTitle(service.title) }}
            </h3>
            
            <!-- Service Description -->
            <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {{ getTranslatedDescription(service.description) }}
            </p>
            
            <!-- Features List -->
            <ul class="space-y-2 mb-6">
              <li *ngFor="let feature of service.features" 
                  class="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span class="w-2 h-2 rounded-full mr-3" 
                      [ngClass]="getFeatureColor(service.color)"></span>
                {{ getTranslatedFeature(feature) }}
              </li>
            </ul>
            
            <!-- CTA Button -->
            <button class="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    [ngClass]="getButtonClass(service.color)">
              {{ isSpanish() ? 'Explorar Solución' : 'Explore Solution' }}
            </button>
            
            <!-- Hover Effect -->
            <div class="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                 [ngClass]="getBackgroundClass(service.color)"></div>
          </div>
        </div>

        <!-- Process Flow -->
        <div class="max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {{ isSpanish() ? 'Nuestro Proceso de Transformación' : 'Our Transformation Process' }}
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let phase of transformationPhases; let i = index" 
                 class="text-center relative">
              
              <!-- Phase Number -->
              <div class="w-16 h-16 bg-gradient-to-br from-techBlue-500 to-innovationGreen-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {{ i + 1 }}
              </div>
              
              <!-- Phase Title -->
              <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {{ getTranslatedPhaseTitle(phase.title) }}
              </h4>
              
              <!-- Phase Description -->
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ getTranslatedPhaseDescription(phase.description) }}
              </p>
              
              <!-- Phase Features -->
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li *ngFor="let feature of phase.features">
                  {{ getTranslatedPhaseFeature(feature) }}
                </li>
              </ul>
              
              <!-- Arrow -->
              <div *ngIf="i < transformationPhases.length - 1" 
                   class="hidden md:block absolute top-8 left-full w-8 h-1 bg-gradient-to-r from-techBlue-500 to-innovationGreen-500 transform -translate-x-4">
                <div class="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-innovationGreen-500 border-t-2 border-t-transparent border-b-2 border-b-transparent transform translate-x-1 -translate-y-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  services: Service[] = this.dataService.getServices();
  
  transformationPhases = [
    {
      title: 'Discover Phase',
      description: 'We analyze your current ecosystem and identify opportunities for growth and optimization.',
      features: ['Ecosystem Analysis', 'Opportunity Mapping', 'Strategic Planning']
    },
    {
      title: 'Build Phase',
      description: 'We develop and implement solutions using agile methodologies and cutting-edge technology.',
      features: ['Agile Development', 'Continuous Integration', 'Quality Assurance']
    },
    {
      title: 'Scale Phase',
      description: 'We implement growth strategies and ensure sustainable evolution of your digital ecosystem.',
      features: ['Growth Hacking', 'Performance Optimization', 'Continuous Innovation']
    }
  ];

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedTitle(title: string): string {
    const translations: { [key: string]: string } = {
      'Tech Development': this.isSpanish() ? 'Desarrollo Tecnológico' : 'Tech Development',
      'Virtual Education': this.isSpanish() ? 'Educación Virtual' : 'Virtual Education',
      'Digital Marketing': this.isSpanish() ? 'Marketing Digital' : 'Digital Marketing'
    };
    return translations[title] || title;
  }

  getTranslatedDescription(description: string): string {
    const translations: { [key: string]: string } = {
      'Custom SaaS solutions and startup accelerators built with cutting-edge technology.': 
        this.isSpanish() ? 'Soluciones SaaS personalizadas y aceleradoras de startups construidas con tecnología de vanguardia.' : 'Custom SaaS solutions and startup accelerators built with cutting-edge technology.',
      'Training 10k+ professionals and building future tech leaders through innovative programs.': 
        this.isSpanish() ? 'Formando más de 10k profesionales y construyendo futuros líderes tecnológicos a través de programas innovadores.' : 'Training 10k+ professionals and building future tech leaders through innovative programs.',
      'Sales funnels and organic growth strategies that amplify your digital presence.': 
        this.isSpanish() ? 'Embudos de ventas y estrategias de crecimiento orgánico que amplifican tu presencia digital.' : 'Sales funnels and organic growth strategies that amplify your digital presence.'
    };
    return translations[description] || description;
  }

  getTranslatedFeature(feature: string): string {
    const translations: { [key: string]: string } = {
      'Custom SaaS Platforms': this.isSpanish() ? 'Plataformas SaaS Personalizadas' : 'Custom SaaS Platforms',
      'API Development': this.isSpanish() ? 'Desarrollo de APIs' : 'API Development',
      'Cloud Architecture': this.isSpanish() ? 'Arquitectura en la Nube' : 'Cloud Architecture',
      'DevOps Solutions': this.isSpanish() ? 'Soluciones DevOps' : 'DevOps Solutions',
      'Professional Certification': this.isSpanish() ? 'Certificación Profesional' : 'Professional Certification',
      'Tech Leadership': this.isSpanish() ? 'Liderazgo Tecnológico' : 'Tech Leadership',
      'Online Courses': this.isSpanish() ? 'Cursos en Línea' : 'Online Courses',
      'Mentorship Programs': this.isSpanish() ? 'Programas de Mentoría' : 'Mentorship Programs',
      'Growth Hacking': this.isSpanish() ? 'Growth Hacking' : 'Growth Hacking',
      'Sales Funnels': this.isSpanish() ? 'Embudos de Ventas' : 'Sales Funnels',
      'SEO Optimization': this.isSpanish() ? 'Optimización SEO' : 'SEO Optimization',
      'Social Media Strategy': this.isSpanish() ? 'Estrategia de Redes Sociales' : 'Social Media Strategy'
    };
    return translations[feature] || feature;
  }

  getTranslatedPhaseTitle(title: string): string {
    const translations: { [key: string]: string } = {
      'Discover Phase': this.isSpanish() ? 'Fase de Descubrimiento' : 'Discover Phase',
      'Build Phase': this.isSpanish() ? 'Fase de Construcción' : 'Build Phase',
      'Scale Phase': this.isSpanish() ? 'Fase de Escalamiento' : 'Scale Phase'
    };
    return translations[title] || title;
  }

  getTranslatedPhaseDescription(description: string): string {
    const translations: { [key: string]: string } = {
      'We analyze your current ecosystem and identify opportunities for growth and optimization.': 
        this.isSpanish() ? 'Analizamos tu ecosistema actual e identificamos oportunidades de crecimiento y optimización.' : 'We analyze your current ecosystem and identify opportunities for growth and optimization.',
      'We develop and implement solutions using agile methodologies and cutting-edge technology.': 
        this.isSpanish() ? 'Desarrollamos e implementamos soluciones usando metodologías ágiles y tecnología de vanguardia.' : 'We develop and implement solutions using agile methodologies and cutting-edge technology.',
      'We implement growth strategies and ensure sustainable evolution of your digital ecosystem.': 
        this.isSpanish() ? 'Implementamos estrategias de crecimiento y aseguramos la evolución sostenible de tu ecosistema digital.' : 'We implement growth strategies and ensure sustainable evolution of your digital ecosystem.'
    };
    return translations[description] || description;
  }

  getTranslatedPhaseFeature(feature: string): string {
    const translations: { [key: string]: string } = {
      'Ecosystem Analysis': this.isSpanish() ? 'Análisis del Ecosistema' : 'Ecosystem Analysis',
      'Opportunity Mapping': this.isSpanish() ? 'Mapeo de Oportunidades' : 'Opportunity Mapping',
      'Strategic Planning': this.isSpanish() ? 'Planificación Estratégica' : 'Strategic Planning',
      'Agile Development': this.isSpanish() ? 'Desarrollo Ágil' : 'Agile Development',
      'Continuous Integration': this.isSpanish() ? 'Integración Continua' : 'Continuous Integration',
      'Quality Assurance': this.isSpanish() ? 'Aseguramiento de Calidad' : 'Quality Assurance',
      'Growth Hacking': this.isSpanish() ? 'Growth Hacking' : 'Growth Hacking',
      'Performance Optimization': this.isSpanish() ? 'Optimización de Rendimiento' : 'Performance Optimization',
      'Continuous Innovation': this.isSpanish() ? 'Innovación Continua' : 'Continuous Innovation'
    };
    return translations[feature] || feature;
  }

  getFeatureColor(color: string): string {
    const colorMap: { [key: string]: string } = {
      'techBlue': 'bg-techBlue-500',
      'innovationGreen': 'bg-innovationGreen-500',
      'accentGold': 'bg-accentGold-500'
    };
    return colorMap[color] || 'bg-gray-500';
  }

  getButtonClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      'techBlue': 'bg-techBlue-500 hover:bg-techBlue-600 text-white',
      'innovationGreen': 'bg-innovationGreen-500 hover:bg-innovationGreen-600 text-white',
      'accentGold': 'bg-accentGold-500 hover:bg-accentGold-600 text-white'
    };
    return colorMap[color] || 'bg-gray-500 hover:bg-gray-600 text-white';
  }

  getBackgroundClass(color: string): string {
    const colorMap: { [key: string]: string } = {
      'techBlue': 'bg-techBlue-500',
      'innovationGreen': 'bg-innovationGreen-500',
      'accentGold': 'bg-accentGold-500'
    };
    return colorMap[color] || 'bg-gray-500';
  }
}