export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d3f64228adbe737f195f927',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ho3dbyf6',
                  apiId: '3ccf7e8d-c4bb-4eca-96a2-4d58934900f8'
                },
                {
                  buildHookId: '5d3f6422cf9579bf1528c090',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8g2t583e',
                  apiId: 'dca699ce-7f47-46f0-91fc-978d60857ca5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kbingman/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8g2t583e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
