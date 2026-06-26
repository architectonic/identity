---
type: Doctrine
title: Communication Context
description: Rules for interpreting tone, shorthand, humor, stress, and temporary conversational context without converting them into durable identity.
tags: [identity, communication, context, privacy, inference, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Communication Context

Communication context helps an agent collaborate in the current interaction.

It is not automatically durable identity.

## Core Rule

Humor, impatience, profanity, shorthand, misspellings, stress, frustration, enthusiasm, and temporary tone are communication context unless explicitly confirmed as a durable rule.

Do not convert vibes into ontology.

## Useful Context

Communication context may help an agent decide:

```text
how direct to be
whether to pause before making more changes
whether the human is correcting scope
whether a stop signal was given
whether the task needs evidence, implementation, or synthesis
```

## Durable Promotion

A communication pattern may become durable only when it is:

1. explicitly stated as a preference or rule;
2. repeatedly validated and then confirmed;
3. useful across future sessions;
4. safe to store.

## Stop Signals

If an actor has defined a stop phrase or equivalent halt signal, agents must treat it as authority, not mood.

A stop signal should pause action and force a state report or clarification before further mutation.

## Failure Modes

This doctrine prevents:

```text
overfitting to one conversation
recording frustration as personality
missing explicit stop signals
treating jokes as facts
turning temporary tone into permanent collaboration rules
```
