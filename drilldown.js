
    function drawChart() {
        function find_recieved_count(label) {
            if (received_data[label] != null) {
                return received_data[label];
            }
            return 0;
        }

        function return_percentage(total, received) {
            return toString(received / total * 100.00);
        }

        var formatPercent = new google.visualization.NumberFormat({
            pattern: '#,##0.0%'
        });

        var formatShort = new google.visualization.NumberFormat({
            pattern: 'short'
        });

        function set_view(data) {
            //console.log(data);
            view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                {
                    calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                },
                2,
                {
                    calc: function(dt, row) {

                        if (row < dt.getNumberOfRows()) {
                            var amount = formatShort.formatValue(dt.getValue(row, 2));
                            var percent = formatPercent.formatValue(dt.getValue(row, 2) / dt.getValue(row, 1));
                            return amount + '\n' + '(' + percent + ')';
                        }
                    },
                    sourceColumn: 2,
                    type: "string",
                    role: "annotation"
                }
            ]);
            return view;
        }


        var data_values = {
            "top": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "Total",
                    36472,
                    123


                ]
            ],
            "groups": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],

                [
                    "Thing 1",
                    4590,
                    //("CommercialOffice")
                    200


                ],
                [
                    "Thing 2",
                    8496,
                    //("CommercialRetail")
                    200


                ],
                [
                    "Thing 3",
                    783,
                    //("Golf")
                    200
                ],
                [
                    "Thing 4",
                    742,
                    //("Hotel")
                    200
                ],
                [
                    "Thing 5",
                    3897,
                    //("Industrial")
                    200

                ],
                [
                    "Thing 6",
                    76,
                    //("Resort")
                    200
                ],
                [
                    "Thing 7",
                    572,
                    //("LongTermCare")
                    200

                ],
                [
                    "Thing 8",
                    1223,
                    //("Mixed")
                    200

                ],
            ],
            "Thing 1": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "402",
                    4014,
                    //("402")
                    200
                ],
                [
                    "403",
                    576,
                    //("403")
                    200
                ]
            ],
            "Thing 2": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "409",
                    1074,
                    //("409")
                    200
                ],
                [
                    "417",
                    47,
                    //("417")
                    20
                ],
                [
                    "419",
                    19,
                    //("419")
                    2
                ],
                [
                    "425",
                    602,
                    //("425")
                    200
                ],
                [
                    "426",
                    205,
                    //("426")
                    200
                ],
                [
                    "427",
                    212,
                    //("427")
                    200
                ],
                [
                    "428",
                    94,
                    //("428")
                    20
                ],
                [
                    "429",
                    169,
                    //("429")
                    20
                ],
                [
                    "430",
                    4794,
                    //("430")
                    200
                ],
                [
                    "431",
                    3,
                    //("431")
                    2
                ],
                [
                    "433",
                    173,
                    //("433")
                    20
                ],
                [
                    "434",
                    347,
                    //("434")
                    200
                ],
                [
                    "438",
                    267,
                    //("438")
                    200
                ],
                [
                    "478",
                    369,
                    //("478")
                    200
                ],
                [
                    "481",
                    102,
                    //("481")
                    20
                ],
                [
                    "483",
                    19,
                    //("483")
                    2
                ]
            ],
            "Thing 3": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "490",
                    783,
                    //("490"
                    200
                ]
            ],
            "Thing 4": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "444",
                    288,
                    //("444")
                    200
                ],
                [
                    "445",
                    450,
                    //("445")
                    200
                ],
                [
                    "446",
                    4,
                    //("446")
                    200
                ]
            ],
            "Thing 5": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "580",
                    3897,
                    //("580")
                    200
                ]
            ],
            "Thing 6": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "460",
                    76,
                    //("460")
                    200
                ]
            ],
            "Thing 7": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "623",
                    13,
                    //("623")
                    200
                ],
                [
                    "624",
                    101,
                    //("624")
                    200
                ],
                [
                    "625",
                    458,
                    //("625")
                    200
                ]
            ],
            "Thing 8": [
                [{
                    "label": "Year",
                    "id": "Year",
                    "type": "string"
                }, {
                    "label": "Mailed",
                    "id": "Mailed",
                    "type": "number"
                }, {
                    "label": "Received",
                    "id": "Received",
                    "type": "number"
                }],
                [
                    "470",
                    195,
                    //("470")
                    200
                ],
                [
                    "472",
                    1028,
                    //("472")
                    200
                ]
            ],
        };

        var data = google.visualization.arrayToDataTable(data_values.top);

        var topLevel = true;
        var midLevel = false;
        var drillLevel = 0;

        //var group_types = ["CommercialOffice", "CommercialRetail", "GolfCourse", "Hotel", "Industrial", "LargeResort", "LongTermCare", "LongTermCare", "MixedUse", "MobileHomeLandLease", "Motel", "MultiResidential", "RetirementHome"];

        var chart = new google.visualization.ColumnChart(document.querySelector('#chart'));
        var options = {
            'animation': {
                startup: true,
                'easing': 'inAndOut',
                'duration': 1000
            },
            'colors': ['blue', 'orange']
        };

        var view = set_view(data);

        options.title = 'Top';
        var drill_stack = [];
        drill_stack.push("top");

        function draw(category) {

            if (topLevel) {
                // rename the title
                options.title = 'Top';
                data = google.visualization.arrayToDataTable(data_values.top);
                view = set_view(data);
                chart.draw(view, options);
            } else {
                //console.log(drill_stack[drill_stack.length - 1]);
                data = google.visualization.arrayToDataTable(data_values[drill_stack[drill_stack.length - 1]]);
                // draw the chart using the view
                options.title = drill_stack[drill_stack.length - 1];
                view = set_view(data);
                chart.draw(view, options);
            }
        }

        google.visualization.events.addListener(chart, 'select', function() {
            var selection = chart.getSelection()[0];
            if (topLevel) {
                // drill down if the selection isn't empty
                if (selection) {
                    //ar category = aggregateData.getValue(selection[0].row, 0);
                    topLevel = false;
                    midLevel = true;
                    drill_stack.push("groups");
                    drillLevel++;
                    draw();
                }
            } else if (midLevel) {

                // drill down if the selection isn't empty
                if (selection) {
                    var item = data.getValue(selection.row, 0);
                    if (data_values[item] == undefined) {
                        topLevel = true;
                        midLevel = false;
                        drill_stack = ["top"];
                        drillLevel = 0;
                        draw();
                    } else {
                        drill_stack.push(item);
                        drillLevel++;
                        draw();
                    }
                }
            }
        });

        var button = document.getElementById('b1');
        button.onclick = function() {
            if (drill_stack.length > 1) {
                drill_stack.pop();
                drillLevel--;
                if (drill_stack.length == 1) {
                    topLevel = true;
                    midLevel = false;
                }
                draw();
            } else {
                draw();
            }
        };
        draw();

    }
    google.load('visualization', '1', {
        packages: ['corechart'],
        callback: drawChart
    });
