---
layout: default
title: My GitHub Repositories
---

<meta name="google-site-verification" content="28q6TptZTCtkfN-eohtPd1h-hETr9e9ZHgZwOkTmlio" />

# GitHub Repositories

Your feedback is highly appreciated.

## Python

- [shmlock](https://github.com/fwkrumm/shmlock)
An inter-process lock implementation (named Semaphore) that eliminates the need for passing objects around. It can be utilized across multiple terminals or consoles using the same name identifier, leveraging the multiprocessing.shared_memory module.

- [pymembar](https://github.com/fwkrumm/pymembar)
A Python library (basically a simple C-wrapper) for memory barriers and synchronization primitives, providing efficient and portable solutions for concurrent programming.

- [shmqueue](https://github.com/fwkrumm/shmqueue)
An inter-process FIFO queue backed by a shared-memory ring buffer. Any process can attach by name — no object passing required. Uses shmlock for synchronization and msgpack for serialization, with an optional pickle fallback.

## C++

- [5p](https://github.com/fwkrumm/5p)
A straightforward wrapper for the pcapplusplus library, designed to forward pcap data from pcap(ng) files via UDP/TCP using Boost sockets. This repository employs the conan2 package manager for dependency management.
