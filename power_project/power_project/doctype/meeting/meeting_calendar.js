// // Copyright (c) 2024, Priyamraj Singh

// frappe.views.calendar["Meeting"] = {
// 	field_map: {
// 		start: "start_date_and_time",
// 		end: "end_date_and_time",
// 		id: "name",
// 		title: "subject",
// 		status: "status",
// 	},
//     color_map: {
//         "Upcoming": "blue", // Set colors for different statuses
//         "Ongoing": "orange",
//         "Completed": "green",
//         "Canceled": "red"
//         },
//         get_css_class: function(event) {
//         // Use the status to assign a CSS class or color
//         return {
//         "Upcoming": "info",
//         "Ongoing": "warning",
//         "Completed": "success",
//         "Canceled": "danger"
//         }[event.status];
//         },
// 	gantt: true,
// 	get_events_method: "frappe.desk.calendar.get_events",

// };



frappe.views.calendar["Meeting"] = {
    field_map: {
        start: "start_date_and_time",
        end: "end_date_and_time",
        id: "name",
        title: "subject",
    },
    
	get_css_class: function (data) {
		if (data.status === "Completed") {
			return "success";
		}
		if (data.status === "Canceled") {
			return "danger";
		} else if (data.status === "Ongoing") {
			return "warning";
		} else if (data.status === "Upcoming") {
			return "info";
		}
	},

    gantt: true,
    get_events_method: "frappe.desk.calendar.get_events",
};
