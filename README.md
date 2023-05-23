# JavaScript Threshold Line Chart

![JavaScript Threshold Line Chart](dashedThresholds-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

Example showcasing use of `DashedLine` style in a _threshold_ indicator.
In this case, the Y axis (temperature celsius) has a threshold value of 120 celsius. Imagine, that it is a value that should not be exceeded to stay in safe limits.

The application uses a `ConstantLine` on the Y Axis to display this threshold value to the user. The line is drawn across the Axis, which makes it easy to spot when a line trend goes over the threshold.

`DashedLine` style is used on this `ConstantLine` to clearly separate its style from the main data (line trends).

## API Links

* [XY cartesian chart]
* [Line series]
* [Axis]
* [DashedLine]
* [ConstantLine]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[XY cartesian chart]: https://lightningchart.com/lightningchart-js-api-documentation/v4.1.0/classes/ChartXY.html
[Line series]: https://lightningchart.com/lightningchart-js-api-documentation/v4.1.0/classes/LineSeries.html
[Axis]: https://lightningchart.com/lightningchart-js-api-documentation/v4.1.0/classes/Axis.html
[DashedLine]: https://lightningchart.com/lightningchart-js-api-documentation/v4.1.0/classes/DashedLine.html
[ConstantLine]: https://lightningchart.com/lightningchart-js-api-documentation/v4.1.0/classes/ConstantLine.html

