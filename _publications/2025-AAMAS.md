---
title: 'Towards Fair and Efficient Policy Learning in Cooperative Multi-Agent Reinforcement Learning'
collection: publications
permalink: /publication/2025-AAMAS
date: 2024-12-20
venue: 'AAMAS 2025 (Extended Abstract)'
paperurl: ' '
citation: 'Siddique, Umer, Peilang Li, and Yongcan Cao. "Towards Fair and Efficient Policy Learning in Cooperative Multi-Agent Reinforcement Learning." AAMAS 2025 (Extended Abstract).'
---

In this paper, we consider the problem of learning independent fair policies in cooperative multi-agent reinforcement learning (MARL). Our objective is to design multiple policies simultaneously that optimize a welfare function for fairness. To achieve this objective, we propose a novel Fairness-Aware multi-agent Proximal Policy Optimization (FAPPO) algorithm, which enables each agent to independently learn its policy while optimizing a welfare function. Unlike standard approaches that focus on maximizing a performance metric such as rewards, FAPPO focuses on fairness in an independent learning setting, where each agent estimates its local value function. When inter-agent communication is allowed, we further introduce an attention-based variant of FAPPO (AT-FAPPO), which incorporates a self-attention mechanism to facilitate communication and coordination among agents. This variant allows agents to share relevant information during training, leading to more fair outcomes. To show the effectiveness of the proposed methods, we conduct experiments in various environments and show that our approach outperforms existing methods both in terms of efficiency and equity.