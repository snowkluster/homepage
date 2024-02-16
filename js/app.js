const dateElement = document.getElementById("date");

function showTime() {
	const date = new Date();

	const options = {
		weekday: "long",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		second: "2-digit",
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
	};

	const formattedDate = date.toLocaleString("en-GB", options);
	const [dayOfWeek, dateStr, time] = formattedDate.split(", ");
	const mq = window.matchMedia( "(min-width: 338px)" );
	if (mq.matches){
		dateElement.innerHTML = `<h2>${dayOfWeek}, ${time} | ${dateStr}</h2>`;
	} else {
		dateElement.innerHTML = ``;
	}
}

setInterval(showTime, 1000);
showTime();