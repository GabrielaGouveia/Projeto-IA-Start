/**
 * Remove um elemento do DOM de forma segura, verificando se ele existe e é filho do pai
 * @param parent Elemento pai
 * @param child Elemento filho a ser removido
 * @returns boolean indicando se a operação foi bem-sucedida
 */
export function safeRemoveChild(parent: Node | null, child: Node | null): boolean {
  if (!parent || !child) {
    return false
  }

  try {
    // Verifica se o elemento é realmente filho antes de tentar remover
    if (parent.contains(child)) {
      parent.removeChild(child)
      return true
    }
    return false
  } catch (error) {
    console.error("Erro ao remover elemento:", error)
    return false
  }
}

/**
 * Limpa todos os filhos de um elemento de forma segura
 * @param element Elemento a ser limpo
 */
export function safeRemoveAllChildren(element: HTMLElement | null): void {
  if (!element) return

  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
