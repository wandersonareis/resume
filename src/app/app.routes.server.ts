import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:tech',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { tech: 'angular' },
      { tech: 'react' },
      { tech: 'vue' },
      { tech: 'typescript' },
      { tech: 'node' },
    ],
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
