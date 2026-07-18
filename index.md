---
layout: default
title: Project Overview
---

<meta name="google-site-verification" content="28q6TptZTCtkfN-eohtPd1h-hETr9e9ZHgZwOkTmlio" />

# GitHub Repositories

Your feedback is highly appreciated.

## Python

- [shmlock](https://github.com/fwkrumm/shmlock)
An inter-process lock implementation (named Semaphore) that eliminates the need for passing objects around. It can be utilized across multiple terminals or consoles using the same name identifier, leveraging the multiprocessing.shared_memory module.

- [shmqueue](https://github.com/fwkrumm/shmqueue)
An inter-process FIFO queue backed by a shared-memory ring buffer. Any process can attach by name — no object passing required. Uses shmlock for synchronization and msgpack for serialization, with an optional pickle fallback.

- [pymembar](https://github.com/fwkrumm/pymembar)
A Python library (basically a simple C-wrapper) for memory barriers and synchronization primitives, providing efficient and portable solutions for concurrent programming.

- [grpchook](https://github.com/fwkrumm/grpchook)
This package provides a Python framework for building asynchronous gRPC bidirectional-streaming services. Subclass `BaseServer` and `BaseClient`, override the hooks you need — the framework handles all gRPC plumbing.

- [multi_scale_turing](https://github.com/fwkrumm/multi_scale_turing) (AI GENERATED)
Multi-scale Turing pattern generator in Python; CPU/CUDA, configurable scales, symmetry, frame export.

- [image_upscaler](https://github.com/fwkrumm/image_upscaler) (AI GENERATED)
Standalone image upscaler using Real-ESRGAN.

## C++

- [5p](https://github.com/fwkrumm/5p)
A straightforward wrapper for the pcapplusplus library, designed to forward pcap data from pcap(ng) files via UDP/TCP using Boost sockets. This repository employs the conan2 package manager for dependency management.

## GDScript

WORK IN PROGRESS:

- [Doppelkopf](https://github.com/fwkrumm/doppelkopf)
WIP. This repository contains an experimental AI project build for generating a Doppelkopf (traditional german card game) game with Godot4. This is not production‑ready and is only updated when I have spare compute tokens. You’re welcome to use, modify, or extend it in accordance with the project’s license.