import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Calendar,
  Users,
  Heart,
  Sun,
  Shield,
  Sparkles,
  CheckCircle,
  ChevronRight
} from 'lucide-react'
import EventCard from '../components/EventCard'

const upcomingEvents = [
  {
    id: 1,
    title: 'Morning Brunch Match',
    date: 'Saturday, Feb 15',
    time: '10:00 AM',
    location: 'Thonglor',
    description: 'A relaxed morning setting for health-minded singles. Guided conversations, curated seating, and no alcohol pressure.',
    price: '฿1,200'
  },
  {
    id: 2,
    title: 'Micro Dinner',
    date: 'Friday, Feb 21',
    time: '7:00 PM',
    location: 'Sathorn',
    description: 'An intimate 12-person dinner with curated seating based on your Passport. Three rounds of guided conversation.',
    price: '฿1,500'
  },
  {
    id: 3,
    title: 'Sober Speed Dating',
    date: 'Saturday, Mar 1',
    time: '11:00 AM',
    location: 'Silom',
    description: 'Structured introductions for people who want efficiency without the party atmosphere. 8-10 rounds, better prompts.',
    price: '฿800'
  }
]

const testimonials = [
  {
    id: 1,
    quote: "First time I've left a dating event actually wanting to follow up with someone. The morning vibe just hits different.",
    name: 'Nat',
    age: 29
  },
  {
    id: 2,
    quote: "I was skeptical about 'healthy dating' but it's not preachy at all. Just calm, quality people.",
    name: 'Ploy',
    age: 31
  },
  {
    id: 3,
    quote: "The Date Concierge Pack was so helpful. I didn't have to stress about where to go or what to say.",
    name: 'Mark',
    age: 34
  }
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-light via-cream to-amber-primary/10" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-secondary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            Meet someone worth
            <span className="block text-amber-primary">waking up for.</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Lumina Match is a curated dating club for health-minded singles in Bangkok.
            Morning events. Real conversations. People who have their lives together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-amber-primary text-white px-8 py-4 rounded-xl font-semibold
                       hover:bg-amber-secondary transition-all duration-300
                       shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Start Your Passport
            </Link>
            <a
              href="#how-it-works"
              className="bg-transparent border-2 border-amber-primary text-amber-primary
                       px-8 py-4 rounded-xl font-semibold hover:bg-amber-primary
                       hover:text-white transition-all duration-300 text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Better dates start with better introductions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-primary to-amber-secondary
                            flex items-center justify-center mb-6 shadow-lg">
                <MessageSquare className="text-white" size={28} />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-cream flex items-center justify-center
                            font-serif font-bold text-amber-primary border-2 border-amber-primary">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Create Your Passport
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Chat with Lumi, our AI guide, to build your profile. 5 minutes. No boring forms.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-primary to-amber-secondary
                            flex items-center justify-center mb-6 shadow-lg">
                <Calendar className="text-white" size={28} />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-cream flex items-center justify-center
                            font-serif font-bold text-amber-primary border-2 border-amber-primary">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Get Matched to Events
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We invite you to experiences that fit your style: morning brunches, intimate dinners, or structured speed dating.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-primary to-amber-secondary
                            flex items-center justify-center mb-6 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-cream flex items-center justify-center
                            font-serif font-bold text-amber-primary border-2 border-amber-primary">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Meet in Person
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Guided conversations. No awkward silences. Curated seating. Real connection.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-primary to-amber-secondary
                            flex items-center justify-center mb-6 shadow-lg">
                <Heart className="text-white" size={28} />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-cream flex items-center justify-center
                            font-serif font-bold text-amber-primary border-2 border-amber-primary">
                4
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Leave with a Plan
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Mutual matches get a Date Concierge Pack: personalized date ideas, conversation starters, and a first message template.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lumina Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              You've outgrown the bar scene.
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              You're tired of swiping. You want to meet someone who takes care of themselves — without making it weird.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <Sun className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Morning Energy
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Our events happen before 2pm. No alcohol pressure. No awkward bar lighting. Just real conversations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <Sparkles className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Quality Over Quantity
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We approve every member. Small events. Curated matches based on lifestyle compatibility.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <Shield className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Consent-First
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We only share contact details when both people say yes. No pressure at the venue.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <CheckCircle className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                We Help After the Match
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Every mutual match gets a Date Concierge Pack with personalized date ideas tailored to both of you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4 md:mb-0">
              Upcoming Experiences
            </h2>
            <Link
              to="/events"
              className="flex items-center gap-2 text-amber-primary font-semibold hover:gap-3 transition-all"
            >
              View all events <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-cream-light to-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            What members say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-md relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-amber-primary rounded-full
                              flex items-center justify-center text-white font-serif text-2xl">
                  "
                </div>
                <p className="text-charcoal-light leading-relaxed mb-6 pt-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-primary/20 to-amber-secondary/20
                                flex items-center justify-center">
                    <span className="font-semibold text-amber-primary">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}, {testimonial.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-amber-primary/20 flex items-center justify-center mx-auto mb-8">
            <Heart className="text-amber-primary" size={32} />
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-light leading-relaxed">
            "We don't promise you'll meet 'the one.' We promise every introduction will feel worth your time."
          </blockquote>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-amber-primary/10 via-cream-light to-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to meet health-minded singles?
          </h2>
          <p className="text-lg text-charcoal-light mb-10">
            Start your Passport. Takes 5 minutes. Lumi will take it from there.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-amber-primary text-white px-10 py-4 rounded-xl font-semibold
                     hover:bg-amber-secondary transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
