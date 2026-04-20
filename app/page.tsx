'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Check, ArrowRight, BarChart3, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For MVP, just show success message
    setSubmitted(true);
    setEmail('');
    setName('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  const features = [
    {
      title: 'Your CFO spends 2+ hours pulling monthly reports',
      icon: '📊',
    },
    {
      title: 'You close a $500K deal and find out 3 days later',
      icon: '💰',
    },
    {
      title: 'Board meeting prep consumes your Friday afternoon',
      icon: '📅',
    },
  ];

  const steps = [
    {
      title: 'Connect your tools',
      description: 'Salesforce, Stripe, Google Analytics, QuickBooks',
      icon: Zap,
    },
    {
      title: 'Choose your dashboard',
      description: 'We have templates for your role',
      icon: BarChart3,
    },
    {
      title: 'Get alerts when things change',
      description: 'Know what matters instantly',
      icon: TrendingUp,
    },
  ];

  const useCases = [
    {
      role: 'For the CEO',
      description: 'Know your burn rate, MRR, and growth metrics before your CFO calls. Updated hourly.',
    },
    {
      role: 'For the CMO',
      description: 'See campaign ROI and lead source performance in real time, not in monthly reports.',
    },
    {
      role: 'For the VP Sales',
      description: 'Track pipeline and deal velocity daily, not at end of month.',
    },
  ];

  const integrations = [
    'Salesforce',
    'Stripe',
    'Google Analytics',
    'QuickBooks',
    'HubSpot',
    'Shopify',
    'Slack',
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small teams',
      features: ['3 integrations', '5 pre-built dashboards', '1 user'],
    },
    {
      name: 'Pro',
      price: '$199',
      description: 'For growing businesses',
      features: [
        '10+ integrations',
        'Unlimited custom dashboards',
        '3 users',
        'Email alerts',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Everything in Pro', 'Custom integrations', 'Dedicated support', 'SSO/SAML'],
    },
  ];

  const faqs = [
    {
      question: "What if my tool isn't integrated yet?",
      answer:
        "We're adding integrations weekly. Let us know what you need and we'll prioritize it.",
    },
    {
      question: 'How long does setup take?',
      answer: '15 minutes. We walk you through it step by step.',
    },
    {
      question: 'Can I customize the dashboards?',
      answer: 'Completely. Drag-and-drop editor lets you build exactly what you need.',
    },
    {
      question: 'Is my data secure?',
      answer: "Bank-level encryption. We never store your API keys.",
    },
    {
      question: 'Can I export data?',
      answer: 'Yes, CSV and JSON exports available on all plans.',
    },
  ];

  const testimonials = [
    {
      quote: 'Saved us 10 hours/week on reporting',
      author: 'Jane Smith',
      company: 'TechCorp',
      role: 'CFO',
    },
    {
      quote: 'Caught a $50K revenue leak before month-end',
      author: 'Mark Johnson',
      company: 'GrowthCo',
      role: 'CEO',
    },
  ];

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              ExecutiveDash
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm hover:text-teal-600 transition">
                Features
              </a>
              <a href="#integrations" className="text-sm hover:text-teal-600 transition">
                Integrations
              </a>
              <a href="#pricing" className="text-sm hover:text-teal-600 transition">
                Pricing
              </a>
              <a href="#faq" className="text-sm hover:text-teal-600 transition">
                FAQ
              </a>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Your business data.{' '}
              <span className="text-teal-600">One place.</span> One glance.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Stop logging into Salesforce, Stripe, Analytics, and QuickBooks. See what matters in 30
              seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium text-lg transition inline-flex items-center justify-center gap-2">
                Start 14-day Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-700 hover:border-teal-600 text-gray-900 dark:text-gray-50 px-8 py-4 rounded-full font-medium text-lg transition">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">No credit card required. 14-day trial. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            You're losing hours every week switching between tools
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            These pain points are costing you more than you think
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <p className="font-medium text-gray-900 dark:text-gray-50">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-6">
                    <Icon className="text-teal-600" size={32} />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-teal-600">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role-Specific Dashboards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Built for Your Role</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Pre-built templates designed for executives
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-teal-600 dark:hover:border-teal-600 transition bg-white dark:bg-gray-900"
              >
                <h3 className="text-2xl font-bold mb-4 text-teal-600">{useCase.role}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{useCase.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center text-gray-400">
                    <BarChart3 size={48} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section
        id="integrations"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            We integrate with all your favorite tools
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            More coming weekly
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="flex items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium hover:border-teal-600 transition"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
            All plans include 14-day free trial, no credit card required
          </p>
          <p className="text-center text-gray-500 dark:text-gray-500 mb-12 text-sm">
            Billed monthly. Cancel anytime.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 border transition ${
                  plan.highlighted
                    ? 'border-teal-600 bg-teal-50 dark:bg-teal-900/20 shadow-lg scale-105'
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-600 text-white mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600 dark:text-gray-400">/month</span>}
                </div>
                <button
                  className={`w-full py-3 rounded-full font-medium mb-8 transition ${
                    plan.highlighted
                      ? 'bg-teal-600 hover:bg-teal-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-50'
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Trusted by Business Leaders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-teal-600">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg font-medium mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to take control?</h2>
          <p className="text-xl mb-8 text-teal-50">
            Join executives who've reclaimed hours every week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 flex-1"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 flex-1"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-white text-teal-600 font-bold hover:bg-gray-100 transition whitespace-nowrap"
              >
                Get Started
              </button>
            </form>
          </div>
          {submitted && (
            <p className="text-teal-50 mt-4 text-sm">✓ Check your email for your login link</p>
          )}
          <p className="text-teal-100 text-sm mt-6">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-300 dark:text-gray-400 mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 dark:text-gray-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 dark:text-gray-400 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h4 className="font-bold text-gray-300 dark:text-gray-400 mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 ExecutiveDash. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm">Made with care for busy executives</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
