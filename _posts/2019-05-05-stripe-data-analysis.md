---
layout: post
title:  "Analyzing Stripe data with Python and Pandas"
author: "Derek Haynes"
---

<img src="/images/blog/stripe_pandas/stripe_pandas.png"/>

As the authoritative source on how your business is performing, your Stripe account contains a wealth of data just waiting for analysis. In this post, I'll show how to generate common subscription revenue metrics like MRR, churn, and subscription revenue by plan with [Pandas](http://pandas.pydata.org/), _the_ Python Data Analysis Library.

## Why Python+Pandas?

Stripe offers its own tool for querying data with SQL, [Stripe Sigma](https://stripe.com/sigma). It's a great tool, but I've found that analytics queries can be awfully complex to write in SQL. SQL's sweet spot is CRUD applications, not heavy analytics queries. These analytic queries are where Pandas excels in both cleanliness and speed.

## Installing Jupyter Notebooks + Pandas

If you are new to Python, I suggest [installing Jupyter Notebooks via Anaconda](https://www.anaconda.com/distribution/). This will install Pandas as well. Jupyter Notebooks gives you an interactive way to explore your data and share your analysis.

## Export Stripe Invoices

First, we need to export our invoices from Stripe into a [Pandas Dataframe](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html). A Dataframe is like an Excel sheet in code. We can do this with just a couple of lines using the [PetalData](https://petaldata.app) Python package (`pip install petaldata`).

Create a new Jupter notebook. Copy and paste the following into the first cell:

<script src="https://gist.github.com/itsderek23/bb2b613d200b8a10ead195d361b6208a.js"></script>

See [PetalData's Stripe Docs](https://petaldata.app/datasets/stripe/) for the full list of dataset operations. Note that downloading thousands of invoices from Stripe can take 30 minutes or more.

## Calculating Stripe MRR

With our invoices dataframe loaded at `invoices.df`, we can now calculate MRR in dollars over the entire invoice timerange. Copy and paste the following into a Jupyter notebook cell:

<script src="https://gist.github.com/itsderek23/31e18223849d71043e7580321b3031da.js"></script>

Which should display something like:

<img src="/images/blog/stripe_pandas/mrr_table.png" style="max-width:300px"/>

We can plot this as well on a line chart inside Jupyter notebooks:

<script src="https://gist.github.com/itsderek23/0b0f6f45061943e6c403613e6b52b1fd.js"></script>
<img src="/images/blog/stripe_pandas/mrr_plot.png"/>

## Calculating Stripe Churn

We can view a list of customers that have churned in the current month:

<script src="https://gist.github.com/itsderek23/874275ce4fa541f0a2027eba28f1ce0e.js"></script>

To get the total value of the churn, just call `df_churn.amount_due.sum()`.

## Calculating Revenue by Subscription Plan

You likely have several [subscription plans](https://stripe.com/docs/billing/subscriptions/products-and-plans) configured in Stripe. To view revenue by plan over time:

<script src="https://gist.github.com/itsderek23/5fe2879722a25376b52b3fece4ad77d4.js"></script>

<img src="/images/blog/stripe_pandas/rev_by_plan.png"/>

## Going deeper

I've just scratched the surface of your potential Stripe data science super powers. Once your data is in a Pandas Dataframe, there's much more analysis you can perform:

* Use [scikit-learn](https://scikit-learn.org/stable/) and [K-Means Clustering](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html) to group similar customers together.
* See if you can predict customers likely to churn by their invoice history (for example, customers with downward-trending invoice amounts may be likely to churn) using a [random forest classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html).
* Use [prophet](https://facebook.github.io/prophet/docs/quick_start.html) to forecast MRR over the next six months.

Python and Pandas opens up a world far beyond plain SQL and spreadsheet-based analysis.