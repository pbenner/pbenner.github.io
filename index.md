---
use_math: true
---

I'm a researcher in statistics and machine learning for materials science and bioinformatics. See our group [website](https://bamescience.github.io/) for more information!

## Selected Research Projects

### Fragmentation site prediction for non-targeted metabolomics using graph neural networks ([Y. Nowatzky](https://bamescience.github.io/team/yannek), [T. Muth](https://bamescience.github.io/team/thilo/))

The potential of non-targeted metabolomics to uncover new biological insights, identify biomarkers or monitor clinical disease progression cannot be emphasized enough. However, spectral reference data is incomplete, and most compound mass spectra in non-targeted metabolomics experiments cannot be annotated with spectral search alone. At the same time, the identification and classification of unknown compounds are far from trivial. One reason is the current lack of understanding about how new molecules will fragment when subjected to tandem mass spectrometry (MS/MS). Existing in silico fragmentation methods, such as MetFrag [1] and CFM-ID [2], imitate the fragmentation process but their accuracy is limited due to the way they integrate and engineer molecular features. We investigate the ability of graph neural networks (GNNs) to learn and recognize relevant structural groups associated with bond cleavage during MS/MS.

##### References
1. Ruttkies, Christoph, et al. "MetFrag relaunched: incorporating strategies beyond in silico fragmentation." Journal of cheminformatics 8.1 (2016): 1-16.
1. Wang, Fei, et al. "CFM-ID 4.0: more accurate ESIMS/MS spectral prediction and compound identification." Analytical chemistry 93.34 (2021): 11692- 11700.
1. SE Stein. ‘Mass Spectral Database’. In: National Institute of Standards and Technology (NIST) (2017)
1. Mingxun Wang, et al. "Sharing and community curation of mass spectrometry data with Global Natural Products Social Molecular Networking." Nature biotechnology 34, no. 8 (2016): 828.

### Crystal Synthesizability ([S. Amariamir](https://bamescience.github.io/team/sasan/), [J. George](https://jageo.github.io/))

High-throughput material simulations are an integral part of modern materials science. However, there is no straightforward way to recognize synthesizable materials before feeding them to simulation pipelines. The common heuristics for distinguishing stable crystals, such as the Pauling Rules, have been shown to be outdated [1]. Besides stability, reaction kinetics and technological limitations also affect synthesizability. In this work, we built a machine learning model that predicts the synthesizability of a given crystal. This can be formulated as a classification problem with positive (experimental) data, and unlabeled (theoretical) data. We take an iterative Positive and Unlabeled (PU) learning approach to build and train our model. Two deep learning classifiers are used, the SchNetPack [2] and ALIGNN [3]. We combine their power via co-training [4] to increase prediction reliability. Our work has multiple important applications, for example, filtering structural predictions of high-throughput simulations for synthesizability.

##### References
1. J. George, D. Waroquiers, D. Di Stefano, G. Petretto, G. Rignanese, and G. Hautier, “The Limited Predictive Power of the Pauling Rules,” Angew. Chem., vol. 132, no. 19, pp. 7639–7645,May 2020.
1. K. T. Schütt et al. “SchNetPack: A Deep Learning Toolbox For Atomistic Systems,” J. Chem. Theory Comput., vol. 15, no. 1, pp. 448–455, Jan. 2019.
1. Choudhary, K., DeCost, B. Atomistic Line Graph Neural Network for improved materials property predictions. npj Comput Mater 7, (2021).
1. Katz, G.; Caragea, C.; Shabtai, A. Vertical Ensemble Co-Training for Text Classification. ACM Trans. Intell. Syst. Technol. 2018, 9, 21:1–21:23”

### Invertible Neural Networks for Small Angle Scattering ([S. Laskina](https://bamescience.github.io/team/sofya), [B. Pauw](https://lookingatnothing.com))

Scattering techniques, such as small-angle X-ray or neutron scattering, provide information on the fine structure of materials by measuring the intensity of waves scattered via an interference process. While this interference process can be accurately described in mathematics as a Fourier transform of the probed electron density, not all the information contained therein is recorded in the measurement process. The information loss is of such a magnitude that the retrieval of practically-relevant structural information falls under the class of inverse problems. For analyzing single datasets, a bespoken model can usually be constructed. For processing larger quantities of data, however, such as collected at well-functioning laboratory instruments or large facilities, an initial clustering and indication of the class and size of scatterers involved would already be a good step forwards. A reliable, universal clustering method does not exist as yet. We attempt to address this problem using invertible neural networks trained on theoretical scatterers with their analytical SAS intensities. Somewhat surprisingly, our method is able to reliably identify size and shape parameters. This shows that invertible neural networks may have large potential to help interpret small-angle scattering measurements. Ideally, we hope that this work is a first step towards a fully automated SAS data processing workflow.

