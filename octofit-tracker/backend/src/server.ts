const apiPort = 8000;

export function getApiBaseUrl() {

  return `https://$CODESPACE_NAME-${apiPort}.app.github.dev`;
}

export { apiPort };