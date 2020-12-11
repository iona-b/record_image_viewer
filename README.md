# Record Viewer

This record viewer application is designed to allow synchronisation between a patient data viewer and a patient image viewer. Both the patient data viewer (can be found [here](https://github.com/iona-b/record_data_viewer)) and the patient image viewer (can be found [here](https://github.com/iona-b/record_image_viewer)) post user actions to a shared database via an API (can be found [here](https://github.com/iona-b/record_viewer_api)), meaning that a user can view their user history on both applications.

## Installation

Please find the repositories here:
* [API](https://github.com/iona-b/record_viewer_api)
* [Record Data Viewer](https://github.com/iona-b/record_data_viewer)
* [Record Image Viewer](https://github.com/iona-b/record_image_viewer)

To run this record viewer, first clone the API, Record Data Viewer, and Record Image Viewer repositories into a single directory. 

cd into the API and run the following commands in your terminal:

```
bundle install          # to track and install the exact versions of ruby gems needed for the application
rails db:migrate        # to run table migrations
rails db:seed           # to seed your database
rails server            # to start up your rails server
```

You should now cd into the Record Data Viewer directory and run the following commands in your terminal:

```
npm install             # to download the necessary React packages and dependencies
npm start               # to open the app in your browser
```

Then do the same for the Record Image Viewer.

## Use

This is a basic application, designed for demo purposes.

## Developer

**Iona Brabender**<br>
https://github.com/iona-b<br>
https://www.linkedin.com/in/iona-brabender/