---
layout: page
title: General Resources
---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [ETHSBell Rewrite](#ethsbell-rewrite)

## ETHSBell Rewrite

The ETHSBell Rewrite is an attempt to bring ETHSBell out of the past (the past being "4 years ago" and "PHP") and into the present with a complete rewrite in Rust.

[Deployment Guide](https://github.com/chromezoneeths/ethsbell-rewrite/#deployment) - 
[Development Instance](https://bell-dev.wolo.dev)

Documentation for the HTTP API and the source code are generated at compile time. Open `http://localhost:8000/docs/v1` to access the API docs, or run `cargo doc --open` to build and open the library docs.

The several sections of the rewrite are gated behind Features, so you can pick and choose which parts you want if you're using it as a library. All of the features are required to use it as a webserver, however.