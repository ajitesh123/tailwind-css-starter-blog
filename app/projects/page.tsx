import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="text-lg text-white/80">Showcasing my latest projects and courses</p>
        </div>

        <div className="grid gap-8 py-12 md:grid-cols-2">
          {/* AI for Product Leaders Course */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-white">AI for Product Leaders</h2>
            <div className="mx-auto max-w-md overflow-hidden rounded-lg border border-gray-200/20">
              <a
                href="https://aitutor.gumroad.com/l/aischoolforleaders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/images/ai-product-leaders.webp"
                  alt="AI for Product Leaders Course"
                  className="h-auto w-full border border-black/20 object-cover"
                />
                <div className="bg-gray-800 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    AI Application Development
                  </h3>
                  <p className="mb-4 text-sm text-white/70">
                    Learn to build AI applications with insights from Google Gemini and Archie AI
                    experience.
                  </p>
                  <div className="text-sm text-white/80">Instructors: Ajitesh and Jinal Dalal</div>
                </div>
              </a>
            </div>
          </div>

          {/* PM Course */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-white">PM Interview Prep</h2>
            <div className="mx-auto max-w-md overflow-hidden rounded-lg border border-gray-200/20">
              <a
                href="https://pm-interview-prep1.teachable.com/p/a-simple-approach-to-product-management-interviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/wHjiw0oJRSZTBXbBd0ty"
                  alt="PM Interview Prep Course"
                  className="h-auto w-full border border-black/20 object-cover"
                />
                <div className="bg-gray-800 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Product Management Interviews
                  </h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>Subscription: 7 day free trial, $5/month</div>
                    <div>One-Time Purchase: $50</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Archie AI Project - Spanning full width */}
          <div className="space-y-4 text-center md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Archie AI</h2>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-gray-200/20">
              <a href="https://www.getarchieai.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/static/images/archie ai.gif"
                  alt="Archie AI Demo"
                  className="h-auto w-full border border-black/20 object-cover"
                />
                <div className="bg-gray-800 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Archie AI: AI Engineer on your codebase
                  </h3>
                  <p className="mb-4 text-sm text-white/70">
                    An AI agent that reviews pull requests, explains code, and helps fix bugs.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* AI Performance Review Project - Spanning full width */}
          <div className="space-y-4 text-center md:col-span-2">
            <h2 className="text-2xl font-bold text-white">AI Performance Review</h2>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-gray-200/20">
              <a href="https://www.tryarchieai.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/static/gif/simplehrai.gif"
                  alt="AI Performance Review"
                  className="h-auto w-full border border-black/20 object-cover"
                />
                <div className="bg-gray-800 p-4">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    AI Performance Review: Write Better Reviews in Minutes
                  </h3>
                  <p className="mb-4 text-sm text-white/70">
                    A voice-first AI tool that helps managers write insightful and personalized
                    performance reviews quickly and efficiently.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
