var React = require('react/addons'),
	GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
	name: 'Ice Cream'
}, {
	name: 'Waffles',
	purchased: true
}, {
	name: 'Snarks'
}];

React.render(<GroceryItemList items={initial}/>, app);