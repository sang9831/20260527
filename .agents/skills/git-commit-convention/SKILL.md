---
name: git-commit-convention
description: Creates and pushes Git commits using English conventional commit categories with Korean messages. Use when the user asks to commit code, split changes into small commits, write commit messages, stage changes, or push to a remote branch.
---

# Git Commit Convention

Use this skill when a task involves `git commit`, `commit message`, `stage`, `split commits`, `push`, or when the change set should be turned into several small, reviewable commits.

## Goal

Produce a clean commit history with:

- small, logical commits
- English conventional commit categories
- Korean commit messages
- no unrelated files or hunks mixed into a single commit
- a final push to the correct remote branch

## Commit Format

Use this format:

```text
type: 한글 메시지
```

Rules:

- Use a conventional commit category in English.
- Put a single colon after the category.
- Write the description in Korean.
- Keep the message short, specific, and action-oriented.
- Do not use emojis.
- Do not add a period at the end unless the repository already standardizes on that style.

Recommended categories:

- `feat`: new feature or user-visible addition
- `fix`: bug fix
- `refactor`: code change without behavior change
- `docs`: documentation only
- `style`: formatting, whitespace, lint-only styling
- `test`: tests added or updated
- `chore`: maintenance work, tooling, housekeeping
- `perf`: performance improvement
- `build`: build system or dependency changes
- `ci`: CI pipeline changes
- `revert`: revert a previous change

Examples:

- `feat: 로그인 폼 검증 추가`
- `fix: 중복 제출 방지 로직 수정`
- `refactor: 공통 유틸 함수 분리`
- `docs: 설치 안내 문서 보강`
- `test: 폼 검증 테스트 추가`

## Workflow

### 1. Inspect the change set

Check the current branch and the working tree before committing.

- Identify the branch name.
- Review `git status`.
- Review the diff.
- Separate intentional changes from incidental or unrelated changes.

### 2. Split by intent

Create multiple commits when changes are logically separate.

Split commits when:

- different features are mixed together
- code and documentation are unrelated
- implementation and tests can be committed separately
- formatting or cleanup is independent of behavior changes
- file changes span distinct user stories or concerns

Prefer smaller commits over one large commit when the history will be easier to review.

### 3. Stage only what belongs together

Use selective staging so each commit contains one clear intent.

- Prefer `git add -p` for mixed files.
- Use path-based staging only when the whole file belongs in the same commit.
- Check `git diff --cached` before committing.
- If a hunk is wrong, unstage it and try again.

### 4. Write the commit message

Choose the category from the actual change, not from the file type.

Guidance:

- Use `feat` when the change adds capability or user-facing behavior.
- Use `fix` when the change corrects a bug.
- Use `refactor` when code structure changes but behavior does not.
- Use `docs` for markdown, comments, or help text only.
- Use `test` for added or updated tests.
- Use `chore` for maintenance, config, or dependency housekeeping.

Keep the Korean summary:

- concise
- specific
- present tense
- easy to understand in one glance

### 5. Commit in sequence

After each staged unit:

- commit it
- re-check the remaining diff
- continue until all intended changes are committed

Do not leave intended changes uncommitted unless the user explicitly asked to stop early.

### 6. Push the result

After the commit series is complete:

- push the current branch
- if the branch has no upstream, set one on first push
- if push fails because the branch is behind, inspect the divergence before retrying
- do not force-push unless the user explicitly asked for it or a history rewrite is clearly required and approved

## Safety Rules

- Never include unrelated changes in a commit just to keep the history short.
- Never commit partially staged work without checking the staged diff.
- Never rewrite shared history without user approval.
- Never push to a remote branch that would overwrite other people's work without explicit permission.

## Suggested Review Order

When deciding commit boundaries, review in this order:

1. user-facing feature changes
2. bug fixes
3. tests
4. documentation
5. formatting or cleanup
6. build or tooling changes

This ordering helps keep feature work easy to review and avoids burying important changes under housekeeping.

## If the Change Set Is Messy

If the working tree is mixed:

- separate each concern into its own commit
- use `git add -p` to split hunks
- if a file contains several concerns, stage it in pieces rather than all at once
- if a split is not safe, ask the user before combining unrelated work

## Expected Outcome

When this skill is used correctly, the result should be:

- a short series of focused commits
- commit messages in `type: 한글 메시지` form
- a pushed branch with the full intended history
- no accidental files or hunks included
