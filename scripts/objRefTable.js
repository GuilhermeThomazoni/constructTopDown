const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Behaviors.Follow,
		C3.Plugins.Text,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.Follow.Acts.FollowObject,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Direcao: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{player: 0},
	{Teclado: 0},
	{Mosaico: 0},
	{Sólido: 0},
	{Sprite: 0},
	{aberto: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Seguir: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Texto: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mosaico: class extends self.ITilemapInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {}
}