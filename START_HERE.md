---
type: Entry Point
title: Start Here
description: First-run traversal guide for the actors and authority layer.
tags: [identity, actors, authority, delegation, privacy]
protocol_version: "0.2.0"
status: experimental
---

# Start Here

Use this package to understand the participating actors, not to infer a biography.

## Read order

1. Read `README.md` for the layer boundary.
2. Read `doctrine/privacy.md` before handling actor-specific material.
3. Read `doctrine/identity.md` before creating or editing actor records.
4. Read `doctrine/authority.md` when decisions, delegation, approval, override, escalation, or stopping authority are involved.
5. Read `doctrine/incentives.md` when cost, benefit, risk, ownership, or conflicts matter.

## Core distinction

```text
actor model            durable collaboration-relevant facts
private biography      out of scope unless explicitly required and authorized
temporary communication context  not durable identity
```

Promote actor knowledge only when it is explicit, confirmed, necessary, scoped, and safe to store.

## Operating loop

```text
Read -> classify -> inspect authority -> act within scope -> verify -> reconcile -> hand off
```
