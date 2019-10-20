---
title: "Create a Superstar Resume using Latex"
date: "2019-10-12T22:12:03.284Z"
template: "post"
draft: false
slug: "/posts/superstar-resume-using-latex/"
category: "Soft-Skill"
tags:
  - "Resume"
  - "Latex"
description: "Forget about fancy resume styling, with limited knowledge of latex document you can create a killer resume that will help you deliver a good impression to your next employer."
socialImage: "/media/resume_preview.jpg"
---

Originally, [latex document](https://www.latex-project.org/about/) used for medium-to-large technical or scientific document, but it can be used for almost any form of publishing, in this case including a resume.

Around 2 years ago, I started building my resume using latex document, and the result is pretty impressive.
For you who doesn't have enough knowledge on this system you can try to fork my [repository](https://github.com/emanmks/resume) and modify with your own information.

## Convert the tex file to PDF

Using my repository, you can generate PDF by typing:
```bash
make pdf
```
But, it is requires that you have docker engine in your machine.

If you have latex processor in your machine you can use the command below:

```bash
xelatex resume.tex

// or
pdflatex resume.tex
```

**Note:** My resume repository tested in Linux Environment. You'll need to install latex processor in your non-Linux machine that equivalent with xelatex on Linux

I never been this confident with my resume. Building your resume using Latex is not bad at all.

<img src="/media/resume_preview.jpg" alt="Resume Preview" title="A resume preview"/>
