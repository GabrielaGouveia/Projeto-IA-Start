# Educa Flow: Plataforma de Gestão Educacional Inteligente
Pra mudar a realidade da evasão

## Descrição

Educa Flow é uma plataforma inovadora de gestão educacional desenvolvida para otimizar o acompanhamento de alunos, especialmente aqueles em risco de evasão. Através de um sistema de IA preditiva, a plataforma identifica padrões de desengajamento e fornece ferramentas de comunicação e avaliação para professores, gestão e empresas parceiras.

## Funcionalidades Principais

* **Sistema de IA para Identificação de Alunos em Risco:**
    * Análise preditiva por IA para identificar proativamente alunos com potencial de evasão.
    * Geração de Alertas de Risco para os professores.
* **Comunicação Estruturada e Feedback:**
    * Formulário para o professor fornecer feedback específico sobre alertas de risco, permitindo comentários e contexto.
    * Formulário para o professor realizar a Avaliação Completa do Aluno (frequência, notas, engajamento).
* **Controle de Acesso Granular:**
    * Diferentes perfis de usuário: Gestão, Professor, Empresa Parceira.
    * Permissões específicas para cada tipo de dado e funcionalidade do sistema.
    * Acesso da Gestão a todos os dados, mas com foco nos alertas e avaliações dos professores.
    * Acesso do Professor aos dados dos alunos e turmas vinculados a ele.
    * Acesso da Empresa Parceira limitado à Avaliação de Engajamento dos alunos vinculados às turmas parceiras.
* **Experiências Personalizadas:**
    * Dashboards adaptados para cada tipo de usuário, exibindo informações relevantes.
    * Visualização de dados estruturada e contextualizada.
    * Interface intuitiva e responsiva para facilitar o uso.

## Tecnologias Utilizadas

* **Backend:** 
* **Frontend:** 
* **IA:**
* **Infraestrutura:**

## Requisitos

* 

## Instalação

1.  Clone o repositório:
   
2.  Navegue até o diretório do projeto:

3.  Crie um ambiente virtual (recomendado):

4.  Instale as dependências:

6.  Execute a aplicação:

## Como Usar

###   Cadastro de Aluno (Gestão)

1.  Acesse o painel da Gestão.
2.  Navegue até o Módulo de Alunos.
3.  Clique em "Novo Aluno".
4.  Preencha o formulário com os dados do aluno.
5.  Clique em "Salvar".

###   Feedback do Alerta de Risco (Professor)

1.  Acesse o painel do Professor.
2.  Visualize os alertas de risco na lista de alunos ou no sininho de notificações.
3.  Clique no aluno para fornecer feedback.
4.  Preencha o formulário de feedback.
5.  Clique em "Enviar Feedback".

###   Visualização de Relatórios (Empresa)

1.  Acesse o painel da Empresa Parceira.
2.  Navegue até o Módulo de Relatórios.
3.  Selecione a turma desejada.
4.  Visualize os relatórios de engajamento dos alunos.

###   Exemplo de Alerta de Risco (JSON)

```json
{
  "id_aluno": 123,
  "nome_aluno": "João da Silva",
  "alerta": "Alto risco de evasão devido a baixa frequência e notas baixas."
}
