# identity

A public package for defining human and agent identity in human + AI collaboration systems.

## Premise

Agents work better when they understand who is participating, what role each actor has, what preferences are durable, what boundaries exist, and what must not be inferred from temporary mood or conversational style.

`identity` defines schemas and interrogation procedures for building identity profiles without turning private life, jokes, frustration, or transient preferences into permanent ontology.

## What identity means here

Identity is not a personality dump.

Identity is a working model of an actor in a collaboration:

```text
actor            # human, agent, team, organization, or role
role             # what this actor is responsible for
preferences      # durable working preferences, explicitly confirmed
constraints      # boundaries that must not be violated
communication    # tone, shorthand, humor, and interaction patterns
authority        # what this actor can decide, approve, delegate, or stop
context          # relevant background, only when safe and useful
```

## Public template vs. private instance

This repository provides doctrine, templates, and examples.

It does not store private user profiles.

A private vault may instantiate these templates with source-grounded or explicitly confirmed identity knowledge.

```text
identity template
→ agent-guided interview
→ confirmed profile
→ private vault or project workspace
```

## Core rule

Do not infer identity from vibes.

Only promote identity knowledge when it is:

1. explicitly confirmed by the human;
2. repeatedly validated and then confirmed;
3. necessary for better collaboration;
4. safe to store in the target context.

Humor, impatience, profanity, shorthand, stress, and temporary frustration are communication context, not durable identity.

## Intended files

```text
doctrine/
  identity.md
  preference-vs-fact.md
  privacy.md
  role.md
  authority.md

templates/
  human_profile.md
  agent_profile.md
  communication_style.md
  preferences.md
  constraints.md
  delegation.md

examples/
  human_profile.example.md
  agent_profile.example.md
```

## Relationship to teleology

`teleology` defines what the collaboration is for.

`identity` defines who is participating, how they should be understood, and what identity facts may safely govern agent behavior.

## Status

Early vocabulary and ontology work.
