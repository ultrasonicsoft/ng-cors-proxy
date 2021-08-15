# CORS Proxy solution

## Summary

When you try to hit the web APIs but keep getting CORS error, you can try follow this approach.
1. Create `proxy.conf.json` or `proxy.conf.js` file with proxy configuration
```
{
  "/api/*": {
    "target": "https://some-cloud-webapis.azurewebsites.net",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
```
2. In HttpClient methods, pass relative URLs
```
const url = '/api/services/app/GetSomething';
    return this.http.get<any>(url, httpOptions);
```

3. Run application with proxy configuration
```
ng serve --proxy-config proxy.conf.json
```
You can also update `angular.json` file to include proxy configuration with `ng serve` command.