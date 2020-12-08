import { emojis } from "./index.js";

let output = Handlebars.compile(
	"<ul class='list-group'> " +
		"{{#each emoji}}" +
		"<li class='list-group-item' ><img class='m-4' style='width: 2%' src={{this}}>{{@key}}</li>" +
		"{{/each}}" +
		"</ul>"
);
$("#output").html(output({ emoji: emojis }));
