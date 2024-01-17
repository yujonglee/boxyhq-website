module.exports = {
  DocsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Docs',
    },
    {
      type: 'category',
      label: 'Enterprise SSO',
      collapsible: true,
      link: { type: 'doc', id: 'jackson/overview' },
      items: [
        {
          type: 'category',
          label: 'Deploy',
          items: [
            'jackson/deploy/index',
            'jackson/deploy/service',
            'jackson/deploy/npm-library',
            'jackson/deploy/env-variables',
            'jackson/deploy/pre-loaded-connections',
          ],
        },
        {
          type: 'category',
          label: 'Configure your SSO provider',
          link: { type: 'doc', id: 'jackson/sso-providers/index' },
          items: [
            'jackson/sso-providers/generic-saml',
            'jackson/sso-providers/azure',
            'jackson/sso-providers/microsoft-adfs',
            'jackson/sso-providers/okta',
            'jackson/sso-providers/auth0',
            'jackson/sso-providers/google',
            'jackson/sso-providers/onelogin',
            'jackson/sso-providers/pingone',
            'jackson/sso-providers/jumpcloud',
            'jackson/sso-providers/rippling',
            'jackson/sso-providers/generic-oidc',
          ],
        },
        {
          type: 'category',
          label: 'Single Sign-on (SSO) Flow',
          link: { type: 'doc', id: 'jackson/sso-flow/index' },
          items: ['jackson/sso-flow/example-flow'],
        },
        'jackson/examples',
        'jackson/observability',
        'jackson/sbom',
        'jackson/container-signing',
        'jackson/security',
        'jackson/upgrade',
        'jackson/local-development',
        'jackson/saml-federation/index',
        'jackson/events',
      ],
    },
    {
      type: 'category',
      label: 'Directory Sync',
      collapsible: true,
      link: { type: 'doc', id: 'directory-sync/overview' },
      items: [
        'directory-sync/getting-started',
        'directory-sync/api-reference',
        'directory-sync/examples',
        'directory-sync/webhooks',
        'directory-sync/events',
        'directory-sync/observability',
        'directory-sync/faq',
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          link: { type: 'doc', id: 'directory-sync/providers/index' },
          items: [
            'directory-sync/providers/azure',
            'directory-sync/providers/okta',
            'directory-sync/providers/onelogin',
            'directory-sync/providers/jumpcloud',
            'directory-sync/providers/google',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Audit Logs',
      collapsible: true,
      link: { type: 'doc', id: 'retraced/overview' },
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          link: { type: 'doc', id: 'retraced/getting-started/retraced-basics' },
          items: [
            'retraced/getting-started/embedded-viewer',
            'retraced/getting-started/first-audit-event',
            'retraced/getting-started/renaming-properties',
            'retraced/getting-started/searching-for-events',
            'retraced/getting-started/time-synchronization',
          ],
        },
        {
          type: 'category',
          label: 'Self Hosting',
          link: { type: 'doc', id: 'retraced/self-host/index' },
          items: [
            'retraced/self-host/env-variables',
            'retraced/self-host/local',
            'retraced/self-host/docker',
            'retraced/self-host/digitalocean',
            'retraced/self-host/aws',
            'retraced/self-host/kubernetes',
            'retraced/self-host/skaffold',
          ],
        },
        {
          type: 'category',
          label: 'Architecture',
          link: { type: 'doc', id: 'retraced/architecture/index' },
          items: [
            'retraced/architecture/immutability-guarantee',
            'retraced/architecture/hashing-formula',
          ],
        },
        {
          type: 'category',
          label: 'How to Audit Log',
          link: { type: 'doc', id: 'retraced/how-to-audit-log/index' },
          items: [
            'retraced/how-to-audit-log/actions',
            'retraced/how-to-audit-log/actors',
            'retraced/how-to-audit-log/exportable',
            'retraced/how-to-audit-log/immutable',
            'retraced/how-to-audit-log/searchable',
            'retraced/how-to-audit-log/segments',
            'retraced/how-to-audit-log/targets',
            'retraced/how-to-audit-log/time-synced',
          ],
        },
        {
          type: 'category',
          label: 'SDKs',
          link: { type: 'doc', id: 'retraced/sdks/available-sdks' },
          items: ['retraced/sdks/golang', 'retraced/sdks/nodejs'],
        },
        {
          type: 'category',
          label: 'APIs',
          link: { type: 'doc', id: 'retraced/apis/overview' },
          items: [
            'retraced/apis/publisher-api',
            'retraced/apis/enterprise-api',
            'retraced/apis/admin-api',
            'retraced/apis/graphql',
          ],
        },
        {
          type: 'category',
          label: 'Exposing Events',
          link: { type: 'doc', id: 'retraced/exposing-retraced-data/overview' },
          items: [
            'retraced/exposing-retraced-data/viewer',
            'retraced/exposing-retraced-data/enterprise-api',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Retraced',
          link: { type: 'doc', id: 'retraced/advanced/index' },
          items: [
            'retraced/advanced/display-templates',
            'retraced/advanced/template-comparators',
            'retraced/advanced/tracking-application-versions',
            'retraced/advanced/automated-audit-events',
          ],
        },
        'retraced/sbom',
        'retraced/container-signing',
      ],
    },
    {
      type: 'category',
      label: 'Admin Portal',
      collapsible: true,
      link: { type: 'doc', id: 'admin-portal/overview' },
      items: [
        'admin-portal/enterprise-sso',
        'admin-portal/directory-sync',
        'admin-portal/audit-logs',
        {
          type: 'category',
          label: 'Setup Link',
          link: { type: 'doc', id: 'admin-portal/setup-links/index' },
          items: [
            'admin-portal/setup-links/jackson',
            'admin-portal/setup-links/directory-sync',
          ],
        },
      ],
    },
  ],
};
