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

  getServices(): Service[] {
    return [
      {
        id: 'tech-development',
        title: 'Tech Development',
        description: 'Custom SaaS solutions and startup accelerators built with cutting-edge technology.',
        icon: '💻',
        features: ['Custom SaaS Platforms', 'API Development', 'Cloud Architecture', 'DevOps Solutions'],
        color: 'techBlue'
      },
      {
        id: 'virtual-education',
        title: 'Virtual Education',
        description: 'Training 10k+ professionals and building future tech leaders through innovative programs.',
        icon: '🎓',
        features: ['Professional Certification', 'Tech Leadership', 'Online Courses', 'Mentorship Programs'],
        color: 'innovationGreen'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Sales funnels and organic growth strategies that amplify your digital presence.',
        icon: '📊',
        features: ['Growth Hacking', 'Sales Funnels', 'SEO Optimization', 'Social Media Strategy'],
        color: 'accentGold'
      }
    ];
  }

  getTeamMembers(): TeamMember[] {
    return [
      {
        id: 'ricardo',
        name: 'Ricardo Mérida',
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
        name: 'Lady Mérida',
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
        name: 'Juan Gabriel',
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
        id: 'jhonatan',
        name: 'Jhonatan Mallea',
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