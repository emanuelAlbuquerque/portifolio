
import {
  Code2,
  Layout,
  Server,
  Cpu,
  Monitor,
  Database,
  Github,
  Linkedin,
  ExternalLink,
  MessageSquare,
  FileCode,
  Terminal,
  Globe,
  Layers,
  Phone
} from 'lucide-react';
import type { Skill, Project, Service } from './types';

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript', category: 'frontend', iconName: 'Typescript' },
  { name: 'React.js', category: 'frontend', iconName: 'React' },
  { name: 'Next.js', category: 'frontend', iconName: 'Nextjs' },
  { name: 'React Native', category: 'frontend', iconName: 'ReactNative' },
  { name: 'Node.js', category: 'backend', iconName: 'Node' },
  { name: 'PostgreSQL', category: 'database', iconName: 'Database' },
  { name: 'Prisma', category: 'backend', iconName: 'Prisma' },
  { name: 'Tailwind CSS', category: 'frontend', iconName: 'Tailwind' },
  { name: 'Docker', category: 'tools', iconName: 'Docker' },
  { name: 'Git & GitHub', category: 'tools', iconName: 'Git' },
  { name: 'AWS', category: 'tools', iconName: 'AWS' },
  { name: 'Kafka', category: 'backend', iconName: 'Kafka' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus SaaS Dashboard',
    description: 'Um dashboard analítico de alto desempenho para gestão de vendas em tempo real, com gráficos interativos e integração de pagamentos.',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/nexus/800/500',
    projectUrl: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'E-commerce Alpha',
    description: 'Plataforma completa de e-commerce focada em performance e SEO, com sistema de busca avançada e checkout otimizado.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/alpha/800/500',
    projectUrl: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'API de Gestão Logística',
    description: 'Back-end robusto para controle de frotas e entregas, utilizando arquitetura de microserviços e filas de processamento.',
    tags: ['Node.js', 'Docker', 'Redis', 'RabbitMQ'],
    imageUrl: 'https://picsum.photos/seed/logistic/800/500',
    projectUrl: '#',
    githubUrl: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Sistemas Web Sob Medida',
    description: 'Desenvolvimento de aplicações robustas e escaláveis utilizando as tecnologias mais modernas do mercado.',
    icon: 'layout'
  },
  {
    id: 's2',
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de aplicações robustas e escaláveis utilizando as tecnologias mais modernas do mercado.',
    icon: 'phone'
  },
  {
    id: 's3',
    title: 'APIs & Back-end',
    description: 'Criação de APIs RESTful ou GraphQL seguras, rápidas e bem documentadas para integrar seus serviços.',
    icon: 'server'
  },
  {
    id: 's4',
    title: 'Automação de Processos',
    description: 'Scripting e automação para otimizar tarefas repetitivas, economizando tempo e recursos da sua equipe.',
    icon: 'cpu'
  }
];

export const ICONS = {
  Layout: <Layout className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Code: <Code2 className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Github: <Github className="w-6 h-6" />,
  Linkedin: <Linkedin className="w-6 h-6" />,
  External: <ExternalLink className="w-6 h-6" />,
  Message: <MessageSquare className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  FileCode: <FileCode className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
};
