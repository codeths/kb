---
layout: page
title: Project Resources
---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [ETHSBell Rewrite](#ethsbell-rewrite)

## ETHSBell Rewrite

The ETHSBell Rewrite is an attempt to bring ETHSBell out of the past (the past being "4 years ago" and "PHP") and into the present with a complete rewrite in Rust.

[Deployment Guide](https://github.com/chromezoneeths/ethsbell-rewrite/#deployment) - 
[Development Instance](https://bell-dev.wolo.dev) - 
[Production Instance](https://ethsbell.app) - 
[Willow's Docs](https://github.com/chromezoneeths/ethsbell-rewrite/wiki/WillowsDocs)

The rewrite uses an API versioning system. It behaves similarly to the `major` component of semver, in that it is incremented if and when potentially breaking changes are made. The currently available versions are as follows:
* v1
* legacy (unavailable in the development instance; it can be found in the "compat" branch)

Adding new data to an endpoint's response is not considered a breaking change, so ensure your deserializer is tolerant of unknown keys. (for example, make sure you don't describe the response with `#[serde(deny_unknown_fields)]`)

Documentation for the HTTP API and the source code are generated at compile time. Open `http://localhost:8000/docs/<version>` to access the API docs, or run `cargo doc --open` to build and open the library docs.

The several sections of the rewrite are gated behind Features, so you can pick and choose which parts you want if you're using it as a library. Many of the features are required to use it as a webserver, however.
