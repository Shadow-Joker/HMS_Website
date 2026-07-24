---
description: Create a new commit for all relevant uncommitted changes
---

# Create a new commit for all relevant uncommitted changes

1. Run:

   - `git status`
   - `git diff HEAD`
   - `git status --porcelain`
2. Identify untracked and modified files.

   - Ensure changes relate to a single logical purpose.
   - If unrelated changes are present, stop and ask before committing.
3. Add all relevant tracked and untracked files.
4. If tests, linting, or checks exist, run them before committing.

   - If none exist, explicitly note that validation was skipped.
5. Propose an atomic commit message using conventional format:

   - `type(scope): short imperative summary`
   - Example: `docs(prd): clarify Context7 and web search usage`
6. Summarize:

   - Files being committed
   - Commit message
7. Create the commit.
8. If mentioned about creating/updating repository to github using gh, execute it accordingly 