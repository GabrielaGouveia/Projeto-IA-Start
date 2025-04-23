"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { SafePortal } from "./safe-portal"
import { Button } from "@/components/ui/button"

interface SafeModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function SafeModal({ isOpen, onClose, title, children }: SafeModalProps) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  // Cria o elemento raiz do modal se não existir
  useEffect(() => {
    let root = document.getElementById("modal-root")

    if (!root) {
      root = document.createElement("div")
      root.id = "modal-root"
      document.body.appendChild(root)
    }

    setModalRoot(root)

    return () => {
      // Não remove o elemento raiz ao desmontar para evitar problemas
      // com múltiplos componentes usando o mesmo portal
    }
  }, [])

  // Fecha o modal ao clicar no backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  if (!isOpen || !modalRoot) return null

  return (
    <SafePortal selector="#modal-root">
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={handleBackdropClick}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 rounded-full">
              ✕
            </Button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </SafePortal>
  )
}
