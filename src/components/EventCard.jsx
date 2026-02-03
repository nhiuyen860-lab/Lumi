import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin } from 'lucide-react'

function EventCard({ event, isPast = false }) {
  const { title, date, time, location, description, price, soldOut } = event

  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300
                ${isPast ? 'opacity-60' : 'hover:shadow-xl hover:-translate-y-1'}`}
    >
      {/* Gradient Header */}
      <div className="h-2 bg-gradient-to-r from-amber-primary to-amber-secondary" />

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-charcoal-light text-sm">
            <Calendar size={16} className="text-amber-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal-light text-sm">
            <Clock size={16} className="text-amber-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-charcoal-light text-sm">
            <MapPin size={16} className="text-amber-primary" />
            <span>{location}</span>
          </div>
        </div>

        <p className="text-charcoal-light text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-amber-primary/10">
          <span className="font-semibold text-charcoal">
            {price}
          </span>

          {soldOut || isPast ? (
            <span className="px-4 py-2 bg-charcoal-light/10 text-charcoal-light rounded-lg text-sm font-medium">
              Sold Out
            </span>
          ) : (
            <Link
              to="/apply"
              className="px-6 py-2 bg-amber-primary text-white rounded-lg text-sm font-semibold
                       hover:bg-amber-secondary transition-all duration-300"
            >
              Apply
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventCard
