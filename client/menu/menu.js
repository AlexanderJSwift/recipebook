Meteor.subscribe('Recipes');

Template.Menu.helpers({
	menuRecipes: ()=> {
		return Recipes.find({
			inMenu:{$exists: true}
		});
	}
})