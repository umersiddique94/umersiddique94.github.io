---
layout: default
title: "All News"
permalink: /news/
---

<h2>All News</h2>
<ul>
{% for item in site.data.news %}
  <li><strong>{{ item.date }}</strong>: {{ item.content }}</li>
{% endfor %}
</ul>