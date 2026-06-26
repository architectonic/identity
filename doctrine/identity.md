---
type: Doctrine
title: Identity Doctrine
description: Actor-model doctrine for humans, users, agents, teams, organizations, and roles in human-agent collaboration.
tags: [identity, actor, role, preference, authority, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Identity Doctrine

Identity is a working model of an actor in a collaboration system.

It is not a personality dump, biography, surveillance record, or permanent record of temporary mood.

## Actor

An actor may be:

```text
human
user
agent
team
organization
role
```

The system should model only what improves collaboration.

## Identity Fields

Useful identity fields include:

```text
role
responsibility
preferences
constraints
communication context
authority
delegation
privacy
relevant background
```

## Gathering Rule

Only promote identity knowledge when it is:

1. explicitly confirmed by the actor or an authorized source;
2. repeatedly observed and then confirmed;
3. necessary for better collaboration;
4. safe to store in the target context.

Do not infer durable identity from vibes.

## Preferences

A durable preference is a confirmed working preference that improves collaboration.

A preference is not the same as a fact. It can guide behavior, but it should not override source artifacts, safety boundaries, or explicit current instruction.

## Constraints

A constraint is a boundary that must not be violated.

Constraints are stronger than preferences. They may concern privacy, authority, tooling, budget, safety, communication, scope, or source access.

## Roles

A role describes responsibility, not essence.

Roles should help agents know what an actor can decide, what they are accountable for, and when to ask or escalate.

## Agent Identity

Agents can also have identity records.

An agent identity should define:

```text
purpose
role
authority
available tools
required skills
handoff format
stop conditions
verification standard
```

Agent identity should not become a theatrical persona unless that persona changes operational behavior in a useful way.

## Failure Modes

This doctrine prevents:

```text
mood becoming permanent identity
private context leaking into public packages
agents over-personalizing generic work
preferences being treated as facts
unclear authority causing unsafe action
agent roles degenerating into prompt fluff
```
