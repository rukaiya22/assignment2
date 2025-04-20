interface ImportMetaEnv {
    readonly VITE_TMDB_KEY: string;
    // add more env vars here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }