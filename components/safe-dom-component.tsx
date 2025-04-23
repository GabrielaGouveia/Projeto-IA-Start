"use client"

import { useRef, useState } from "react"
import { useDomEffect } from "@/hooks/use-dom-effect"
import { safeRemoveChild } from "@/lib/dom-utils"
import { Button } from "@/components/ui/button"

export function SafeDomComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<HTMLElement[]>([])

  // Adiciona um elemento de forma segura
  const addElement = () => {
    if (!containerRef.current) return

    const newElement = document.createElement("div")
    newElement.className = "p-2 m-1 bg-slate-200 rounded"
    newElement.textContent = `Item ${elements.length + 1}`

    containerRef.current.appendChild(newElement)
    setElements((prev) => [...prev, newElement])
  }

  // Remove um elemento de forma segura
  const removeElement = (index: number) => {
    if (!containerRef.current || !elements[index]) return

    const elementToRemove = elements[index]
    const success = safeRemoveChild(containerRef.current, elementToRemove)

    if (success) {
      setElements((prev) => prev.filter((_, i) => i !== index))
    }
  }

  // Limpa todos os elementos quando o componente é desmontado
  useDomEffect(() => {
    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-medium mb-2">Manipulação Segura do DOM</h2>
      <div className="flex gap-2 mb-4">
        <Button onClick={addElement}>Adicionar Elemento</Button>
        <Button variant="destructive" onClick={() => elements.length > 0 && removeElement(elements.length - 1)}>
          Remover Último
        </Button>
      </div>
      <div ref={containerRef} className="min-h-[100px] border border-dashed p-2 rounded-md">
        {/* Os elementos serão adicionados aqui via DOM */}
      </div>
    </div>
  )
}
