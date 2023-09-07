## Hosting the Sample Widgets

Download http-server to host the widgets locally and test your changes.
Run http-server -p --port number here-- --cors -c-1 in the bundle folder.
You can then import the widget json into the admin widget manager and add it to a layout.
After adding the widget to admin via widget manager you need to click on the override url button on the right hand side
Here you must add your http local server details, note that "localhost" is not accepted as a valid url, instead you will have
to provide one of the fully formed urls provided in the output of your http-server command, such as "http://135.123.65.219:8007/",
Don't forget you must add a backslash at the end of the url in order to be valid  
[Hosting UWF sample component library](./docs/uwf-sample-library/hosting-uwf-library.md)

&nbsp;

# Widget API Documentation

[Widget API Docs](https://documentation.workspaces.avayacloud.com/widget-framework/docs/api-reference/introduction)


#### Neo css

- [Neo CSS docs](http://neo.avaya.design/#/)
