---
title: Offline Reinforcement Learning with Failure Under Sparse Reward Environments
collection: publications
permalink: /publication/2024-ICMI-OfflineRL
date: 2024-03-01
venue: '3rd International Conference on Computing and Machine Intelligence (ICMI)'
paperurl: ' '
citation: 'Wu, Mingkang, Umer Siddique, Abhinav Sinha, and Yongcan Cao. "Offline Reinforcement Learning with Failure Under Sparse Reward Environments." 3rd International Conference on Computing and Machine Intelligence (ICMI). 2024.'
---

This paper presents a new reinforcement learning approach that leverages failed experiences in sparse reward environments.  Unlike traditional reinforcement learning methods that rely on successful experiences or expert demonstrations, the proposed approach utilizes failed experiences to guide the policy update during the learning process. The primary objective behind this work is to develop a method that can efficiently utilize failed experiences to guide the search direction as directional cues from successful experiences may be limited in sparse environments. To achieve this objective, we introduce a new objective function that aims to maximize the dissimilarity between the RL agent's actions and actions from failed experiences.
This discrepancy serves as a valuable indicator to guide the agent's exploration. In other words, our method focuses on achieving the desired objectives by leveraging failed experiences to provide a significant opportunity for the agent to refine its policy. We further employ hindsight experience replay (HER) to enhance the directional search by creating and achieving potential subgoals that align with the primary objectives. To assess the effectiveness of our method, we conduct experiments on three sparse reward environments. Our findings demonstrate that the proposed approach significantly enhances the agent's learning efficiency and improves robustness to variations in demonstration quality compared to conventional reinforcement learning techniques.    