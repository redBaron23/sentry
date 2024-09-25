// components/atoms/ResendCodeButton.tsx
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

interface ResendCodeButtonProps {
  onResend: () => Promise<void>
  cooldownTime?: number
}

export function ResendCodeButton({
  onResend,
  cooldownTime = 60,
}: ResendCodeButtonProps) {
  const [isResending, setIsResending] = useState(false)
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [countdown])

  const handleResend = async () => {
    setIsResending(true)
    try {
      await onResend()
      setCountdown(cooldownTime)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <Button
      variant="link"
      onClick={handleResend}
      disabled={isResending || countdown > 0}
      className="h-auto p-0 font-medium text-primary hover:underline focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {isResending
        ? 'Reenviando...'
        : countdown > 0
          ? `Reenviar en ${countdown}s`
          : 'Reenviar código'}
    </Button>
  )
}
