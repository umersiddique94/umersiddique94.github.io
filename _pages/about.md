---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

As a PhD Researcher in the [Unmanned Systems Lab](https://utsausl.wixsite.com/utsausl) at the University of Texas at San Antonio, I am passionate about advancing the field of artificial intelligence, with a focus on reinforcement learning and autonomous systems. My research interests span multi-agent and multi-objective reinforcement learning, as well as the application of these techniques to control autonomous systems like drones and vehicles. I am dedicated to developing innovative algorithms that enable effective collaboration among multiple agents, balance complex objectives, and solve real-world challenges in areas such as traffic management, disaster response, and environmental monitoring. By bridging the gap between theoretical advancements and practical applications, I aim to contribute meaningful solutions that can positively impact society and further the mission of the USL in advancing unmanned systems technology.

<!-- News
======
<ul>
{% for news in site.data.news %}
  <li><strong>{{ news.date }}:</strong> {{ news.content }}</li>
{% endfor %}
</ul> -->

<ul>
{% for news in site.data.news limit:10 %}
  <li><strong>{{ news.date }}</strong>: {{ news.content }}</li>
{% endfor %}
</ul>
<p><a href="/news/">More News</a></p>

Recent Publications
======
<ul>{% for post in site.publications limit:5 %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
<p><a href="/publications/">More Publications</a></p>