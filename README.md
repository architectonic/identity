---
type: Entry Point
title: identity
description: Runtime-neutral actor model for humans, users, agents, teams, organizations, roles, authority, incentives, and privacy.
tags: [identity, actors, users, agents, authority, incentives, privacy, okf]
okf_version: "0.1"
status: draft
---

# identity

`identity` is the actor-model package for an Architectonic constitution.

Install it with:

```bash
npx architectonic add identity
```

It defines how to describe humans, users, agents, teams, organizations, and roles without turning private life, temporary mood, jokes, frustration, or conversational style into permanent ontology.

This repository is not a private profile store. It contains doctrine, schemas, templates, examples, and interrogation procedures for building identity records elsewhere.

## Purpose

Agents work better when they know who or what they are collaborating with, what role each actor has, what authority each actor holds, what preferences are durable, what constraints must be respected, what incentives may matter, and what must not be inferred.

`identity` exists to answer:

```text
Who is participating?
What is this actor responsible for?
What can this actor decide, approve, delegate, or stop?
What preferences are durable and confirmed?
What incentives, costs, benefits, or risks are declared or observable?
What constraints must be respected?
What communication patterns are useful context?
What must remain private or unknown?
```

## What identity means here

Identity is not a personality dump.

Identity is a working model of an actor in a collaboration system:

```text
actor            # human, user, agent, team, organization, or role
role             # what this actor is responsible for
preferences      # durable working preferences, explicitly confirmed
constraints      # boundaries that must not be violated
communication    # useful interaction context, not permanent ontology
authority        # what this actor can decide, approve, delegate, override, or stop
incentives       # declared or observable costs, benefits, risks, stakes, and conflicts
context          # relevant background, only when safe and useful
delegation       # what may be assigned, accepted, refused, or escalated
privacy          # what must not be stored, exposed, inferred, or transferred
```

A later system may split this into separate `users`, `agents`, or `roles` packages. For now, `identity` remains the high-level actor package.

## Core rule

Do not infer identity or incentives from vibes.

Only promote identity knowledge when it is:

1. explicitly confirmed by the actor or authorized source;
2. repeatedly validated and then confirmed;
3. necessary for better collaboration;
4. safe to store in the target context.

Humor, impatience, profanity, shorthand, stress, and temporary frustration are communication context, not durable identity.

## Intended structure

```text
doctrine/
  identity.md
  incentives.md
  authority.md
  delegation.md
  privacy.md

templates/
  actor_profile.md
  user_profile.md
  agent_profile.md
  stakeholder_profile.md
  authority_profile.md
  incentive_profile.md
```

## Relationship to other packages

```text
constitution = root scaffold that composes Architectonic layers
doctrine     = defines governing principles, epistemology, ontology, ethics, governance, and oikonomia
identity     = defines who or what is participating
project      = defines the operating unit where work happens
skills       = defines reusable procedures
knowledge    = stores the disclosed corpus of knowledge and evidence
meta         = stores upkeep and self-improvement procedures
```

Identity records should be instantiated into private vaults, project workspaces, or runtime-specific contexts. This public package should only contain general doctrine, schemas, templates, and examples.

## Public boundary

This repository may contain:

```text
general actor doctrine
identity schemas
profile templates
anonymized examples
privacy rules
authority, delegation, and incentive models
interrogation procedures
```

It must not contain:

```text
private user profiles
private names or identifiers
private communications
client-sensitive data
project-specific facts
runtime secrets
raw transcript dumps
```

## Quality rule

A file belongs here only if it helps agents understand actors more safely, precisely, and usefully.

Keep material that clarifies role, authority, preference, constraints, privacy, delegation, incentive context, or communication context.

Remove material that stores unnecessary personal detail, repeats generic advice, overfits to one person, encourages inference from mood or style, or encourages mind-reading of hidden motives.

## Instantiation rule

Do not preserve template language as if it were identity knowledge.

Replace template material only with:

1. explicit actor answers;
2. authorized source-grounded facts;
3. labeled assumptions;
4. open questions;
5. documented decisions about authority, delegation, privacy, incentive context, or scope.

Identity is for collaboration, not surveillance.

## Status

Draft. The immediate goal is to define a clean actor model that can support humans, users, agents, teams, organizations, and roles without leaking private instance data into public doctrine.
