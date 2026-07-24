---
description: Prime agent with codebase understanding
---
# Prime: Load Project Context

## Objective

Build a comprehensive understanding of the project by analyzing its structure, documentation, and key files.
This command must work for both Git and non-Git projects.

---

## Process

### 1. Analyze Project Structure

Inspect the filesystem to understand the project layout.

- List top-level directories and files
- Identify common folders such as:
  - `src/`, `backend/`, `frontend/`
  - `apps/`, `packages/`, `services/`
  - `docs/`, `scripts/`, `tests/`

Use a directory tree view where possible, ignoring large or generated folders:

- `node_modules`
- `__pycache__`
- `.git`
- `dist`, `build`, `out`

If a tree-style view is unavailable, fall back to listing directories and files manually.

Do **not** assume the project uses Git.

---

### 2. Read Core Documentation

Read and prioritize the following if present:

- `GEMINI.md`, `AGENT.md`, or similar rules files
- `README.md` at the project root
- README or docs inside major subdirectories
- Architecture or design documentation
- Setup or contribution guides

---

### 3. Identify and Read Key Files

Based on the project structure, locate and read:

- Application entry points(e.g. `main.py`, `app.py`, `index.ts`, `main.jsx`)
- Core configuration files(e.g. `pyproject.toml`, `package.json`, `vite.config.js`, `tsconfig.json`)
- Database or schema definitions
- Core services, controllers, or business logic modules

Focus on files that define **how the system works**, not every file.

---

### 4. Detect Version Control (If Present)

Check whether the project is using Git.

If Git is available:

- Check recent commit history:
  `git log -10 --oneline`
- Check current branch and working tree status:
  `git status`

If Git is not available:

- Skip this step
- Do not assume remote hosting (e.g., GitHub)

---

## Output Report

Produce a concise, scannable summary covering:

### Project Overview

- Purpose and type of project
- Primary technologies and frameworks
- High-level functionality

### Architecture

- Overall structure and organization
- Major directories and their roles
- Architectural patterns observed

### Tech Stack

- Languages and runtimes
- Frameworks and libraries
- Build tools and package managers
- Testing tools (if any)

### Core Principles

- Coding style and conventions
- Documentation practices
- Testing and quality approach

### Current State

- Version control status (if applicable)
- Recent development focus (if detectable)
- Immediate observations, risks, or unknowns

**Keep the summary factual, neutral, and easy to scan.
Use bullet points and clear section headers.**
