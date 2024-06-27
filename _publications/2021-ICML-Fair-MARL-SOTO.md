---
title: Learning fair policies in decentralized cooperative multi-agent reinforcement learning
collection: publications
permalink: /publication/2021-ICML-Fair-MARL-SOTO
date: 2021-06-01
venue: 'International Conference on Machine Learning (ICML)'
paperurl: 'https://arxiv.org/pdf/2012.09421'
citation: 'Zimmer, Matthieu, et al. "Learning fair policies in decentralized cooperative multi-agent reinforcement learning." International Conference on Machine Learning. PMLR, 2021.'
---

In this paper, we consider the problem of learning fair policies in (deep) cooperative multi-agent reinforcement learning (MARL). We formalize it in a principled way as the problem of optimizing a welfare function that explicitly encodes two important aspects of fairness: efficiency and equity. We provide a theoretical analysis of the convergence of policy gradient for this problem. As a solution method, we propose a novel neural network architecture, which is composed of two sub-networks specifically designed for taking into account these two aspects of fairness. In experiments, we demonstrate the importance of the two sub-networks for fair optimization. Our overall approach is general as it can accommodate any (sub)differentiable welfare function. Therefore, it is compatible with various notions of fairness that have been proposed in the literature (e.g., lexicographic maximin, generalized Gini social welfare function, proportional fairness). Our method is generic and can be implemented in various MARL settings: centralized training and decentralized execution, or fully decentralized. We evaluate our method on a set of fair cooperative MARL benchmarks, where we show that it outperforms the state-of-the-art methods in terms of fairness and performance. [Download paper here](https://arxiv.org/pdf/2012.09421)