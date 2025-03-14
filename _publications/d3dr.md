---
title: "D3DR: Lighting-Aware Object Insertion in Gaussian Splatting"
collection: publications
category: manuscripts
permalink: /publication/d3dr
excerpt: "**tldr** Insertion of 3DGS objects into 3DGS scenes with objects lighting correction <br> <img src='/images/d3dr_method_pipeline.png' width=300>"
date: 2025-03-09
venue: 'arXiv preprint'
#slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2503.06740'
citation: '<b>Vsevolod Skorokhodov</b>, Nikita Durasov, Pascal Fua. &quot;D3DR: Lighting-Aware Object Insertion in Gaussian Splatting&quot; <i>ArXiv preprint</i>.'
---

**Abstract**: Gaussian Splatting has become a popular technique for various 3D Computer Vision tasks, including novel view synthesis, scene reconstruction, and dynamic scene rendering. However, the challenge of natural-looking object insertion, where the object's appearance seamlessly matches the scene, remains unsolved. In this work, we propose a method, dubbed D3DR, for inserting a 3DGS-parametrized object into 3DGS scenes while correcting its lighting, shadows, and other visual artifacts to ensure consistency, a problem that has not been successfully addressed before. We leverage advances in diffusion models, which, trained on real-world data, implicitly understand correct scene lighting. After inserting the object, we optimize a diffusion-based Delta Denoising Score (DDS)-inspired objective to adjust its 3D Gaussian parameters for proper lighting correction. Utilizing diffusion model personalization techniques to improve optimization quality, our approach ensures seamless object insertion and natural appearance. Finally, we demonstrate the method's effectiveness by comparing it to existing approaches, achieving 0.5 PSNR and 0.15 SSIM improvements in relighting quality.

<img src='/images/d3dr_method_pipeline.png'>
