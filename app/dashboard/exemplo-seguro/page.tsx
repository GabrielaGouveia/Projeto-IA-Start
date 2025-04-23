"use client"

import { useState } from "react"
import { SafeDomComponent } from "@/components/safe-dom-component"
import { SafeModal } from "@/components/safe-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExemploSeguroPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Exemplos de Manipulação Segura do DOM</h1>

      <Card>
        <CardHeader>
          <CardTitle>Componente com Manipulação Direta do DOM</CardTitle>
        </CardHeader>
        <CardContent>
          <SafeDomComponent />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Modal com Portal Seguro</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setIsModalOpen(true)}>Abrir Modal</Button>

          <SafeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Modal Seguro">
            <p>Este modal utiliza técnicas seguras para manipulação do DOM e evita o erro de removeChild.</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setIsModalOpen(false)}>Fechar</Button>
            </div>
          </SafeModal>
        </CardContent>
      </Card>
    </div>
  )
}
