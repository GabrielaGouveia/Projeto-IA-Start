"use client"

import type React from "react"

/**
 * Adiciona um evento com limpeza automática
 * @param element Elemento alvo
 * @param eventType Tipo de evento
 * @param handler Função manipuladora
 * @returns Função para remover o evento
 */
export function addSafeEventListener<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window | Document | null,
  eventType: K,
  handler: (event: HTMLElementEventMap[K]) => void,
): () => void {
  if (!element) return () => {}

  element.addEventListener(eventType, handler as EventListener)

  return () => {
    element.removeEventListener(eventType, handler as EventListener)
  }
}

/**
 * Hook para adicionar eventos de forma segura
 * @param element Elemento ou ref do elemento
 * @param eventType Tipo de evento
 * @param handler Função manipuladora
 * @param deps Dependências
 */
import { useEffect } from "react"

export function useSafeEventListener<K extends keyof HTMLElementEventMap>(
  element: HTMLElement | Window | Document | null | React.RefObject<HTMLElement>,
  eventType: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  deps: React.DependencyList = [],
): void {
  useEffect(() => {
    const targetElement = element && "current" in element ? element.current : element
    if (!targetElement) return

    targetElement.addEventListener(eventType, handler as EventListener)

    return () => {
      targetElement.removeEventListener(eventType, handler as EventListener)
    }
  }, [element, eventType, handler, ...deps])
}
