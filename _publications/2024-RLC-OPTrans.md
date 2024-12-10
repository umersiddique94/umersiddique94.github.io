---
title: 'Opponent Transformer: Modeling Opponent Policies as a Sequence Problem'
collection: publications
permalink: /publication/2024-RLC-OPTrans
date: 2024-07-01
venue: 'Coordination and Cooperation for Multi-Agent Reinforcement Learning Methods Workshop @ RLC'
paperurl: ' '
citation: 'Wallace, Conor, Umer Siddique, and Yongcan Cao. "Opponent Transformer: Modeling Opponent Policies as a Sequence Problem." Coordination and Cooperation for Multi-Agent Reinforcement Learning Methods Workshop @ RLC. 2024.'
---

The ability of an agent to understand the intentions of others in a multi-agent system, also called opponent modeling, is critical for the design of effective local control policies. One main challenge is the unavailability of other agents' episodic trajectories at execution. To address the challenge, we propose a new approach that explicitly models the episodic trajectories of others. In particular, the proposed approach is to cast the opponent modeling problem as a sequence modeling problem via conditioning a transformer model on the sequence of the agent's local trajectory and predicting each opponent agent's trajectory. To evaluate the effectiveness of the proposed approach, we conduct experiments using a set of multi-agent environments that capture both cooperative and competitive payoff structures. The results show that the proposed method can provide better opponent modeling capabilities while achieving competitive or superior episodic returns. [Download paper here](https://openreview.net/pdf?id=qzOnyQiCAc)