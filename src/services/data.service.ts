import { Injectable } from '@angular/core';
import { Metric, Service, TeamMember, SuccessStory } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getMetrics(): Metric[] {
    return [
      {
        id: 'professionals',
        value: 100,
        label: 'Professionals Trained',
        icon: '👨🏻‍🎓',
        suffix: '+',
        color: 'text-techBlue-500'
      },
      {
        id: 'systems',
        value: 20,
        label: 'Custom Systems',
        icon: '💻',
        suffix: '+',
        color: 'text-innovationGreen-500'
      },
      {
        id: 'brands',
        value: 20,
        label: 'Brands Positioned',
        icon: '🥇',
        suffix: '+',
        color: 'text-accentGold-500'
      },
      {
        id: 'startups',
        value: 3,
        label: 'Startups Accelerated',
        icon: '👩🏻‍💻',
        suffix: '+',
        color: 'text-purple-500'
      }
    ];
  }

  getOurServicesSection() {
    return {
      titleES: 'Nuestros Servicios',
      titleEN: 'Our Services',
      descriptionES: 'Soluciones integrales para impulsar tu negocio digital.',
      descriptionEN: 'Comprehensive solutions to boost your digital business.'
    };
  }

  getOurServices(): Service[] {
    return [
      {
        id: 'Tech Development',
        titleES: 'Desarrollo Tecnológico',
        titleEN: 'Tech Development',
        descriptionES: 'Desarrollo de sistemas, páginas web y aplicaciones personalizadas con tecnología avanzada.',
        descriptionEN: 'Train with practical courses: master AI, social media and digital tools to save time and make smart decisions.',
        icon: '💻',
        featuresES: [
          'Sistemas y aplicaciones personalizadas.',
          'Creación de páginas web profesionales.',
          'Landing pages para ventas.',
          'Desarrollo de sistemas a medida.'
        ],
        featuresEN: [
          'Custom systems and applications.',
          'Professional website development.',
          'High-conversion landing pages.',
          'Fully customized software.'
        ],
        color: 'techBlue'
      },
      {
        id: 'Advanced Education',
        titleES: 'Educación Avanzada',
        titleEN: 'Advanced Education',
        descriptionES: 'Fórmate con cursos prácticos: domina IA, redes sociales y herramientas digitales para ahorrar tiempo y tomar decisiones inteligentes.',
        descriptionEN: 'Train with practical courses: master AI, social media and digital tools to save time and make smart decisions.',
        icon: '🎓',
        featuresES: [
          'Cursos presenciales y virtuales.',
          'Cursos prácticos de IA para negocios.',
          'Cursos de IA aplicada a diferentes áreas.',
          'Cursos de manejo de tecnología.',
          'Certificación digital.'
        ],
        featuresEN: [
          'In-person and virtual courses.',
          'Practical AI for business.',
          'AI applications in different fields.',
          'Technology management courses.',
          'Digital certification.'
        ],
        color: 'innovationGreen'
      },
      {
        id: 'Digital Marketing',
        titleES: 'Marketing Digital',
        titleEN: 'Digital Marketing',
        descriptionES: 'Impulsa tu marca con estrategias integrales: desde publicidad dirigida hasta contenido viral. Usamos IA para maximizar tu retorno de la inversión (ROI).',
        descriptionEN: 'Boost your brand with 360° strategies: from targeted advertising to viral content. We use AI to maximize your ROI.',
        icon: '📊',
        featuresES: [
          'Facebook, Google Ads y TikTok Ads.',
          'API de WhatsApp Business.',
          'SEO (Posicionamiento orgánico).',
          'Administración de redes sociales.',
          'Embudos de venta y optimización.',
          'Creación de contenido viral.'
        ],
        featuresEN: [
          'Facebook, Google, and TikTok Ads.',
          'WhatsApp Business API.',
          'SEO Optimization.',
          'Social media management.',
          'Sales funnels and CRO.',
          'Viral content creation.'
        ],
        color: 'accentGold'
      }
    ];
  }


  getTeamMembers(): TeamMember[] {
    return [
      {
        id: 'ricardo',
        name: 'Ricardo Pilcomayo',
        role: 'CTO',
        description: 'Tech Architecture Visionary',
        image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
        expertise: ['System Architecture', 'Cloud Computing', 'AI/ML', 'Blockchain'],
        social: {
          linkedin: '#',
          twitter: '#',
          github: '#'
        }
      },
      {
        id: 'lady',
        name: 'Lady Osco',
        role: 'CFO/COO',
        description: 'Operations Excellence Leader',
        image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
        expertise: ['Financial Strategy', 'Operations Management', 'Process Optimization', 'Team Leadership'],
        social: {
          linkedin: '#',
          twitter: '#'
        }
      },
      {
        id: 'juan',
        name: 'Juan Churata',
        role: 'CEO',
        description: 'Strategic Vision Architect',
        image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
        expertise: ['Business Strategy', 'Innovation Management', 'Market Analysis', 'Leadership'],
        social: {
          linkedin: '#',
          twitter: '#'
        }
      },
      {
        id: 'Jonatan',
        name: 'Jonatan Mallea',
        role: 'GFT',
        description: 'Resource Optimization Specialist',
        image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
        expertise: ['Resource Management', 'Financial Technology', 'Risk Assessment', 'Process Automation'],
        social: {
          linkedin: '#'
        }
      }
    ];
  }

  getSuccessStories(): SuccessStory[] {
    return [
      {
        id: 'saas-platform',
        title: 'Revolutionary SaaS Platform',
        description: 'Developed a comprehensive SaaS solution that transformed business operations for multiple clients.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Tech Development',
        metrics: [
          { label: 'User Growth', value: '300%' },
          { label: 'Revenue Increase', value: '250%' },
          { label: 'Time Saved', value: '40 hrs/week' }
        ]
      },
      {
        id: 'marketing-campaign',
        title: 'Digital Transformation Campaign',
        description: 'Executed a comprehensive digital marketing strategy that revolutionized client engagement.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Digital Marketing',
        metrics: [
          { label: 'Lead Generation', value: '450%' },
          { label: 'Conversion Rate', value: '180%' },
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
          { label: 'Students Certified', value: '5,000+' },
          { label: 'Job Placement Rate', value: '92%' },
          { label: 'Satisfaction Score', value: '4.9/5' }
        ]
      }
    ];
  }
}