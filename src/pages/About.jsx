import { Link } from 'react-router-dom'
import { Heart, Users, Sun, CheckCircle, Info } from 'lucide-react'

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-light via-cream to-amber-primary/10" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Dating should feel good.
          </h1>
          <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Lumina Match exists because we believe meeting someone new shouldn't feel like a chore,
            a competition, or a party you didn't want to attend.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-charcoal-light leading-relaxed text-lg">
              Lumina started with a simple observation: the best conversations happen in the morning,
              over coffee, with people who take care of themselves. We built a dating experience around
              that insight.
            </p>
            <p className="text-charcoal-light leading-relaxed text-lg mt-6">
              We noticed that the singles we knew — thoughtful, health-minded people who valued
              real connection — were exhausted by the current options. Swiping felt hollow. Bars felt
              forced. And traditional matchmaking felt outdated.
            </p>
            <p className="text-charcoal-light leading-relaxed text-lg mt-6">
              So we created something different: curated events where the focus is on conversation,
              not performance. Morning energy, not nightlife chaos. Quality introductions followed by
              real support to help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* What "Healthy" Means Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-amber-primary">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-primary/10 flex items-center justify-center flex-shrink-0">
                <Info className="text-amber-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                  What we mean by "healthy"
                </h3>
                <p className="text-charcoal-light leading-relaxed text-lg">
                  When we say "healthy," we mean <strong>health-minded values and lifestyle</strong> — sleep,
                  movement, being intentional about alcohol, thinking long-term. It's <strong>NOT</strong> a
                  body-type standard or appearance filter. We welcome all body types.
                </p>
                <p className="text-charcoal-light leading-relaxed text-lg mt-4">
                  Our members simply share a commitment to taking care of themselves and building
                  meaningful connections with others who do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream-light rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <Heart className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Respect First
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Consent is mandatory. No exceptions. Every interaction at Lumina is built on mutual
                respect and clear boundaries.
              </p>
            </div>

            <div className="bg-cream-light rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <Users className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Quality Over Volume
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                Small events, curated matches, real conversations. We'd rather you meet 5 great people
                than 50 random ones.
              </p>
            </div>

            <div className="bg-cream-light rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <Sun className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Morning Energy
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We believe the best connections happen when people are present and clear-headed.
                That's why most of our events happen before 2pm.
              </p>
            </div>

            <div className="bg-cream-light rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-amber-primary/10 flex items-center justify-center mb-5">
                <CheckCircle className="text-amber-primary" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                Follow-Through
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                We don't just introduce you. We help you plan the first date with personalized
                suggestions and conversation starters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Host Section (Placeholder) */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
            Meet the Team
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-primary/20 to-amber-secondary/20
                            flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-serif text-amber-primary">L</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                  The Lumina Team
                </h3>
                <p className="text-amber-primary font-medium mb-4">Bangkok, Thailand</p>
                <p className="text-charcoal-light leading-relaxed">
                  We're a small team of people who believe that dating can be better. We're not
                  building the next dating app — we're creating real-world experiences that help
                  health-minded singles find meaningful connections. Every event is hosted by someone
                  from our team who genuinely cares about making your experience great.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-amber-primary/10 via-cream-light to-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to experience dating differently?
          </h2>
          <p className="text-lg text-charcoal-light mb-10">
            Join a community of health-minded singles in Bangkok.
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

export default About
