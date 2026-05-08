---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a final-year PhD candidate in the [Unmanned Systems Lab](https://utsausl.wixsite.com/utsausl) advised by Prof. Yongcan Cao. Before joining UTSA, I completed my MS at the UM–SJTU Joint Institute in Shanghai under the supervision of Dr. Paul Weng, where I began working on fairness in reinforcement learning. My research broadly focuses on fairness, safety, and social welfare optimization in sequential decision-making systems: how can we design agents that not only maximize reward, but also distribute outcomes equitably across individuals, agents, and objectives? Most of my work lies at the intersection of multi-objective and multi-agent reinforcement learning, social welfare functions such as the Generalized Gini Function (GGF), and more recently, alignment methods for large language models, including RLHF, multi-objective DPO, and inference-time alignment. My dissertation, *AI Alignment through Reinforcement Learning: Fairness, Safety, and Social Welfare Optimization*, brings these themes together through both theoretical and applied perspectives. In parallel, I also develop deep reinforcement learning methods for autonomous systems, including drone guidance, multi-agent traffic control, and target enclosing under partial observability, with an emphasis on building methods that remain deployable in real-world dynamics and decision-making systems.

<!-- News
======
<ul>
{% for news in site.data.news %}
  <li><strong>{{ news.date }}:</strong> {{ news.content }}</li>
{% endfor %}
</ul> -->

<ul>
{% for news in site.data.news limit:15 %}
  <li><strong>{{ news.date }}</strong>: {{ news.content }}</li>
{% endfor %}
</ul>
<p><a href="/news/">More News</a></p>

Recent Publications
======
{% assign recent_pubs = site.publications | sort: 'date' | reverse %}
<ul>{% for post in recent_pubs limit:10 %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
<p><a href="/publications/">More Publications</a></p>