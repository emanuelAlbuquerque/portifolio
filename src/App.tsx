
import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Code2,
  ChevronRight
} from 'lucide-react'
import { ICONS, NAV_LINKS, PROJECTS, SERVICES, SKILLS } from './constants'

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const GOOGLE_FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbwdlkZs9awvzIyk-K-pvRzlDmBirEqdQdSUVmva-gO9mQxOXKTAoZFlO3EKjhzurnkRDQ/exec"

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    telefone: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const data = {
        nome: formData.name,
        email: formData.email,
        telefone: formData.telefone,
        assunto: formData.subject,
        mensagem: formData.message
      }

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: JSON.stringify(data)
      })

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', telefone: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-blue-500/30">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none z-0"></div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className="tracking-tighter">dev<span className="text-blue-500">.emanuel</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Vamos Conversar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section - Updated to 2 columns */}
        <section id="home" className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Side */}
              <div className="lg:col-span-7 animate-[fadeIn_1s_ease-out] text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6">
                  Disponível para novos projetos
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                  Olá, eu sou <br />
                  <span className="text-gradient">José Emanuel</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8">
                  Engenheiro de Software Full Stack
                </h2>
                <p className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed">
                  Transformo ideias em experiências digitais de alto impacto. Especialista em criar
                  soluções modernas, escaláveis e focadas em resultados para o seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20"
                  >
                    Solicitar Orçamento
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <a href="https://github.com/emanuelAlbuquerque" className="text-zinc-500 hover:text-blue-500 transition-colors"><Github className="w-6 h-6" /></a>
                  <a href="https://www.linkedin.com/in/emanuel-albuquerque-2abb5a232/" className="text-zinc-500 hover:text-blue-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
                  <a href="https://api.whatsapp.com/send/?phone=5581979148606&text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio+e+quero+falar+sobre+um+projeto.&type=phone_number&app_absent=0" className="text-zinc-500 hover:text-blue-500 transition-colors"><MessageCircle className="w-6 h-6" /></a>
                </div>
              </div>

              {/* Photo Side */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-[fadeIn_1.2s_ease-out]">
                <div className="relative w-full max-w-[400px] aspect-square">
                  {/* Decorative background glow */}
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full border border-blue-500/10 animate-pulse"></div>

                  {/* Image Container */}
                  <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                    <img
                      src="https://picsum.photos/seed/developer-hero/800/800"
                      alt="Alex Silva"
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40"></div>
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="absolute -top-4 -right-4 bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase font-bold leading-none mb-1">Experiência</p>
                      <p className="text-sm font-bold text-white leading-none">Senior Dev</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
            <ChevronDown />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-zinc-950/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800">
                  <img src="https://picsum.photos/seed/profile-detail/600/600" alt="Profile" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-blue-500">+3</div>
                    <div className="text-sm leading-tight text-zinc-400">Anos de<br />Experiência</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Sobre mim</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Expertise em resolver problemas através de código limpo.</h3>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    Olá! Sou um desenvolvedor apaixonado por criar produtos digitais que realmente fazem a diferença.
                    Com mais de 3 anos de experiência prática, ajudo empresas e empreendedores a tirarem suas visões do papel.
                  </p>
                  <p>
                    Minha abordagem como freelancer é focada em resultados reais: não apenas escrevo código, mas busco
                    entender os desafios do negócio para propor a melhor solução tecnológica, seja um MVP rápido ou um
                    sistema corporativo robusto.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Pragmatismo
                    </h4>
                    <p className="text-sm text-zinc-500">Soluções diretas e eficientes para o seu problema.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Transparência
                    </h4>
                    <p className="text-sm text-zinc-500">Comunicação clara e constante durante todo o projeto.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Stack Tecnológica</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Minhas Habilidades</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {ICONS.Terminal}
                  </div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-tighter">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-zinc-950/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Portfólio</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Projetos em Destaque</h3>
              </div>
              <a href="https://github.com/emanuelAlbuquerque?tab=repositories" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 font-medium">
                Ver todos os projetos <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col h-full">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: any) => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-800/50">
                      <a href={project.projectUrl} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                        {ICONS.External} Live Demo
                      </a>
                      <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                        {ICONS.Github} GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Serviços</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Como posso te ajudar?</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800 transition-colors group">
                  <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {service.icon === 'layout' && ICONS.Layout}
                    {service.icon === 'phone' && ICONS.Phone}
                    {service.icon === 'server' && ICONS.Server}
                    {service.icon === 'cpu' && ICONS.Cpu}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-zinc-950">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-blue-600 p-12 text-white flex flex-col">
                  <h2 className="text-3xl font-bold mb-6">Vamos iniciar um projeto?</h2>
                  <p className="text-blue-100 mb-10 leading-relaxed">
                    Estou sempre aberto a novas oportunidades e desafios técnicos.
                    Mande uma mensagem e vamos conversar sobre sua ideia.
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">WhatsApp</p>
                        <p className="font-semibold">+55 (81) 99714-8606</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">LinkedIn</p>
                        <p className="font-semibold">/in/emanuelalbuquerque</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-12">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Nome completo</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ex: João Silva"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700 disabled:opacity-50"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="joao@exemplo.com"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700 disabled:opacity-50"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Assunto</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Desenvolvimento de App Web"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700 disabled:opacity-50"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Telefone</label>
                        <input
                          type="text"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          required
                          placeholder="(81) 99999-9999"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700 disabled:opacity-50"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Mensagem</label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Descreva brevemente seu projeto..."
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700 resize-none disabled:opacity-50"
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-sm text-center">
                        Mensagem enviada com sucesso! Entrarei em contato em breve.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm text-center">
                        Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp/Email.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
                dev<span className="text-blue-500">.emanuel</span>
              </a>
              <p className="text-zinc-600 text-sm">© 2026 Emanuel Albuquerque. Todos os direitos reservados.</p>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/emanuelAlbuquerque" className="text-zinc-500 hover:text-blue-500 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/in/emanuel-albuquerque-2abb5a232/" className="text-zinc-500 hover:text-blue-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="https://api.whatsapp.com/send/?phone=5581979148606&text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio+e+quero+falar+sobre+um+projeto.&type=phone_number&app_absent=0" className="text-zinc-500 hover:text-blue-500 transition-colors"><MessageCircle className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App