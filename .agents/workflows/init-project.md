---
description: Initialize and start the project locally (frontend + backend)
argument-hint: []
---
# Initialize Project

Set up and start the project locally by installing dependencies, configuring the environment, and launching services.

---

## Preflight Checks

- [ ] **Runtimes**: Verify Node.js, Python, or other required runtimes are installed.
- [ ] **Directories**: Confirm `backend/` and `frontend/` exist (if applicable).
- [ ] **Critical Files**: Check for `package.json`, `pyproject.toml`, or `requirements.txt`.
- [ ] **Stop Condition**: If critical prerequisites are missing, stop and report.

---

## 1. Environment Setup

Before installing dependencies, ensure environment variables are configured.

1. Look for `.env.example` or `.env.template` files in `backend/` and `frontend/`.
2. If `.env` does not exist but an example does:
   - Copy `.env.example` to `.env`.
   - **CRITICAL**: Ask the user if they need to provide specific values for keys (API keys, DB URLs, etc.) or if defaults are sufficient.
3. If no example exists, check if the codebase relies on `os.environ` or `process.env` and ask the user for necessary values.

---

## 2. Install Backend Dependencies (Dynamic)

Determine the project type and install dependencies.

- **Python (uv)**:

  ```bash
  cd backend && uv sync
  ```

- **Python (pip)**:

  ```bash
  cd backend && pip install -r requirements.txt
  ```

- **Node.js**:

  ```bash
  cd backend && npm install
  ```

> Use the appropriate command based on the files found (`uv.lock`, `requirements.txt`, `package.json`).

---

## 3. Database Setup (If Applicable)

If the backend requires a database (look for `prisma`, `sqlalchemy`, `alembic`, `typeorm`):

1. Ask the user if they want to run migrations or seed the database.
2. **Run Migrations** (Examples):
   - Python: `alembic upgrade head`
   - Node/Prisma: `npx prisma migrate dev`
3. **Stop Condition**: If DB connection fails, report it and ask for configuration help.

---

## 4. Install Frontend Dependencies

```bash
cd frontend && npm install
```

- **Skip** if no `frontend/` directory exists.

---

## 5. Start Backend Server

Start the server in development mode.

- **Python (FastAPI/uv)**:

  ```bash
  cd backend && uv run uvicorn app.main:app --reload --port 8000
  ```

- **Node.js**:

  ```bash
  cd backend && npm run dev
  ```

> *Check `package.json` scripts or python file entry points to confirm the exact command.*

---

## 6. Start Frontend Server

```bash
cd frontend && npm run dev
```

- If port 5173 (Vite default) is in use, use the `--port` flag or let it auto-assign.

---

## 7. Validate Deployment

```bash
# Backend Health Check
curl -s http://localhost:8000/health

# Frontend Accessibility
# (Visual check or simple curl to ensure it returns HTML)
```

- If validation fails, identify if it's a code error or configuration error`.

---

## Access Points

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:8000](http://localhost:8000)
- **Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Output Confirmation

1. **Status**: [SUCCESS/FAILURE] for each component (Env, Backend, Database, Frontend).
2. **Access**: List the URLs where the app is running.
3. **Next Steps**: Suggest what the user can do next (e.g., "Go to the frontend URL to log in").
