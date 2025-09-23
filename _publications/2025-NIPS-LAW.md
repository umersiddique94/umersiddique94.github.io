---
title: 'ReCollab: Retrieval-Augmented LLMs for Cooperative Ad-hoc Teammate Modeling'
collection: publications
permalink: /publication/2025-NIPS-LAW
date: 2025-09-01
venue: 'LAW@NeurIPS 2025'
paperurl: ' '
citation: 'Wallace, Conor, Umer Siddique, and Yongcan Cao. "ReCollab: Retrieval-Augmented LLMs for Cooperative Ad-hoc Teammate Modeling." Language, Agent, and World Models for Reasoning and Planning Workshop at NeurIPS 2025.'
---

Ad-hoc teamwork (AHT) requires agents to infer the behavior of previously unseen teammates and adapt their policy accordingly. Conventional approaches often rely on fixed probabilistic models or classifiers, which can be brittle under partial observability and limited interaction. Large language models (LLMs) offer a flexible alternative: by mapping short behavioral traces into high-level hypotheses, they can serve as world models over teammate behavior. We introduce CoLLAB, a language-based framework that classifies partner types using a behavior rubric derived from trajectory features, and extend it to ReCoLLAB, which incorporates retrieval-augmented generation (RAG) to stabilize inference with exemplar trajectories. In the cooperative Overcooked environment, CoLLAB effectively distinguishes teammate types, while ReCoLLAB consistently improves adaptation across layouts, achieving Pareto-optimal trade-offs between classification accuracy and episodic return. These findings demonstrate the potential of LLMs as behavioral world models for AHT and highlight the importance of retrieval grounding in challenging coordination settings.