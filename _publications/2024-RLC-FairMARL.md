---
title: Towards Fair and Equitable Policy Learning in Cooperative Multi-Agent Reinforcement Learning
collection: publications
permalink: /publication/2024-RLC-FairMARL
date: 2024-07-01
venue: 'Coordination and Cooperation for Multi-Agent Reinforcement Learning Methods Workshop @ RLC'
paperurl: ' '
citation: 'Siddique, Umer, Peilang Li, and Yongcan Cao. "Towards Fair and Equitable Policy Learning in Cooperative Multi-Agent Reinforcement Learning." Coordination and Cooperation for Multi-Agent Reinforcement Learning Methods Workshop @ RLC. 2024.'
---

In this paper, we consider the problem of learning independent fair policies in cooperative multi-agent reinforcement learning (MARL). The objective is to design multiple policies simultaneously that can optimize a welfare function for fairness. To achieve this objective, we propose a novel Fairness-Aware multi-agent Proximal Policy Optimization (FAPPO) algorithm, which learns individual policies for all agents separately and optimizes a welfare function to ensure fairness among them, in contrast to optimizing the discounted rewards. The proposed approach is shown to learn fair policies in the independent learning setting, where each agent estimates its local value function. When inter-agent communication is allowed, we further introduce an attention-based variant of FAPPO (AT-FAPPO) by incorporating a self-attention mechanism for inter-agent communication. This variant enables agents to communicate and coordinate their actions, potentially leading to more fair solutions by leveraging the ability to share relevant information during training. To show the effectiveness of the proposed methods, we conduct experiments in two environments and show that our approach outperforms previous methods both in terms of efficiency and equity.