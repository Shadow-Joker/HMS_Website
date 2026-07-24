---
description: Create a project-level AGENT document defining architecture, rules, and references
argument-hint: [project-name]
---
# Create AGENT: Project Architecture & Rules

## Objective

Generate a canonical AGENT.md document that defines the architecture, tech stack, commands, conventions, and references for this project.

This document acts as the primary operational guide for agents and contributors working in the repository.

---

## Guidance Rules

- This document defines how the project is structured and how work should be done
- It must be concise, factual, and authoritative
- Avoid speculative or stylistic guidance
- Prefer documenting what exists and what is required, not future ideas

When documenting technologies, frameworks, or tooling:

- Use Context7 to validate current, correct practices
- Include only information relevant to this project
- Do not introduce generic boilerplate

---

## Output File

Create or overwrite:

AGENT.md

---

## AGENT.md Structure

Use the structure below exactly. Fill sections based on actual project context and validated information.

---

# [Project Name]

One-line description of what this project does.

---

## Tech Stack

List only technologies actually used in this project.

- Backend:
- Frontend:
- Database:
- Testing:
- Build / Tooling:
- Other:

If any technology usage or configuration is unclear, validate using Context7.

---

## Project Structure

Document the real folder structure of this repository.

project-name/
├── backend/
│   └── ...
├── frontend/
│   └── ...
├── tests/
│   └── ...
└── .gemini/
    ├── PRD.md        # Product requirements
    └── reference/    # Best practices and standards

Explain the purpose of each major directory briefly.

---

## Commands

Essential commands for working with the project.

Install dependencies:

Run development server:

Run tests:

Build for production:

Commands must be accurate, reproducible, and validated against current documentation.

---

## MCP Servers

List MCP servers that are recommended or required for this project.

Example:

Playwright MCP (browser automation and E2E testing):

gemini mcp add playwright npx @playwright/mcp@latest

Only include MCPs that provide real value for this project.

---

## Reference Documentation

Authoritative documents that must be consulted.

| Document           | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| .gemini/PRD.md     | Product requirements, scope, API specifications  |
| .gemini/reference/ | Language, framework, and database best practices |
| AGENT.md           | Architecture, commands, and operational rules    |

Agents must consult these documents before making assumptions.

---

## Code Conventions

Rules that must be followed when writing code.

### Backend

- Coding style
- Architectural patterns
- Error handling conventions

### Frontend

- Component structure
- State management approach
- Styling conventions

### API Design

- Request and response patterns
- Error formats
- Versioning strategy

Conventions must reflect actual project usage, not generic standards.

---

## Logging

Describe how logging is handled.

- Logging framework or library
- Log levels used
- Output destinations
- Structured logging rules if applicable

---

## Database

Describe database usage.

- Database type
- Migration strategy
- Schema location
- Important constraints or conventions

Validate database practices with Context7 if needed.

---

## Testing Strategy

Describe how testing is organized and enforced.

### Testing Pyramid

- Unit tests:
- Integration tests:
- E2E tests:

### Test Organization

tests/
├── unit/
├── integration/
└── e2e/

Document responsibilities of each test layer and when tests must be run.

---

## Notes

- This document is the source of truth for project architecture
- Update it when architecture, tooling, or workflows change
- When in doubt, validate assumptions using Context7
- Prefer correctness over completeness
