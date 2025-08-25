import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50/50 via-white/80 to-emerald-50/30 dark:from-gray-900/50 dark:via-black dark:to-gray-800/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-emerald-50/80 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-emerald-200/30 dark:border-emerald-700/30'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>Your AI Financial Companion</span>
            <span className='sm:hidden'>AI Technology</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight'>
            About{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              BudgetBee
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Transform your financial management with cutting-edge AI technology. Experience intelligent expense tracking, personalized insights, and automated budgeting solutions designed for the modern professional.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
            >
              <span className='relative z-10'>Get Started Free</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-emerald-500/30 dark:border-emerald-400/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-black relative overflow-hidden'>
       
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
            Why We Exist
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white px-2 sm:px-0'>
            Revolutionizing Financial Management with{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto'>
            Experience next-generation financial management with BudgetBee advanced AI algorithms. Our platform delivers precision expense tracking, intelligent categorization, and personalized financial strategies tailored to your unique spending patterns and goals.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-700/50 shadow-lg dark:shadow-emerald-900/20'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2'>
                15K+
              </div>
              <div className='text-gray-700 dark:text-gray-300 font-medium'>
                Members
              </div>
            </div>
            <div className='bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 p-6 rounded-2xl border border-green-100 dark:border-green-700/50 shadow-lg dark:shadow-green-900/20'>
              <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                $1.5M+
              </div>
              <div className='text-gray-700 dark:text-gray-300 font-medium'>
                Managed Funds
              </div>
            </div>
            <div className='bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-700/50 shadow-lg dark:shadow-teal-900/20'>
              <div className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2'>
                89%
              </div>
              <div className='text-gray-700 dark:text-gray-300 font-medium'>
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 bg-white dark:bg-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Key Benefits
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
              Why Choose{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                BudgetBee AI?
              </span>
            </h2>
            <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
              Explore the smart, AI-powered features that make BudgetBee the ultimate tool for modern money management.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                 
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Smart AI Insights
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Advanced machine learning algorithms analyze your financial patterns to deliver precision insights and intelligent recommendations. Our AI continuously adapts to your spending behavior, providing increasingly accurate financial guidance.
                </p>

              </div>
            </div>

            <div className='group relative bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                 
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Intelligent Expense Categorization
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Sophisticated categorization engine processes transactions with 99.7% accuracy, automatically organizing expenses while learning from your preferences. Experience seamless budget optimization with intelligent financial categorization.
                </p>

              </div>
            </div>

            <div className='group relative bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                
                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Smart Financial Dashboard
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Professional-grade analytics dashboard featuring real-time financial metrics, interactive data visualizations, and comprehensive reporting tools. Transform complex financial data into actionable insights with enterprise-level clarity.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-8 bg-gray-50 dark:bg-black relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-full blur-2xl'></div>
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full blur-2xl'></div>

        <div className='max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Who We Are
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white'>
              Designed for the{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                Modern Era
              </span>
            </h2>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                BudgetBee was engineered with a clear mission: to revolutionize financial management through advanced artificial intelligence and intuitive design. Our multidisciplinary team of financial experts, machine learning engineers, and UX specialists collaborated to create a sophisticated platform that delivers enterprise-grade financial intelligence to every user.
              </p>
              <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                Since inception, we have empowered over 15,000 professionals to achieve superior financial control through data-driven insights and automated optimization. Our platform architecture prioritizes both user experience and analytical depth, ensuring that sophisticated financial management remains accessible and actionable for modern professionals.
              </p>

              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                  <div className='w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full border-2 border-white dark:border-gray-800'></div>
                </div>
                <div className='text-sm text-gray-700 dark:text-gray-300'>
                  <div className='font-semibold'>Trusted by 15,000+ professionals</div>
                  <div>Join our elite community</div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-white font-medium'>
                  Est. 2025
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-white font-medium'>
                  AI at the Heart
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-white font-medium'>
                  Universal Impact
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full'></div>
                  <div className='text-gray-900 dark:text-white font-medium'>
                  Designed Around You
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 px-8 bg-white dark:bg-black relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg'>
            <span className='w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            Take Control of Your Money Today
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white'>
  Take Charge of Your{' '}
  <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
    Financial Journey
  </span>
</h2>

<p className='text-xl md:text-2xl mb-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
  Join thousands of professionals who have transformed their financial management with BudgetBee AI-powered platform. Experience the future of intelligent budgeting and strategic financial planning.
</p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Get Started Free
                <span className='text-lg'>→</span>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </Link>

            <Link
              href='/contact'
              className='group border-2 border-emerald-500/30 dark:border-emerald-400/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-2 transform hover:-translate-y-0.5'
            >
              Contact Us
              
            </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2'>
                Free
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                No credit card required
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-green-600 dark:text-green-400 mb-2'>
                24/7
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                AI-powered support
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2'>
                Quick Setup
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;