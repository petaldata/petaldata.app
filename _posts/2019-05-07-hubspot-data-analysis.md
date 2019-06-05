---
layout: post
title:  "Analyzing Hubspot data with Python+Pandas Dataframes"
author: "Derek Haynes"
---

<img src="/images/blog/hubspot_pandas/hubspot_pandas.png"/>

The data within your Hubspot contacts contains a wealth of information that indicates how your business is performing. It's _begging_ for analysis.

In this post, I'll show how to generate common business KPIs from your Hubspot contacts with [Pandas](http://pandas.pydata.org/), _the_ Python Data Analysis Library.

## Why Python+Pandas?

You could manually export Hubspot contacts via their API to an SQL database, then perform SQL queries on the data. However, I've found that analytics queries can be awfully complex to write in SQL. SQL's sweet spot is CRUD applications, not heavy analytics queries. These analytic queries are where Pandas excels in both cleanliness and speed.

## Installing Jupyter Notebooks + Pandas

If you are new to Python, I suggest [installing Jupyter Notebooks via Anaconda](https://www.anaconda.com/distribution/). This will install Pandas as well. Jupyter Notebooks gives you an interactive way to explore your data and share your analysis.

## Export Contacts

First, we need to export our Hubspot contacts into a [Pandas Dataframe](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html). A Dataframe is like an Excel sheet in code. We can do this with just a couple of lines using the [PetalData](https://petaldata.app) Python package (`pip install petaldata`).

Create a new Jupter notebook. Copy and paste the following into the first cell:

<script src="https://gist.github.com/itsderek23/c04ae53e5a8561e578121ceaeae4bf13.js"></script>

See [PetalData's Hubspot Docs](https://petaldata.app/datasets/hubspot/) for the full list of dataset operations. Note that downloading thousands of contacts from Hubspot can take 30 minutes or more.

## New contacts by month

With our contacts dataframe<label for="df"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="df"
       class="margin-toggle"/>
<span class="sidenote">Access via `df` if you used the export contacts code above.</span> we can now calculate the number of signups by month. Copy and paste the following into a Jupyter notebook cell:

<script src="https://gist.github.com/itsderek23/f48fc816f8b9c9c7699d19043569ec84.js"></script>

Which should display something like:

<img src="/images/blog/hubspot_pandas/hubspot_signups_table.png" style="max-width:300px"/>

## Total contacts over time

We can plot the cumulative number of contacts over time inside Jupyter notebooks:

<script src="https://gist.github.com/itsderek23/19ec8e267f68fa9cb09a63b6b421f113.js"></script>
<img src="/images/blog/hubspot_pandas/contacts_plot.png"/>

## Contacts by State

We can see the geographic distribution of contacts by state (collected from their IP address):

<script src="https://gist.github.com/itsderek23/b7546dfec4b57a66477831c1fd3d0ffb.js"></script>
<img src="/images/blog/hubspot_pandas/contacts_by_state.png" style="max-width:300px"/>

## Going deeper

I've just scratched the surface of your potential Hubspot data science super powers. Once your data is in a Pandas Dataframe, there's much more analysis you can perform:

* Use [scikit-learn](https://scikit-learn.org/stable/) and [K-Means Clustering](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html) to create clusters of similar contacts.
* See if you can predict potential high-value contacts using a [random forest classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html).
* Use [prophet](https://facebook.github.io/prophet/docs/quick_start.html) to forecast contact over the next six months and identify seasonal patterns<label for="seasonal"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="seasonal"
       class="margin-toggle"/>
<span class="sidenote">For example, which day of the week is the highest volume signup day?</span> in signup trends.

Python and Pandas opens up a world far beyond plain SQL and spreadsheet-based analysis.