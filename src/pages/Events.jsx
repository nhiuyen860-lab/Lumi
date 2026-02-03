import { useState } from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'

const upcomingEvents = [
  {
    id: 1,
    title: 'Morning Brunch Match',
    date: 'Saturday, Feb 15',
    time: '10:00 AM',
    location: 'Thonglor',
    description: 'A relaxed morning setting for health-minded singles. Guided conversations, curated seating, and no alcohol pressure. Walk away with mutual matches and a plan for your first date.',
    price: '฿1,200',
    format: 'brunch'
  },
  {
    id: 2,
    title: 'Micro Dinner',
    date: 'Friday, Feb 21',
    time: '7:00 PM',
    location: 'Sathorn',
    description: 'An intimate 12-person dinner with curated seating based on your Passport. Three rounds of guided conversation. Premium venue, premium people.',
    price: '฿1,500',
    format: 'dinner'
  },
  {
    id: 3,
    title: 'Sober Speed Dating',
    date: 'Saturday, Mar 1',
    time: '11:00 AM',
    location: 'Silom',
    description: 'Structured introductions for people who want efficiency without the party atmosphere. 8-10 rounds, better prompts, mutual matching only.',
    price: '฿800',
    format: 'speed'
  },
  {
    id: 4,
    title: 'Morning Brunch Match',
    date: 'Saturday, Mar 8',
    time: '10:00 AM',
    location: 'Ekkamai',
    description: 'A relaxed morning setting for health-minded singles. Guided conversations, curated seating, and no alcohol pressure. Walk away with mutual matches and a plan for your first date.',
    price: '฿1,200',
    format: 'brunch'
  },
  {
    id: 5,
    title: 'Micro Dinner',
    date: 'Friday, Mar 14',
    time: '7:00 PM',
    location: 'Ari',
    description: 'An intimate 12-person dinner with curated seating based on your Passport. Three rounds of guided conversation. Premium venue, premium people.',
    price: '฿1,500',
    format: 'dinner'
  }
]

const pastEvents = [
  {
    id: 101,
    title: 'Morning Brunch Match',
    date: 'Saturday, Jan 25',
    time: '10:00 AM',
    location: 'Thonglor',
    description: 'A relaxed morning setting for health-minded singles.',
    price: '฿1,200',
    soldOut: true,
    format: 'brunch'
  },
  {
    id: 102,
    title: 'Sober Speed Dating',
    date: 'Saturday, Jan 18',
    time: '11:00 AM',
    location: 'Silom',
    description: 'Structured introductions for efficiency-minded singles.',
    price: '฿800',
    soldOut: true,
    format: 'speed'
  }
]

const filters = [
  { value: 'all', label: 'All Events' },
  { value: 'brunch', label: 'Brunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'speed', label: 'Speed Dating' }
]

function Events() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredEvents = activeFilter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.format === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-light via-cream to-amber-primary/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Upcoming Experiences
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Curated events for health-minded singles in Bangkok. Morning energy, real conversations,
            and people who have their lives together.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                          ${activeFilter === filter.value
                            ? 'bg-amber-primary text-white'
                            : 'bg-cream text-charcoal-light hover:bg-amber-primary/10'
                          }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Upcoming Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-charcoal-light text-lg">
                No {activeFilter} events scheduled yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Event Formats Explanation */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Our Event Formats
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5 text-2xl">
                ☀️
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Morning Brunch Match
              </h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                A relaxed morning setting for health-minded singles. Guided conversations, curated
                seating, and no alcohol pressure. Walk away with mutual matches and a plan for your
                first date.
              </p>
              <p className="text-sm text-amber-primary font-medium">Typically ฿1,200</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5 text-2xl">
                🍽️
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Micro Dinner
              </h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                An intimate 12-person dinner with curated seating based on your Passport. Three
                rounds of guided conversation at a premium venue. Quality over quantity.
              </p>
              <p className="text-sm text-amber-primary font-medium">Typically ฿1,500</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5 text-2xl">
                ⚡
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Sober Speed Dating
              </h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Structured introductions for people who want efficiency without the party
                atmosphere. 8-10 rounds, better prompts, mutual matching only.
              </p>
              <p className="text-sm text-amber-primary font-medium">Typically ฿800</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-8">
            Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-amber-primary/10 via-cream-light to-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to join an event?
          </h2>
          <p className="text-lg text-charcoal-light mb-10">
            Create your Passport first, then we'll match you to events that fit your style.
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

export default Events
