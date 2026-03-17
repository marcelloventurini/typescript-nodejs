# TypeScript
API criada para o curso "TypeScript: construção de uma API com tipagem segura" da Alura.  
O código difere-se consideravelmente do original do curso (que pode ser visto [aqui](https://github.com/alura-cursos/typescript-para-backend/tree/aula-5)); me aprofundei no estudo com conteúdos de fora da plataforma, o que me levou a tomar diversas decisões diferentes.

# Tecnologias e Ferramentas
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **ORM:** [TypeORM](https://typeorm.io/)
- **Banco de Dados:** [SQLite](https://www.sqlite.org/)

## 🏗️ Arquitetura e Padrões

O projeto foi estruturado utilizando repositórios (interface e implementação), o que permite que a lógica de negócio seja independente da ferramenta de banco de dados utilizada.

### Principais conceitos aplicados:
* **Injeção de Dependência:** Repositórios são injetados via construtor, facilitando testes e manutenção.
* **Entidades com Construtor Partial:** Uso de `Partial<Entity>` para permitir instanciar objetos de forma flexível e segura.
* **Associações 1:N:** Implementação de relacionamentos entre Adotantes e Pets (One-to-Many / Many-to-One).
* **Tratamento de Erros:** Fluxo de exceções centralizado nos Controllers com uso de `try/catch` e status HTTP semânticos (400, 404, 500).

## 🛠️ Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   
   git clone [https://github.com/marcelloventurini/typescript-nodejs.git](https://github.com/marcelloventurini/typescript-nodejs.git)
   ```

2. **Instale as dependências**

```bash
npm install
```

3. **Banco de dados**  
O SQLite criará um arquivo .sqlite automaticamente na raiz do projeto ao iniciar a aplicação pela primeira vez.

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

## 🛣️ API Endpoints

### 🐶 Pets
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/pets` | Lista todos os pets cadastrados |
| `GET` | `/pets/:id` | Retorna detalhes de um pet específico |
| `POST` | `/pets` | Cadastra um novo pet no sistema |
| `PUT` | `/pets/:id` | Atualiza informações do pet |
| `DELETE` | `/pets/:id` | Remove um pet do sistema |
| `PATCH` | `/pets/:petId/adopt` | Realiza a adoção vinculando um Pet a um Adotante |

### 👤 Adotantes (Adopters)
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/adopters` | Lista todos os adotantes |
| `GET` | `/adopters/:id` | Busca perfil detalhado de um adotante |
| `POST` | `/adopters` | Cadastra um novo adotante |
| `PUT` | `/adopters/:id` | Atualiza informações (nome, foto, etc) do adotante |
| `DELETE` | `/adopters/:id` | Remove um adotante |
