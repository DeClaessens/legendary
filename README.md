# Legendary

Legendary is a solo simulator of the popular deckbuilding game: _Marvel Legendary_.
This documentation is currently not maintained. Rather than that, it's a space for me to document how the game should be written.

# Game Manager

This class is the 'boss'. It decides what to do. It's functions should be readable so that it represents an action in the game.

For example `manager.drawFromVillainDeck` vs. `manager.draw('villain')`.
The manager will always return a new state for the game (so possibly use redux here);

Then, the Playground will manager all of these properties and send them to the appropriate components.

IMPORTANT: While I fully support the React.SFC way of writing components. It seems that for this project, the extra control provided by class components is more beneficial.

All components that handle logic must therefor be a class component. All render components can remain to be SFC components.
