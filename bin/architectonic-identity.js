#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`architectonic-identity

Runtime-neutral identity package for human-agent collaboration.

Usage:
  npx architectonic-identity
  npx architectonic-identity help

This package currently reserves the public package name and ships the
canonical identity bundle in Markdown.`);
  process.exit(0);
}

console.log("architectonic-identity");
console.log("");
console.log("Actor-model bundle for roles, authority, privacy, constraints, and durable preferences.");
console.log("See README.md and START_HERE.md in the package contents.");
