(() => {
  const eggs = this.prompt.scene.gameData.eggs;

  const speciesList = [
    486, 487, 488, 491, 492, 493,
    638, 639, 640, 641, 642, 643,
    644, 645, 646, 647, 648, 649
  ];

  const mapping = [
    { _variantTier: 0, _eggMoveIndex: 0 },
    { _variantTier: 1, _eggMoveIndex: 1 },
    { _variantTier: 2, _eggMoveIndex: 2 },
    { _variantTier: 0, _eggMoveIndex: 3 },
  ];

  const needed = speciesList.length * 4;

  if (eggs.length < needed) {
    throw new Error(`eggs มี ${eggs.length} ช่อง แต่ต้องใช้ ${needed}`);
  }

  // backup
  window.__eggsBackup = JSON.parse(JSON.stringify(eggs));
  console.log("backup saved, length =", eggs.length);

  speciesList.forEach((species, speciesIdx) => {
    const start = speciesIdx * 4;

    mapping.forEach((cfg, offset) => {
      const egg = eggs[start + offset];

      Object.assign(egg, {
        _tier: 2,
        _hatchWaves: 1,
        _species: species,
        _isShiny: true,
        _variantTier: cfg._variantTier,
        _eggMoveIndex: cfg._eggMoveIndex,
      });
    });
  });

  console.log(`updated ${needed} eggs (index 0-${needed - 1})`);

  console.table(
    eggs.slice(0, needed).map((e, i) => ({
      index: i,
      _id: e._id,
      _species: e._species,
      _tier: e._tier,
      _hatchWaves: e._hatchWaves,
      _isShiny: e._isShiny,
      _variantTier: e._variantTier,
      _eggMoveIndex: e._eggMoveIndex,
    }))
  );
})();