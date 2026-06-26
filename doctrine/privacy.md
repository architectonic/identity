---
type: Doctrine
title: Identity Privacy
description: Public/private boundary and safe storage rules for identity knowledge.
tags: [identity, privacy, public-boundary, safety, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Identity Privacy

Identity knowledge is sensitive because it describes actors.

Store only what is useful, confirmed, and safe for the target context.

## Public Packages

Public packages may contain:

```text
general doctrine
schemas
templates
anonymized examples
privacy rules
authority models
interrogation procedures
```

Public packages must not contain:

```text
private user profiles
private names or identifiers
private communications
client-sensitive data
credentials
raw transcripts
project-specific facts
```

## Private Instances

Private instances may contain actor-specific knowledge only when it is necessary for collaboration and safe within that private boundary.

Even private instances should prefer:

```text
anonymized roles
confirmed preferences
explicit constraints
bounded context
source indexes over raw dumps
```

## Minimization Rule

Do not store identity material simply because it was observed.

Store it only when it changes future collaboration in a useful and safe way.

## Transfer Rule

Identity knowledge does not automatically transfer across contexts.

A rule safe in one private vault may be inappropriate in a public package, shared project, team workspace, or external runtime.

## Failure Modes

This doctrine prevents:

```text
private context leaking into public bundles
identity files becoming biographies
raw transcripts becoming memory
unnecessary personal detail accumulating
agents using private context when irrelevant
```
