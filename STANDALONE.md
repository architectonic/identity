# Standalone Actors and Authority

## Use this layer when

- technical access may be confused with permission;
- several humans or agents have different responsibilities;
- delegation, review, stopping, privacy, or cost boundaries are unclear;
- a reusable actor model applies across projects.

## Do not use it for

- private biography unrelated to collaboration;
- temporary mood, humor, impatience, or conversational style;
- inferred motives, status, or stereotypes;
- secrets or credentials;
- application authentication implementation.

## Minimum useful record

```text
actor or role
responsibility
authority
forbidden actions
privacy boundary
delegation and escalation
review and stop rights
```

An actor model may stand alone. Add a constitution only when system-wide invariants or amendment rules are material. Add a project only when actor authority must be scoped to a concrete operating unit.
