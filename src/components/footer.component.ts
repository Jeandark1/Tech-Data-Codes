import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-darkBase-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-gradient-to-br from-techBlue-500 to-innovationGreen-500"></div>
      </div>
      
      <div class="relative z-10">
        <!-- Main Footer Content -->
        <div class="container mx-auto px-6 py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <!-- Company Info -->
            <div class="space-y-6">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-techBlue-500 to-innovationGreen-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-lg">TDC</span>
                </div>
                <div>
                  <h3 class="text-xl font-display font-bold">Tech Data Codes</h3>
                  <p class="text-gray-400 text-sm">Digital Ecosystem Architects</p>
                </div>
              </div>
              
              <p class="text-gray-400 leading-relaxed">
                {{ isSpanish() 
                  ? 'Transformamos empresas a través de ecosistemas digitales integrados que combinan tecnología, educación y marketing de vanguardia.' 
                  : 'We transform businesses through integrated digital ecosystems that combine cutting-edge technology, education, and marketing.' 
                }}
              </p>
              
              <!-- Social Links -->
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-techBlue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                  💼
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-techBlue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                  🐦
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-techBlue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                  💻
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-techBlue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                  📧
                </a>
              </div>
            </div>
            
            <!-- Services -->
            <div>
              <h4 class="text-lg font-semibold mb-6">
                {{ isSpanish() ? 'Servicios' : 'Services' }}
              </h4>
              <ul class="space-y-3">
                <li *ngFor="let service of services">
                  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                    {{ getTranslatedService(service) }}
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Company -->
            <div>
              <h4 class="text-lg font-semibold mb-6">
                {{ isSpanish() ? 'Empresa' : 'Company' }}
              </h4>
              <ul class="space-y-3">
                <li *ngFor="let link of companyLinks">
                  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                    {{ getTranslatedCompanyLink(link) }}
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Newsletter -->
            <div>
              <h4 class="text-lg font-semibold mb-6">
                {{ isSpanish() ? 'Mantente Conectado' : 'Stay Connected' }}
              </h4>
              <p class="text-gray-400 mb-4">
                {{ isSpanish() 
                  ? 'Recibe insights exclusivos sobre innovación digital y oportunidades de crecimiento.' 
                  : 'Get exclusive insights on digital innovation and growth opportunities.' 
                }}
              </p>
              
              <form class="space-y-3">
                <input 
                  type="email" 
                  [placeholder]="isSpanish() ? 'Tu email' : 'Your email'"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-techBlue-500 text-white placeholder-gray-400">
                
                <button type="submit" class="w-full btn-primary">
                  {{ isSpanish() ? 'Suscribirse' : 'Subscribe' }}
                </button>
              </form>
              
              <!-- Innovation Badge -->
              <div class="mt-6 p-4 bg-gradient-to-r from-techBlue-500/10 to-innovationGreen-500/10 rounded-lg border border-techBlue-500/20">
                <div class="flex items-center space-x-2 mb-2">
                  <span class="text-xl">🚀</span>
                  <span class="font-semibold">
                    {{ isSpanish() ? 'Portal de Innovación Abierta' : 'Open Innovation Portal' }}
                  </span>
                </div>
                <p class="text-sm text-gray-400">
                  {{ isSpanish() 
                    ? 'Contribuye a nuestro ecosistema' 
                    : 'Contribute to our ecosystem' 
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-gray-800">
          <div class="container mx-auto px-6 py-6">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              <!-- Copyright -->
              <div class="text-gray-400 text-sm">
                <p>© 2025 Tech Data Codes S.A. 
                  {{ isSpanish() ? 'Todos los derechos reservados.' : 'All rights reserved.' }}
                </p>
              </div>
              
              <!-- Legal Links -->
              <div class="flex space-x-6 text-sm">
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  {{ isSpanish() ? 'Privacidad' : 'Privacy' }}
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  {{ isSpanish() ? 'Términos' : 'Terms' }}
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  {{ isSpanish() ? 'Cookies' : 'Cookies' }}
                </a>
              </div>
              
              <!-- Blockchain Ready Badge -->
              <div class="flex items-center space-x-2 text-sm text-gray-400">
                <span class="text-lg">⛓️</span>
                <span>{{ isSpanish() ? 'Blockchain Ready' : 'Blockchain Ready' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  private languageService = inject(LanguageService);

  services = [
    'Tech Development',
    'Virtual Education', 
    'Digital Marketing',
    'SaaS Solutions',
    'Startup Acceleration',
    'Growth Hacking'
  ];

  companyLinks = [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Case Studies',
    'Contact'
  ];

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedService(service: string): string {
    const translations: { [key: string]: string } = {
      'Tech Development': this.isSpanish() ? 'Desarrollo Tecnológico' : 'Tech Development',
      'Virtual Education': this.isSpanish() ? 'Educación Virtual' : 'Virtual Education',
      'Digital Marketing': this.isSpanish() ? 'Marketing Digital' : 'Digital Marketing',
      'SaaS Solutions': this.isSpanish() ? 'Soluciones SaaS' : 'SaaS Solutions',
      'Startup Acceleration': this.isSpanish() ? 'Aceleración de Startups' : 'Startup Acceleration',
      'Growth Hacking': this.isSpanish() ? 'Growth Hacking' : 'Growth Hacking'
    };
    return translations[service] || service;
  }

  getTranslatedCompanyLink(link: string): string {
    const translations: { [key: string]: string } = {
      'About Us': this.isSpanish() ? 'Nosotros' : 'About Us',
      'Our Team': this.isSpanish() ? 'Nuestro Equipo' : 'Our Team',
      'Careers': this.isSpanish() ? 'Carreras' : 'Careers',
      'Blog': this.isSpanish() ? 'Blog' : 'Blog',
      'Case Studies': this.isSpanish() ? 'Casos de Estudio' : 'Case Studies',
      'Contact': this.isSpanish() ? 'Contacto' : 'Contact'
    };
    return translations[link] || link;
  }
}