"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface SafePortalProps {
  children: React.ReactNode
  selector: string
}

export function SafePortal({ children, selector }: SafePortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  const portalRoot = document.querySelector(selector)

  // Se o elemento alvo não existir, não renderiza nada
  if (!portalRoot) return null

  return createPortal(children, portalRoot)
}
