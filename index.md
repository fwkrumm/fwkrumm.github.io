---
layout: skill-tree
title: fwkrumm | Projects
trees:
  - id: python
    name: Python
    symbol: Py
  - id: cpp
    name: C/C++
    symbol: C/C++
  - id: gdscript
    name: GDScript
    symbol: GD
projects:
  - id: shmlock
    name: shmlock
    tree: python
    icon: lock-keyhole
    url: https://github.com/fwkrumm/shmlock
    description: >-
      An inter-process lock implementation (named Semaphore) that eliminates the need for passing objects around. It can be utilized across multiple terminals or consoles using the same name identifier, leveraging the multiprocessing.shared_memory module.
  - id: shmqueue
    name: shmqueue
    tree: python
    icon: layers
    url: https://github.com/fwkrumm/shmqueue
    description: >-
      An inter-process FIFO queue backed by a shared-memory ring buffer. Any process can attach by name - no object passing required. Uses shmlock for synchronization and msgpack for serialization, with an optional pickle fallback.
  - id: pymembar
    name: pymembar
    tree: python
    languages: Python / C
    shared: true
    icon: cpu
    url: https://github.com/fwkrumm/pymembar
    description: >-
      A Python library (basically a simple C-wrapper) for memory barriers and synchronization primitives, providing efficient and portable solutions for concurrent programming.
  - id: pookiepy
    name: pookiepy
    tree: python
    icon: radio
    url: https://github.com/fwkrumm/pookiepy
    description: >-
      This package provides a Python framework for building asynchronous gRPC bidirectional-streaming services. Subclass BaseServer and BaseClient, override the hooks you need - the framework handles all gRPC plumbing.
  - id: multi_scale_turing
    name: multi_scale_turing
    tree: python
    icon: fingerprint
    url: https://github.com/fwkrumm/multi_scale_turing
    status: AI GENERATED
    description: >-
      Multi-scale Turing pattern generator in Python; CPU/CUDA, configurable scales, symmetry, frame export.
  - id: image_upscaler
    name: image_upscaler
    tree: python
    icon: image-up
    url: https://github.com/fwkrumm/image_upscaler
    status: AI GENERATED
    description: Standalone image upscaler using Real-ESRGAN.
  - id: 5p
    name: 5p
    tree: cpp
    languages: C++
    icon: network
    url: https://github.com/fwkrumm/5p
    description: >-
      A C++ wrapper for the pcapplusplus library, designed to forward pcap data from pcap(ng) files via UDP/TCP using Boost sockets. This repository employs the conan2 package manager for dependency management.
  - id: doppelkopf
    name: Doppelkopf
    tree: gdscript
    icon: club
    url: https://github.com/fwkrumm/doppelkopf
    status: AI GENERATED, WORK IN PROGRESS
    description: >-
      This repository contains an experimental AI project build for generating a Doppelkopf (traditional german card game) game with Godot4. This is not production-ready and is only updated when I have spare compute tokens. You're welcome to use, modify, or extend it in accordance with the project's license.
edges:
  - { from: python, to: shmlock }
  - { from: python, to: pymembar }
  - { from: python, to: pookiepy }
  - { from: python, to: multi_scale_turing }
  - { from: python, to: image_upscaler }
  - { from: pymembar, to: shmlock }
  - { from: shmlock, to: shmqueue }
  - { from: cpp, to: 5p }
  - { from: cpp, to: pymembar, label: C }
  - { from: gdscript, to: doppelkopf }
---

<meta name="google-site-verification" content="28q6TptZTCtkfN-eohtPd1h-hETr9e9ZHgZwOkTmlio" />

{% include skill-tree.html %}