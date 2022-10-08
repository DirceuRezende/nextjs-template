/* eslint-disable no-undef */
export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      }
    ]
  });
  plop.setGenerator('feature', {
    description: 'Create a feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your feature name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/pages/Home/index.ts',
        templateFile: 'templates/indexPage.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/pages/Home/Home.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/pages/Home/Home.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/pages/Home/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/pages/Home/Home.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/store/store.ts',
        templateFile: 'templates/store.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/store/index.ts',
        templateFile: 'templates/storeIndex.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/service/{{camelCase name}}.ts',
        templateFile: 'templates/service.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{camelCase name}}/service/index.ts',
        templateFile: 'templates/serviceIndex.ts.hbs'
      }
    ]
  });
  plop.setGenerator('service', {
    description: 'Create a service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/services/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: 'templates/service.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/services/{{camelCase name}}/index.ts',
        templateFile: 'templates/serviceIndex.ts.hbs'
      }
    ]
  });
};