### Tissue-Specific Regulatory Information within Enhancer DNA Sequences ([M. Vingron](https://www.molgen.mpg.de/3897383/martin-vingron))

Recent efforts to measure epigenetic marks across a wide variety of different cell types and tissues provide insights into the cell type-specific regulatory landscape. We use this data to study if there exists a correlate of epigenetic signals in the DNA sequence of enhancers and explore with computational methods to what degree such sequence patterns can be used to predict cell type-specific regulatory activity. By constructing classifiers that predict in which tissues enhancers are active, we are able to identify sequence features that might be recognized by the cell in order to regulate gene expression. While classification performances vary greatly between tissues, we show examples where our classifiers correctly predict tissue specific regulation from sequence alone. We also show that many of the informative patterns indeed harbor transcription factor footprints.

1. P. Benner, and M. Vingron. *Quantifying the Tissue-Specific Regulatory Information within Enhancer and Promoter DNA Sequences.* NAR Genomics and Bioinformatics 3.4 (2021)
1. P. Benner, and M. Vingron. *ModHMM: A modular supra-Bayesian genome segmentation method.* Journal of Computational Biology 27.4 (2020): 442-457.

### Algorithms for Computing Regularization Paths

High-dimensional statistics deals with statistical inference when the number of parameters or features $p$ exceeds the number of observations $n$ (i.e. $p \gg n$). In this case, the parameter space must be constrained either by regularization or by selecting a small subset of $m \le n$ features. Feature selection through $\ell_1$-regularization combines the benefits of both approaches and has proven to yield good results in practice. However, the functional relation between the regularization strength $\lambda$ and the number of selected features $m$ is difficult to determine. Hence, parameters are typically estimated for all possible regularization strengths $\lambda$. These so-called regularization paths can be expensive to compute and most solutions may not even be of interest to the problem at hand. As an alternative, an algorithm is proposed that determines the $\ell_1$-regularization strength $\lambda$ iteratively for a fixed $m$. The algorithm can be used to compute leapfrog regularization paths by subsequently increasing $m$.

1. P. Benner. *Computing leapfrog regularization paths with applications to large-scale k-mer logistic regression.* Journal of Computational Biology 28.6 (2021): 560-569.

## Lectures

### Machine Learning in Bioinformatics - FU Berlin

