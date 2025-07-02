import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { LanguageService } from '../services/language.service';
import { TeamMember } from '../types/interfaces';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="py-20 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gray-50 dark:bg-darkBase-800">
        <div class="absolute inset-0 bg-gradient-to-br from-techBlue-50/20 to-innovationGreen-50/20 dark:from-techBlue-900/10 dark:to-innovationGreen-900/10"></div>
      </div>
      
      <div class="relative z-10 container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">
            {{ isSpanish() ? 'Liderazgo Visionario' : 'Visionary Leadership' }}
          </h2>
          <p class="section-subtitle">
            {{ isSpanish() 
              ? 'Conoce a los arquitectos de ecosistemas digitales que están transformando el futuro de la tecnología y los negocios.' 
              : 'Meet the digital ecosystem architects who are transforming the future of technology and business.' 
            }}
          </p>
        </div>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div *ngFor="let member of teamMembers; let i = index" 
               class="profile-card text-center group"
               [style.animation-delay.ms]="i * 200">
            
            <!-- Member Image -->
            <div class="relative mb-6 overflow-hidden rounded-2xl">
              <img [src]="member.image" 
                   [alt]="member.name"
                   class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="flex justify-center space-x-3">
                    <a *ngIf="member.social.linkedin" 
                       [href]="member.social.linkedin"
                       class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      💼
                    </a>
                    <a *ngIf="member.social.twitter" 
                       [href]="member.social.twitter"
                       class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      🐦
                    </a>
                    <a *ngIf="member.social.github" 
                       [href]="member.social.github"
                       class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      💻
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Member Info -->
            <h3 class="text-xl font-bold mb-1 text-gray-900 dark:text-white">
              {{ member.name }}
            </h3>
            
            <p class="text-techBlue-500 font-semibold mb-2">
              {{ member.role }}
            </p>
            
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {{ getTranslatedDescription(member.description) }}
            </p>
            
            <!-- Expertise Tags -->
            <div class="flex flex-wrap gap-2 justify-center">
              <span *ngFor="let skill of member.expertise" 
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                {{ getTranslatedSkill(skill) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Company Values -->
        <div class="max-w-6xl mx-auto">
          <h3 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {{ isSpanish() ? 'Nuestros Valores' : 'Our Values' }}
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let value of companyValues; let i = index" 
                 class="text-center p-6 rounded-2xl bg-white dark:bg-darkBase-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                 [style.animation-delay.ms]="i * 150">
              
              <!-- Value Icon -->
              <div class="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">
                {{ value.icon }}
              </div>
              
              <!-- Value Title -->
              <h4 class="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                {{ getTranslatedValueTitle(value.title) }}
              </h4>
              
              <!-- Value Description -->
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                {{ getTranslatedValueDescription(value.description) }}
              </p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-16">
          <div class="max-w-3xl mx-auto glass-effect rounded-2xl p-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ isSpanish() ? '¿Listo para Transformar tu Negocio?' : 'Ready to Transform Your Business?' }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ isSpanish() 
                ? 'Únete a cientos de empresas que ya confían en nuestro equipo para acelerar su crecimiento digital.' 
                : 'Join hundreds of companies that already trust our team to accelerate their digital growth.' 
              }}
            </p>
            <button class="btn-primary text-lg px-8 py-4">
              {{ isSpanish() ? 'Habla con Nuestro Equipo' : 'Talk to Our Team' }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TeamComponent {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  teamMembers: TeamMember[] = this.dataService.getTeamMembers();
  
  companyValues = [
    {
      title: 'Disruptive Innovation',
      description: 'We challenge the status quo and create breakthrough solutions that redefine industries.',
      icon: '💡'
    },
    {
      title: 'Technical Excellence',
      description: 'We maintain the highest standards in code quality, architecture, and performance.',
      icon: '⚡'
    },
    {
      title: 'Digital Ethics',
      description: 'We build technology that respects privacy, promotes inclusion, and benefits society.',
      icon: '🛡️'
    },
    {
      title: 'Scalability',
      description: 'We design solutions that grow with your business and adapt to future challenges.',
      icon: '📈'
    }
  ];

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedDescription(description: string): string {
    const translations: { [key: string]: string } = {
      'Tech Architecture Visionary': this.isSpanish() ? 'Visionario de Arquitectura Tecnológica' : 'Tech Architecture Visionary',
      'Operations Excellence Leader': this.isSpanish() ? 'Líder en Excelencia Operacional' : 'Operations Excellence Leader',
      'Strategic Vision Architect': this.isSpanish() ? 'Arquitecto de Visión Estratégica' : 'Strategic Vision Architect',
      'Resource Optimization Specialist': this.isSpanish() ? 'Especialista en Optimización de Recursos' : 'Resource Optimization Specialist'
    };
    return translations[description] || description;
  }

  getTranslatedSkill(skill: string): string {
    const translations: { [key: string]: string } = {
      'System Architecture': this.isSpanish() ? 'Arquitectura de Sistemas' : 'System Architecture',
      'Cloud Computing': this.isSpanish() ? 'Computación en la Nube' : 'Cloud Computing',
      'AI/ML': this.isSpanish() ? 'IA/ML' : 'AI/ML',
      'Blockchain': this.isSpanish() ? 'Blockchain' : 'Blockchain',
      'Financial Strategy': this.isSpanish() ? 'Estrategia Financiera' : 'Financial Strategy',
      'Operations Management': this.isSpanish() ? 'Gestión de Operaciones' : 'Operations Management',
      'Process Optimization': this.isSpanish() ? 'Optimización de Procesos' : 'Process Optimization',
      'Team Leadership': this.isSpanish() ? 'Liderazgo de Equipos' : 'Team Leadership',
      'Business Strategy': this.isSpanish() ? 'Estrategia de Negocios' : 'Business Strategy',
      'Innovation Management': this.isSpanish() ? 'Gestión de Innovación' : 'Innovation Management',
      'Market Analysis': this.isSpanish() ? 'Análisis de Mercado' : 'Market Analysis',
      'Leadership': this.isSpanish() ? 'Liderazgo' : 'Leadership',
      'Resource Management': this.isSpanish() ? 'Gestión de Recursos' : 'Resource Management',
      'Financial Technology': this.isSpanish() ? 'Tecnología Financiera' : 'Financial Technology',
      'Risk Assessment': this.isSpanish() ? 'Evaluación de Riesgos' : 'Risk Assessment',
      'Process Automation': this.isSpanish() ? 'Automatización de Procesos' : 'Process Automation'
    };
    return translations[skill] || skill;
  }

  getTranslatedValueTitle(title: string): string {
    const translations: { [key: string]: string } = {
      'Disruptive Innovation': this.isSpanish() ? 'Innovación Disruptiva' : 'Disruptive Innovation',
      'Technical Excellence': this.isSpanish() ? 'Excelencia Técnica' : 'Technical Excellence',
      'Digital Ethics': this.isSpanish() ? 'Ética Digital' : 'Digital Ethics',
      'Scalability': this.isSpanish() ? 'Escalabilidad' : 'Scalability'
    };
    return translations[title] || title;
  }

  getTranslatedValueDescription(description: string): string {
    const translations: { [key: string]: string } = {
      'We challenge the status quo and create breakthrough solutions that redefine industries.': 
        this.isSpanish() ? 'Desafiamos el status quo y creamos soluciones revolucionarias que redefinen industrias.' : 'We challenge the status quo and create breakthrough solutions that redefine industries.',
      'We maintain the highest standards in code quality, architecture, and performance.': 
        this.isSpanish() ? 'Mantenemos los más altos estándares en calidad de código, arquitectura y rendimiento.' : 'We maintain the highest standards in code quality, architecture, and performance.',
      'We build technology that respects privacy, promotes inclusion, and benefits society.': 
        this.isSpanish() ? 'Construimos tecnología que respeta la privacidad, promueve la inclusión y beneficia a la sociedad.' : 'We build technology that respects privacy, promotes inclusion, and benefits society.',
      'We design solutions that grow with your business and adapt to future challenges.': 
        this.isSpanish() ? 'Diseñamos soluciones que crecen con tu negocio y se adaptan a futuros desafíos.' : 'We design solutions that grow with your business and adapt to future challenges.'
    };
    return translations[description] || description;
  }
}