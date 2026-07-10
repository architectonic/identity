---
type: Entry Point
title: identity
description: Runtime-neutral actor model for humans, users, agents, teams, organizations, roles, authority, incentives, and privacy.
tags: [identity, actors, users, agents, authority, incentives, privacy, okf]
okf_version: "0.1"
status: draft
---

# identity

```bash
npx architectonic add identity
```

`identity` defines how to describe humans, users, agents, teams, organizations, and roles without turning private life, temporary mood, or conversational style into permanent ontology.

This repository is not a private profile store. It contains doctrine, schemas, templates, examples, and interrogation procedures for building identity records elsewhere.

## In the ensemble

```text
constitution      composition contract for the ensemble
doctrine          purpose, principles, ontology, epistemology, ethics, governance, incentives
identity          actors, roles, authority, delegation, incentives, privacy
project           operating-unit context, sources, decisions, risks, continuity
skills            reusable procedures, verification, failure handling
knowledge         claims, sources, evidence, uncertainty, known unknowns
models            model metadata, evaluations, capability requirements, routing policy
agents            software actors composed from identity, skills, models, knowledge, permissions
living-knowledge  optional: governed maintenance of frequently changing corpora
meta              audit, upkeep, drift review, revision policy
```

Identity answers who is participating, what each actor is responsible for, what they may decide or delegate, what preferences are durable and confirmed, what constraints must be respected, and what must remain private or unknown.

## Commands

```bash
npx architectonic add identity
npx architectonic add identity --source npm
npx architectonic init
npx architectonic list
npx architectonic doctor
```

CLI: https://github.com/architectonic/architectonic

## What identity means here

Identity is a working model of an actor in a collaboration system:

```text
actor            human, user, agent, team, organization, or role
role             what this actor is responsible for
preferences      durable working preferences, explicitly confirmed
constraints      boundaries that must not be violated
communication    useful interaction context, not permanent ontology
authority        what this actor can decide, approve, delegate, override, or stop
incentives       declared or observable costs, benefits, risks, stakes, conflicts
delegation       what may be assigned, accepted, refused, or escalated
privacy          what must not be stored, exposed, inferred, or transferred
```

## Core rule

Do not infer identity or incentives from vibes. Promote identity knowledge only when it is explicitly confirmed, repeatedly validated, necessary for collaboration, and safe to store in the target context.

Humor, impatience, profanity, shorthand, stress, and temporary frustration are communication context, not durable identity.

## Boundary

This repository may contain general actor doctrine, schemas, templates, anonymized examples, privacy rules, and authority models.

It must not contain private profiles, private names or identifiers, private communications, client-sensitive data, project-specific facts, runtime secrets, or raw transcript dumps.

Identity records belong in private vaults or project workspaces. Identity is for collaboration, not surveillance.
