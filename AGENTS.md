---
type: Agent Instruction
title: Identity Agent Instructions
description: Rules for agents reading or modifying the identity actor-model bundle.
tags: [agents, instructions, identity, privacy, okf]
okf_version: "0.1"
status: draft
---

# Agent Instructions

## Scope

These instructions apply to agents working with this repository.

`identity` defines actor models for humans, users, agents, teams, organizations, and roles.

It does not store private user profiles. It provides public doctrine, schemas, templates, and examples for identity records that may be instantiated elsewhere.

## Read Order

1. Read `README.md`.
2. Read `START_HERE.md`.
3. Read `index.md`.
4. Read `doctrine/index.md`.
5. Read `doctrine/privacy.md` before adding any actor-related material.
6. Read the specific doctrine concept relevant to the task.

## Core Rules

- Identity is for collaboration, not surveillance.
- Do not infer identity from vibes.
- Communication context is not automatically durable identity.
- Store only what is useful, confirmed, necessary, and safe.
- Public packages must not contain private profiles, names, identifiers, private communications, or raw transcripts.
- Agent identity is operational role/authority/tooling context, not theatrical persona.

## Before Writing

Before creating or editing a file:

1. Verify the target repository and path.
2. Read the current file or nearest existing pattern.
3. Classify the material as actor doctrine, privacy, communication context, authority, delegation, template, example, or temporary context.
4. Reject private identifiers, private communications, credentials, client-sensitive data, raw dumps, and project-specific facts.
5. Make the smallest coherent change.
6. Read back the result.
7. Report changed paths and commit SHAs.

## Completion Standard

A change is complete only when:

1. the intended file was created or updated;
2. the content is compact and identity-safe;
3. the content has OKF-compatible frontmatter unless it is `index.md` or `log.md`;
4. private-instance content was not introduced;
5. the result was read back or otherwise verified.
