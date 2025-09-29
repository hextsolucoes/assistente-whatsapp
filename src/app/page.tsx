'use client'

import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, MessageCircle, BarChart3, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular login
    setTimeout(() => {
      setIsLoading(false)
      alert('Login realizado com sucesso!')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Seção de Descrição do CRM */}
        <div className="flex flex-col justify-center space-y-8 text-white">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/291d1fec-f28c-4303-8d89-1efdeba422a0.jpg" 
                  alt="Hext Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Hext Assistent
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Transforme seu WhatsApp em uma máquina de vendas com automação inteligente e gestão completa de leads.
            </p>
          </div>

          {/* Recursos Principais */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">O que você pode fazer:</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp Integrado</h3>
                  <p className="text-sm text-gray-300">Conecte via QR Code e gerencie todas as conversas em um só lugar</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Funil de Leads</h3>
                  <p className="text-sm text-gray-300">Acompanhe métricas detalhadas e taxa de conversão em tempo real</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Automação Inteligente</h3>
                  <p className="text-sm text-gray-300">Respostas automáticas e follow-ups personalizados</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Google Sheets</h3>
                  <p className="text-sm text-gray-300">Exportação automática de leads e relatórios detalhados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Por que escolher nosso CRM?</h3>
            <div className="space-y-3">
              {[
                'Categorização automática de leads (Ativos, Frios, Sem Resposta)',
                'Interface intuitiva e fácil de usar',
                'Integração nativa com WhatsApp e Google Sheets',
                'Relatórios em tempo real com métricas de conversão',
                'Automação que economiza horas do seu dia'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulário de Login */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta!</h2>
                <p className="text-gray-300">Entre na sua conta para continuar</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Campo Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Campo Senha */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                    Senha
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Lembrar-me e Esqueci a senha */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-cyan-600 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-300">Lembrar-me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Esqueci a senha
                  </button>
                </div>

                {/* Botão de Login */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Entrar</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Divisor */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-center text-sm text-gray-300">
                  Não tem uma conta?{' '}
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Criar conta gratuita
                  </button>
                </p>
              </div>
            </div>

            {/* Informação adicional */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                🔒 Seus dados estão seguros e protegidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}