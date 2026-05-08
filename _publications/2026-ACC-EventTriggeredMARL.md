---
title: 'Adaptive Event-Triggered Policy Gradient for Multi-Agent Reinforcement Learning'
collection: publications
permalink: /publication/2026-ACC-EventTriggeredMARL
date: 2026-01-15
published: true
venue: 'ACC 2026'
paperurl: ' '
citation: 'Siddique, Umer, et al. "Adaptive Event-Triggered Policy Gradient for Multi-Agent Reinforcement Learning." ACC 2026.'
---

Conventional multi-agent reinforcement learning (MARL) methods rely on time-triggered execution, where agents sample and communicate actions at fixed intervals. This approach is often computationally expensive and communication-intensive. To address this limitation, we propose ET-MAPG (Event-Triggered Multi-Agent Policy Gradient reinforcement learning), a framework that jointly learns an agent's control policy and its event-triggering policy. Unlike prior work that decouples these mechanisms, ET-MAPG integrates them into a unified learning process, enabling agents to learn not only what action to take but also when to execute it. For scenarios with inter-agent communication, we introduce AET-MAPG, an attention-based variant that leverages a self-attention mechanism to learn selective communication patterns. AET-MAPG empowers agents to determine not only when to trigger an action but also with whom to communicate and what information to exchange, thereby optimizing coordination. Both methods can be integrated with any policy gradient MARL algorithm. Extensive experiments across diverse MARL benchmarks demonstrate that our approaches achieve performance comparable to state-of-the-art, time-triggered baselines while significantly reducing both computational load and communication overhead.
