import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check, Instagram } from 'lucide-react'

const totalSteps = 5

function Apply() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isCodeOfConductOpen, setIsCodeOfConductOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    age: '',
    interestedIn: '',
    lookingFor: '',
    // Step 2
    sundayMorning: '',
    // Step 3
    chronotype: '',
    exercise: '',
    alcohol: '',
    dealbreakers: '',
    // Step 4
    values: '',
    personality: '',
    firstDate: '',
    // Step 5
    agreeToCode: false
  })

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send data to backend/Airtable/Supabase
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  const RadioOption = ({ name, value, label, checked, onChange }) => (
    <label
      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                ${checked
                  ? 'border-amber-primary bg-amber-primary/5'
                  : 'border-gray-200 hover:border-amber-primary/50'
                }`}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                  ${checked ? 'border-amber-primary bg-amber-primary' : 'border-gray-300'}`}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-charcoal">{label}</span>
    </label>
  )

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-primary to-amber-secondary
                        flex items-center justify-center mx-auto mb-8">
            <Check className="text-white" size={40} />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            You're in!
          </h1>
          <p className="text-lg text-charcoal-light mb-8">
            Your Passport is ready. We'll review your application and send you an invite to an event that fits your style.
          </p>
          <div className="bg-cream rounded-2xl p-6 mb-8">
            <p className="text-charcoal-light">
              <span className="font-semibold text-charcoal">What to expect:</span> You'll hear from Lumi within 48 hours.
            </p>
          </div>
          <a
            href="https://instagram.com/luminamatch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-primary text-white px-8 py-4 rounded-xl
                     font-semibold hover:bg-amber-secondary transition-all duration-300"
          >
            <Instagram size={20} />
            Follow us on Instagram
          </a>
          <div className="mt-6">
            <Link to="/" className="text-amber-primary hover:underline">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-light to-cream py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Let's build your Passport
          </h1>
          <p className="text-charcoal-light">
            This helps us match you with the right people and the right events. Takes about 5 minutes.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-charcoal-light">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-charcoal-light">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-primary to-amber-secondary transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Step 1: Basics */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  The Basics
                </h2>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-primary
                             focus:outline-none transition-colors text-charcoal"
                    placeholder="What should we call you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={(e) => updateFormData('age', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-primary
                             focus:outline-none transition-colors text-charcoal"
                    placeholder="Must be 18+"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    I'm interested in meeting...
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="interestedIn"
                      value="men"
                      label="Men"
                      checked={formData.interestedIn === 'men'}
                      onChange={(e) => updateFormData('interestedIn', e.target.value)}
                    />
                    <RadioOption
                      name="interestedIn"
                      value="women"
                      label="Women"
                      checked={formData.interestedIn === 'women'}
                      onChange={(e) => updateFormData('interestedIn', e.target.value)}
                    />
                    <RadioOption
                      name="interestedIn"
                      value="everyone"
                      label="Everyone"
                      checked={formData.interestedIn === 'everyone'}
                      onChange={(e) => updateFormData('interestedIn', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    I'm looking for...
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="lookingFor"
                      value="serious"
                      label="Something serious"
                      checked={formData.lookingFor === 'serious'}
                      onChange={(e) => updateFormData('lookingFor', e.target.value)}
                    />
                    <RadioOption
                      name="lookingFor"
                      value="exploring"
                      label="Still exploring"
                      checked={formData.lookingFor === 'exploring'}
                      onChange={(e) => updateFormData('lookingFor', e.target.value)}
                    />
                    <RadioOption
                      name="lookingFor"
                      value="open"
                      label="Open to both"
                      checked={formData.lookingFor === 'open'}
                      onChange={(e) => updateFormData('lookingFor', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: The Fun One */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                  The Fun One
                </h2>
                <p className="text-charcoal-light mb-6">
                  Let's get to know you better.
                </p>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    What does your perfect Sunday morning look like? Paint me a picture.
                  </label>
                  <textarea
                    value={formData.sundayMorning}
                    onChange={(e) => updateFormData('sundayMorning', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-primary
                             focus:outline-none transition-colors text-charcoal min-h-[150px] resize-none"
                    placeholder="Maybe it involves coffee, a morning run, brunch with friends..."
                    required
                  />
                  <p className="text-sm text-charcoal-light mt-2">
                    This helps us understand your lifestyle and energy.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Lifestyle */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  Lifestyle
                </h2>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Are you more of a...
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="chronotype"
                      value="sunrise"
                      label="Sunrise person"
                      checked={formData.chronotype === 'sunrise'}
                      onChange={(e) => updateFormData('chronotype', e.target.value)}
                    />
                    <RadioOption
                      name="chronotype"
                      value="nightowl"
                      label="Night owl"
                      checked={formData.chronotype === 'nightowl'}
                      onChange={(e) => updateFormData('chronotype', e.target.value)}
                    />
                    <RadioOption
                      name="chronotype"
                      value="between"
                      label="Somewhere in between"
                      checked={formData.chronotype === 'between'}
                      onChange={(e) => updateFormData('chronotype', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    How often do you move your body?
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="exercise"
                      value="daily"
                      label="Daily"
                      checked={formData.exercise === 'daily'}
                      onChange={(e) => updateFormData('exercise', e.target.value)}
                    />
                    <RadioOption
                      name="exercise"
                      value="few-times"
                      label="Few times a week"
                      checked={formData.exercise === 'few-times'}
                      onChange={(e) => updateFormData('exercise', e.target.value)}
                    />
                    <RadioOption
                      name="exercise"
                      value="occasionally"
                      label="Occasionally"
                      checked={formData.exercise === 'occasionally'}
                      onChange={(e) => updateFormData('exercise', e.target.value)}
                    />
                    <RadioOption
                      name="exercise"
                      value="rarely"
                      label="Rarely"
                      checked={formData.exercise === 'rarely'}
                      onChange={(e) => updateFormData('exercise', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Your relationship with alcohol?
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="alcohol"
                      value="dont-drink"
                      label="Don't drink"
                      checked={formData.alcohol === 'dont-drink'}
                      onChange={(e) => updateFormData('alcohol', e.target.value)}
                    />
                    <RadioOption
                      name="alcohol"
                      value="rarely"
                      label="Drink rarely"
                      checked={formData.alcohol === 'rarely'}
                      onChange={(e) => updateFormData('alcohol', e.target.value)}
                    />
                    <RadioOption
                      name="alcohol"
                      value="socially"
                      label="Socially"
                      checked={formData.alcohol === 'socially'}
                      onChange={(e) => updateFormData('alcohol', e.target.value)}
                    />
                    <RadioOption
                      name="alcohol"
                      value="regularly"
                      label="Regularly"
                      checked={formData.alcohol === 'regularly'}
                      onChange={(e) => updateFormData('alcohol', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Any dealbreakers?
                  </label>
                  <input
                    type="text"
                    value={formData.dealbreakers}
                    onChange={(e) => updateFormData('dealbreakers', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-primary
                             focus:outline-none transition-colors text-charcoal"
                    placeholder="e.g., smoking, heavy drinking, or type 'none'"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Values & Style */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  Values & Style
                </h2>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    What are 3-5 values that matter most to you in a partner?
                  </label>
                  <textarea
                    value={formData.values}
                    onChange={(e) => updateFormData('values', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-primary
                             focus:outline-none transition-colors text-charcoal min-h-[100px] resize-none"
                    placeholder="e.g., honesty, ambition, kindness, humor, health-consciousness..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Are you more...
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="personality"
                      value="introverted"
                      label="Introverted"
                      checked={formData.personality === 'introverted'}
                      onChange={(e) => updateFormData('personality', e.target.value)}
                    />
                    <RadioOption
                      name="personality"
                      value="extroverted"
                      label="Extroverted"
                      checked={formData.personality === 'extroverted'}
                      onChange={(e) => updateFormData('personality', e.target.value)}
                    />
                    <RadioOption
                      name="personality"
                      value="ambivert"
                      label="Ambivert"
                      checked={formData.personality === 'ambivert'}
                      onChange={(e) => updateFormData('personality', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    For a first date, what sounds best?
                  </label>
                  <div className="space-y-2">
                    <RadioOption
                      name="firstDate"
                      value="coffee"
                      label="Morning walk + coffee"
                      checked={formData.firstDate === 'coffee'}
                      onChange={(e) => updateFormData('firstDate', e.target.value)}
                    />
                    <RadioOption
                      name="firstDate"
                      value="brunch"
                      label="Brunch"
                      checked={formData.firstDate === 'brunch'}
                      onChange={(e) => updateFormData('firstDate', e.target.value)}
                    />
                    <RadioOption
                      name="firstDate"
                      value="dinner"
                      label="Dinner"
                      checked={formData.firstDate === 'dinner'}
                      onChange={(e) => updateFormData('firstDate', e.target.value)}
                    />
                    <RadioOption
                      name="firstDate"
                      value="active"
                      label="Something active"
                      checked={formData.firstDate === 'active'}
                      onChange={(e) => updateFormData('firstDate', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Agreement */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  Almost there!
                </h2>

                <div className="bg-cream rounded-xl p-6">
                  <button
                    type="button"
                    onClick={() => setIsCodeOfConductOpen(!isCodeOfConductOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="font-semibold text-charcoal">Lumina Code of Conduct</span>
                    {isCodeOfConductOpen ? (
                      <ChevronUp className="text-amber-primary" size={20} />
                    ) : (
                      <ChevronDown className="text-amber-primary" size={20} />
                    )}
                  </button>

                  {isCodeOfConductOpen && (
                    <div className="mt-4 space-y-3 text-charcoal-light">
                      <p>By attending Lumina events, you agree to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Be respectful. Consent is mandatory.</li>
                        <li>No harassment, discrimination, or unwanted contact.</li>
                        <li>No pressuring for phone/IG at the venue. Use the mutual match process.</li>
                        <li>If someone asks you to stop, stop immediately.</li>
                        <li>Hosts may remove anyone who violates these rules.</li>
                      </ul>
                    </div>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      checked={formData.agreeToCode}
                      onChange={(e) => updateFormData('agreeToCode', e.target.checked)}
                      className="sr-only"
                      required
                    />
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                                ${formData.agreeToCode
                                  ? 'bg-amber-primary border-amber-primary'
                                  : 'border-gray-300'
                                }`}
                    >
                      {formData.agreeToCode && <Check className="text-white" size={16} />}
                    </div>
                  </div>
                  <span className="text-charcoal">
                    I agree to the Lumina Code of Conduct and confirm that I am 18 years or older.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 text-charcoal-light hover:text-charcoal transition-colors"
                >
                  <ChevronLeft size={20} />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-amber-primary text-white px-8 py-3 rounded-xl
                           font-semibold hover:bg-amber-secondary transition-all duration-300"
                >
                  Continue
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.agreeToCode}
                  className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300
                           ${formData.agreeToCode
                             ? 'bg-amber-primary text-white hover:bg-amber-secondary'
                             : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                           }`}
                >
                  Submit Passport
                  <Check size={20} />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Apply
