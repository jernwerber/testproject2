// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e00100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000701010101010106000000000000000000000000000000000000000000001003030303030309000000000000040a000000000005040000000000000a080303030303030900000000000101010101010101010106000000000701010b0b0b0d03030900000000000202020202020202020201010101010103030f030303030309040a0000000303030303030303030303030303030303030e030303030307010101010103030303030303030303030303030303030c0b0b0b0b0b0b0d0303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
..............................
..............................
..............................
..............................
..............................
..............................
.................22222222.....
.................2......2.....
.................2......2.....
22222222222....2222222..2.....
..........222222..2.....2.....
..................2.....22222.
.................22222222.....
..............................
..............................
..............................
`, [myTiles.transparency16,sprites.builtin.forestTiles2,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.swamp.swampTile3,sprites.builtin.forestTiles25,sprites.builtin.forestTiles24,sprites.builtin.forestTiles29,sprites.builtin.forestTiles15,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5], TileScale.Sixteen);
            case "level":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
