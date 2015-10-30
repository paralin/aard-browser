Generation
==========

Two options for generation. A. generate the entire world, or at least,
enough of it, and store it, on the server. Store it in tiles, binary
blobs in cassandra. Or even an entire "slice" as a blob. B. procedural
generation, no storage.

Generation is not client side to make the algorithms and seeds used a
secret so that the world cannot be fully generated on the client side to
cheat.

Vision
======

Vision is primarily based on actual vision of what a player can see
around him. So, use a Visibility model to calculate what a player could
logically see by line of sight, and show only that.

There are complexities to this. What if you've placed a light nearby? If
that light itself goes out of sight, how do you render that light?

You could give vision based on all the lights you've placed. I don't
want to do this because I think it gives an unfair advantage to placing
a ton of torches for example and removes some stealth aspects.

So, the server should send all lights that it knows affect the area the
client itself can see. It should also send the known last "block point"
of these lights so that the lights only cast onto areas they would
anyway if the client knew about all of the nearby tiles.

Another question comes to mind - how do you handle seeing things behind
you? Navigating through tunnels or cave networks would be incredibly
difficult without vision of the entire cave network.

The solution to this is a minimap. The **minimap** is like a cache of
tiles you've seen in the past, at somewhat lower resolution (possibly
2x2 blocks to 1x1 minimap block?). When you gain vision of some blocks
they update on the minimap. So what you've seen before might be
outdated.

Minimaps are shared amongst party members.

Lights / torches should have two visibility effects, both "Visiblity"
lighting effects and "Glow" lighting effects. Glow lighting effect is a
soft radius around the light giving vision even through walls. This is
useful for seeing if there's resources in a wall, for example.

The server should at no point send information about blocks blocked in
the "fog of war". This is to prevent cheating. It should also be aware
of the view size of the client and send information only about what the
client itself could ever possibly see. See lights and "final block
points" above. Could possibly even simulate visibility on the server
only and only ever send the "block points" for visibility. Hmm.

Sunlight should give infinite vision above land.

There should be a defined "visibility range" circle around a player that
is NO LESS than the size of 2x **server slices** so that a client proxy
only has to connect to a maxmium of 2 server slices at a time.

Nothing outside this range should ever be visible. Use fog to do this.
Also, this limits party vision.

You should be able to share the vision with party members.

Possibly add the concept of "wards" down the line.
