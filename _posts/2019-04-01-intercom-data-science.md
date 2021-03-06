---
layout: post
title:  "Exporting Intercom data for some quick data science"
author: "Derek Haynes"
---

![intercom data science](/images/blog/intercom/intercom_ds.png)

As the beating heart of many SaaS businesses, [Intercom](https://intercom.com) contains a treasure of user behavior. From user geographic locations to the number of logins to monthly spend, a data scientist can perform trajectory-changing gymnastics using the data within Intercom. For example, you can calculate:

* Signups over time
* Lead-to-user conversion rate
* Churn by signup cohort
* Monthly spend by segment

...and that's just the start! In this post, I'll provide a gentle introduction for exporting Intercom data to a [Pandas](https://pandas.pydata.org/) Dataframe for analysis.

## Tools

If you're a data hobbyist, you know Google sheets. Google Sheets is great for basic analysis on smaller datasets, but it falls down when analyzing thousands of rows and columns. Instead, we're going to use a lean data science stack that will handle your Intercom data without breaking a sweat:

* [Google Colab](https://colab.research.google.com) - a free, shared, remote notebook to run our data analysis. This means there's no local environments to setup.<label for="sn-demo"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-demo"
       class="margin-toggle"/>
<span class="sidenote">[Jupyter Notebook](https://jupyter.org/) is a good, free local option, but you'll need to install and setup a Python environment.</span>
* Python 3 and a standard set of data science libraries. We'll install these libraries in our notebook.

## Exporting data

There are two approaches<label for="sn-demo"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-demo"
       class="margin-toggle"/>
<span class="sidenote">Intercom's UI also provides [a way](https://www.intercom.com/help/faqs-and-troubleshooting/your-users-and-leads-data-in-intercom/can-i-export-user-or-company-data-as-a-csv) to manually export a list of users or companies as a CSV. This cannot be triggered without navigating through the UI.</span> for programmatic access to your Intercom data set:

1. __A custom Intercom API script__ - write your own script to fetch data via [Intercom's API](https://developers.intercom.com/intercom-api-reference/reference).
2. __[PetalData](https://petaldata.app)__ - export your Intercom data in a data science-ready format with a one-line command.

In this post, I'll get you started on a custom script to export Intercom data into a [Pandas](https://pandas.pydata.org/) Dataframe. When we're done, you may decide to offload this data wrangling to [PetalData](https://petaldata.app) 😉. 

## Generate an Intercom access token

Intercom does not have an official Python SDK. Instead, we'll use [python-intercom](https://github.com/intercom/python-intercom) to fetch data.

Before we start coding, [create a private app on Intercom](https://app.intercom.io/a/apps/_/developer-hub/app-packages), copying down the access token:

![access token](/images/blog/intercom/access_token.png)

## Intercom API "Hello World"

Let's verify we can access the Intercom API. Create a [Google Colab Notebook](https://colab.research.google.com), add the code below to the first cell, and verify it runs without error:

<script src="https://gist.github.com/itsderek23/8e48bd753be01f74e329c83de5b14c54.js"></script>

This installs the `python-intercom` package, initializes an Intercom client, and prints the total number of users in your account. The end of your output should look something like this:

<pre>Number of users to export: 10000</pre>

## Add users to a list

Next we'll iterate over the users in your account and append them to the `users_list`. Create a new code cell with the following content:

<script src="https://gist.github.com/itsderek23/b3529597ea9d87b8018127a73df1f0ae.js"></script>

## Create a Pandas Dataframe

It's hard to extract information from a list of dictionaries. We'll create a Pandas Dataframe from this list. Once in a Dataframe, we can do all sorts of data science magic. Creating the dataframe is simple:

<script src="https://gist.github.com/itsderek23/55b3a2a2818222b72772d97166ccae6f.js"></script>

You should see output like:

<pre>(1000,33)</pre>

The above output indicates the Dataframe has 1,000 rows and 33 columns.

## Set the Dataframe index

By default, the Dataframe creates a new index that simply increments with the row number. Instead, let's use the `user_id` as the index. Create a new cell with the following code:

<script src="https://gist.github.com/itsderek23/39f7a363f9cc2f4be885d1f09404c54d.js"></script>

## Convert timestamps to datetime

There are a number of timestamp columns (ex: `created_at`) that are provided as seconds since epoch. These should be converted to proper `datetime` objects. Create a new cell with the following code:

<script src="https://gist.github.com/itsderek23/b77f83671e9a6edb6f2f8c0d6f007685.js"></script>

## Left to the reader

Before inspecting the Dataframe, let's cover what _is not_ in our exporting logic. Our code above is enough to get started, but it _is not production-ready_. I've left the following to you:

* Scrolling - A `BadRequestError` is thrown if your app has over 10,000 users. Intercom's [scroll API](https://developers.intercom.com/intercom-api-reference/reference#iterating-over-all-users) needs to be used instead. `python-intercom` has support for this, but usage is not documented.
* Error Handling - It's very common to run into Network timeouts and other errors when iterating over data sets. There is no error handling for this.
* Limiting Memory Usage - This script builds a large list of users in memory. This could consume a lot of memory if your app has many thousands of users.
* Rate Limits - There's no special handling to stay under [Intercom's rate limits](https://developers.intercom.com/intercom-api-reference/reference#rate-limiting).
* The following attributes are objects or lists and are not parsed:
  * Custom Attributes
  * Location Data
  * Avatar
  * Companies
  * Social Profiles
  * Segments
  * Tags

__Yes, this is the time for the [PetalData](https://petaldata.app) pitch. PetalData handles all of the important (yet tedious) work above when you call `petaldata.Intercom().load_companies()`. If you want to bypass this tedious and brittle work, [signup for our BETA](https://petadata.app).__

## Inspect the schema

We can take a peek at the Dataframe's schema by calling `df_users.info()`. You should see output like:

<pre>
<class 'pandas.core.frame.DataFrame'>
Int64Index: 1000 entries, 0 to 999
Data columns (total 33 columns):
anonymous                   1000 non-null bool
app_id                      1000 non-null object
avatar                      1000 non-null object
companies                   1000 non-null object
created_at                  1000 non-null datetime64[ns]
custom_attributes           1000 non-null object
do_not_track                0 non-null object
...
utm_term                    0 non-null object
dtypes: bool(4), datetime64[ns](5), int64(1), object(23)
memory usage: 238.3+ KB
</pre>

## Inspect the data

You can view signups over time with the following code:

<script src="https://gist.github.com/itsderek23/fe1024d5939b44442d93bff9b71cd6a8.js"></script>

Which generates a chart like:

![signups chart](/images/blog/intercom/signups_chart.png)

How active are your users? A histogram of of user session counts would help! Just type `df_users.session_count.hist()`:

![hist](/images/blog/intercom/session_hist.png)

How about getting a list of your power users? Query for users in the 80th percentile of number of sessions: 

```
df_users[df_users.session_count >= df_users.session_count.quantile(0.80)].email
```

This is just scratching the surface of the types of insights you can obtain by loading your Intercom data into a Pandas Dataframe. 

## Wrapping up

A [2016 Data Science Report](https://visit.figure-eight.com/rs/416-ZBE-142/images/CrowdFlower_DataScienceReport_2016.pdf) showed that 60% of a data scientist's time is spent on cleaning and organizing data. Just 9% is spent on mining data for patterns. This is sad - we want to extract insights from data sets like Intercom, not spend our time in data preprocessing. 

Spend more of your time generating insights by trying [PetalData](https://petaldata.app).
