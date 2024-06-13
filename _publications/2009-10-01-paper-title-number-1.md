---
title: Learning fair policies in multi-objective (deep) reinforcement learning with average and discounted rewards
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'Learning fair policies in multi-objective (deep) reinforcement learning with average and discounted rewards'
date: 2020-10-01
venue: 'International Conference on Machine Learning (ICML)'
slidesurl: 'https://slideslive.com/38928455/learning-fair-policies-in-multiobjective-deep-reinforcement-learning-with-average-and-discounted-rewards?ref=recommended'
paperurl: 'https://arxiv.org/abs/2008.07773'
citation: 'Siddique, Umer, Paul Weng, and Matthieu Zimmer. "Learning fair policies in multi-objective (deep) reinforcement learning with average and discounted rewards." International Conference on Machine Learning. PMLR, 2020.'
---

As the operations of autonomous systems generally affect simultaneously several users, it is
crucial that their designs account for fairness considerations. In contrast to standard (deep) reinforcement learning (RL), we investigate the problem of learning a policy that treats its users equitably. In this paper, we formulate this novel RL
problem, in which an objective function, which
encodes a notion of fairness that we formally define, is optimized. For this problem, we provide
a theoretical discussion where we examine the
case of discounted rewards and that of average
rewards. During this analysis, we notably derive
a new result in the standard RL setting, which is
of independent interest: it states a novel bound
on the approximation error with respect to the optimal average reward of that of a policy optimal
for the discounted reward. Since learning with
discounted rewards is generally easier, this discussion further justifies finding a fair policy for the
average reward by learning a fair policy for the
discounted reward. Thus, we describe how several classic deep RL algorithms can be adapted
to our fair optimization problem, and we validate
our approach with extensive experiments in three
different domains.