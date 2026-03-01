import { motion } from 'framer-motion'

// Futuristic shimmer effect component
const NeonShimmer = ({ delay = 0 }) => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
    initial={{ x: '-100%' }}
    animate={{ x: '200%' }}
    transition={{ duration: 1.5, repeat: Infinity, delay, ease: 'easeInOut' }}
    style={{ opacity: 0.4 }}
  />
)

// Futuristic glow effect
const NeonGlow = ({ delay = 0, colors = ['rgba(59, 130, 246, 0.3)', 'rgba(168, 85, 247, 0.5)', 'rgba(59, 130, 246, 0.3)'] }) => (
  <motion.div
    className="absolute inset-0"
    animate={{
      boxShadow: colors.map(color => `0 0 15px ${color}`),
    }}
    transition={{ duration: 2, repeat: Infinity, delay }}
  />
)

// Floating particles effect
const FloatingParticles = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-50"
          animate={{
            y: [Math.random() * 100, Math.random() * -100],
            x: [Math.random() * 100, Math.random() * -100],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  )
}

export const SkeletonLine = ({ width = '100%', height = '20px', delay = 0 }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
      style={{ width, height }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      <NeonShimmer delay={delay} />
      
      <motion.div
        className="absolute inset-0 rounded-lg border border-transparent"
        animate={{
          boxShadow: [
            '0 0 5px rgba(59, 130, 246, 0.3)',
            '0 0 15px rgba(168, 85, 247, 0.5)',
            '0 0 5px rgba(59, 130, 246, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
    </motion.div>
  )
}

export const SkeletonButton = ({ delay = 0 }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 h-12 w-32"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      <NeonShimmer delay={delay} />
      
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          boxShadow: [
            '0 0 8px rgba(59, 130, 246, 0.4), inset 0 0 8px rgba(168, 85, 247, 0.2)',
            '0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 12px rgba(59, 130, 246, 0.3)',
            '0 0 8px rgba(59, 130, 246, 0.4), inset 0 0 8px rgba(168, 85, 247, 0.2)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
    </motion.div>
  )
}

export const SkeletonCard = ({ delay = 0 }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 p-8 border border-gray-200"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity, delay }}
    >
      <NeonShimmer delay={delay} />

      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent"
        animate={{
          boxShadow: [
            '0 0 10px rgba(59, 130, 246, 0.2), inset 0 0 10px rgba(168, 85, 247, 0.1)',
            '0 0 25px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(59, 130, 246, 0.2)',
            '0 0 10px rgba(59, 130, 246, 0.2), inset 0 0 10px rgba(168, 85, 247, 0.1)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay }}
      />

      {/* Icon skeleton with glow */}
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 mb-4 relative overflow-hidden"
        animate={{
          boxShadow: [
            '0 0 10px rgba(59, 130, 246, 0.3)',
            '0 0 25px rgba(168, 85, 247, 0.5)',
            '0 0 10px rgba(59, 130, 246, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      >
        <NeonShimmer delay={delay + 0.2} />
        <FloatingParticles />
      </motion.div>

      {/* Text skeleton lines */}
      <div className="space-y-3 relative z-10">
        <SkeletonLine width="80%" height="24px" delay={delay} />
        <SkeletonLine width="100%" height="16px" delay={delay + 0.1} />
        <SkeletonLine width="95%" height="16px" delay={delay + 0.2} />
      </div>
    </motion.div>
  )
}

export const SkeletonHero = ({ delay = 0 }) => {
  return (
    <motion.div className="space-y-8">
      {/* Title with extra glow */}
      <div className="space-y-4">
        <motion.div
          className="relative"
          animate={{
            textShadow: [
              '0 0 10px rgba(59, 130, 246, 0.3)',
              '0 0 25px rgba(168, 85, 247, 0.5)',
              '0 0 10px rgba(59, 130, 246, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay }}
        >
          <SkeletonLine width="90%" height="48px" delay={delay} />
        </motion.div>
        <SkeletonLine width="85%" height="48px" delay={delay + 0.1} />
      </div>

      {/* Subtitle */}
      <div className="space-y-2">
        <SkeletonLine width="100%" height="20px" delay={delay + 0.2} />
        <SkeletonLine width="95%" height="20px" delay={delay + 0.3} />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <SkeletonButton delay={delay + 0.4} />
        <SkeletonButton delay={delay + 0.5} />
      </div>
    </motion.div>
  )
}

export const SkeletonSection = ({ title = true, cards = 4, delay = 0 }) => {
  return (
    <div className="space-y-12">
      {/* Section title */}
      {title && (
        <div className="space-y-4">
          <SkeletonLine width="40%" height="40px" delay={delay} />
          <SkeletonLine width="60%" height="20px" delay={delay + 0.1} />
        </div>
      )}

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: cards }).map((_, i) => (
          <SkeletonCard key={i} delay={delay + i * 0.15} />
        ))}
      </div>
    </div>
  )
}

export const SkeletonContactForm = ({ delay = 0 }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 border border-blue-200"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity, delay }}
    >
      <NeonShimmer delay={delay} />

      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent"
        animate={{
          boxShadow: [
            '0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(168, 85, 247, 0.1)',
            '0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2)',
            '0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(168, 85, 247, 0.1)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay }}
      />

      <div className="relative z-10 space-y-6">
        {/* Title */}
        <SkeletonLine width="50%" height="32px" delay={delay} />

        {/* Input fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <SkeletonLine width="100%" height="48px" delay={delay + 0.1} />
          <SkeletonLine width="100%" height="48px" delay={delay + 0.2} />
        </div>

        <SkeletonLine width="100%" height="48px" delay={delay + 0.3} />
        <SkeletonLine width="100%" height="120px" delay={delay + 0.4} />

        {/* Submit button */}
        <SkeletonButton delay={delay + 0.5} />
      </div>
    </motion.div>
  )
}

export default function SkeletonLoader() {
  return (
    <motion.div
      className="bg-white text-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation skeleton */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <SkeletonLine width="120px" height="24px" />
            <div className="hidden md:flex gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonLine key={i} width="80px" height="20px" delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <SkeletonHero delay={0.2} />
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SkeletonLine width="50%" height="40px" delay={0.3} />
              <SkeletonLine width="100%" height="20px" delay={0.35} />
              <SkeletonLine width="100%" height="20px" delay={0.4} />
              <div className="space-y-4 pt-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonLine key={i} width="90%" height="16px" delay={0.45 + i * 0.1} />
                ))}
              </div>
            </div>
            <motion.div
              className="relative overflow-hidden rounded-2xl h-80 bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200"
              animate={{
                boxShadow: [
                  '0 0 15px rgba(59, 130, 246, 0.2)',
                  '0 0 30px rgba(168, 85, 247, 0.4)',
                  '0 0 15px rgba(59, 130, 246, 0.2)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ opacity: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonSection cards={4} delay={0.6} />
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Contact title */}
            <div className="space-y-4 text-center">
              <SkeletonLine width="70%" height="40px" delay={0.7} />
              <SkeletonLine width="60%" height="20px" delay={0.75} />
            </div>

            {/* Contact cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} delay={0.8 + i * 0.15} />
              ))}
            </div>

            {/* Contact form */}
            <SkeletonContactForm delay={0.9} />
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <SkeletonLine width="80%" height="20px" delay={1 + i * 0.1} />
                <SkeletonLine width="100%" height="16px" delay={1.05 + i * 0.1} />
                <SkeletonLine width="90%" height="16px" delay={1.1 + i * 0.1} />
              </div>
            ))}
          </div>
         <SkeletonLine width="100%" height="16px" delay={1.4} />
        </div>
      </footer>
    </motion.div>
  )
}
