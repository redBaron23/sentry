import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'

interface Score {
  letter: 'A' | 'B' | 'C' | 'D' | 'F'
  score: number
}

interface SecurityFactor {
  name: string
  description: string
  currentScore: Score
  suggestedScore: Score
  impact: string
}

const factors: SecurityFactor[] = [
  {
    name: 'Frecuencia de parches',
    description:
      'Detección de configuraciones inseguras y vulnerabilidades de DNS',
    currentScore: { letter: 'F', score: 58 },
    suggestedScore: { letter: 'D', score: 60 },
    impact: '$449.96K',
  },
  {
    name: 'Seguridad de red',
    description: 'Detección de configuraciones de red inseguras',
    currentScore: { letter: 'C', score: 72 },
    suggestedScore: { letter: 'C', score: 75 },
    impact: '$72.07K',
  },
  {
    name: 'Reputación de IP',
    description:
      'Detección de actividad sospechosa, como malware o spam, dentro de la red de la empresa',
    currentScore: { letter: 'C', score: 75 },
    suggestedScore: { letter: 'B', score: 78 },
    impact: '$219K',
  },
  {
    name: 'Seguridad de aplicaciones',
    description: 'Detección de vulnerabilidades comunes en aplicaciones web',
    currentScore: { letter: 'C', score: 72 },
    suggestedScore: { letter: 'C', score: 75 },
    impact: '$94.50K',
  },
]

const ScoreBadge: React.FC<Score> = ({ letter, score }) => {
  const colors: Record<Score['letter'], string> = {
    A: 'bg-green-600',
    B: 'bg-lime-600',
    C: 'bg-yellow-600',
    D: 'bg-orange-600',
    F: 'bg-red-600',
  }

  return (
    <Badge
      className={`${colors[letter]} text-white font-bold px-3 py-1 rounded-full`}
    >
      {letter}
      <span className="ml-1 font-normal">{score}</span>
    </Badge>
  )
}

export const SecurityFactorsTable: React.FC = () => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 font-semibold text-sm text-gray-700 border-b bg-gray-100">
        <div className="text-center">Factor</div>
        <div className="hidden md:block text-center">Sugerencia</div>
        <div className="hidden md:block text-center">Reducir impacto en</div>
      </div>
      {factors.map((factor, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-sm border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="text-center md:text-left">
            <div className="font-medium text-lg mb-2">{factor.name}</div>
            <div className="text-gray-600">{factor.description}</div>
            <div className="mt-4 flex items-center justify-center space-x-2 md:hidden">
              <ScoreBadge {...factor.currentScore} />
              <ArrowRightIcon className="text-gray-400" />
              <ScoreBadge {...factor.suggestedScore} />
            </div>
            <div className="mt-2 font-medium text-gray-800 md:hidden">
              Reducir impacto en {factor.impact}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-4">
            <ScoreBadge {...factor.currentScore} />
            <ArrowRightIcon className="text-gray-400" />
            <ScoreBadge {...factor.suggestedScore} />
          </div>
          <div className="hidden md:flex items-center justify-center font-medium text-lg text-gray-800">
            {factor.impact}
          </div>
        </div>
      ))}
    </Card>
  )
}
