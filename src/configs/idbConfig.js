const idbConfig = {
  databaseName: "audio-db",
  version: 1,
  stores: [
    {
      name: "audios",
      id: { keyPath: "id", autoIncrement: true },
      indices: [
        { name: "src", keyPath: "src" },
        { name: "createdAt", keyPath: "createdAt" },
      ],
    },
  ],
};

export default idbConfig;
