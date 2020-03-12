# Day Planner!


This is a simple app that lets you keep track of your daily tasks.
![](screenShot.png)

All your taks will get saved on your local storage and you can access it no matter when.

The time blocks will be green at the start of the day.
As time passes the the time blocks, they change colors to indicate the time of the day:

For example: if it is currently 12PM, then the block of time at 12PM will be "RED", all of the passed time blocks will be "GRAY" and all the upcoming timeblocks will be "GREEN"

Enjoy! 







# UofT SCS Full-Stack Web Development Boot Camp Project #5: Day Planner

# [Live Lnk](https://karanius.github.io/UofT_Day-Planner/) 😊

A simple calendar application that allows the user to save events for each hour of the day.

## Table of Contents

- [Day Planner!](#day-planner)
- [UofT SCS Full-Stack Web Development Boot Camp Project #5: Day Planner](#uoft-scs-full-stack-web-development-boot-camp-project-5-day-planner)
- [Live Lnk 😊](#live-lnk-%f0%9f%98%8a)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [User Story](#user-story)
  - [Business Context](#business-context)
  - [Initial Demo](#initial-demo)
  - [Minimum Requirements](#minimum-requirements)
  - [Additional Features to Consider](#additional-features-to-consider)
  - [Development Strategy](#development-strategy)
  - [Tech Stack](#tech-stack)

## About the Project

The app displays standard business hours (9 a.m. to 5 p.m.). Each time slot represents one hour and contain the following:

* The time

* A field to hold user input

* A save button

Clicking on the save button will store the time and user input in `localStorage`.

Near the top of the calendar, the application displays the current day. Additionally, each hour is color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day.

App takes advantage of the [Moment.js](https://momentjs.com/) library to work with date and time.

## User Story

As an employee with a busy schedule

I want to be able to add important events to a daily planner

So that I can manage my time effectively 

## Business Context

Poor time management can result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity.

## Initial Demo

![day planner demo](./screenShot.gif)

## Minimum Requirements

[] Functional, deployed application.

[] GitHub repository with a unique name and a README describing project.

[] The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

[] Each timeblock contains an input field and save button.

[] Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

[] The current day is displayed at the top of the calendar.

[] Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

```
GIVEN that an employee adds events to a specific hour in a calendar

WHEN the employee clicks the save button

THEN events are saved in the timeblock for that hour
```

## Additional Features to Consider

[] A to-do list to manage the important tasks on a given day

## Development Strategy

* Get the current date and display
* Display timeblocks with text area for users to enter info
* Connect moments.js to get the current time
* Color code the timeblocks to reflect the status of the block (past, present, future)
* Add event listeners to the timeblocks so user can update the current schedule

## Tech Stack

- HTML5
- CSS3
- Bootstrap
- jQuery
- JavaScript
- [Moment.js](https://momentjs.com/)
