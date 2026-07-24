---
description: Analyze and document root cause for a reported issue
---

# Root Cause Analysis (RCA)

## Objective

Analyze a reported issue, identify its root cause, assess impact, and document findings clearly for future implementation.

The issue description may come from:

- The command argument
- The current conversation context
- A pasted issue description
- A GitHub issue (optional)

Do **not** assume the issue originates from GitHub.

---

## Input Sources (Flexible)

The issue information may be obtained from one or more of the following:

- User-provided description in conversation
- Command argument (issue ID, label, or short name)
- Pasted error messages, logs, screenshots, or stack traces
- GitHub issue metadata (if available)

If the issue description is unclear or incomplete, ask clarifying questions before proceeding.

---

## Investigation Process

### 1. Establish Issue Context

Identify and summarize:

- What the issue is
- Where it occurs (component, feature, environment)
- How it was discovered
- Any known reproduction steps or symptoms

If the issue references specific technologies, frameworks, or libraries:

- **Use Context7 to retrieve up-to-date documentation, APIs, and known behaviors**
- Prefer current behavior over assumptions or historical knowledge

---

### 2. Analyze the Codebase

Inspect the local project to identify relevant areas:

- Locate components, services, or modules related to the issue
- Search for:
  - Error messages
  - Function or class names
  - Feature identifiers
- Review configuration, schemas, or integration points involved

When uncertainty exists about framework behavior or library usage:

- **Consult Context7 to validate expected behavior, defaults, or deprecations**

Do not assume version control is present.

---

### 3. Review Change History (If Available)

If the project uses Git:

    git log --oneline -20 -- [relevant paths]
    git status

Look for:

- Recent changes to affected areas
- Refactors or behavior changes
- Related fixes or regressions

If Git is not available, skip this step.

---

### 4. Determine Root Cause

Analyze and clearly explain:

- What is actually broken
- Why it is happening
- What assumption, logic, or condition is incorrect
- Whether this is due to:
  - Logic error
  - Missing validation
  - Edge case
  - Integration mismatch
  - Configuration issue
  - Framework or dependency behavior change

If framework or library behavior is involved:

- **Cross-check findings with Context7 to confirm current expected behavior**

Avoid speculation. Base conclusions on evidence from code and validated references.

---

### 5. Assess Impact

Determine:

- Scope of impact (who or what is affected)
- Severity (Critical / High / Medium / Low)
- Any known workarounds
- Risk of data corruption or security implications

---

### 6. Propose Fix Strategy

Design a solution without implementing it:

- High-level fix approach
- Files or components likely to change
- Alternative approaches (if applicable)
- Risks or side effects
- Testing and validation requirements

Ensure the proposed fix aligns with **current best practices and documented behavior**, validated via Context7 where relevant.

---

## Output: Create RCA Document

Save analysis as:

    .agents/rca/issue-[identifier].md

Where `[identifier]` comes from:

- The command argument, or
- A short descriptive label derived from the issue

---

## Required RCA Document Structure

    # Root Cause Analysis

    ## Issue Summary
    - Identifier: [Issue ID / label / description]
    - Source: [Conversation / GitHub / User report]
    - Title: [Short issue title]
    - Severity: [Critical/High/Medium/Low]
    - Status: [Open / Investigated / Mitigated]

    ## Problem Description
    Clear explanation of the issue.

    Expected Behavior:
    What should happen (validated against current documentation).

    Actual Behavior:
    What actually happens.

    Symptoms:
    - Observable failures or errors

    ## Reproduction
    Steps to reproduce (if known).

    Reproduction Verified: Yes / No / Partial

    ## Root Cause

    Affected Components:
    - Files
    - Functions / classes
    - Configurations or dependencies

    Analysis:
    Detailed explanation of why the issue occurs.

    Code Location:
    - File path and relevant snippet (if applicable)

    ## Impact Assessment
    Scope, severity justification, and risk analysis.

    ## Proposed Fix

    Fix Strategy:
    High-level solution aligned with current documented behavior.

    Files to Modify:
    - File path
      - What changes
      - Why it fixes the issue

    Alternative Approaches:
    Other options and trade-offs.

    Risks and Considerations:
    - Side effects
    - Breaking changes

    Testing Requirements:
    - Test cases needed
    - Validation steps or commands

    ## Implementation Plan
    Brief step-by-step plan for fixing the issue.

    ## Next Steps
    - Review RCA
    - Implement fix
    - Validate
    - Commit changes

---

## Notes

- This command documents understanding, not implementation
- **Use Context7 proactively to avoid outdated assumptions**
- Prefer verified behavior over intuition
- This RCA document should be consumable by an implementation command 
- Save a new file to `.agents/rca/issue-[identifier].md`