[Lecture](https://www.fu-berlin.de/vv/en/lv/737408?m=428903&pc=575084&sm=682080) at the Mathematics and Computer Science Department of [Free University of Berlin](https://www.mi.fu-berlin.de/) together with [H. Richard](http://www.lgm.upmc.fr/hrichard/)

Machine Learning Models:
- From Linear Regression to Kernel Regression [[Slides]](data/mlb-slides/08_-_kernel_regression.pdf)
- Support Vector Machines [[Slides]](data/mlb-slides/09_-_svm.pdf)
- From Linear and Logistic Regression to Artificial Neural Networks [[Slides]](data/mlb-slides/10_-_ann.pdf)
- Neural Network Architectures [[Slides]](data/mlb-slides/11_-_ann_architectures.pdf)
- Graph Neural Networks [[Slides]](data/mlb-slides/14_-_gnn.pdf)
- Invertible Neural Networks [[Slides]](data/mlb-slides/15_-_inn.pdf)

Feature and Model Selection, Bias-Variance Tradeoff, Regularization, Model Complexity, Double Descent:
- Model Selection [[Slides]](data/mlb-slides/12_-_model_selection.pdf)
- Feature Selection [[Slides]](data/mlb-slides/13_-_feature_selection.pdf)

Model Evaluation and Explainability:
- Benchmarking [[Slides]](data/mlb-slides/02_-_benchmarking.pdf)
- Explainable AI [[Slides]](data/mlb-slides/16_-_xai.pdf)

Statistics background:
- Decision Making under Uncertainty [[Slides]](data/mlb-slides/17_-_decision_making.pdf)

## Software projects

### Numerics, Statistics, ML

- Leapfrog regularization for pytorch
  [[Github]](https://github.com/pbenner/pyleapfrog)
- Numerical optimization, statistical estimation, and automatic differentiation library
  [[Github]](https://github.com/pbenner/autodiff)
- Variational inference on factor graphs
  [[Github]](https://github.com/pbenner/variational-fg)
- GNU-R Gaussian process regression library
  [[Github]](https://github.com/pbenner/gp.regression)
- High-dimensional logistic regression with k-mers
  [[Github]](https://github.com/pbenner/kmerLr)
- Double descent phenomena
  [[Github]](https://github.com/pbenner/double-descent)
- Compute performance measures of classification results
  [[Github]](https://github.com/pbenner/classifierPerformance)
- Active learning library
  [[Github]](https://github.com/pbenner/adaptive-sampling)

### Bioinformatics

- Bioinformatics library
  [[Github]](https://github.com/pbenner/gonetics)
- Supra-Bayesian genome segmentation method
  [[Github]](https://github.com/pbenner/modhmm)
- Statistical analysis of whole genome sequencing data
  [[Github]](https://github.com/pbenner/ngstat)
- Java library for reading bigWig files (port from gonetics)
  [[Github]](https://github.com/pbenner/jigwig)
- Identification of transcription factor binding motifs from ChIP-seq experiments. Estimation and computation of geometric means and medians of phylogenetic trees
  [[Github]](https://github.com/pbenner/tfbayes)
- Prolog implementation of all steps involved in translation and transcription of the genetic code. The program allows to explore alternative genetic codes by manipulating individual components of the transcription and translation mechanisms
  [[Github]](https://github.com/pbenner/xenocode)

### Other

- Implementation of basic cryptographic methods
  [[Github]](https://github.com/pbenner/gocrypt)
- Go threadpool library that allows nested queuing
  [[Github]](https://github.com/pbenner/threadpool)

## Publications

- A. Naik, C. Ertural, N. Dhamrait, P, Benner, J. George. *A Quantum-Chemical Bonding Database for Solid-State Materials.* arXiv preprint arXiv:2304.02726 (2023).
- B. R. Pauw, S. Laskina, A. Naik, G. J. Smales, J. George, I. Breßler, P. Benner. *``Ultima Ratio'': Simulating wide-range X-ray scattering and diffraction.* arXiv preprint arXiv:2303.13435 (2023)
- Y. Nowatzky, P. Benner, K. Reinert, T. Muth. *Mistle: bringing spectral library predictions to metaproteomics with an efficient search index.* bioRxiv (2022)
- P. Benner, and M. Vingron. *Quantifying the Tissue-Specific Regulatory Information within Enhancer and Promoter DNA Sequences.* NAR Genomics and Bioinformatics 3.4 (2021)
- P. Benner. *Computing leapfrog regularization paths with applications to large-scale k-mer logistic regression.* Journal of Computational Biology 28.6 (2021): 560-569.
- P. Benner, and M. Vingron. *ModHMM: A modular supra-Bayesian genome segmentation method.* Journal of Computational Biology 27.4 (2020): 442-457.
- T. Zehnder, P. Benner, and M. Vingron. *Predicting enhancers in mammalian genomes using supervised hidden Markov models.* BMC Bioinformatics 20(1):157, 2019
- A. Ramisch, V. Heinrich, ..., P. Benner, ... *CRUP: A comprehensive framework to predict condition-specific regulatory units.* Genome Biol 20, 227 (2019) doi:10.1186/s13059-019-1860-7
- S. Schöne, M. Bothe, E. Einfeldt, M. Borschiwer and P. Benner, M. Vingron, Martin, M. Thomas-Chollier, and S. Meijsing. *Synthetic STARR-seq reveals how DNA shape and sequence modulate transcriptional output and noise*. PLoS Genetics, 14(11):e1007793, 2018
- P. Benner, M. Bacák, and P.-Y. Bourguignon. *Point estimates in phylogenetic reconstructions*. Bioinformatics, 30(17):i534-i540, 2014.
- P. Benner and S. Poppe. *Stochastische Prozesse und Bayessches Schätzen*.
In Nicole J. Saam and Norman Braun, editors, Handbuch Modellbildung und Simulation in den Sozialwissenschaften, Springer, 2014.
- S. Poppe, P. Benner, and T. Elze. *A predictive approach to nonparametric inference for adaptive sequential sampling of psychophysical experiments*. Journal of Mathematical Psychology, 56(3):179–195, 2012.
- R. Stoop, S. Martignoli, P. Benner, R. Stoop, and Y. Uwate. *Shrimps: Occurrence, scaling and relevance*. International Journal of Bifurcation and Chaos, 22(10), 2012.
- R. Stoop, P. Benner, and Y. Uwate. *Real-world existence and origins of global shrimp organization on spirals*. Physical Review Letters, 105(7):074102, 2010.

## Statistics Resources

- Research Articles by E. T. Jaynes [[Link]](https://bayes.wustl.edu/etj/node1.html)
- Introduction to Statistical Learning with Applications in GNU-R/Python [[Link]](https://www.statlearning.com/)
- Christian Robert's Blog [[Link]](https://xianblog.wordpress.com/)
- Interpretable Machine Learning [[Link]](https://christophm.github.io/interpretable-ml-book/)
- Statistical Rethinking, Lecture Series by Richard McElreath [[Link]](https://www.youtube.com/watch?v=FdnMWdICdRs&list=PLDcUM9US4XdPz-KxHM4XHt7uUVGWWVSus)
