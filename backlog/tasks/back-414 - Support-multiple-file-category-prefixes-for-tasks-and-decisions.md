---
id: BACK-414
title: Support multiple file category prefixes for tasks and decisions
status: Done
assignee:
  - '@copilot'
created_date: '2026-04-24 15:37'
updated_date: '2026-04-24 16:03'
labels: []
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Expand the prefix system to support multiple file category prefixes for visual distinction and CI filtering. Tasks: BACK-, EPIC-, FEAT-. Decisions: decision-, dsc-, apr-, adr-.
<!-- SECTION:DESCRIPTION:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 bunx tsc --noEmit passes when TypeScript touched
- [ ] #2 bun run check . passes when formatting/linting touched
- [ ] #3 bun test (or scoped test) passes
<!-- DOD:END -->
