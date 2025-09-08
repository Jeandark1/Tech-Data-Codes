import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { Service } from '../../types/interfaces';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  templateUrl: 'services.component.html',
  styleUrl: 'services.component.css'
})
export class ServicesComponent {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  contentText: Service[] = [];

  processPhases = [
    { key: 'discovery' },
    { key: 'strategy' },
    { key: 'implementation' }
  ];


  ngOnInit(): void {
    this.contentText = this.dataService.getOurServices();
  }

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedSectionTitle(id: string): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return id;
    return this.isSpanish() ? item.titleES : item.titleEN;
  }

  getTranslatedSectionDescription(id: string): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return id;
    return this.isSpanish() ? item.descriptionES : item.descriptionEN;
  }


  getColor(color: string): string {
    // Devuelve el color HEX según el nombre o el valor recibido
    const colorMap: Record<string, string> = {
      techBlue: '#096ab9',
      innovationGreen: '#0db583',
      accentGold: '#ffd166'
    };
    return colorMap[color] || '#ccc';
  }

  getContactLink(serviceId: string): string {
    const map: Record<string, string> = {
      'Tech Development': 'https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20desarrollo%20tecnol%C3%B3gico',
      'Advanced Education': 'https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20cursos',
      'Digital Marketing': 'https://wa.me/59162288955?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20marketing%20digital'
    };
    return map[serviceId] || 'https://wa.me/59162288955';
  }



  getTranslatedCardField(id: string, field: 'title' | 'description' | 'icon'): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return id;
    if (field === 'icon') return item.icon || '';
    const lang = this.isSpanish() ? 'ES' : 'EN';
    const key = `${field}${lang}`;
    return (item as any)[key] ?? id;
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