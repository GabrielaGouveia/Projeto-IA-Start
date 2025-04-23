"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Users,
  BookOpen,
  BarChart2,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  BrainCircuit,
  AlertCircle,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Componente simplificado para itens de navegação
function NavItem({ href, icon: Icon, label, active }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-slate-100",
        active ? "bg-slate-100 text-slate-900" : "text-slate-500",
      )}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  )
}

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState("professor")

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar para desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">PE</span>
            </div>
            <span className="font-semibold">Permanência Escolar</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4 px-2">
          <div className="space-y-1">
            <NavItem href="/dashboard" icon={Home} label="Dashboard" active={pathname === "/dashboard"} />
            <NavItem
              href="/dashboard/ai-assistant"
              icon={BrainCircuit}
              label="Assistente IA"
              active={pathname === "/dashboard/ai-assistant"}
            />

            {userRole === "professor" && (
              <>
                <NavItem
                  href="/dashboard/professor/alunos-risco"
                  icon={AlertCircle}
                  label="Alunos em Risco"
                  active={pathname === "/dashboard/professor/alunos-risco"}
                />
                <NavItem
                  href="/dashboard/professor/frequencia"
                  icon={Calendar}
                  label="Análise de Frequência"
                  active={pathname === "/dashboard/professor/frequencia"}
                />
                <NavItem
                  href="/dashboard/students"
                  icon={Users}
                  label="Alunos"
                  active={pathname === "/dashboard/students"}
                />
                <NavItem
                  href="/dashboard/courses"
                  icon={BookOpen}
                  label="Cursos"
                  active={pathname === "/dashboard/courses"}
                />
              </>
            )}

            {userRole === "gestor" && (
              <>
                <NavItem
                  href="/dashboard/gestao/alunos-risco"
                  icon={AlertCircle}
                  label="Alunos em Risco"
                  active={pathname === "/dashboard/gestao/alunos-risco"}
                />
                <NavItem
                  href="/dashboard/analytics"
                  icon={BarChart2}
                  label="Análises"
                  active={pathname === "/dashboard/analytics"}
                />
                <NavItem
                  href="/dashboard/reports"
                  icon={FileText}
                  label="Relatórios"
                  active={pathname === "/dashboard/reports"}
                />
              </>
            )}

            {userRole === "empresa" && (
              <>
                <NavItem
                  href="/dashboard/empresa/conclusao"
                  icon={BarChart2}
                  label="Taxa de Conclusão"
                  active={pathname === "/dashboard/empresa/conclusao"}
                />
                <NavItem
                  href="/dashboard/opportunities"
                  icon={BookOpen}
                  label="Oportunidades"
                  active={pathname === "/dashboard/opportunities"}
                />
                <NavItem
                  href="/dashboard/talent-pool"
                  icon={Users}
                  label="Banco de Talentos"
                  active={pathname === "/dashboard/talent-pool"}
                />
              </>
            )}

            <NavItem
              href="/dashboard/messages"
              icon={MessageSquare}
              label="Mensagens"
              active={pathname === "/dashboard/messages"}
            />
            <NavItem
              href="/dashboard/settings"
              icon={Settings}
              label="Configurações"
              active={pathname === "/dashboard/settings"}
            />
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3 mb-2">
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">João Silva</p>
              <p className="text-xs text-slate-500">joao@email.com</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full justify-start" asChild>
            <Link href="/login">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </Link>
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <div className="md:hidden flex h-14 items-center border-b bg-white px-4">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">PE</span>
            </div>
            <span className="font-semibold">Permanência Escolar</span>
          </Link>
        </div>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">PE</span>
              </div>
              <span className="font-semibold">Permanência Escolar</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4 px-2">
            <div className="space-y-1">
              <NavItem href="/dashboard" icon={Home} label="Dashboard" active={pathname === "/dashboard"} />
              <NavItem
                href="/dashboard/ai-assistant"
                icon={BrainCircuit}
                label="Assistente IA"
                active={pathname === "/dashboard/ai-assistant"}
              />

              {userRole === "professor" && (
                <>
                  <NavItem
                    href="/dashboard/professor/alunos-risco"
                    icon={AlertCircle}
                    label="Alunos em Risco"
                    active={pathname === "/dashboard/professor/alunos-risco"}
                  />
                  <NavItem
                    href="/dashboard/professor/frequencia"
                    icon={Calendar}
                    label="Análise de Frequência"
                    active={pathname === "/dashboard/professor/frequencia"}
                  />
                  <NavItem
                    href="/dashboard/students"
                    icon={Users}
                    label="Alunos"
                    active={pathname === "/dashboard/students"}
                  />
                  <NavItem
                    href="/dashboard/courses"
                    icon={BookOpen}
                    label="Cursos"
                    active={pathname === "/dashboard/courses"}
                  />
                </>
              )}

              {userRole === "gestor" && (
                <>
                  <NavItem
                    href="/dashboard/gestao/alunos-risco"
                    icon={AlertCircle}
                    label="Alunos em Risco"
                    active={pathname === "/dashboard/gestao/alunos-risco"}
                  />
                  <NavItem
                    href="/dashboard/analytics"
                    icon={BarChart2}
                    label="Análises"
                    active={pathname === "/dashboard/analytics"}
                  />
                  <NavItem
                    href="/dashboard/reports"
                    icon={FileText}
                    label="Relatórios"
                    active={pathname === "/dashboard/reports"}
                  />
                </>
              )}

              {userRole === "empresa" && (
                <>
                  <NavItem
                    href="/dashboard/empresa/conclusao"
                    icon={BarChart2}
                    label="Taxa de Conclusão"
                    active={pathname === "/dashboard/empresa/conclusao"}
                  />
                  <NavItem
                    href="/dashboard/opportunities"
                    icon={BookOpen}
                    label="Oportunidades"
                    active={pathname === "/dashboard/opportunities"}
                  />
                  <NavItem
                    href="/dashboard/talent-pool"
                    icon={Users}
                    label="Banco de Talentos"
                    active={pathname === "/dashboard/talent-pool"}
                  />
                </>
              )}

              <NavItem
                href="/dashboard/messages"
                icon={MessageSquare}
                label="Mensagens"
                active={pathname === "/dashboard/messages"}
              />
              <NavItem
                href="/dashboard/settings"
                icon={Settings}
                label="Configurações"
                active={pathname === "/dashboard/settings"}
              />
            </div>
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center gap-3 mb-2">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">João Silva</p>
                <p className="text-xs text-slate-500">joao@email.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
              <Link href="/login">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="professor">Professor</option>
              <option value="gestor">Gestor</option>
              <option value="empresa">Empresa</option>
            </select>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
