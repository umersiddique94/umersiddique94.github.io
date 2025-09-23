---
title: 'Autonomous Target-Enclosing Guidance via Deep Reinforcement Learning'
collection: publications
permalink: /publication/2025-AIAA-TargetEnclose
date: 2025-08-01
venue: 'AIAA SCITECH 2026'
paperurl: ' '
citation: 'Siddique, Umer, Praveen Kumar Ranjan, Abhinav Sinha and Yongcan Cao. "Autonomous Target-Enclosing Guidance via Deep Reinforcement Learning." AIAA SCITECH 2026.'
---

This paper proposes a deep reinforcement learning (RL) based solution for the target enclosing problem using a non-holonomic unmanned aerial vehicle (UAV) operating under limited sensing and control lag. Instead of using the mathematical or analytical controllers, our approach enables an end-to-end learning-based agent to autonomously interact with the environment and develop enclosing strategies that ensure safety and containment around a stationary target. A carefully designed reward function guides the learning agent by combining three reward components: a quadratic distance-based reward penalizing deviation from the desired enclosing radius, a state-dependent velocity reward that promotes stability during radial transitions, and an acceleration penalty to enforce a smooth trajectory. Thus, the agent learns to trade off between maintaining an optimal enclosing geometry and mitigating aggressive control responses, especially in the presence of autopilot lag. Our results demonstrate that the learned policy through our carefully designed reward function achieves reliable target enclosing performance while matching or outperforming the analytical controllers.