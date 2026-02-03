import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hey! I'm Lumi, your guide at Lumina. Have questions? Ask me anything, or start your Passport to get matched with events!"
    }
  ])
  const [input, setInput] = useState('')

  const faqResponses = {
    'what is lumina': "Lumina Match is a curated dating club for health-minded singles in Bangkok. We host in-person events and provide concierge support to help you meet the right people.",
    'who is this for': "Singles 18+ in Bangkok who value health, intentionality, and real conversation. People who've outgrown the bar scene but aren't ready to settle for swiping.",
    'healthy': "When we say 'healthy,' we mean health-minded values and lifestyle — sleep, movement, being intentional about alcohol. It's NOT a body-type standard or appearance filter.",
    'events': "We host morning brunches, intimate dinners, and structured speed dating. All events focus on real conversations without alcohol pressure.",
    'cost': "Event tickets typically range from ฿800-1,500 depending on the format. Check our Events page for specific pricing.",
    'match': "At the end of each event, you privately select who you'd like to connect with. We only share contact details when both people say yes.",
    'safe': "Every event has a host and co-host. We have a public code of conduct and zero tolerance for harassment.",
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setInput('')

    // Simple keyword matching for FAQ
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase()
      let response = "Great question! For more detailed information, check out our FAQ page or start your Passport to get matched with events. Is there anything else I can help with?"

      for (const [keyword, answer] of Object.entries(faqResponses)) {
        if (lowerInput.includes(keyword)) {
          response = answer
          break
        }
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }])
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg
                   flex items-center justify-center transition-all duration-300
                   ${isOpen
                     ? 'bg-charcoal text-cream-light rotate-0'
                     : 'bg-gradient-to-br from-amber-secondary to-amber-primary text-white hover:scale-110'
                   }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl
                      overflow-hidden border border-amber-primary/10 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-primary to-amber-secondary p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">L</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Lumi</h3>
                <p className="text-white/80 text-sm">Your Lumina Guide</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-cream-light/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    message.type === 'user'
                      ? 'bg-amber-primary text-white rounded-br-md'
                      : 'bg-white text-charcoal rounded-bl-md shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-white border-t border-amber-primary/10">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setInput('What is Lumina?')}
                className="whitespace-nowrap text-xs px-3 py-1.5 bg-cream rounded-full
                         text-charcoal-light hover:bg-amber-primary/10 transition-colors"
              >
                What is Lumina?
              </button>
              <button
                onClick={() => setInput('How do events work?')}
                className="whitespace-nowrap text-xs px-3 py-1.5 bg-cream rounded-full
                         text-charcoal-light hover:bg-amber-primary/10 transition-colors"
              >
                Events?
              </button>
              <button
                onClick={() => setInput('How much does it cost?')}
                className="whitespace-nowrap text-xs px-3 py-1.5 bg-cream rounded-full
                         text-charcoal-light hover:bg-amber-primary/10 transition-colors"
              >
                Cost?
              </button>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-amber-primary/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-cream rounded-lg text-sm text-charcoal
                         placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2
                         focus:ring-amber-primary/30"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-amber-primary text-white rounded-lg
                         flex items-center justify-center hover:bg-amber-secondary
                         transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="block mt-3 text-center text-sm text-amber-primary hover:underline"
            >
              Ready to apply? Start your Passport &rarr;
            </Link>
          </form>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}

export default ChatWidget
