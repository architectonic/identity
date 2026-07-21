# Actors and Authority

**Architectonic layer:** [main CLI and adaptive profiles](https://github.com/architectonic/architectonic)

> **Status: experimental, pre-1.0.** This layer models collaboration-relevant actors and permissions. It is not a biography store, surveillance system, authentication provider, or inference engine for personality and motives.

`identity` is a **standalone layer** for:

- humans, teams, organizations, agents, and roles;
- decision, approval, delegation, override, and stop authority;
- access, spending, mutation, and privacy boundaries;
- declared responsibilities, incentives, risks, and escalation rules.

```bash
npx architectonic@latest init actors --preset identity --source npm
```

Use it when the material uncertainty is **who may do what**. A project or constitution is not required unless those concerns also need durable structure.

See [`STANDALONE.md`](./STANDALONE.md) and [`START_HERE.md`](./START_HERE.md).
