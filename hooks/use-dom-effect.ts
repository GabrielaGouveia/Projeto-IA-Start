"use client"

import type React from "react"

import { useEffect, useRef } from "react"

/**
 * Hook personalizado para manipulação segura do DOM em efeitos
 * @param effect Função de efeito que manipula o DOM
 * @param deps Array de dependências
 */
export function useDomEffect(effect: () => (() => void) | void, deps: React.DependencyList = []) {
  const cleanupRef = useRef<(() => void) | void>()

  useEffect(() => {
    // Limpa o efeito anterior se existir
    if (cleanupRef.current) {
      cleanupRef.current()
    }

    // Executa o novo efeito e armazena a função de limpeza
    cleanupRef.current = effect()

    // Função de limpeza do useEffect
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = undefined
      }
    }
  }, deps)
}
