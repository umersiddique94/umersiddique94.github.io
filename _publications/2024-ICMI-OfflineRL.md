---
title: Offline Reinforcement Learning with Failure Under Sparse Reward Environments
collection: publications
permalink: /publication/2024-ICMI-OfflineRL
date: 2024-03-01
venue: '3rd International Conference on Computing and Machine Intelligence (ICMI)'
paperurl: 'https://arc.aiaa.org/doi/10.2514/6.2024-0957'
citation: 'Siddique, Umer, Abhinav Sinha, and Yongcan Cao. "On Deep Reinforcement Learning for Target Capture Autonomous Guidance." AIAA SCITECH 2024 Forum. 2024.'
---

This paper explores the prospects of motion planning of autonomous vehicles using deep reinforcement learning (DRL). We are particularly interested in a goal-directed setting where the need is to design an optimal guidance strategy for a pursuing autonomous vehicle (the pursuer, which is also the DRL agent) to capture an adversary (the target). To this end, we first formulate the target capture guidance problem as a Markov Decision Process (MDP) wherein the kinematics of relative motion between the vehicles constitute the MDP, and the pursuer's lateral acceleration (chosen as its steering control to account for turn constraints) is the action of DRL agent. We show that a multifaceted reward function motivated by the collision conditions is sufficient and effective in designing the reinforcement learning action that enables the pursuer to capture the target regardless of the latter's motion. We then empirically evaluate the performance of the trained agent in various target capture scenarios.
[Download paper here](https://arc.aiaa.org/doi/10.2514/6.2024-0957)