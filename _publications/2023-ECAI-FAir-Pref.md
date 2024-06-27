---
title: Fair deep reinforcement learning with preferential treatment
collection: publications
permalink: /publication/2023-ECAI-FAir-Pref
date: 2023-06-01
venue: 'European Conference on Artificial Intelligence (ECAI)'
paperurl: 'https://ebooks.iospress.nl/doi/10.3233/FAIA230606'
citation: 'Yu, Guanbao, Umer Siddique, and Paul Weng. "Fair Deep Reinforcement Learning with Preferential Treatment." ECAI. 2023.'
---

Learning fair policies in reinforcement learning (RL) is important when the RL agent may impact many users. We investigate a variant of this problem where equity is still desired, but some users may be entitled to preferential treatment. In this paper, we formalize this more sophisticated fair optimization problem in deep RL using generalized fair social welfare functions (SWF), provide a theoretical discussion to justify our approach, explain how deep RL algorithms can be adapted to tackle it, and empirically validate our propositions on several domains. Our contributions are both theoretical and algorithmic, notably: (1) We obtain a general bound on the suboptimality gap in terms of SWF-optimality using average reward of a policy SWF-optimal for the discounted reward, which notably justifies using standard deep RL algorithms, even for the average reward; (2) Our algorithmic innovations include a state-augmented DQN-based method for learning either deterministic or stochastic policies, which also applies to the usual fair optimization setting without any preferential treatment
[Download paper here](https://ebooks.iospress.nl/doi/10.3233/FAIA230606)