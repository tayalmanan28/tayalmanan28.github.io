---
layout: page
title: Research
permalink: /research/
image: /assets/img/hero_research.png
description: Research Areas
nav: true
nav_order: 3
---

<div class="research-intro" style="text-align: center; margin-bottom: 2rem;">
  <img src="{{ '/assets/img/research.png' | relative_url }}" alt="Research overview" style="width: 90%; height: auto; display: inline-block; border-radius: 8px;">
</div>

<p style="font-size: 1.1rem;">
My research focuses on building <b>trustworthy, safe, and performant AI</b> for autonomous physical systems. I develop principled methods that bring together learning and formal safety guarantees — spanning foundational models for Physical AI, safe offline reinforcement learning, generative policy synthesis, and agentic AI. Below are the key research themes I work on.
</p>

---

<div class="row align-items-center" style="margin-bottom: 2rem;">
  <div class="col-md-7">
    <h2>Foundation Models for Physical AI</h2>
    <p>We work on building safe and reliable foundation models for embodied physical systems. This includes improving the safety and inference-time performance of Vision-Language-Action (VLA) models, safe agentic reasoning for autonomous agents, and bridging large-scale pre-trained models with formal safety constraints for real-world robotic deployment.</p>
  </div>
  <div class="col-md-5" style="text-align: center;">
    <img src="{{ '/assets/img/publication_preview/jarpo.jpg' | relative_url }}" alt="Foundation Models for Physical AI" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
</div>

---

<div class="row align-items-center" style="margin-bottom: 2rem;">
  <div class="col-md-7">
    <h2>Safe and Optimal Control of Autonomous Systems</h2>
    <p>We develop physics-informed machine learning frameworks that co-optimize safety and performance for autonomous systems. By formulating the problem as a state-constrained optimal control problem and approximating the solution via neural networks trained with HJB-inspired losses, we achieve scalable controllers with formal safety guarantees for high-dimensional systems — from ground vehicles to manipulators.</p>
    <p><strong>Key works:</strong>
    <a href="https://tayalmanan28.github.io/piml-soc/">PIML-SOC (ICML 2025)</a> ·
    <a href="https://tayalmanan28.github.io/robust-piml-soc/">Robust PIML-SOC (IJRR)</a> ·
    <a href="https://tayalmanan28.github.io/mad-pinn/">MAD-PINN</a></p>
  </div>
  <div class="col-md-5" style="text-align: center;">
    <img src="{{ '/assets/img/publication_preview/ijrr.gif' | relative_url }}" alt="Safe and Optimal Control" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
</div>

---

<div class="row align-items-center" style="margin-bottom: 2rem;">
  <div class="col-md-7">
    <h2>Verified Neural Control Barrier Functions</h2>
    <p>We develop methods to learn and formally verify Neural Control Barrier Functions (NCBFs) that provide rigorous safety certificates for dynamical systems. Our work addresses stochastic environments, conformal prediction-based verification, and vision-based safety — enabling safe controllers that scale beyond hand-designed barrier functions.</p>
    <p><strong>Key works:</strong>
    <a href="https://arxiv.org/abs/2403.19332">S-NCBF (CDC 2024)</a> ·
    <a href="https://tayalmanan28.github.io/sspl/">SSPL (CDC 2025)</a> ·
    <a href="https://arxiv.org/abs/2503.17395">CP-NCBF</a></p>
  </div>
  <div class="col-md-5" style="text-align: center;">
    <img src="{{ '/assets/img/publication_preview/SNCBF.gif' | relative_url }}" alt="Neural Control Barrier Functions" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
</div>

---

<div class="row align-items-center" style="margin-bottom: 2rem;">
  <div class="col-md-7">
    <h2>Safe Offline Reinforcement Learning</h2>
    <p>We develop frameworks for learning safe policies entirely from offline data, without online interaction. Our methods combine value-based safety propagation, control barrier functions, and generative models (flow matching) to synthesize controllers that achieve near-zero safety violations while maintaining strong task performance — critical for deploying RL in the real world.</p>
    <p><strong>Key works:</strong>
    <a href="https://tayalmanan28.github.io/v-ocbf/">V-OCBF (TMLR)</a> ·
    <a href="https://tau-intelligence.com/EpiFlow/">EpiFlow</a> ·
    <a href="https://arxiv.org/abs/2603.15136">Safe Flow Q-Learning</a></p>
  </div>
  <div class="col-md-5" style="text-align: center;">
    <img src="{{ '/assets/img/publication_preview/v-ocbf.jpg' | relative_url }}" alt="Safe Offline RL" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
</div>

---

<div class="row align-items-center" style="margin-bottom: 2rem;">
  <div class="col-md-7">
    <h2>Collision Cone Control Barrier Functions</h2>
    <p>We introduce a geometric framework for safe navigation based on collision cones and control barrier functions. This line of work provides real-time obstacle avoidance guarantees for UAVs, UGVs, legged robots, and multi-agent systems operating in dynamic, cluttered environments — validated extensively in hardware.</p>
    <p><strong>Key works:</strong>
    <a href="https://tayalmanan28.github.io/CollisionConeCBF/">C3BF (TCST)</a> ·
    <a href="https://tayalmanan28.github.io/C3BF-UAV/">C3BF-UAV (ACC 2024)</a> ·
    <a href="https://tayalmanan28.github.io/C3BF-UGV/">C3BF-UGV (ACC 2024)</a> ·
    <a href="https://tayalmanan28.github.io/PolyC2BF/">PolyC2BF (ECC 2024)</a></p>
  </div>
  <div class="col-md-5" style="text-align: center;">
    <img src="{{ '/assets/img/publication_preview/c3bf.png' | relative_url }}" alt="Collision Cone CBFs" style="width: 100%; height: auto; border-radius: 8px;">
  </div>
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
