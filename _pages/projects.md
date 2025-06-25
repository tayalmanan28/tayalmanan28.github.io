---
layout: page
title: Research
permalink: /research/
image: /assets/img/hero_research.png
description: Research Projects.
nav: true
nav_order: 3
display_categories: [Ongoing Projects, Completed Projects]
horizontal: false
---

<h4> I work at the intersection of Control, Optimization and Machine Learning, with a focus on safety enforced decision-making in dynamical systems. Developing methods that integrate learning with formal guarantees to ensure constraint satisfaction and robust performance in uncertain, data-driven environments. </h4>

<!-- Inserted a figure from /assets/img/research.png -->
<div class="hero-image" style="text-align: center;">
  <img src="{{ '/assets/img/research.png' | relative_url }}" alt="Research image" style="width: 90%; height: auto; display: inline-block;">
</div>

---

<h1 style="color: darkred;">Research Projects</h1>
<br>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

---

<br>
<h1 style="color: darkred;">Invited Talks</h1>
<br>
<ul class="invited-talks" style="list-style: none; padding-left: 0;">
  {% for talk in site.data.talks %}
    <li style="margin-bottom: 1rem;">
      <span style="font-weight: bold;">{{ talk.month }} {{ talk.year }}</span>
      <em> “{{ talk.title }}” </em>,
      {% if talk.venue_link %}
        <a href="{{ talk.venue_link }}" target="_blank">{{ talk.venue }}</a>
      {% else %}
        {{ talk.venue }}
      {% endif %}
      {% if talk.talk_link %}
        &nbsp;(<a href="{{ talk.talk_link }}" target="_blank">Talk</a>)
      {% endif %}
      {% if talk.slides %}
        &nbsp;(<a href="{{ talk.slides }}" target="_blank">Slides</a>)
      {% endif %}
    </li>
  {% endfor %}
</ul>

---

<br>
<h1 style="color: darkred;">Research Mentoring</h1>
<p> I have had the fortune of working with and mentoring some fantastic student collaborators. </p>

{% assign phd_students = site.data.mentorship | where: "level", "phd" %}
{% assign masters_students = site.data.mentorship | where: "level", "masters" %}
{% assign bachelors_students = site.data.mentorship | where: "level", "bachelors" %}

{% if phd_students.size > 0 %}

<h3 style="color: darkred;">Ph.D. Students</h3>
<ul class="mentorship-list" style="list-style: none; padding-left: 0;">
  {% for student in phd_students %}
    <li style="margin-bottom: 1rem;">
      {% if student.website %}
        <strong><a href="{{ student.website }}" target="_blank">{{ student.name }}</a></strong>
      {% else %}
        <strong>{{ student.name }}</strong>
      {% endif %}
      — <em>{{ student.project }}</em>,
      {% if student.institution_link %}
        <a href="{{ student.institution_link }}" target="_blank">{{ student.institution }}</a>
      {% else %}
        {{ student.institution }}
      {% endif %}
      ({{ student.duration }})
    </li>
  {% endfor %}
</ul>
{% endif %}

{% if masters_students.size > 0 %}

<h3 style="color: darkred;">Master’s Students</h3>
<ul class="mentorship-list" style="list-style: none; padding-left: 0;">
  {% for student in masters_students %}
    <li style="margin-bottom: 1rem;">
      {% if student.website %}
        <strong><a href="{{ student.website }}" target="_blank">{{ student.name }}</a></strong>
      {% else %}
        <strong>{{ student.name }}</strong>
      {% endif %}
      — <em>{{ student.project }}</em>,
      {% if student.institution_link %}
        <a href="{{ student.institution_link }}" target="_blank">{{ student.institution }}</a>
      {% else %}
        {{ student.institution }}
      {% endif %}
      ({{ student.duration }})
    </li>
  {% endfor %}
</ul>
{% endif %}

{% if bachelors_students.size > 0 %}

<h3 style="color: darkred;">Bachelor’s Students</h3>
<ul class="mentorship-list" style="list-style: none; padding-left: 0;">
  {% for student in bachelors_students %}
    <li style="margin-bottom: 1rem;">
      {% if student.website %}
        <strong><a href="{{ student.website }}" target="_blank">{{ student.name }}</a></strong>
      {% else %}
        <strong>{{ student.name }}</strong>
      {% endif %}
      — <em>{{ student.project }}</em>,
      {% if student.institution_link %}
        <a href="{{ student.institution_link }}" target="_blank">{{ student.institution }}</a>
      {% else %}
        {{ student.institution }}
      {% endif %}
      ({{ student.duration }})
    </li>
  {% endfor %}
</ul>
{% endif %}

---

<br>
<div class="projects-footer">
  <p>For more information on my research, please visit my <a href="/publications/">Publications</a> page.</p>
  <p>Feel free to reach out if you are interested in collaborating or have any questions about my work.</p>
</div>
