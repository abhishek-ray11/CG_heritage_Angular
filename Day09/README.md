# Env Demo App

This Angular application demonstrates multi-environment configuration.

## Development

Run:

```bash
ng serve
```

Build:

```bash
ng build
```

## Staging

Run:

```bash
ng serve --configuration=staging
```

Build:

```bash
ng build --configuration=staging
```

## Production

Run:

```bash
ng serve --configuration=production
```

Build:

```bash
ng build --configuration=production
```

## Environment Variables

Each environment contains:

- production
- appName
- apiUrl
- appVersion
- featureFlags
  - enableDarkMode
  - enableAnalytics

## Environment Colors

- Development → Green
- Staging → Orange
- Production → Red
