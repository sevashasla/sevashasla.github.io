### Education
Sep 2020 &mdash; now\
**Bachelor of Science**, [Moscow Institute of Physics and Technology](https://mipt.ru/en/), Moscow, Russia

### Work Experience
Jul 2023 &mdash; Oct 2023\
**Visiting Student**, [King Abdullah University of Science and Technology](https://www.kaust.edu.sa/en/), Thuwal, Saudi Arabia\
I worked on enhancing the performance of NeRF across scenes of varying lengths, guided by [Peter Wonka](https://peterwonka.net/). My approach was inspired by [LocalRF](https://localrf.github.io/), so I divided the scene into several parts and trained a NeRF model on each segment independently. I development of a model that surpassed LocalRF in performance on long scenes from the [F2-NeRF](https://totoro97.github.io/projects/f2-nerf/) dataset, achieving an average improvement of **1 PSNR**. Additionally, it matched LocalRF's quality on their 'Static Hikes' dataset. Notably, the training time for my model was **4 times less** than that of LocalRF.

Nov 2022 &mdash; Jun 2023\
**Research Intern**, [Center for Cognitive Modeling MIPT](https://cogmodel.mipt.ru/eng), Moscow, Russia\
I enhanced [Semantic NeRF](https://github.com/Harry-Zhi/semantic_nerf) under the supervision of Prof. [Dmitry Yudin](https://cogmodel.mipt.ru/yudin-eng). I combined ideas from [Instant-NGP](https://github.com/NVlabs/instant-ngp) into Semantic NeRF's architecture. I also added uncertainty estimation for 3D reconstruction and semantic maps prediction. I have a [pre-print](https://arxiv.org/abs/2312.08012) as a result of my internship

Jul 2022  &mdash; Oct 2022\
**Machine Learning Engineering Intern**, [Yandex](https://yandex.com/company), Moscow, Russia\
I worked in Quality Search Team and my project was to use information from news to improve ranking algorithms in Yandex.Search, which processes >1.5B daily queries.

### Papers

**uSF: Learning Neural Semantic Field with Uncertainty**\
_**Vsevolod Skorokhodov**_, Darya Drozdova, Dmitry Yudin\
**Abstract:** Recently, there has been an increased interest in NeRF meth-
ods which reconstruct differentiable representation of three-dimensional
scenes. One of the main limitations of such methods is their inability to
assess the confidence of the model in its predictions. In this paper, we
propose a new neural network model for the formation of extended vector
representations, called uSF, which allows the model to predict not only
color and semantic label of each point, but also estimate the correspond-
ing values of uncertainty. We show that with a small number of images
available for training, a model quantifying uncertainty performs better
than a model without such functionality

[arxiv](https://arxiv.org/abs/2312.08012) [code](https://github.com/sevashasla/usf)


### Projects
**picture_in_terminal**\
A simple yet interesting project allows to view images and even videos in terminal! Written in python
[code](https://github.com/sevashasla/picture_in_terminal)

**visualization of camera**\
A simple python script which allows to watch camera poses using plotly [code](https://gist.github.com/sevashasla/60fa7eb6e7ae489fd15c8d191aa47c86)
