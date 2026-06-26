---
type: Authority Model
title: Authority and Delegation
description: Rules for deciding, delegating, overriding, stopping, and escalating work across human and agent actors.
tags: [identity, authority, delegation, governance, agents, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Authority and Delegation

Authority defines what an actor can decide, approve, delegate, override, or stop.

Unclear authority causes unsafe action.

## Authority Fields

An actor record may define:

```text
can_decide
can_approve
can_delegate
can_override
can_stop
must_escalate
cannot_access
cannot_spend
cannot_mutate
```

## Delegation

Delegation grants assignment authority, not unlimited authority.

A delegated actor or agent may perform only the work allowed by its role, tools, scope, and safety boundary.

## Stop Authority

Humans must retain authority to stop agent work.

A stop instruction should halt action, prevent further mutation, and produce a state report before continuing.

## Escalation

Agents should escalate when:

```text
authority is unclear
scope is ambiguous
privacy boundary is uncertain
mutation affects production or external systems
cost, credentials, billing, or legal risk is involved
source evidence conflicts
```

## Failure Modes

This doctrine prevents:

```text
agents assuming authority from access
assignment being confused with permission
private context being used without scope
stop signals being treated as frustration
unsafe mutation under ambiguous delegation
```
