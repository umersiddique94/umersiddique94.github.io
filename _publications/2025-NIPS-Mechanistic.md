---
title: 'Symbolic Policy Distillation for Interpretable Reinforcement Learning'
collection: publications
permalink: /publication/2025-NIPS-Mechanistic
date: 2025-09-01
venue: 'Mechanistic Interpretability workshop @ NeurIPS 2025'
paperurl: ' '
citation: 'Li, Peilang, Umer Siddique and Yongcan Cao. "Symbolic Policy Distillation for Interpretable Reinforcement Learning." Mechanistic Interpretability workshop @ NeurIPS 2025.'
---

Deep reinforcement learning (RL) policies based on deep neural networks (DNNs) achieve strong performance but are often opaque, hindering transparency, interpretability, and safe deployment. Interpretable policy distillation seeks to transfer knowledge from these black-box DNN policies into simpler, human-understandable forms. While prior work has extensively studied performance retention, fidelity to the original DNN policies has remained underexplored, which is crucial for ensuring that the distilled policies faithfully capture the underlying decision-making logic. To address this gap, we propose GM-DAGGER, a novel data aggregation method that employs a geometric mean loss to preserve fidelity without compromising performance. Building on this, we introduce Symbolic Policy Interpretable Distillation (SPID), a framework that distills DNN policies into symbolic analytical equations via symbolic regression. Through extensive experiments across six environments and five deep RL algorithms, we show that SPID achieves superior preservation of both performance and fidelity, while providing interpretable policies that provide mechanistic insights into policy behavior and training dynamics.