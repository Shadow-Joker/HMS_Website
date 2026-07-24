---
description: Implement fix from RCA document
argument-hint: [issue-id-or-label]
allowed-tools: Read, Write, Edit, Bash(ruff:*), Bash(mypy:*), Bash(pytest:*), Bash(npm:*), Bash(bun:*)
---
# Implement Fix from RCA

## Objective

Implement a fix based on an existing Root Cause Analysis (RCA) document.
This command focuses on **correctness, alignment with current documentation, and validation**, not issue tracking mechanics.

The issue may or may not originate from GitHub.

---

## Prerequisites

- RCA document exists at:

  docs/rca/issue-[identifier].md
- The identifier may come from:

  - Command argument
  - RCA filename
  - Context provided in conversation
- Version control and issue trackers are optional.

---

## RCA Document to Reference

Read the RCA document fully before making any changes:

    docs/rca/issue-[identifier].md

If the RCA is missing, incomplete, or outdated:

- Stop
- Request that it be created or updated first

---

## Implementation Instructions

### 1. Read and Validate RCA

- Read the **entire RCA document**
- Understand:
  - Root cause
  - Affected components
  - Proposed fix strategy
  - Risks and considerations
  - Testing requirements

If the RCA references framework or library behavior:

- **Use Context7 to validate that the behavior is still current**
- Do not implement fixes based on outdated assumptions

---

### 2. Verify Current State

Before making changes:

- Confirm the issue still exists
- Reproduce the issue if possible
- Inspect the current state of affected files
- Check for recent changes that may affect the fix

If reproduction steps are unclear:

- Attempt partial reproduction
- Document gaps rather than guessing

---

### 3. Implement the Fix

Follow the **Proposed Fix** section of the RCA exactly.

For each file to modify:

#### a. Read Existing Code

- Understand current behavior
- Locate the exact code referenced in the RCA
- Identify assumptions and dependencies

#### b. Apply the Fix

- Implement only what is necessary to resolve the root cause
- Maintain existing code style and conventions
- Avoid refactors unless explicitly required
- Add comments only where the fix is non-obvious

#### c. Validate Against Current Documentation

- If the fix depends on framework/library behavior:
  - Confirm correctness using Context7
  - Adjust implementation if documented behavior differs

---

### 4. Add or Update Tests

Follow the **Testing Requirements** section of the RCA.

Create tests to ensure:

1. The original issue is resolved
2. Edge cases are handled
3. No regressions are introduced
4. New code paths are covered

Test placement:

- Follow existing test structure
- Mirror source file paths
- Use clear, descriptive test names

Example test template:

    def test_issue_fix():
        """Verify issue is resolved."""
        # Arrange
        # Act
        # Assert

---

### 5. Run Validation

Execute all validation steps defined in the RCA:

    # Linting
    [commands from RCA]

    # Type checking
    [commands from RCA]

    # Tests
    [commands from RCA]

If any step fails:

- Fix the issue
- Re-run validation
- Do not proceed until all checks pass

---

### 6. Verify Fix Manually

Where applicable:

- Follow reproduction steps from RCA
- Confirm issue no longer occurs
- Test known edge cases
- Watch for unintended side effects

Document anything unexpected.

---

### 7. Update Documentation (If Needed)

Update documentation only if the fix changes:

- Behavior
- Configuration
- Public APIs
- User-facing functionality

Keep documentation changes minimal and factual.

---

## Output Report

### Fix Implementation Summary

**Identifier:** [Issue ID / label / description]

**Root Cause (from RCA):**
One-line summary.

---

### Changes Made

**Files Modified:**

1. **[file-path]**
   - Change: [What was changed]
   - Reason: [Why this resolves the root cause]

---

### Tests Added or Updated

**Test Files:**

1. **[test-file-path]**
   - Coverage: [What scenarios are tested]

---

### Validation Results

    [Lint results]
    [Type check results]
    [Test results]

All validation steps passed.

---

### Verification

- Issue reproduction no longer possible
- Edge cases verified
- No regressions observed

---

### Ready for Commit

All changes are complete and validated.

Proceed with:

    /commit

**Suggested commit message:**

    fix(scope): resolve issue [identifier]

    Root cause:
    - [Brief explanation]

    Fix:
    - [What was changed]

---

## Optional: Issue Tracker Updates

If the issue is tracked externally (e.g., GitHub, Jira):

- Update the issue with:
  - Summary of fix
  - Commit reference
  - Validation status

Do not assume any specific issue tracking system.

---

## Notes

- Do not implement fixes without a validated RCA
- **Use Context7 to avoid fixing expected or changed behavior**
- Avoid speculative changes
- If the RCA is proven incorrect, update it before proceeding
- This command prioritizes correctness over speed
