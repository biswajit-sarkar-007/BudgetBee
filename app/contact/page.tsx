'use client';

const ContactPage = () => {
  return (
    <div className='font-sans bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50/50 via-white/80 to-emerald-50/30 dark:from-gray-900/50 dark:via-black dark:to-gray-800/30'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-emerald-50/80 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-emerald-200/30 dark:border-emerald-700/30'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse'></span>
            Get in Touch
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight'>
            Contact{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
                BudgetBee AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
          Ready to revolutionize your financial management? Connect with our AI experts for personalized guidance and transform your budgeting experience with cutting-edge technology.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <a
              href='mailto:support@budgetbee-ai.com'
              className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Send us an Email
             
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
            </a>
            <a
              href='tel:+11234567890'
              className='bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5 hover:scale-105'
            >
              Call Us
               
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-black relative overflow-hidden'>
        
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Contact Information
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2 sm:px-0'>
              Multiple Ways to{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                Connect
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0'>
              Choose the most convenient way to reach out to our BudgetBee
              AI support team.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='group relative bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white'>
                  Email Support
                </h3>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed'>
                  Get detailed assistance with your questions. We typically
                  respond within 24 hours.
                </p>
                <a
                  href='mailto:support@budgetbee-ai.com'
                  className='inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal'
                >
                  <span className='hidden sm:inline'>
                    support@budgetbee-ai.com
                  </span>
                  <span className='sm:hidden'>Email Us</span>
                  <span className='text-sm'>→</span>
                </a>
              </div>
            </div>

            <div className='group relative bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                 
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white'>
                  Phone Support
                </h3>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed'>
                  Speak directly with our support team for immediate assistance
                  with urgent matters.
                </p>
                <a
                  href='tel:+11234567890'
                  className='inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-200 text-sm sm:text-base'
                >
                  +1 (123) 456-7890
                  <span className='text-sm'>→</span>
                </a>
              </div>
            </div>

            <div className='group relative bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center sm:col-span-2 lg:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                 
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white'>
                  Office Location
                </h3>
                <p className='text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed'>
                  Visit our headquarters for in-person consultations and
                  partnership discussions.
                </p>
                <div className='text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base'>
                  123 AI Innovation St
                  <br />
                  Tech City, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours & FAQ Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-black'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full'></span>
              Support Information
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2 sm:px-0'>
              We&#39;re Here to{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                Help
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50'>
              <div className='flex items-center gap-3 mb-4'>
                 
                <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white'>
                  Support Hours
                </h3>
              </div>
              <div className='space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300'>
                <div className='flex justify-between'>
                  <span>Monday - Friday:</span>
                  <span className='font-medium'>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className='flex justify-between'>
                  <span>Saturday:</span>
                  <span className='font-medium'>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className='flex justify-between'>
                  <span>Sunday:</span>
                  <span className='font-medium'>Closed</span>
                </div>
                <div className='mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg'>
                  <p className='text-xs sm:text-sm text-emerald-700 dark:text-emerald-300'>
                    <strong>Email support:</strong> Available 24/7 with
                    responses within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50'>
              <div className='flex items-center gap-3 mb-4'>
                 
                <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white'>
                  Quick Help
                </h3>
              </div>
              <div className='space-y-3'>
                <div className='p-3 bg-white dark:bg-gray-800/50 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1'>
                    Technical Issues
                  </h4>
                  <p className='text-xs text-gray-700 dark:text-gray-300'>
                    App not working properly? Check our troubleshooting guide
                    first.
                  </p>
                </div>
                <div className='p-3 bg-white dark:bg-gray-800/50 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1'>
                    AI Features
                  </h4>
                  <p className='text-xs text-gray-700 dark:text-gray-300'>
                    Questions about AI insights? Our AI documentation has
                    answers.
                  </p>
                </div>
                <div className='p-3 bg-white dark:bg-gray-800/50 rounded-lg'>
                  <h4 className='font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1'>
                    Account & Billing
                  </h4>
                  <p className='text-xs text-gray-700 dark:text-gray-300'>
                    Account issues or billing questions? Contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;