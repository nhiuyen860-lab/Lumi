import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Lumina Match?',
        a: "A curated dating club for health-minded singles in Bangkok. We host in-person events and provide concierge support to help you meet the right people."
      },
      {
        q: 'Who is Lumina for?',
        a: "Singles 18+ in Bangkok who value health, intentionality, and real conversation. People who've outgrown the bar scene but aren't ready to settle for swiping."
      },
      {
        q: "What does 'health-minded' mean?",
        a: "It means you care about your wellbeing — sleep, movement, being intentional about alcohol. It's NOT a body type or appearance standard. We welcome all body types."
      }
    ]
  },
  {
    category: 'Events',
    questions: [
      {
        q: 'What happens at a Lumina event?',
        a: "Depending on the format: guided conversations, curated seating, structured rotations, and a private matching process at the end. No awkward mingling. No pressure."
      },
      {
        q: "What if I don't match with anyone?",
        a: "That's okay! Not every event leads to a match. We'll invite you to future events that might be a better fit. The goal is quality connections, not quantity."
      },
      {
        q: "What's the mutual match process?",
        a: "At the end of each event, you privately select who you'd like to connect with. We only share contact details when both people say yes. No awkward rejections at the venue."
      },
      {
        q: 'What types of events do you host?',
        a: "We host Morning Brunch Matches (relaxed conversations), Micro Dinners (intimate 12-person curated seating), and Sober Speed Dating (structured introductions). Most events happen before 2pm."
      }
    ]
  },
  {
    category: 'Safety',
    questions: [
      {
        q: 'How do you keep events safe?',
        a: "Every event has a host and co-host. We have a public code of conduct and zero tolerance for harassment. Private reporting is available throughout the event."
      },
      {
        q: 'Is my data private?',
        a: "Yes. We never share your information with third parties. Contact details are only shared with mutual matches, and only after both people consent."
      },
      {
        q: 'What if someone makes me uncomfortable?',
        a: "Tell a host immediately. We take all concerns seriously and will handle the situation discreetly. Your comfort and safety are our top priority."
      }
    ]
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'How much does it cost?',
        a: "Event tickets typically range from ฿800-1,500 depending on the format. This includes the venue, any food/beverages, host fees, and the Date Concierge Pack for mutual matches."
      },
      {
        q: 'Are there membership fees?',
        a: "No membership fees. You only pay for the events you attend. We may offer premium concierge services in the future for those who want more personalized support."
      },
      {
        q: 'What is the Date Concierge Pack?',
        a: "When you match with someone, both of you receive a personalized packet with date ideas tailored to your shared interests, conversation starters, and a suggested first message template."
      }
    ]
  }
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-amber-primary/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:text-amber-primary transition-colors"
      >
        <span className="font-medium text-charcoal pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-amber-primary flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-charcoal-light flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 pr-8">
          <p className="text-charcoal-light leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-light via-cream to-amber-primary/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Everything you need to know about Lumina Match and how we help health-minded singles connect.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {faqData.map((section) => (
            <div key={section.category} className="mb-12 last:mb-0">
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                {section.category}
              </h2>
              <div className="bg-cream-light rounded-2xl p-6">
                {section.questions.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.q}
                    answer={item.a}
                    isOpen={openItems[`${section.category}-${index}`]}
                    onClick={() => toggleItem(section.category, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
            Still have questions?
          </h2>
          <p className="text-charcoal-light mb-8">
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@luminamatch.com"
              className="bg-amber-primary text-white px-8 py-4 rounded-xl font-semibold
                       hover:bg-amber-secondary transition-all duration-300"
            >
              Email Us
            </a>
            <a
              href="https://instagram.com/luminamatch"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-amber-primary text-amber-primary
                       px-8 py-4 rounded-xl font-semibold hover:bg-amber-primary
                       hover:text-white transition-all duration-300"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-amber-primary/10 via-cream-light to-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-charcoal-light mb-10">
            Create your Passport and get matched to your first event.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-amber-primary text-white px-10 py-4 rounded-xl font-semibold
                     hover:bg-amber-secondary transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            Start Your Passport
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FAQ
