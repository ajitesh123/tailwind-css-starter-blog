import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcasing my latest projects and courses
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-12">
            {/* PM Course */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                PM Course: A Simple Approach to Product Management Interviews
              </h2>
              {/* Increased max-width to 600px */}
              <div
                className="overflow-hidden rounded-lg border border-gray-200"
                style={{ maxWidth: '1200px' }}
              >
                <a
                  href="https://pm-interview-prep1.teachable.com/p/a-simple-approach-to-product-management-interviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/wHjiw0oJRSZTBXbBd0ty"
                    alt="A Simple Approach to Product Management Interviews"
                    className="h-auto w-full"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">
                      A Simple Approach to Product Management Interviews
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Prepare for your PM interviews with our comprehensive course.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Subscription:</span>
                        <span>7 day free trial then $5/month</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>One-Time Purchase:</span>
                        <span>$50</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Archie AI Project */}
            <div className="space-y-6 pt-12">
              <h2 className="text-2xl font-bold">Project: Archie AI</h2>
              <h3 className="text-xl">
                Making Engineering Operations 10X Faster, Smarter, and Efficient
              </h3>
              <p>
                I'm building an AI agent that revolutionizes engineering operations. Archie AI aims
                to accelerate development processes and enhance productivity.
              </p>
              {/* Increased max-width to 600px */}
              <div
                className="overflow-hidden rounded-lg border border-gray-200"
                style={{ maxWidth: '1200px' }}
              >
                <img
                  src="/static/images/archie ai.gif"
                  alt="Archie AI Demo"
                  className="h-auto w-full"
                />
              </div>
              <a
                href="https://www.getarchieai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn more about Archie AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
