import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-white dark:bg-black border-t border-gray-200/50 dark:border-gray-800/50'>
     

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-br   to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
                {/* <span className='text-white text-lg'>💰</span> */}
                <img src="/images/logo.jpg" alt="budgetBee" className='w-full h-full   object-contain '  />
              </div>
              <h2 className='text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
               BudgetBee AI
              </h2>
            </div>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed max-w-sm'>
            Manage your money intelligently with AI—track expenses, plan budgets, and understand your spending patterns.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Quick Links
            </h3>
            <div className='flex flex-col space-y-3'>
              <Link
                href='/'
                className='group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Home
              </Link>
              <Link
                href='/about'
                className='group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                About
              </Link>
              <Link
                href='/contact'
                className='group inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Features
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'>
                 
                AI-Powered Insights
              </div>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'>
                 
                Smart Categorization
              </div>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'>
                 
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8'></div>

        {/* Copyright and Social */}
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-gray-600 dark:text-gray-300 text-sm'>
              © {new Date().getFullYear()} BudgetBee AI. All rights
              reserved.
            </p>
          </div>

 
        </div>
      </div>
    </footer>
  );
};

export default Footer;