---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* MSc at EPFL, Data Science, 2024-2026
  * Top 10 in Europe, Top 35 in the world

* BSc at MIPT, Applied Mathematics and Physics, 2020-2024
  * Top 1 CS University in Russia
  * GPA: 9.1/10, with honors

Work experience
======
* Fall 2024-now
  * Research student at [CVLab](https://www.epfl.ch/labs/cvlab/)
  * Working on realistic Gaussian Splatting object insertion, [pre-print](https://arxiv.org/pdf/2503.06740)
  
* Summer 2023-Fall 2023
  * Visiting Student at [KAUST](https://www.kaust.edu.sa/en/)
  * Supervised by prof. [Peter Wonka](https://peterwonka.net/)
  * Worked on improving of Neural Radiance Fields (NeRF) to better accommodate scenes of various sizes

* Fall 2022-Summer 2023
  * Research Intern at [MIPT](https://cogmodel.mipt.ru/eng)
  * Improved Semantic NeRF and had a [conference paper](https://arxiv.org/abs/2312.08012) as a result of my internship

* Summer 2022-Fall 2022
  * Machine Learning Engineering Intern at [Yandex](https://yandex.com/company)
  * Worked on enhancing ranking algorithms by incorporating information from recent news into Yandex.Search, which processes ~1.6B daily queries

  
Skills
======
* Python, C++
* Math, Linear Algebra, Calculus, Statistics, Physics, Programming, ...
* Machine Learning
  * Computer Vision, Generative Models, Scene Reconstruction
  * torch, torchvision, transformers, diffusers
* Blender

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
<!--   
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
