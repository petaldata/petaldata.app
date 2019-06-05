---
layout: post
title:  "Analyzing Stripe data with Python+Pandas Dataframes"
author: "Derek Haynes"
---

<img src="/images/blog/stripe_pandas.png"/>

As the authoritive source on how your business is performing, your Stripe account contains a wealth of data just waiting for analysis. In this post, I'll show how to generate common subscription revenue metrics like MRR, Month-to-date revenue vs. last month, churned revenue, and new revenue with [Pandas](http://pandas.pydata.org/), _the_ Python Data Analysis Library.

## Why Python+Pandas?

Stripe offers its own tool for querying data with SQL, [Stripe Sigma](https://stripe.com/sigma). It's a great tool, but I've found that analytics queries can be awfuly complex to write in SQL. SQL's sweet spot is CRUD applications, not heavy analytics queries. These analytic queries are where Pandas excels in both cleanliness and speed.

## Installing Jupyter Notebooks + Pandas

If you are new to Python, I suggest [installing Jupyter Notebooks via Anaconda](https://www.anaconda.com/distribution/). This will install Pandas as well. Jupyter Notebooks gives you an interactive way to explore your data and share your analysis.

## Export Invoices

First, we need to export our invoices from Stripe into a [Pandas Dataframe](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html). A Dataframe is like an Excel sheet in code. We can do this with just a couple of lines using the [PetalData](https://petaldata.app) Python package (`pip install petaldata`):

<script src="https://gist.github.com/itsderek23/bb2b613d200b8a10ead195d361b6208a.js"></script>

See [PetalData's Stripe Docs](https://petaldata.app/datasets/stripe/) for the full list of dataset operations. Note that downloading thousands of invoices from Stripe can take 30 minutes or more.

## Calculating Stripe MRR

With our invoices dataframe loaded at `invoices.df`, we can now calculate MRR in dollars over the entire invoice timerange:

<script src="https://gist.github.com/itsderek23/31e18223849d71043e7580321b3031da.js"></script>

We can plot this as well on a line chart inside Jupyter notebooks:

<script src="https://gist.github.com/itsderek23/0b0f6f45061943e6c403613e6b52b1fd.js"></script>

