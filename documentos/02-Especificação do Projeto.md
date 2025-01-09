# Especificação do Projeto

Este documento de Especificação do Projeto visa fornecer uma visão abrangente e detalhada das metas, requisitos e funcionalidades que orientarão o desenvolvimento deste projeto. Este documento serve como o alicerce conceitual do projeto, proporcionando uma visão abrangente e estruturada de todas as características planejadas para o software.

## Arquitetura e Tecnologias

### Tecnologias Utilizadas

#### Frontend
Para o desenvolvimento do frontend, utilizamos React com TypeScript. O React é uma biblioteca JavaScript amplamente utilizada para a construção de interfaces de usuário dinâmicas e responsivas. O uso do TypeScript, uma extensão do JavaScript que adiciona tipagem estática, melhora a robustez e a manutenção do código.

#### Backend
No backend, optamos por C# com .NET core 8.0. 

### Princípios de Design
#### SOLID
Para garantir um código de alta qualidade e fácil manutenção, seguimos os princípios SOLID no desenvolvimento do backend:

##### Single Responsibility Principle (Princípio da Responsabilidade Única): Cada classe ou módulo deve ter uma única responsabilidade.
##### Open/Closed Principle (Princípio do Aberto/Fechado): Entidades de software devem estar abertas para extensão, mas fechadas para modificação.
##### Liskov Substitution Principle (Princípio da Substituição de Liskov): Objetos de uma classe base devem poder ser substituídos por objetos de uma classe derivada sem alterar o funcionamento do programa.
##### Interface Segregation Principle (Princípio da Segregação de Interfaces): Muitas interfaces específicas são melhores do que uma interface única e abrangente.
##### Dependency Inversion Principle (Princípio da Inversão de Dependência): Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

 Ambiente de desenvolvimento
Para o ambiente de desenvolvimento, estamos utilizando o GitHub para armazenar o código e Projects do próprio GitHub para divisão de tarefas.

### UI Design 
Figma

<table>
 <tr>
   <td colspan='2' align='center'><strong>UI Design</strong></td>
 </tr>
 <tr>
   <td width='200' align='center'><strong>Demostração</strong></td>
   <td width='800'><strong>Tecnologia</strong></td>
 </tr>
  <tr>
   <td align='center'><a href='https://www.figma.com/](https://www.figma.com/design/FaMMAesyMLNagDkh4UBM03/NutriAPP?node-id=0-1&p=f&t=9b217kJh6AXzYWkW-0'>Projeto de iterface</href></td>
   <td>O Figma.</td>
 </tr>
</table>

## Requisitos

### Requisitos funcionais

| ID      | Descrição do Requisito                                                                | Prioridade |
|---------|---------------------------------------------------------------------------------------|------------|
| RF-001  | O usuário (Nutricionista) poderá se cadastrar, editar informações e fazer login no sistema.   | ALTA       |
| RF-002  | O usuário (Nutricionista) poderá agendar consultas com clientes.                      | BAIXA      |
| RF-003  | O usuário (Nutricionista) poderá visualizar a agenda.                                 | BAIXA       |
| RF-004  | O usuário (Nutricionista) poderá registrar, editar e excluir dados dos clientes.      | ALTA       |
| RF-005  | O usuário (Nutricionista) terá acesso a um “catálogo” com seus clientes registrados (nome/e-mail/telefone).  | ALTA       |
| RF-006  | O usuário (Nutricionista) terá uma tela resumo dos valores recebidos.                 | BAIXA       |
| RF-007  | O usuário (Nutricionista) poderá salvar comprovantes das transações.                  | BAIXA       |
| RF-008  | O usuário (Nutricionista) poderá filtrar os valores recebidos por data, mês e ano.         | BAIXA       |
| RF-009  | O usuário (Nutricionista) poderá atualizar as imagens; e informações de seu perfil.  | MÉDIA      |
| RF-010  | O usuário (Nutricionista) poderá calcular a taxa metabólica basal em X fórmulas.     | ALTA      |
| RF-011  | O usuário (Nutricionista) poderá montar uma planilha com suas refeições diárias.     | ALTA      |
| RF-012  | O usuário (Nutricionista) poderá consultar a tabela TACO e adicionar alimentos na sua planilha.           | ALTA       |
| RF-013  | O usuário (Nutricionista) poderá cadastrar alimentos personalizados.                 | ALTA      |
| RF-015  | O usuário (Nutricionista) poderá consultar uma tabela com as calorias de sua dieta.    | ALTA      |  
| RF-016  | O usuário (Nutricionista) poderá informar dados sobre a evolução do cliente.     | MÉDIA      | 
| RF-017  | O usuário (Nutricionista) poderá consultar um gráfico com a evolução do cliente.     | MÉDIA      | 
| RF-018  | O usuário (Nutricionista) poderá compartilhar o gráfico com a evolução do cliente quando necessário.    | MÉDIA      | 
| RF-019  | O usuário (Nutricionista) poderá baixar a planilha em PDF.                           | ALTA      | 
| RF-020  | O usuário (Nutricionista) poderá enviar a planilha via E-Mail.                       | MÉDIA      | 
| RF-021  | O usuário (Nutricionista) poderá enviar planilha via Whatsapp.                       | MÉDIA      | 


### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                             | Prioridade |
|---------|--------------------------------------------------------------------------------------------------------------------|------------|
| RNF-001 | A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA       |
| RNF-002 | A aplicação deve ser desenvolvida com layout simples, organizado e intuitivo.                                      | ALTA       |
| RNF-003 | A aplicação deve se comunicar com um banco de dados para salvar informações cadastrais do usuário.                 | MÉDIA      |
| RNF-004 | O sistema deve ter alta disponibilidade.                                                                           | ALTA       |
| RNF-005 | A aplicação deve se comunicar com um banco de dados para salvar informações dos clientes e valores recebidos pelo usuário (Nutricionista).| ALTA       |                                                                   | ALTA       |





